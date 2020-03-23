---
title: YouTube API Setup
description: 'One-time setup procedure required by Google'
---

TubePress needs to regularly communicate with YouTube on your behalf. To sort out all the incoming requests, and for quota purposes, Google **mandates** that everyone supplies "API credentials" with each message. It's the rough equivalent of showing someone an ID card before you have a conversation.

Setting up your API credentials is easy, free, and should take less than 5 minutes.

1. Sign into the [Google Developer's Console](https://console.developers.google.com/). If you don’t already have a Google account, you will need to sign up for one.

1. Near the top left of the screen, there's a project-selection drop-down menu. If you don't have any projects (which will be the common case), this will say "Select a project".

    ![select a project](img/appendices/youtube-api-setup/select-a-project.png)

1. Click that drop-down, then click the "New project" button in the ensuing popup window.

    ![create new project](img/appendices/youtube-api-setup/create-project-00.png)

1. Give the project any name you want, then click the "create" button.

    ![name and create new project](img/appendices/youtube-api-setup/create-project-01.png)

1. Wait a few seconds for the project to be created, then use the drop-down from Step 2 to select your new project

    ![select new project](img/appendices/youtube-api-setup/select-new-project.png)

1. Click the blue "+ Enable APIs and Services" button near the top of the screen.

    ![enable APIs and Services button](img/appendices/youtube-api-setup/enable-services-button.png)

1. Type in "youtube" in the search box, then select “YouTube Data API v3” from the results.

    ![API library welcome](img/appendices/youtube-api-setup/api-library-welcome.png)
    
    ![YouTube Data API v3 search result](img/appendices/youtube-api-setup/yt-data-api-search-result.png)

1. Click the big "Enable" button on the ensuing page.

    ![enable YouTube Data API](img/appendices/youtube-api-setup/yt-data-api-enable-button.png)

1. Click the "create credentials" button on the ensuing page.

    ![create credentials button](img/appendices/youtube-api-setup/create-credentials.png)

1. In the form that shows up, select "YouTube Data API v3" in the first dropdown, "Web server (e.g. node.js, Tomcat)" in the second drop-down, then "Public data". Finally, click the "What credentials do I need?" button.

    ![credentials wizard](img/appendices/youtube-api-setup/credentials-wizard.png)

1. You'll be presented with a server key. Copy this key as shown below, then click the “Done” button.

    ![copy new API key](img/appendices/youtube-api-setup/copy-api-key.png)
