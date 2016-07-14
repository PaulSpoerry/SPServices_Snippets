jQuery.noConflict();
(function( $ ) {

	//inject SPServices
	var sps = document.createElement('script');
	sps.src = "https://cdnjs.cloudflare.com/ajax/libs/jquery.SPServices/2014.02/jquery.SPServices-2014.02.min.js";
	document.getElementsByTagName('head')[0].appendChild(sps);

	// Code in here
	var tree = $('#treeviewList');
	var rootsite = $().SPServices.SPGetCurrentSite();
	var siteEnd = false;

	getSubSite(rootsite);  


	function getSubSite(url){
		$().SPServices({
		operation: "GetWebCollection",
		webURL: url,
		async: true,
		completefunc: function(xData, Status) {
			var siteUrl; 
			var siteCount = $(xData.responseXML).find("Web").length;
			  
			if(siteCount == 0){
				console.log("end of branch");
				siteEnd = true;
			}else{
				$(xData.responseXML).find("Web").each(function() {
					siteUrl = $(this).attr("Url");
					console.log(siteUrl);
					getSubSite(siteUrl);
				});
		  }
		}
		});
	}	
	// End code in here
})(jQuery);
