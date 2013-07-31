$(function (){
	var back_to_top = "<a href='#top'>Back to Top</a>";
    $("div.article").append(back_to_top);
	
	var toc = "<h2 id='toc'><a name='toc'>Table of Contents</a></h2>";
	$("h1").after(toc);
	
	var toc_list = "<ul id='toc'></ul>"
	$("h2:first").after(toc_list)

    $("div.article h2").each(function (){
   		var title = $(this).text();    
   		
   		var slug = title.trim().toLowerCase().replace(" ", "_");
    	var list_item = "<li><a href = '#" + slug + "'>" + title + "</a></li>";
        $("ul#toc").append(list_item)

        var target_anchor = "<a name = '" + slug + "'/>";
      
        $(this).append(target_anchor)
    });

});