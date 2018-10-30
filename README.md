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
| Dynamics CRM Password| !Adobe_VML! |
| Triggers access token | eyJ4NXUiOiJpbXNfbmExLWtleS0xLmNlciIsImFsZyI6IlJTMjU2In0.eyJpZCI6IjE1NDA4ODg1ODU4NjRfY2M1ZmU1ZjktMjBiNC00ZjI1LWEwN2EtNjFlYjU5ZjE1OTgzX3VlMSIsImNsaWVudF9pZCI6ImlvLXNvbC1wcm9kLXNlcnZpY2UiLCJ1c2VyX2lkIjoiaW8tc29sLXByb2Qtc2VydmljZUBBZG9iZUlEIiwidHlwZSI6ImFjY2Vzc190b2tlbiIsImFzIjoiaW1zLW5hMSIsInBhYyI6ImlvLXNvbC1wcm9kLXNlcnZpY2UiLCJydGlkIjoiMTU0MDg4ODU4NTg2NV9iYjE3NmRiNS1hYzkwLTQxMDItYmQyYy0wNzQwOTQ1MzA3M2RfdWUxIiwicnRlYSI6IjE1NDIwOTgxODU4NjUiLCJtb2kiOiI4YjhjODM3IiwiYyI6ImVMaXgzaVdTNzd3NklIWmhSM3hSemc9PSIsImV4cGlyZXNfaW4iOiI4NjQwMDAwMCIsInNjb3BlIjoicGlwZWxpbmVfY29uc3VtZSxzeXN0ZW0scGlwZWxpbmVfcHJvZHVjZSx0cmlnZ2VycyxsaXZlc3RyZWFtIiwiY3JlYXRlZF9hdCI6IjE1NDA4ODg1ODU4NjQifQ.avMt6XmCrOHjuvxMJ7vno5kFZasLx-pj08jA_y3Os5hS-T1uBBZjCK_O4LPRcEGGzbR8DCOZNr28Kck5pcOIW3zAnPN2-11p2IKqVsYc_6yEksKvmQVJ6K4brrsfsD8w-7xE9RScrx5fDITWsIHJyoX6dPYRL_5WJKOnL9kTnND6wUdMS05vQovc1vTdSxoP1XfvpaMTztckRCROxNEvWxIeS_otgfKshOoJJ5wsNFV_0xJt-RFBdA4pPDGuebiNtr71fNGArsjxeFIA3WtNVo2-AIpwa21s6Vq-CGSoO4kG3CmB1p7aqQW6YwiCZpZ48DxnMfhlu0zqFmh3B-nB-w |
| Dynamics CRM access token | eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6IlRpb0d5d3dsaHZkRmJYWjgxM1dwUGF5OUFsVSIsImtpZCI6IlRpb0d5d3dsaHZkRmJYWjgxM1dwUGF5OUFsVSJ9.eyJhdWQiOiJodHRwczovL2Fkb2JlaW8uY3JtLmR5bmFtaWNzLmNvbS8iLCJpc3MiOiJodHRwczovL3N0cy53aW5kb3dzLm5ldC9mMGM5ZWI4My1iZTA5LTQ5NzktODE2YS1iZjk3M2Q5ZWVmNWQvIiwiaWF0IjoxNTI5NTkyNDM1LCJuYmYiOjE1Mjk1OTI0MzUsImV4cCI6MTUyOTU5NjMzNSwiYWNyIjoiMSIsImFpbyI6IlkyZGdZRmoyUy8vQUR0azVGNnhUanA1SloyMUtuYy9sZkVFemFlRTE5YjlNajNYRHdxc0EiLCJhbXIiOlsicHdkIl0sImFwcGlkIjoiZTRiNzRjMTktYzFiNi00Y2IzLTllMWUtYmU3YmE0NDg4MzQyIiwiYXBwaWRhY3IiOiIwIiwiZmFtaWx5X25hbWUiOiJYdSIsImdpdmVuX25hbWUiOiJTYXJhaCIsImlwYWRkciI6IjE5Mi4xNTAuMTAuMjEzIiwibmFtZSI6IlNhcmFoIFh1Iiwib2lkIjoiYzlkY2Y2ZWItNjFkNi00ZWQzLTk4Y2EtMTc4NDFjMWM4MGMxIiwicHVpZCI6IjEwMDM3RkZFQTRCQzFEMzQiLCJzY3AiOiJ1c2VyX2ltcGVyc29uYXRpb24iLCJzdWIiOiJ1b2l2cFZqVVBTdno5VTRtRlJ4VHhFcVE3Q2dWTEZNRkxpbndjSDRMX1hVIiwidGlkIjoiZjBjOWViODMtYmUwOS00OTc5LTgxNmEtYmY5NzNkOWVlZjVkIiwidW5pcXVlX25hbWUiOiJzYXh1QGFkb2JlSU8ub25taWNyb3NvZnQuY29tIiwidXBuIjoic2F4dUBhZG9iZUlPLm9ubWljcm9zb2Z0LmNvbSIsInV0aSI6IkRYcUM1RTNFM2txQ3hPX0ZvNVFSQUEiLCJ2ZXIiOiIxLjAiLCJ3aWRzIjpbIjYyZTkwMzk0LTY5ZjUtNDIzNy05MTkwLTAxMjE3NzE0NWUxMCJdfQ.aZ_8gfCtL_jnUeqHyqdzUayapG9Q-Q5OA-5zmm_9bkEcQ7cGjiZ6KIjt9zXErwq_GVtLocseh5GZ7nfTtXf82T9Do68cWomWyQ8w6G3nbWR7kgYs3E3IpybH8PrH5sOqrP417CRk1_QuJVQToma3vtgUk2p_0seNQOyF4Fo-LmGhzqwbB7_2ow3dqm867_KalbuiZCJGYg_D7RBvyKnbTOGDWS3qSkS0w4XeZ45oqxkNZ2mXeZIIc4FNp4CBhWLcTqD5qEBg_vaPNknz3CehEfherjKD0F7KsNgnEkk75qpiTpkTLPjSBOBPwkXb1y0IbFD6cpd05M2HBlgHRF7t3w |

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
