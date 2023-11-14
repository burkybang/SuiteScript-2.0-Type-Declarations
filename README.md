# SuiteScript 2.0+ Type Declarations

[![Repo Watchers](https://img.shields.io/github/watchers/burkybang/SuiteScript-2.0-Type-Declarations?style=social)](../../watchers)
[![Repo Stars](https://img.shields.io/github/stars/burkybang/SuiteScript-2.0-Type-Declarations?style=social)](../../stargazers)

## Author

![GitHub](https://github.com/burkybang/burkybang/raw/master/Images/github16.png "GitHub") [burkybang](https://github.com/burkybang "GitHub")  
![Discord](https://github.com/burkybang/burkybang/raw/master/Images/discord16.png "Discord") [burkybang](https://discord.gg/MzdmCVtA "Discord")  
![LinkedIn](https://github.com/burkybang/burkybang/raw/master/Images/linkedin16.png "LinkedIn") [burkybang](https://linkedin.com/in/burkybang "LinkedIn")  
![YouTube](https://github.com/burkybang/burkybang/raw/master/Images/youtube16.png "YouTube") [burkybang](https://youtube.com/burkybang "YouTube")  
![Mastodon](https://github.com/burkybang/burkybang/raw/master/Images/mastodon16.png "Mastodon") [burkybang](https://mastodon.social/@burkybang "Mastodon")  
![Twitter](https://github.com/burkybang/burkybang/raw/master/Images/twitter16.png "Twitter") [burkybang](https://twitter.com/burkybang "Twitter")  
![Reddit](https://github.com/burkybang/burkybang/raw/master/Images/reddit16.png "Reddit") [burkybang](https://reddit.com/u/burkybang "Reddit")

## Related Projects

- [SuiteScript File Templates for WebStorm](https://github.com/burkybang/SuiteScript-WebStorm-File-Templates)
- [NetSuite UI Type Declarations](https://github.com/burkybang/NetSuite-UI-Type-Declarations)
- [SuiteScript 1.0 Type Declarations](https://github.com/burkybang/SuiteScript-1.0-Type-Declarations)

## How to Install Type Declarations

- [Guide for WebStorm](https://www.jetbrains.com/help/webstorm/configuring-javascript-libraries.html#ws_js_custom_third_party_library)

## How to Remove Type Declarations From the SuiteCloud IDE Plug-in

The SuiteCloud IDE Plug-in by NetSuite for WebStorm comes with incomplete type declarations, so if you have that
installed, it will interfere with the type declarations from this repo.

Here's how to remove NetSuite's built-in type declarations on Windows.

**Note:** _You will need to do this every time the SuiteCloud IDE Plug-in gets updated._

Open a project in WebStorm that is using the SuiteCloud IDE Plug-in.

1. In the Project file tree, find the following directory and click on it.

   > External Libraries / SuiteScript 2.0 / SuiteScript_2_0

2. Once the **SuiteScript_2_0** directory is selected, go to your navigation bar, and right click on
   **com.netsuite.ide.webstorm.app-2021.2.3.jar** (your version number may be different).
3. Hover over **Open In** and click on **Show in Explorer**.

   Here's a screenshot showing all steps so far.

   ![How to Find *.jar File](README%20Images/How%20to%20Find%20jar%20File.jpg "How to Find *.jar File")

4. After File Explorer opens, the SuiteCloud IDE Plug-in *.jar file should be highlighted. Close WebStorm, and then open
   the file (not extract)
   in [7-Zip](https://7-zip.org) or other similar software.

   **Important:** _If you don't close WebStorm, the *.jar file will be readonly, and you will not be able to continue
   with the next steps._

   ![Open in 7-Zip](README%20Images/Open%20in%207-Zip.jpg "Open in 7-Zip")

5. After the *.jar files opens in [7-Zip](https://7-zip.org), navigate to the following directory, and delete all of its
   contents.

   **Important:** _Don't delete the actual directory as this will cause the plug-in to crash in WebStorm._

   > library \ SuiteScript_2_0

   If you're also using my
   [SuiteScript 1.0 Type Declarations](https://github.com/burkybang/SuiteScript-1.0-Type-Declarations), you should
   delete the contents of the following directory as well.

   > library \ SuiteScript_1_0

6. Close [7-Zip](https://7-zip.org) and then reopen WebStorm.