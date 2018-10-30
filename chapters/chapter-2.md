# 2. Receive your Trigger in a Runtime action
Now that we have Triggers working, we'll walk through the I/O Events set up process, and create an action in I/O Runtime to listen to your Trigger events.

### Create an integration in Console for Triggers Events
In this step, we will use Adobe I/O Console to create a new integration that allows you to link webhooks with your Triggers Events.

#### Create a new Integration
- After signing in to the [Adobe I/O Console](https://console.adobe.io/), select `New Integration`.
    - If you are in multiple Adobe orgs, please make sure you are in the workshop org.
- Choose `Receive near real-time events`, then `Analytics Triggers` as an event provider under `Marketing Cloud`
- Provide the Name and Description for your integration, please use `ioworkshop` + your assigned user ID (e.g. `ioworkshopuser01`) to avoid conflict.
- You will then asked to upload a public certificate for your integration, please run the follow command in your shell.
    - ```openssl req -x509 -sha256 -nodes -days 365 -newkey rsa:2048 -keyout private.key -out certificate_pub.crt```
- Upload the public certificate you just created to complete your integration registration. 

#### Event Registration
- Under Event Registration, you'll be asked to put in name and description. In addition, you can choose the Trigger you want to subscribe to on the right side. Only subscribe to the Triggers you've created to avoid conflict.
- Leave the `Webhook URL` blank for now. We'll come back to put in a Runtime action

---

### I/O Runtime Hello World
Before we try out the Integration just created, let's familiarize with Runtime. Interacting with Adobe I/O runtime currently requires the OpenWhisk CLI (Command Line Interface). If you've completed the set up steps, you should have access to your own Runtime namespace. 

#### Veryfy access
Feel free to play with the CLI while I walk you through a few key concepts in Runtime. When in doubt, your best friend is always
```
wsk help
```
Let's also make sure you are on the right Runtime instance and namespace 
```
wsk property get
```
should get you a full list of your authorization that looks a bit like this. Compare it with the credentials you received and make sure you are using the correct namespace.
```
client cert		
Client key		
whisk auth		your-auth
whisk API host		runtime.adobe.io
whisk API version	v1
whisk namespace		your-namespace
whisk CLI version	xxxx
whisk API build		xxxx
whisk API build number	xxxx
```

#### Hello World
Once you've configured the CLI, you can create your first function to make sure it's working. 

1. Start by creating a file called `hello.js` with the following content

    ```
    function main(params) {
       return {payload: 'Hello world!'};
    }
    ```

2. Next, create the action on Runtime: 
    ````
    wsk action create hello hello.js
    ````
    If it's successful, you should see 
    ```
    ok: created action hello
    ```
3. Lastly, invoke the function:
    ```
    wsk action invoke --result hello
    ```
    You should see the following output:
    ```
    {
        "payload": "Hello world!"
    }
    ```
4. You can also find out more about your activation by checking the activation log. Let's invoke it again.
    ```
    wsk action invoke hello
    ```
    Upon invocation, you should also see an output that looks a bit like
    ```
    ok: invoked /your-namespace/hello with id <id>
    ```
    Copy the ID and let's read the full activation log at 
    ```
    wsk activation get <id>
    ```
    
5. Now that you've created and invoked your first action, let's try to update it to take in dynamic input. Beginning with modifying your `hello.js` file.
    ```
    function main(params) {
       return {payload: 'Hello ' + params.name};
    }
    ```
    then update your action using 
    ```
    wsk action update hello hello.js
    ```
6. Repeat the steps above, but try invoking your action with a parameter
    ```
    wsk action invoke --result hello --param name <your name>
    ```
    You should see the following output:
    ```
    {
        "payload": "Hello Sarah"
    }
    ```

---

### Create a Webhook in Runtime
With Adobe I/O Events webhooks, your application can sign up to be notified whenever certain events occur. For example, when a user uploads a file to Adobe Creative Cloud Assets, this action generates an event. With the right webhook in place, your application is instantly notified that this event happened.

To start receiving events, you register a webhook, specifying a webhook URL and the types of events you want to receive. Each event will result in a HTTP request to the given URL, notifying your application.

With our Runtime knowledge, let's set up a webhook in Runtime.

#### Sample Webhook set up
Grab the `sample-webhook.js` file you downloaded, and add it to your Runtime namespace. Can you figure out what this action does?

```
wsk action create webhook sample-webhook.js --web true --kind nodejs:6
```

Invoke the action with a challenge 

```
wsk action invoke webhook --result --blocking --param challenge hello
```

You should see the following response

```
{
    "body": "eyJjaGFsbGVuZ2UiOiJoZWxsbyJ9",
    "headers": {
        "Content-Type": "application/json"
    },
    "statusCode": 200
}
```

If we decode the body

```
echo "eyJjaGFsbGVuZ2UiOiJoZWxsbyJ9" | base64 -D
```

You can see that it is just an encoded representation of the challenge we sent in. 

```
{"challenge":"hello"}
```
#### Utilize a web action
You may have noticed that when we created the action, we specified `--web true`. Web Actions are OpenWhisk Actions, which are annotated, to quickly enable developers to build web-based applications.  The web Action must return a JSON object. We are going to play with different ways to invoke this action outside of Runtime in this section.

Let's begin with the full url of your action
```
wsk action get webhook --url
```
You should get something that looks like this
```
ok: got action webhook
https://runtime.adobe.io/api/v1/web/<namespace>/default/webhook
```

---
---
##### Explore #2
Try opening this URL in your web browser. What did you get? How can you attach the parameters like you did in the last section?

Or try invoking the Action by using different curl commands. What did you get as a result?
```
curl https://runtime.adobe.io/api/v1/web/<namespace>/default/webhook?challenge=1
curl https://runtime.adobe.io/api/v1/web/<namespace>/default/webhook.json -d "challenge"="hello"
```
---
---

To read more on web actions in Openwhisk: https://github.com/apache/incubator-openwhisk/blob/master/docs/webactions.md#web-actions

---

### Modify your Webhook in Runtime for Triggers Events
Now that we have a sample webhook, let's modify it for Triggers Events. 

#### Go to Adobe I/O Console to update your Event registration
Before we start, let's start a separate shell and type in 
```
wsk activation poll
```
This allows you to see all console logs flowing through, instead of inspecting the logs by each individual activation. 

Then, let's update your Events configuration in Console.
- After signing in to the [Adobe I/O Console](https://console.adobe.io/), find your existing Integration.
- Navigate to the `Events` tab, and click `view` to expand your existing Event registration. 
- Place your Runtime webhook url in `Webhook URL`
- Click save.

Now if we go back to the shell window you just opened for activation logs, you should see something like this:
```
Activation: 'webhook' (44364f95f65a4c67b64f95f65a8c6718)
[
    "2018-06-18T18:26:22.877624302Z stdout: handling challenge"
]
```
Congratulations! Your Runtime action has officially been registered as the webhook for your Triggers action.

#### Test your sample webhook
Next, let's try to trigger the end-to-end flow. Go back to your AEM site, based on the rules you've set up for your Trigger, get a Trigger to fire.

##### Success
If all goes well, you should be able to see 
- A new Trigger appear in the Triggers UI
- A new Activation log in Runtime that says `event received.`

##### Debug needed
If not... Analytics Triggers events aren't coming through to your integration, a breakdown in communication may have occurred at any step in the events process. You'll need to check each step in order to verify where the breakdown has occurred and then fix your configuration accordingly.

The process of communicating Analytics Triggers via I/O Events consists of the following steps:
(1) Web page > (2) Analytics call > (3) Analytics Triggers > (4) Adobe I/O Events > (5) Webhook

**Debug 1 > 2**
If 1 > 2 is working, it means that Analytics code has been embedded in your webpage, and analytics calls (**Note:** not necessarily Trigger calls) are firing and going through. 
You can verify your Adobe Analytics connection via the Debugger:

https://chrome.google.com/webstore/detail/debugger-for-adobe-analyt/bdingoflfadhnjohjaplginnpjeclmof
https://chrome.google.com/webstore/detail/adobe-experience-cloud-de/ocdmogmohccmeicdhlhhgepeaijenapj

**Debug 2 > 3**
If 2 > 3 is working, it means that your Triggers pattern is valid and reflects the customer behavioral pattern that you are trying to mirror. If you verified that the Analytics connection is going through, but no Trigger has been fired, you can try the following methods:

- Make sure you have outlasted the &ldquo;inactivity time&rdquo; that you've set: for example, if you set it to be 10 minutes, then make sure there are absolutely no actions on your page for 10 minutes so that Triggers can identify this pattern and fire.
- Compare your Triggers setting to your Analytics live output.
- Make sure you are talking to the correct reporting suite.
- Make sure you are using the correct eVar/prop to set up rules in Triggers.
- If you have a URL, try removing the prefix (use 'localhost' instead of 'http://localhost').

**Debug 3 > 4**
If 3 > 4 is working, it means that your Triggers payload is arriving at the Adobe I/O Event Gateway. If you can see your Trigger fired, but it's not arriving at your webhook, you should first debug 4 > 5 to make sure your webhook is valid and ready to receive events. If 4 > 5 works and you are still not receiving events, it could be that something went wrong in the Triggers-Pipeline-Event Gateway process. Unfortunately, there's no way to easily debug this step at the moment. Please open an issue on the [Events GitHub project](https://github.com/adobeio/adobeio-documentation). 

**Debug 4 > 5**
If 4 > 5 is working, it means that your webhook is valid and ready to receive events. You can verify your connection by selecting **Retry** for your webhook on I/O Console UI. You should receive a challenge. Your webhook needs to be able to return the challenge to be marked as a valid webhook. 

---
---

##### Challenge #1 
If you are able to receive the event in your Runtime namespace, by default, the `sample-webhook.js` action only prints `event received.`. Can you try to modify your `sample-webhook.js` so that it prints the actual event payload?

---
---

#### Modify your webhook for Triggers
Now that you are able to see Triggers working end-to-end, let's figure out how you can better utilize and read the Triggers payload in preparation for the Campaign integration. A sample payload has been provided below to help you figure the structure.

```
*Sample Triggers Payload*
{
  "event_id": "52ebf673-8aeb-4347-8852-bf86a18292e4",
  "event": {
    "envelopeType": "DATA",
    "partition": 13,
    "offset": 438465548,
    "createTime": 1516324157242,
    "topic": "triggers",
    "com.adobe.mcloud.pipeline.pipelineMessage": {
      "header": {
        "messageType": "TRIGGER",
        "source": "triggers",
        "sentTime": 1516324157228,
        "imsOrg": "C74F69D7594880280A495D09@AdobeOrg",
        "properties": [
          {
            "name": "trace",
            "value": "false"
          },
          {
            "name": "sourceFirstTimestamp",
            "value": "1516324106"
          },
          {
            "name": "sourceLastTimestamp",
            "value": "1516324128"
          },
          {
            "name": "triggerFiredTimestamp",
            "value": "1516324153995"
          }
        ],
        "messageId": "1a69fc40-7600-4928-b7bb-d66588a045f3"
      },
      "com.adobe.mcloud.protocol.trigger": {
        "triggerId": "697514a8-3337-4efc-ba75-1f0ba896c288",
        "triggerTimestamp": 1516324157228,
        "mcId": "00000000000000000000000000000000000000",
        "enrichments": {
          "analyticsHitSummary": {
            "dimensions": {
              "eVar3": {
                "type": "string",
                "data": [
                  "localhost:4502/content/we-retail.html",
                  "localhost:4502/content/we-retail/us/en/men.html",
                  "localhost:4502/content/we-retail.html",
                  "localhost:4502/content/we-retail/us/en.html",
                  "localhost:4502/content/we-retail/us/en.html",
                  "localhost:4502/content/we-retail/us/en/products/men/shirts/eton-short-sleeve-shirt.html",
                  "localhost:4502/content/we-retail/us/en/products/men/shirts/eton-short-sleeve-shirt.html",
                  "localhost:4502/content/we-retail/us/en/men.html",
                  "localhost:4502/content/we-retail/us/en/user/cart.html"
                ],
                "name": "eVar3",
                "source": "session summary"
              },
              "pageURL": {
                "type": "string",
                "data": [
                  "http://localhost:4502/content/we-retail.html",
                  "",
                  "",
                  "http://localhost:4502/content/we-retail/us/en.html",
                  "",
                  "",
                  "http://localhost:4502/content/we-retail/us/en/products/men/shirts/eton-short-sleeve-shirt.html",
                  "http://localhost:4502/content/we-retail/us/en/men.html",
                  "http://localhost:4502/content/we-retail/us/en/user/cart.html"
                ],
                "name": "pageURL",
                "source": "session summary"
              }
            },
            "products": {}
          }
        },
        "triggerPath": [
          {
            "timestamp": 1516324118010,
            "stateId": "start_and_and",
            "transition": "null"
          },
          {
            "timestamp": 1516324148711,
            "stateId": "vmi_and_1",
            "transition": "conditional -> select * where evars.evars.eVar3 like 'localhost:4502/content/we-retail/us/en/user/cart.html'"
          },
          {
            "timestamp": 1516324148711,
            "stateId": "notify_wait",
            "transition": "states visited -> [StateVisitedNode [stateId=vmi_and_1, count=1, operator=GE]]"
          },
          {
            "timestamp": 1516324153994,
            "stateId": "notify",
            "transition": "inactive_timeout -> 5"
          }
        ]
      }
    }
  }
```

---
---

##### Challenge #2 
Given the following sample Triggers payload, can you figure out how to modify your webhook to print out the `triggerId` in your console?  

---
---

### Navigate
**Back: ** Chapter 1 - [Set up your first Trigger](chapter-1.md)
**Next: ** Chapter 3 - [Connect to Adobe Campaign Standard from Runtime](chapter-3.md)