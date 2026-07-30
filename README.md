# SuiteScript 2.0+ Type Declarations

[![Repo Watchers](https://img.shields.io/github/watchers/burkybang/SuiteScript-2.0-Type-Declarations?style=social)](../../watchers)
[![Repo Stars](https://img.shields.io/github/stars/burkybang/SuiteScript-2.0-Type-Declarations?style=social)](../../stargazers)

## Author

![GitHub](https://github.com/burkybang/burkybang/raw/master/Images/github16.png "GitHub") [GitHub](https://github.com/burkybang "GitHub")  
![Mastodon](https://github.com/burkybang/burkybang/raw/master/Images/mastodon16.png "Mastodon") [Mastodon](https://mastodon.social/@burkybang "Mastodon")  
![Lemmy](https://github.com/burkybang/burkybang/raw/master/Images/lemmy16.png "Lemmy") [Lemmy](https://lemmy.world/u/burkybang "Lemmy")  
![LinkedIn](https://github.com/burkybang/burkybang/raw/master/Images/linkedin16.png "LinkedIn") [LinkedIn](https://linkedin.com/in/burkybang "LinkedIn")  
![Discord](https://github.com/burkybang/burkybang/raw/master/Images/discord16.png "Discord") [Discord](https://discord.gg/MzdmCVtA "Discord")  
![YouTube](https://github.com/burkybang/burkybang/raw/master/Images/youtube16.png "YouTube") [YouTube](https://youtube.com/burkybang "YouTube")  
![Twitter](https://github.com/burkybang/burkybang/raw/master/Images/twitter16.png "Twitter") [Twitter](https://twitter.com/burkybang "Twitter")  
![Reddit](https://github.com/burkybang/burkybang/raw/master/Images/reddit16.png "Reddit") [Reddit](https://reddit.com/u/burkybang "Reddit")

## Related Projects

- [SuiteScript File Templates for WebStorm](https://github.com/burkybang/SuiteScript-WebStorm-File-Templates)
- [NetSuite UI Type Declarations](https://github.com/burkybang/NetSuite-UI-Type-Declarations)
- [SuiteScript 1.0 Type Declarations](https://github.com/burkybang/SuiteScript-1.0-Type-Declarations)

## How to Install Type Declarations

- [Guide for WebStorm](https://www.jetbrains.com/help/webstorm/configuring-javascript-libraries.html#ws_js_custom_third_party_library)

## How to Remove Type Declarations From the SuiteCloud IDE Plug-in

The SuiteCloud IDE Plug-in by NetSuite for WebStorm comes with incomplete type declarations, so if you have that
installed, it will interfere with the type declarations from this repo.

### Automated Removal (Recommended)

A modified version of the NetSuite SuiteCloud IDE Plug-in for WebStorm repository is available that removes the SuiteScript type files
automatically.

### Manual Removal

A manual method is also available, but it requires you to repeat the steps every time the SuiteCloud IDE Plug-in gets updated.

## Setup (Automated Removal)

### 1. Set up the custom plugin repository

1. Open WebStorm
2. Go to **Settings** → **Plugins**
3. Click the **gear icon** (⚙) near the top → **Manage Plugin Repositories...**
4. If the default NetSuite repository URL is listed (`https://system.netsuite.com/...`), select it and replace it with the URL below.
   Otherwise, click **Add** (+) and enter it:
   ```
   https://burkybang.com/suitecloud-ide-plugin/updatePlugins.xml
   ```
5. Click **OK**

### 2. Install

1. In **Settings** → **Plugins**, switch to the **Marketplace** tab
2. Search for **SuiteCloud**
3. You should see **SuiteCloud IDE Plug-in for WebStorm (No Types)**
4. Click **Install** and restart WebStorm when prompted

> **Already have the plugin installed?** WebStorm will show it as already installed since it's the same plugin. That's fine. Future updates
> will automatically use the types-removed version. If you want to remove the types immediately, uninstall the plugin, restart WebStorm, then
> reinstall it from the Marketplace OR follow the manual steps below.

![Installed No Types Plug-in](README%20Images/Installed%20No%20Types%20Plug-in.png "Installed No Types Plug-in")

## Setup (Manual Removal)

Here's how to manually remove NetSuite's built-in type declarations on Windows.

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