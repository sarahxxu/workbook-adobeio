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
| Triggers access token | eyJ4NXUiOiJpbXNfbmExLWtleS0xLmNlciIsImFsZyI6IlJTMjU2In0.eyJpZCI6IjE1NDE1OTE5NTEwNjdfY2UxNWEyZjUtYzE3ZC00ZDBjLWJhOGEtMjRjMTUwOTM2NTk1X3VlMSIsImNsaWVudF9pZCI6ImlvLXNvbC1wcm9kLXNlcnZpY2UiLCJ1c2VyX2lkIjoiaW8tc29sLXByb2Qtc2VydmljZUBBZG9iZUlEIiwidHlwZSI6ImFjY2Vzc190b2tlbiIsImFzIjoiaW1zLW5hMSIsInBhYyI6ImlvLXNvbC1wcm9kLXNlcnZpY2UiLCJydGlkIjoiMTU0MTU5MTk1MTA3MF9jYTRkMGZmZC1mZjUxLTQ0Y2QtYTViYy1jY2VjYzBjOGIzNjlfdWUxIiwicnRlYSI6IjE1NDI4MDE1NTEwNzAiLCJtb2kiOiI5MWUxNWE1MCIsImMiOiJzMUtBZSs3WE5aZXhWZFE1Z3hPMUJRPT0iLCJleHBpcmVzX2luIjoiODY0MDAwMDAiLCJzY29wZSI6InBpcGVsaW5lX2NvbnN1bWUsc3lzdGVtLHBpcGVsaW5lX3Byb2R1Y2UsdHJpZ2dlcnMsbGl2ZXN0cmVhbSIsImNyZWF0ZWRfYXQiOiIxNTQxNTkxOTUxMDY3In0.EXyElr1ZaUWNUCLLYJ6dKlHikwZ9B32nMxA_LPWdxIvnefMtGjWaaJs0zcVOY4v9bbsmrZZrzERChPBD6ohJLE5101uaAzEFqqacqZPtTspNpKbMMKq1CdLwBXKxVOR4Izxr3eHwxIOq1myQVVKMLUIn9nDU3ZlktNu30j150P8mTeu8ARXwPI1OiBc87ueQk-C9kwDdYULqhF-bdoKrl2SwNoYLB82leJ9c8BMSv0qGoZkvzfMFySxjZHYdoqGLc6tEhXg-sSbXi4yhRI0Z_wtLukJnV-cFWcmGGI6AqhTll1tJQTJYTmHRhcxay9T3Wfvh3vPd90QBU2Bj7wYdyQ |
| Dynamics CRM access token | eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6IndVTG1ZZnNxZFF1V3RWXy1oeFZ0REpKWk00USIsImtpZCI6IndVTG1ZZnNxZFF1V3RWXy1oeFZ0REpKWk00USJ9.eyJhdWQiOiJodHRwczovL2Fkb2JlaW8uY3JtLmR5bmFtaWNzLmNvbS8iLCJpc3MiOiJodHRwczovL3N0cy53aW5kb3dzLm5ldC9mMGM5ZWI4My1iZTA5LTQ5NzktODE2YS1iZjk3M2Q5ZWVmNWQvIiwiaWF0IjoxNTQxNTkxNDQxLCJuYmYiOjE1NDE1OTE0NDEsImV4cCI6MTU0MTU5NTM0MSwiYWNyIjoiMSIsImFpbyI6IjQyUmdZQWdvTE9QOTdXRzk1V2ZWL2FzeENnbE5kcDg0OHFSRGw1dUZmbCszWE1kQmVRSUEiLCJhbXIiOlsicHdkIl0sImFwcGlkIjoiZTRiNzRjMTktYzFiNi00Y2IzLTllMWUtYmU3YmE0NDg4MzQyIiwiYXBwaWRhY3IiOiIwIiwiZmFtaWx5X25hbWUiOiJYdSIsImdpdmVuX25hbWUiOiJTYXJhaCIsImlwYWRkciI6IjE5NS4zNS44Ni4xMSIsIm5hbWUiOiJTYXJhaCBYdSIsIm9pZCI6ImM5ZGNmNmViLTYxZDYtNGVkMy05OGNhLTE3ODQxYzFjODBjMSIsInB1aWQiOiIxMDAzN0ZGRUE0QkMxRDM0Iiwic2NwIjoidXNlcl9pbXBlcnNvbmF0aW9uIiwic3ViIjoidW9pdnBWalVQU3Z6OVU0bUZSeFR4RXFRN0NnVkxGTUZMaW53Y0g0TF9YVSIsInRpZCI6ImYwYzllYjgzLWJlMDktNDk3OS04MTZhLWJmOTczZDllZWY1ZCIsInVuaXF1ZV9uYW1lIjoic2F4dUBhZG9iZUlPLm9ubWljcm9zb2Z0LmNvbSIsInVwbiI6InNheHVAYWRvYmVJTy5vbm1pY3Jvc29mdC5jb20iLCJ1dGkiOiJYbGtIVGUzTy0wUzFZRzBvQVNVakFBIiwidmVyIjoiMS4wIiwid2lkcyI6WyI2MmU5MDM5NC02OWY1LTQyMzctOTE5MC0wMTIxNzcxNDVlMTAiXX0.YQS5CkI43U29qGQNCfDSU0CkOCrz2vH68LZGmOJQhdf9w_II6ljRvlhbR6Q4FzxcPozLo8Dft41GXosSAAmHse8hu1TPLbnrzVp6ZB-qMiZcGnnyRSy4hUyEscJni3dNLWt_HlwhDYGR1KLaBFgrZ2B-i-6DXU1EK8cXuwzfzZVLPK1jnfvcESE_d15GReU-hNDKbJE7l21TqO_BadSEqDNx2c-sbfKBDTnntcyR2_7ccmzgkl63Ir3CXcQ7Gy1-gpj_KEBQaiwfhPUl_ZtvZF3aH_VqE-X-_qm4Jwhd944oXkraclRZ8PHdeYLz3CmLTxg2x5wJQxHdLM4-T7-myQ |

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
