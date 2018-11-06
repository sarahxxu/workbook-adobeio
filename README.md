# Adobe I/O Workshop

This workshop is intended to cover the following topics
- Adobe Analytics & Triggers set up
- Adobe I/O Events set up
- Adobe I/O Runtime
- Adobe Campaign Standard API Authentication and Usage

#### Workshop info & Credentials
Please note that these credentials and IDs are only accessible for today

| Workshop info |  |
| ------ | ------ |
| Workshop Organization | adobe-io-solutions-demo |
| Org ID | C74F69D7594880280A495D09@AdobeOrg |
| Analytics Company | adobeiosolutionsdemo |
| Campaign Tenant | adobeiosolutionsdemo |
| Dynamics CRM API Endpoint | https://adobeio.crm.dynamics.com/api/data/v8.2 |
| Dynamics CRM Log in URL | https://adobeio.crm.dynamics.com/ |
| Dynamics CRM Email | saxu@adobeIO.onmicrosoft.com |
| Dynamics CRM Password | !Adobe_Workshop! |
| Triggers access token | eyJ4NXUiOiJpbXNfbmExLWtleS0xLmNlciIsImFsZyI6IlJTMjU2In0.eyJpZCI6IjE1NDE0OTM4Mzc2NjFfODI3MTlkMTMtZmViMS00ZjRlLWJkMWUtOGIyNDY4ZTliYjJkX3VlMSIsImNsaWVudF9pZCI6ImlvLXNvbC1wcm9kLXNlcnZpY2UiLCJ1c2VyX2lkIjoiaW8tc29sLXByb2Qtc2VydmljZUBBZG9iZUlEIiwidHlwZSI6ImFjY2Vzc190b2tlbiIsImFzIjoiaW1zLW5hMSIsInBhYyI6ImlvLXNvbC1wcm9kLXNlcnZpY2UiLCJydGlkIjoiMTU0MTQ5MzgzNzY2Ml9iZGJlMTY0Ni1hMGZkLTQ3ZGUtYTM2NS1jNTM2OWJjNWQ3ODJfdWUxIiwicnRlYSI6IjE1NDI3MDM0Mzc2NjIiLCJtb2kiOiIxNWVkZGVkIiwiYyI6InhvT21xcUtvdnRldkNjMXdHV2FyUlE9PSIsImV4cGlyZXNfaW4iOiI4NjQwMDAwMCIsInNjb3BlIjoicGlwZWxpbmVfY29uc3VtZSxzeXN0ZW0scGlwZWxpbmVfcHJvZHVjZSx0cmlnZ2VycyxsaXZlc3RyZWFtIiwiY3JlYXRlZF9hdCI6IjE1NDE0OTM4Mzc2NjEifQ.fVFHxl4pAq_rH_FuYyj1qhjyUMfFJGg1VABFcAWzcJ8bf-QKVN-izcv22hfIRRSZ42yTMBOxWD2UU0JS-OeXjhczjtScXclgozkDcUKJpGjH5Agz6PpOzL8eQrh1YpMpI2f-ifRAqkdc87TTJwfobbpKq4H3tr3-sYLycfaZB_Xx_3n_d-o2jUqOpgonoxq67IXmZ84Xv7GA4a45s3qAoCKKWOPs9sXMicXxK8R40luTFh6rEVL7R_AIf-WPMAG5HbZRy1lAp5WQJmsXyAwbodjqBj7YE7gZOC1Ybs2WBv477JZ0E87ZFs1BMBRq78_J6L0GX-rQ1IwUjvI2kVSOTw |
| Dynamics CRM access token | eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6IndVTG1ZZnNxZFF1V3RWXy1oeFZ0REpKWk00USIsImtpZCI6IndVTG1ZZnNxZFF1V3RWXy1oeFZ0REpKWk00USJ9.eyJhdWQiOiJodHRwczovL2Fkb2JlaW8uY3JtLmR5bmFtaWNzLmNvbS8iLCJpc3MiOiJodHRwczovL3N0cy53aW5kb3dzLm5ldC9mMGM5ZWI4My1iZTA5LTQ5NzktODE2YS1iZjk3M2Q5ZWVmNWQvIiwiaWF0IjoxNTQxNDkzNTg5LCJuYmYiOjE1NDE0OTM1ODksImV4cCI6MTU0MTQ5NzQ4OSwiYWNyIjoiMSIsImFpbyI6IkFTUUEyLzhKQUFBQWVkZVJBTmJxV1MvdkphOEgrYzdIUEF6MnRyRFYvdk5YVlNXS0NyZ3hrSEE9IiwiYW1yIjpbInB3ZCJdLCJhcHBpZCI6ImU0Yjc0YzE5LWMxYjYtNGNiMy05ZTFlLWJlN2JhNDQ4ODM0MiIsImFwcGlkYWNyIjoiMCIsImZhbWlseV9uYW1lIjoiWHUiLCJnaXZlbl9uYW1lIjoiU2FyYWgiLCJpcGFkZHIiOiIxOTMuMTA0LjIxNS4xMSIsIm5hbWUiOiJTYXJhaCBYdSIsIm9pZCI6ImM5ZGNmNmViLTYxZDYtNGVkMy05OGNhLTE3ODQxYzFjODBjMSIsInB1aWQiOiIxMDAzN0ZGRUE0QkMxRDM0Iiwic2NwIjoidXNlcl9pbXBlcnNvbmF0aW9uIiwic3ViIjoidW9pdnBWalVQU3Z6OVU0bUZSeFR4RXFRN0NnVkxGTUZMaW53Y0g0TF9YVSIsInRpZCI6ImYwYzllYjgzLWJlMDktNDk3OS04MTZhLWJmOTczZDllZWY1ZCIsInVuaXF1ZV9uYW1lIjoic2F4dUBhZG9iZUlPLm9ubWljcm9zb2Z0LmNvbSIsInVwbiI6InNheHVAYWRvYmVJTy5vbm1pY3Jvc29mdC5jb20iLCJ1dGkiOiIwdW1OSnZRb2JFQ00xTWNweHpNTkFBIiwidmVyIjoiMS4wIiwid2lkcyI6WyI2MmU5MDM5NC02OWY1LTQyMzctOTE5MC0wMTIxNzcxNDVlMTAiXX0.PHUEmqo7Vd1xB2k_PZP4GWaLAmUNz1tDxiww3n4JSe_IgeRVNZfdU6kxlwdwZIwKtujHTDPlAcpux5xQSsAMas3Oy2jOHUNSWbtUnhVoMSUM_Wv_vBpI-f3D0wi_YDP4uOP64CZtACNPmkjxJJYq1zZwoFReLyyJze9Tv8HGlbJgoPjxiL94LVJ45GPp0IlvJyNay0JDepqazsQPJQYeUUhWXtbyd72u6xqu3_JVLjyo9TzvXud72AqaQNY-U0Ug5TCGSZZq2ZQvwekqQVRar3HIy0QkVryFKmuA392ULZnqihK-iY1OiaKrQ4UP9gqJkTZPNrwbXgIt2xpOazDg2Q |

#### Resources to download
- [Runtime namespaces](namespaces.md)
- [Triggers API Postman Collection](/postman/Triggers.postman_collection.json)
- [Campaign Standard API Postman Collection](/postman/Campaign.postman_collection.json)
- [Dynamics CRM Web API Postman Collection](/postman/Dynamics.postman_collection.json)
- Sample Runtime Action
    - [hello.js](/code/hello.js)
    - [sample-webhook.js](/code/sample-webhook.js)
    - [campaign-sample](/code/campaign-sample)
    
#### Chapters
- Chapter 0 - [Before you start](/chapters/chapter-0.md)
- Chapter 1 - [Set up your first Trigger](/chapters/chapter-1.md)
- Chapter 2 - [Receive your Trigger in a Runtime action](/chapters/chapter-2.md)
- Chapter 3 - [Connect to Adobe Campaign Standard from Runtime](/chapters/chapter-3.md)
- Chapter 4 - [Orchestrate Trigger to Campaign in Runtime](/chapters/chapter-4.md)
- Chapter 5 - [[Bonus] Query Dynamics CRM to enrich Transactional Message](/chapters/chapter-5.md)
