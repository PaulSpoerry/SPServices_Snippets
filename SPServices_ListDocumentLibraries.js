//  When it's run is complete simply type the following into the console window and you'll get the formatted DIV with the output: $('#outputDataDiv')
jQuery.noConflict();
(function( $ ) {

	//inject SPServices
	var sps = document.createElement('script');
	sps.src = "https://cdnjs.cloudflare.com/ajax/libs/jquery.SPServices/2014.02/jquery.SPServices-2014.02.min.js";
	document.getElementsByTagName('head')[0].appendChild(sps);
    	
	var rootsite = $().SPServices.SPGetCurrentSite();
	$('body').append('<div id=outputDataDiv>Document Library List</div>');
	
	$().SPServices({
        operation: "GetListCollection",
        webURL:rootsite,
        async: false,
        completefunc: function(xData, Status) {
                //For each xml node that is marked as a List.
                $(xData.responseXML).SPFilterNode("List").each(function(){
                    //filter by template code 101 = document library
                    // removing Style Library and Site Assets since they are built in libraries
                    if(
                        $(this).attr("ServerTemplate")==101
                        &&$(this).attr("Title")!=="Style Library"
                        &&$(this).attr("Title")!=="Site Assets")
                    {
                        //Build the output html for the current document library
                        var outputListHtml = "<div class='listContainer'>"+
                                                "<span class='listTitle'>"
                                                +$(this).attr("Title") 
                                                + "</span><br />";
                        outputListHtml += "Total Item Count: "+$(this).attr("ItemCount")+" ";
                        outputListHtml +="</div>";
                        //Append the html to the output Div

                        $('#outputDataDiv').append(outputListHtml);
                    }
                });
            }
        });
	// End code in here
})(jQuery);
