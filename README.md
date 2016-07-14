# SPServices_SubsiteIterator
Use SPServices to iterate and list all subsites from a given site

Ensure that your site has JQuery available. Then include this script or add it to the Chrome dev tools snippets section. 

For some reason on the first run it'll error with: SPServices_SubsiteIterator.js:17 Uncaught TypeError: Cannot read property 'SPGetCurrentSite' of undefined. Just execute it again and you'll see all subsites (that you have permission to view) under the existing site you're on. 

Note that there is also an operation 'GetAllSubWebCollection' which will be more performant since it doesn't have to iterate across the subsites. However, use of 'GetAllSubWebCollection' more permissions than 'GetWebCollection'. More info here: https://spservices.codeplex.com/wikipage?title=Webs
