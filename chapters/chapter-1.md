# 1.  Call Adobe Campaign Standard from Runtime
In this section, we'll step through the process of setting up Analytics, connect your Analytics instance with AEM, use Analytics to configure your first Trigger, and get your first Trigger to fire.

#### Create integration with Campaign
- Sign onto the [Adobe I/O Console](https://console.adobe.io/), select `New Integration`.
    - If you are in multiple Adobe orgs, please make sure you are in the workshop org.
    - Choose `access an API`, then `Adobe Campaign`
    - Provide the Name and Description for your integration, please use `ioworkshop` + your assigned user ID (e.g. `ioworkshopuser01`) to avoid conflict.
    - You will then asked to upload a public certificate for your integration, please run the follow command in your shell.
        - ```openssl req -x509 -sha256 -nodes -days 365 -newkey rsa:2048 -keyout private.key -out certificate_pub.crt```
    - Upload the public certificate you just created to complete your integration registration. 

### Generate a JWT Token and Access Token
- Go to the `JWT` tab
- Find the `private.key` file you made from the last chapter, and paste it into the `Paste private key` section
- Upon success, you should see a curl command generated.
- Copy the curl command into your Terminal to retrieve your access token.

### Familiarize with Campaign Standard API
With the Adobe Campaign Standard API, you get access to the following functionalities:

- Manage Profiles
- Manage subscriptions to Services
- Send Transactional Messages
- Retrieve data from your customized data model

Adobe Campaign APIs must be used Server to Server only.

Before diving into code, let's use the Postman to play with this API

#### Set up the API
- Launch Postman, and upload the Campaign Standard API Postman collection you downloaded. 
- Before making the calls, you'd need to set up an environment in Postman for this API collection, and put in the following key/value. You can find the cooresponding values in the Workshop Credentials section on top.
    - `tenant` -> Campaign Tenant
    - `access_token` -> the access token you just generated with curl
    - `api_key` -> find the API key from your integration

#### Standard calls with Profile
There are four default calls related to Profile in that collection. Play with them to see if you can add your own Profile and update it!
- `GET` top 10 profiles / by email
- `POST` to create new profile
- `PATCH` to update profile

---
---

#### Transactional Message
These two calls related to Transactional message are defaulted to a Transactional Event I've set up in Campaign Standard. In `Transactional M - Trigger a message`, modify the body of the call to use your email, and see what the sample email looks like in your inbox! 

---
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
---

### Using an API in Runtime
In this section Campaign Standard as an example to show how you can *currenty* work with an Adobe API in Runtime.

#### Authentication
Any API that accesses a service or content on behalf of an end user authenticates using the OAuth and JSON Web Token standards. For service-to-service integrations, you will also need a JSON Web Token (JWT) that encapsulates your client credentials and authenticates the identity of your integration. You exchange the JWT for the OAuth token that authorizes access.

For more details, please refer to [Service Account Integration documentation](https://www.adobe.io/apis/cloudplatform/console/authentication/jwt_workflow.html)

The JWT Workflow contains 6 steps
- 1- Create a Public Key Certificate
- 2- Subscribe to a Service or Event Provider
- 3- Configure a Service Account Integration
- 4- Secure your Client Credentials
- 5- Create your JSON Web Token (JWT)
- 6- Exchange your JWT for an Access Token

Let's try to build this in Runtime as well. Navigate to the `campaign-sample` code that you've downloaded. 

As an alternative to writing all your action code in a single JavaScript source file, you can write an action as a npm package. We are going to try it in this section.

**Understand the code**
- Open `app.js`, scroll all the way down, you can see this line. ```exports.main = main;``` Note that the action is exposed through exports.main; the action handler itself can have any name, as long as it conforms to the usual signature of accepting an object and returning an object (or a Promise of an object). Per Node.js convention, you must either name this file index.js or specify the file name you prefer as the main property in package.json. (like we did in this case to use `app.js`)
- Within `function main(params)`, you can see that instead of returning an object, I'm returning a Promise object. JavaScript functions that run asynchronously may need to return the activation result after the main function has returned. You can accomplish this by returning a Promise in your action. We are calling the Campaign API here and need this action to run asynchronously.
- Runtime currently doesn't provide any out-of-the-box npm packages (we will in the future), so now, if you want to use npm packages, you'll need to use a zipped action to include all dependencies (like `request` and `jwt-simple` in this sample)

---
---


##### Challenge # 3
Make sure you understand the code and what's happening here. Follow the following instructions to get your access token! Your function should be able to print out the access token in the Console when done. 

- `config.js` is where all the credentials and keys are stored. Let's begin with populating this file with the information in your Integration. 
- When complete, we can zip this up and upload it into Runtime
    ```
    cd campaign-sample
    npm install
    zip -r action.zip .
    wsk action create campaign-sample --kind nodejs:6 --web true action.zip
    ```
- Always remember to move your action.zip file out of the existing folder, so that you won't accidentally zip in old versions
    ```
    mv action.zip ../  
    ```

---
---

##### Challenge # 4

Using the access token printed from Console. Writ a simple zipped action that make a `GET` call to retrieve profiles. 

Here's a short sample code in Request to help you get started. Don't forget to include the dependencies!
```
var accessToken, clientID, tenant;

var options = { 
    method: 'GET',
    url: 'https://mc.adobe.io/' + tenant +'/target/activities',
    headers: {
        'cache-control': 'no-cache',
        'content-type': 'application/vnd.adobe.target.v1+json',
        'x-api-key': clientID,
        authorization: accessToken 
    }
};

request(options, function (error, response, body) {
    if (error) throw new Error(error);

    console.log("Get Activity Result: " + body);
    resolve({body: body});
});
```

---
---

##### Challenge # 5
Time  to combine challenge 3 with challenge 4 to make a single action in Runtime that 1) generates the JWT 2) exchanges it for access token 3) makes a `GET` call to retrieve profiles from Campaign.

Be careful with the Promises -- given the actions are asynchrous, the order could get tricky.

---
---

### Navigate
**Back: ** Chapter 0 - [Before you start](chapter-0.md)
**Next: ** Chapter 2 - [Set up your first Trigger](chapter-2.md)