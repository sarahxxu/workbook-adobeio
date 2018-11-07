# 0. Before you start

### Check access to Adobe Solutions
- Go to [Adobe Admin Console](https://adminconsole.adobe.com) and make sure you have access to the workshop org
    - Refer to [Admin Console helpx page](https://helpx.adobe.com/enterprise/using/admin-console.html)  if you run into issues accessing your org. 
- In your organization, make sure you have access to the following Adobe Solutions
    - Adobe Launch
    - Analytics & Triggers (Data Workbench)
    - Campaign Standard

---

### Check access to Adobe I/O Console
- Go to [Adobe I/O Console](https://console.adobe.io/), step through the beginning few steps of creating a new integration till you get to a list of APIs. 
    - If you have administrative privileges for your organization and you are authorized for Adobe Solutions, you should see them listed and not grayed out on this screen. 
    - If you do not have the required permissions, contact an instructor for help.

---

### Set up your local
#### Download
Download the resources listed on top and make sure they are accessible on your local.

#### Required tools
In this workshop you would need the following items set on on your local:
- Adobe Experience Manager instance (6.4 preferred)
  - [We.Retail Sample site](https://github.com/Adobe-Marketing-Cloud/aem-sample-we-retail/releases) (Please make sure you are installing a version compatible with your AEM version)
- [Postman](https://www.getpostman.com/apps)
- [OpenWhisk CLI](https://github.com/apache/incubator-openwhisk-cli/releases)
    - Download the executable from the [OpenWhisk GitHub repository](https://github.com/apache/incubator-openwhisk-cli/releases). Choose the version that matches your operating system and download the compressed archive.
    - Extract the executable from the compressed archive and place it in a folder of your choice.
    - Add the folder into which you placed the executable to your `PATH` environment variable. This enables you to call the CLI from any command-line window. Or you use the CLI directly in the folder using `./wsk`.

For Windows user, please make sure you have Shell and the following set up
- [OpenSSL](https://bintray.com/vszakats/generic/download_file?file_path=openssl-1.1.1-win64-mingw.zip)

Further OpenSSL instructions for Windows users:
- Extract the folder and copy it to the C:/libs/ location
- set OPENSSL_CONF=C:/libs/openssl-1.1.1-win64-mingw/openssl.cnf
- cd C:/libs/openssl-1.1.1-win64-mingw/
- openssl req -x509 -sha256 -nodes -days 365 -newkey rsa:2048 -keyout private.key -out certificate_pub.crt

#### Recommended tools
- In-browser Analytics debug tools (Chrome)
    - [Debugger for Adobe Analytics](https://chrome.google.com/webstore/detail/debugger-for-adobe-analyt/bdingoflfadhnjohjaplginnpjeclmof)
    - [Adobe Experience Cloud Debugger](https://chrome.google.com/webstore/detail/adobe-experience-cloud-de/ocdmogmohccmeicdhlhhgepeaijenapj)

---

### Set up I/O Runtime namespace

Please make sure you've installed the OpenWhisk CLI at this step. Go to [Runtime namespaces](../namespaces.md) file to find your assigned namespace based on your assign number (e.g. `user01`), create a `.wskprops` file containing your authorization key, your namespace, and the path to the Runtime API host. Here's an example:
```
AUTH=<Your auth>
APIHOST=runtime.adobe.io
NAMESPACE=<Your namespace>
```
Once your `.wskprops` is ready and set up with your authorization and namesapce, place it in your home directory, where the CLI can access it to set those properties when it starts.

An alternative method to configure your instance of the CLI is to do it through a CLI command. Open a command-line window and type the following command:

```
wsk property set --apihost runtime.adobe.io --auth <Your auth> --namespace <Your namespace>
```

### Navigate
**Next: ** Chapter 1 - [Set up your first Trigger](chapter-1.md)
