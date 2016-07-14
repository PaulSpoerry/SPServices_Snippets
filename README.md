# SPServices_Snippets

Ensure that your site has JQuery available and that you can connect to the SPServices CDN (aka it's not blocked). Then include any script or add them to the Chrome dev tools snippets section. 

# SPServices_SubsiteIterator
Use SPServices to iterate and list all subsites from a given site (that you have permission to view)

For some reason on the first run it'll error with: SPServices_SubsiteIterator.js:17 Uncaught TypeError: Cannot read property 'SPGetCurrentSite' of undefined. Just execute it again and you'll see all subsites under the existing site you're on. 

Note that there is also an operation 'GetAllSubWebCollection' which will be more performant since it doesn't have to iterate across the subsites. However, use of 'GetAllSubWebCollection' more permissions than 'GetWebCollection'. More info here: https://spservices.codeplex.com/wikipage?title=Webs

# SPServices_ListDocumentLibraries
Use SPServices to iterate and list all document libraries for a given site (that you have permission to view)

When it's run is complete simply type the following into the console window and you'll get the formatted DIV with the output: $('#outputDataDiv')
