# 2. Set up your first Trigger
In this section, we'll step through the process of setting up Analytics, connect your Analytics instance with AEM, use Analytics to configure your first Trigger, and get your first Trigger to fire.

### Set up Analytics
In this step, we'll access Analytics to set up your own Analytics report suite.

#### Launch Analytics
- Go to [Marketing Cloud](http://marketing.adobe.com/), check your orgnization in the upper right corner to make sure you are in the workshop org, then use `Apps` button to launch your Analytics instance

#### Create new Report Suite in Analytics
- In Analytis, go to `Admin` -> `Report Suites`, and click `Create New` -> `Report Suite`.
    - In the set up screen, for `Report Suite ID` and `Site Title` please use `ioworkshop` + your assigned user ID (e.g. `ioworkshopuser01`) to avoid conflict.
    - Please make sure you are creating thi Report Suite as an Analytics Product Admin, otherwise your Report Suite may not show up in the next step

---

### Integrate AEM with Analytics using Launch
Now that you have your own Analytics report suite, we'll link it with your local AEM instance using Launch in this section.

#### Enable Launch for AEM Site

Adobe Launch is the next generation of Dynamic Tag Management. It provides a platform-based approach to building DTM extensions and a streamlined distribution system to quickly deploy client-side DTM libraries. Custom resources can now be created and reused within DTM to simplify the distribution of client side web applications.

Follow these steps to set up an Analytics extension with Launch:
- Go to launch.adobe.com
- Create new `Property`
- Enter `Property` details
    - Use personalized name for the property to avoid conflict
    - You can use `example.com` for the domain name
- Go to `Extensions`→`Catalog` and install Adobe Analytics extension. Enter the Adobe Analytics report suite name (the one you just set up) manually in the textbox.
    - Note: You can get the full report suite id in Adobe Analytics->Admin→Report Suites
- Install `Experience Cloud ID Service` extensions with default settings and click save. 

Now that we have a high-level extension set up, let's add an Analytics rule as below:
- Select the `Rule` tab
- Select `Data Elements` tab
    - click `Add Data Element`
    - for Name use `pageURL`
    - for Data Element type select `Page Info`
    - for Attribute, select `URL` 
- In the Rule set up:
    - for `Events`, add `Core - Page Bottom`
    - for `Then`, add two actions: `Adobe Analytics - Set Variables` THEN `Adobe Analytics - Send Beacon`
        - In the `Adobe Analytics-Set Variables` action, add `eVar3`, select from the data element `pageURL`

Now that we have the extension set up, let's deploy it. 
- Go to `Environments` and create `Dev`, `Stage` and `Production` environment.
- Save Rule and go to `Publishing`, Click on `Add New Library`.
- Give name for the build, select Dev (Development) environment and then click `Add all changed resources`.
- Build for development and staging and approve for production.

##### Configure Launch with AEM

**For Launch with AEM 6.4**
Here's a video:https://helpx.adobe.com/experience-manager/kt/integration/using/adobe-launch-integration-tutorial-understand.html

Here's the steps breakdown

**Grab an IMS Certificate from AEM**
- Open the AEM instance in new window (http://localhost:4502) click on `Tools`->Security→Adobe IMS Configurations.
- Create new Adobe IMS Configuration certificate. (it's a checkbox)
- Download the public key certificate by clicking on "Download Public Key", this certificate will be used for uploading in the I/O console integration.

**Use this certificate in your I/O Integration**
- Go to https://console.adobe.io
- Select the integration you created earlier, in the Overview screen, add a public key and upload the certificate you just downloaded. 
- Toggle to the "Service" tab, and add "Adobe Experience Platform Launch" to your integration.

**Use the I/O Console Integration to set up an IMS Configuration in AEM**
- Open the AEM instance, click on `Tools`->Security→Adobe IMS Configurations.
- Use the Client ID, Client Secret from Overview and the JWT Payload and Authorization Server info from "JWT" tab to fill the configuration form.

**Set up Launch Integration**
- Go to AEM Instance -> Tools -> Cloud Services -> Adobe Launch Configurations.
- Create a new configuration under we-retail website. Select the IMS Config, company and property based on the property and report suite you just created. 

**Add it to your site**
- Go to AEM instance->Sites.
- Select "Card View" from upper right corner and click on (info) properties icon.
- Go to "Advanced"" tab and select Cloud Configuration under Configuration.
- Select the we-retail path and save & close the configuration.

---

**For Launch with AEM 6.3**
AEM 6.3 doesn't have the official connector for Launch. To connect your AEM 6.3 instance with Launch you can follow the below work around:

- Go to your DTM account. (dtm.adobe.com)
- Create a dummy empty property `Adobe_Launch` (please add your name to this to avoid conflict). Please do not customize this property as we are not going to use it in our integration.
- Go to AEM 6.3 instance. (e.g. http://localhost:4502/) click on `Tools` (Left panel->The hammer icon).
- Go to `Deployment` and click on `Cloud Services`.
- Locate `Dynamic Tag Management` and click `Configure Now`.
- Provide Title and Name for configuration and click on Create.
- Go to your Dynamic Tag Management profile. Click on DTM Account and copy the API Token.
- Paste the API token to AEM→DTM Configuration window and click `Connect To DTM`.
- Select company and the dummy property that we created in step 2.
- Click on Staging Settings and Production Settings and uncheck the `Use Self Hosting`.
- Go to Launch->Environments→Staging and copy the header code and replace it in AEM→DTM Configuration Staging Settings Header code section.
- Go to Launch->Environments→Production and copy the header code and replace it in AEM→DTM Configuration Production Settings Header code section. Click Ok.
- After the configuration it should look like this. Ensure that the scripts are the ones from Launch environments.
- Go to AEM instance (http://localhost:4502/) and click on Sites.
- Open the page in "Card View" from the upper right corner.
- Click on the "Properties" icon (info) for the website which you want to connect to Launch.
- Go to Cloud Services→Add Configuration→Select Dynamic Tag Management
- Select the Launch integration you created in previous steps. Click Save and Close.
- Open the We-Retail website→Right click->Inspect→Click on Sources. You will see that the Launch scripts is getting fired and events are flowing in the designated report suite.


#### Test your updated rules in AEM
If your rules have been successfully updated, go back to your We.Retail home page, and open your Analytics debug tool. You should see analytics calls with your report suite and eVar3 as page url captured.

---

### Set up your first Trigger
Now that we have Analytic set up with your AEM site via DTM, we can start to set up your first Trigger. 

#### Launch Triggers
- Go to [Marketing Cloud](http://marketing.adobe.com/), check your orgnization in the upper right corner to make sure you are in the workshop org, then us `Apps` -> `Activation` -> `Triggers` to launch the Triggers UI,

#### Set up a Trigger with simple rules
- On the Triggers UI, select the New Triggers button, and then choose Abandonment.
- On the `New Trigger` box
    - Specify a `Name` for your trigger, please use `ioworkshop` + your assigned user ID (e.g. `ioworkshopuser01`) to avoid conflict
    - Select the Report Suite that you just created.
- On the Triggers Settings page, define the business rules for your trigger. You can drag a dimension/metric box from the left panel to the right side of the screen and then specify the business rules for what must happen and what must not happen in a session. 
    - For your rules, set it to
        - Visit must include Custom eVar 3 `Like` protocal (e.g. http://) + localhost:4502/content/we-retail/us/en/user/cart.html OR Custom eVar 3 `Like` protocal (e.g. http://) + localhost:4502/content/we-retail/us/en/user/checkout.html OR Custom eVar 3 `Like` protocal (e.g. http://) + localhost:4502/content/we-retail/us/en/user/checkout/order.html
        - Visit must not include Custom eVar 3 `Like` protocal (e.g. http://) + localhost:4502/content/we-retail/us/en/user/checkout/order/thank-you.html
    - For `Trigger after no action for`, set it to 10 minutes
    - For Include Meta Data, set it to include `Custom eVar 3`
- Save your changes and now you should see your Triggers definition displayed.

---

### Use Triggers API to speed up your Trigger for testing
As you can see from the last part, Triggers normally takes at least 10 minutes of inactivity to fire. In the workshop, for quick debugging, we are going to use the Triggers API to allow your Triggers to fire faster. We have pre-built a Postman collection that helps you with this step.

#### Set up the API
- Launch Postman, and upload the Triggers API Postman collection you downloaded. 
- Before making the calls, you'd need to set up an environment in Postman for this API collection, and put in two key/value for your Collection environment. You can find the cooresponding values in the Workshop Credentials section on top.
    - `org_id` -> Org ID
    - `access_token` -> Triggers access token

#### Get your Trigger and customize
- You should see three calls in that collection. Try `Get a list of all Triggers` and you'll get a full list of all Triggers in this Org. Locate your Trigger from this long list, and grab the `id` from the response for the Trigger you just set up
- Add another key/value to your environment
    - `trigger_id` -> the Trigger ID you just identified
- Call `Get Trigger by ID`, you should get back a JSON payload that looks a bit like this: 
    ``` 
    {
        "imsOrg": "xxxx@AdobeOrg",
        "id": "xxxx",
        "displayName": "Analytics Trigger",
        ... 
        "description": "Analytics Trigger for demo",
        "type": "Abandonment"
    }
    ```
- Copy this payload, and paste it to the `Body` tab in `Update Trigger via ID`
- Locate the following part in the payload
    ```
    "criteria": {
        "type": "inactivity_timeout",
        "timeout": 600
    }
    ```
- If you set the wait time to 10 minutes, the timeout should say 600, update it to 10 so that the wait is only 10 seconds
- make the `PUT` call when your payload has been updated

#### Test your Trigger
If you followed the steps exactly and received successful response for all the calls above, your Triggers should be active. Let's make sure your Trigger works:
- Go to your We.Retail site, click into `My Cart` to begin the check out process, and go back to homepage
- **Important:** don't do anything on your site within the next 30 seconds or so
- Go back to your Triggers UI page, and hit refresh, you should begin to see the Trigger going through.

---
---

##### Explore #1
Now that your first Trigger works. Try the following:

- Experiment with different combinations of page visit patterns that match your Trigger rule. Can you get all of them to fire?
- If you are comfortable with the existing rule, try modifying and customizing your Trigger rules
    - Don't forget to use the API to update the timeout if you make changes via the UI
    - Update your DTM configuration to add additional metrics for your report suite (the products in the cart, perhaps)
- Can you update your DTM and Triggers setting to include Marketing Cloud ID in your Trigger enrichment?

---
---

### Navigate
**Back: ** Chapter 1 - [Connect to Adobe Campaign Standard from Runtime](chapter-1.md)
**Next: ** Chapter 3 - [Receive your Trigger in a Runtime action](chapter-3.md)