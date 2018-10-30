# 4.  Orchestrate Trigger to Campaign in Runtime
In this section, we'll combine the last two chapters to build an orchestrated action that receives a Trigger, connects to Adobe Campaign, and sends a Transactional message. 

---
---

##### Challenge # 6

Let's start with transforming the code you got from Challenge # 5. Can you modify it so that it sends a `POST` that triggers a Transactional message instead of a just a `GET` that retrieves profiles?

Hint: if you go to Postman, open `Transactional M - Trigger a message`, and click `Code`, you can get a Node.js Request based code sample.


---
---

##### Challenge # 7

Time to go back to Chapter 2, grab the code you wrote for Challenge 2, and combine it with the code you wrote for Challenge #6. Once you are ready, it's time to test this end-to-end. 

Send a Trigger from your AEM web page, and see if you get an email in you inbox!


---
---

### Navigate
**Back: ** Chapter 3 - [Connect to Adobe Campaign Standard from Runtime](chapter-3.md)
**Next: ** Chapter 5 - [[Bonus] Query Dynamics CRM to enrich Transactional Message](chapter-5.md)