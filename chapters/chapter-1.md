# 1. Set up your first Trigger
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

### Integrate AEM with Analytics using DTM
Now that you have your own Analytics report suite, we'll link it with your local AEM instance using DTM in this section.

#### Enable DTM for AEM Site
To begin, please follow beginning three sections on this [helpx page](https://helpx.adobe.com/experience-manager/using/integrate-digital-marketing-solutions.html) to enable DTM for your We.Retail site:
- [Create the DTM rule](https://helpx.adobe.com/experience-manager/using/integrate-digital-marketing-solutions.html#CreatetheDTMrule)
    - Make sure you are using the Analytics company in workshop info, and for your property, please use `ioworkshop` + your assigned user ID (e.g. `ioworkshopuser01`) to avoid conflict
- [Configure AEM to use DTM Rules](https://helpx.adobe.com/experience-manager/using/integrate-digital-marketing-solutions.html#ConfigureAEMtouseDTMRules)
- [Embed DTM rules in AEM web pages](https://helpx.adobe.com/experience-manager/using/integrate-digital-marketing-solutions.html#EmbedDTMrulesinAEMwebpages)

If you followed the instructions step by step, you should now see an alert box when you access the We.Retail home page.

#### Update your DTM Configuration
Once you are done, let's update your DTM property setting to deactivate the alert and to use an eVar to pick up your page URL. 

##### Configure Analytics with DTM
- Go to the `Overview` page for your property, click `Add a Tool`, and add Adobe Analytics. Choose `automatic` for configuration, and it will prompt you to the set up page.
    - For `Report Suites` choose the report suite you just created for production and stage.
    - Expand `Global Variables` and set eVar3 to capture the page url
```eVar3="%window.location.host%%window.location.pathname%"```
        - if this did not work for you, please try to create a data element with JavaScript, and put in the data element for the eVar value
    - Save your tool configuration for Analytics.

##### Remove the test rule
- Go to your AlertJS rule, and click `Deactivate Rules` to deactivate it.
- Approve and publish all your changes.

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
        - Visit must include `Custom eVar 3 Like "localhost:4502/content/we-retail/us/en/user/cart.html"` OR `Custom eVar 3 Like "localhost:4502/content/we-retail/us/en/user/checkout.html"` OR ` Custom eVar 3 Like "localhost:4502/content/we-retail/us/en/user/checkout/order.html"`
        - Visit must not include `Custom eVar 3 Like "localhost:4502/content/we-retail/us/en/user/checkout/order/thank-you.html"`
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
**Back: ** Chapter 0 - [Before you start](chapter-0.md)
**Next: ** Chapter 2 - [Receive your Trigger in a Runtime action](chapter-2.md)