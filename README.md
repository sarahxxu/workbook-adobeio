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
| Dynamics CRM Password| !Adobe_Workshop! |
| Triggers access token | eyJ4NXUiOiJpbXNfbmExLWtleS0xLmNlciIsImFsZyI6IlJTMjU2In0.eyJpZCI6IjE1NDA4ODg1ODU4NjRfY2M1ZmU1ZjktMjBiNC00ZjI1LWEwN2EtNjFlYjU5ZjE1OTgzX3VlMSIsImNsaWVudF9pZCI6ImlvLXNvbC1wcm9kLXNlcnZpY2UiLCJ1c2VyX2lkIjoiaW8tc29sLXByb2Qtc2VydmljZUBBZG9iZUlEIiwidHlwZSI6ImFjY2Vzc190b2tlbiIsImFzIjoiaW1zLW5hMSIsInBhYyI6ImlvLXNvbC1wcm9kLXNlcnZpY2UiLCJydGlkIjoiMTU0MDg4ODU4NTg2NV9iYjE3NmRiNS1hYzkwLTQxMDItYmQyYy0wNzQwOTQ1MzA3M2RfdWUxIiwicnRlYSI6IjE1NDIwOTgxODU4NjUiLCJtb2kiOiI4YjhjODM3IiwiYyI6ImVMaXgzaVdTNzd3NklIWmhSM3hSemc9PSIsImV4cGlyZXNfaW4iOiI4NjQwMDAwMCIsInNjb3BlIjoicGlwZWxpbmVfY29uc3VtZSxzeXN0ZW0scGlwZWxpbmVfcHJvZHVjZSx0cmlnZ2VycyxsaXZlc3RyZWFtIiwiY3JlYXRlZF9hdCI6IjE1NDA4ODg1ODU4NjQifQ.avMt6XmCrOHjuvxMJ7vno5kFZasLx-pj08jA_y3Os5hS-T1uBBZjCK_O4LPRcEGGzbR8DCOZNr28Kck5pcOIW3zAnPN2-11p2IKqVsYc_6yEksKvmQVJ6K4brrsfsD8w-7xE9RScrx5fDITWsIHJyoX6dPYRL_5WJKOnL9kTnND6wUdMS05vQovc1vTdSxoP1XfvpaMTztckRCROxNEvWxIeS_otgfKshOoJJ5wsNFV_0xJt-RFBdA4pPDGuebiNtr71fNGArsjxeFIA3WtNVo2-AIpwa21s6Vq-CGSoO4kG3CmB1p7aqQW6YwiCZpZ48DxnMfhlu0zqFmh3B-nB-w |
| Dynamics CRM access token | eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6Imk2bEdrM0ZaenhSY1ViMkMzbkVRN3N5SEpsWSIsImtpZCI6Imk2bEdrM0ZaenhSY1ViMkMzbkVRN3N5SEpsWSJ9.eyJhdWQiOiJodHRwczovL2Fkb2JlaW8uY3JtLmR5bmFtaWNzLmNvbS8iLCJpc3MiOiJodHRwczovL3N0cy53aW5kb3dzLm5ldC9mMGM5ZWI4My1iZTA5LTQ5NzktODE2YS1iZjk3M2Q5ZWVmNWQvIiwiaWF0IjoxNTQwODk0Mzc5LCJuYmYiOjE1NDA4OTQzNzksImV4cCI6MTU0MDg5ODI3OSwiYWNyIjoiMSIsImFpbyI6IjQyUmdZTGdoY3ZhRkVKc0IzNG1ublVGeGl6c1dQaERNZkp4emhGTkg0TTVDWGIrWE0wSUEiLCJhbXIiOlsicHdkIl0sImFwcGlkIjoiZTRiNzRjMTktYzFiNi00Y2IzLTllMWUtYmU3YmE0NDg4MzQyIiwiYXBwaWRhY3IiOiIwIiwiZmFtaWx5X25hbWUiOiJYdSIsImdpdmVuX25hbWUiOiJTYXJhaCIsImlwYWRkciI6Ijc3LjY3LjUwLjEwMCIsIm5hbWUiOiJTYXJhaCBYdSIsIm9pZCI6ImM5ZGNmNmViLTYxZDYtNGVkMy05OGNhLTE3ODQxYzFjODBjMSIsInB1aWQiOiIxMDAzN0ZGRUE0QkMxRDM0Iiwic2NwIjoidXNlcl9pbXBlcnNvbmF0aW9uIiwic3ViIjoidW9pdnBWalVQU3Z6OVU0bUZSeFR4RXFRN0NnVkxGTUZMaW53Y0g0TF9YVSIsInRpZCI6ImYwYzllYjgzLWJlMDktNDk3OS04MTZhLWJmOTczZDllZWY1ZCIsInVuaXF1ZV9uYW1lIjoic2F4dUBhZG9iZUlPLm9ubWljcm9zb2Z0LmNvbSIsInVwbiI6InNheHVAYWRvYmVJTy5vbm1pY3Jvc29mdC5jb20iLCJ1dGkiOiJmR1R5bnM4WVpVR0pBU0syMFphV0FBIiwidmVyIjoiMS4wIiwid2lkcyI6WyI2MmU5MDM5NC02OWY1LTQyMzctOTE5MC0wMTIxNzcxNDVlMTAiXX0.U-Q0I73KibHatdFAsp1wEDubX_PPBaGJ1zf7mxluIqTbTiCtca5EsjDOdVqtVDNJsfk-cE6PJRq0Zat754RQgOn5hYWLMmAVMM7GVl4dJ5iEg22Nm7QogVKRXYbt72A_vtV2j6JOWudb3c2w5h9uCJbGCkcOqVhdbB18YR_8_e1i-EDQ-bUhC9tJVJZtRoE3fRF4kZY4fBEllWV3Zu-XP-kqHZ47fIRkvcJNT_4qfDzM_Poj8FbLfGfr2p2pIwkNGndVtN0ZCaQ7IDlVruV-HdZPyCW3oQdjXLFKDAL6oCLoiS0BbKIDwb7DBovjRKDm6T268lC5sY8e00nDGSsCPg |
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
