# 5. [Bonus] Query Dynamics CRM to enrich Transactional Message

In this last section, let's try to send additional profile data with Analytics and Triggers, which we can use to query the Dynamics CRM before sending campaign messages.


### Add additional DTM Rules
First, navigate to your DTM property. 

#### Enable Marketing Cloud ID Service
- Go to the `Overview` page for your property, click `Add a Tool`, and add `Marketing Cloud ID Service`. 
    - Put in the Org ID (can be found in Workshop info) for `Experience Cloud organization ID`
    - Use `d1.sc.omtrdc.net` as your Analytics Tracking Server
- Approve and Publish your changes.

Now, if you go back to your AEM web page and hit refresh, you should begin to see the MC ID populated. Note: it may show up as `AMC Visitor ID` or `Experience Cloud Visitor ID` based on the tool you use.

#### Add Profile data using AEM Context Hub
Let's add a another tool to DTM to help pick up additional Analytics data on the page that we can use as enrichment for the Triggers payload.

- Go to the `Overview` page for your property, click `Add a Tool`, and add `AEM ContextHub`. 
- Go to `Rules`, click on `Data Elements` and create a new Data Element that is of type `ContextHub`, and captures the Object `profile.displayName`.
- Go back to the setting for your Analytics tool setting, under `Global Variables` add a prop that uses the Data Element you just created.
- Approve and publish your changes. 

Assuming you have this prop enabled for your Report Suite (if not, you can do it in the Analytics interface), if you go back to your AEM web page and hit refresh, you should begin to see the name of the Context Hub user populated for the prop. 

---

### Add enrichments to Triggers

Now that more Analytics data are available, let's edit the Triggers payload to include these additional metrics as enrichments.

- On the Triggers UI, select your Trigger, click `Edit`. 
- On the Triggers Settings page, for Include Meta Data, add Marketing Cloud ID and the prop/eVar you just added in DTM
- Save your changes and now you should see your Triggers definition displayed.
- Use the Triggers API to shorten your Triggers wait time

Time to test your Trigger again! See if the new Trigger includes all the enrichment data you just added.

---
---

##### Explore # 4

In the last step, we used Adobe ContextHub to pick up profile data. Can you figure out how to add the cart items to your Triggers enrichment data?

---
---

Keep in mind that any Analytics metric you can pick up can be added to Triggers as an enrichment. You can either pass in raw data and do the calculation/processing in your Runtime action upon receiving those data, or use JavaScript to only pass in "calculated/formatted" results. 

---

### Familiarize with Dynamics 365 CRM API

Let's try a few queries with the Dynamics API. 

#### Set up the API
- Launch Postman, and upload the Dynamics Postman collection you downloaded. 
- Before making the calls, you'd need to set up an environment in Postman for this API collection, and put in the following key/value. You can find the cooresponding values in the Workshop Credentials section on top.
    - `access_token` -> Dynamics CRM access token

#### Standard calls and sample queries
There are a few sample calls in this collection. Play with them and see if you can build your own queries.

Reference for Dynamics 365 Web API: https://msdn.microsoft.com/en-us/library/mt607901.aspx

---
---

##### Challenge # 8

Using the provided access token for Dynamics, can you build a Runtime action that queries Campaign based on a given email address or name?

---
---

I've provided a log in for the Dynamics CRM Instance that we are using in the Workshop info table. Please feel free to use this to add your own profiles into this instance. If you are interested in working with Dynamics in the future, you can get a demo version from Microsoft.

---

### Exploration / Open Development

Now you have all the tools you need to build a customized solution end to end. How would you incorporate Dynamics or any CRM into this process. 

Ideally, you would use MC ID to match visitor data in Adobe Analytics with external CRM systems. Assuming you do have that data in your CRM. What can you do with a CRM to help personalized remarketing? Here are a few simple idea to get you started:

- Use the email address and personal preferences stored in CRM to send personalized Campaign message
- Based on the value of the customer marked in the CRM, remarket the customer in different workflows
- Store the products that the customer is interested in the CRM

### Navigate
**Back: ** Chapter 4 - [Orchestrate Trigger to Campaign in Runtime](chapter-4.md)