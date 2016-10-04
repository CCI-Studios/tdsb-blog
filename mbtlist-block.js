<!-- ######### Writing Callback Function ############# --> 
	<script type="text/javascript"> 
	//----------------------------Defaults 
	var ListBlogLink = window.location.hostname; 
	var ListCount = 3; 
	var TitleCount = 70; 
	var ListLabel =" "; 
	var ChrCount = 80;
	var ImageSize = 1000;
	//----------------------------Function Start 
	function mbtlist(json) { 
	document.write('<ul id="mbtlist-block">'); 
	for (var i = 0; i < ListCount; i++) 
	{ 

	//-----------------------------Variables Declared 
	var listing= ListUrl = ListTitle = ListConten = ListContent =ListImage =thumbUrl =sk = ""; 
	//----------------------------- Title URL 
	for (var j = 0; j < json.feed.entry[i].link.length; j++) { 
	if (json.feed.entry[i].link[j].rel == 'alternate') { 
	break; 
	} 
	} 
	var ListCategory = [];
	var ListCategoryImg = [];

	for (var k = 0; k < json.feed.entry[i].category.length; k++) { 
	  var cat_img = json.feed.entry[i].category[k].term;
	  var tag = json.feed.entry[i].category[k].term;
	  ListCategory.push(tag);
	  ListCategoryImg.push(cat_img);
	} 

	ListUrl= "'" + json.feed.entry[i].link[j].href + "'"; 
	ListUrl1= json.feed.entry[i].link[j].href; 
	//----------------------------------- Title Stirng 
	if (json.feed.entry[i].title!= null) 
	{ 
	ListTitle= json.feed.entry[i].title.$t.substr(0, TitleCount); 
	}
	//----------------------------------- Content Check
	ListConten = json.feed.entry[i].content.$t; 
	ListContent= ListConten.replace(/(<([^>]+)>)/ig,"").substr(0, ChrCount);
	//------------------------------------ Thumbnail Check
	if (json.feed.entry[i].media$thumbnail) 
	{ 
	thumbUrl = json.feed.entry[i].media$thumbnail.url;
	sk= thumbUrl.replace("/s72-c/","/s"+ImageSize+"/"); 
	ListImage= "'" + sk.replace("?imgmax=100","") + "'"; 
	}
	// Support For 3rd Party Images 
	else if (json.feed.entry[i].content.$t.match(/src=(.+?[\.jpg|\.gif|\.png]")/) != null) 
	{ 
	ListImage =  json.feed.entry[i].content.$t.match(/src=(.+?[\.jpg|\.gif|\.png]")/)[1]; 
	}
	else 
	{ 

		if(ListCategoryImg.indexOf('Learning Communities') > -1)
	    {
			ListImage = "'https://4.bp.blogspot.com/-CCuBUs210VI/V_QMJMmpUTI/AAAAAAAAA2I/8o7fWemabWAV2vSgsM5F1YALe5nloJkpQCLcB/s1600/Learning-copy.jpg'"; 
	    }
	    else if(ListCategoryImg.indexOf('RWG') > -1)
	    {
			ListImage = "'https://1.bp.blogspot.com/-hNzvYmXeOjo/V_QKTy9bRCI/AAAAAAAAA10/D2TKWdfCwugku0UOhKoXOf0bnyI7wAD9QCLcB/s1600/RWG-copy.jpg'"; 
	    }
	    else if(ListCategoryImg.indexOf('IWBs') > -1)
	    {
			ListImage = "'https://1.bp.blogspot.com/-sWHA7X0oHyo/V_PqYdz5W0I/AAAAAAAAA0k/zr6zoVAV7Z8I59mXyFgnqRV8Y7FK7Z4jQCLcB/s1600/IWB2.png'"; 
	    }
	    else if(ListCategoryImg.indexOf("Math Initiatives") > -1)
	    {	
			ListImage = "'https://4.bp.blogspot.com/-kFtiaQcjlPo/V_PydlbltsI/AAAAAAAAA1M/C69xYzxQ9XwiQ8d8aGWF3teTumsgX-ZkACLcB/s1600/Math%2Bcopy.png'"; 
	    }
	    else if(ListCategoryImg.indexOf('Special Projects') > -1)
	    {
			ListImage = "'https://2.bp.blogspot.com/-dFWNIf13mrk/V_QIu6cPBpI/AAAAAAAAA1o/SxY-lSCu2eoAUNobkdqxtjDGe22sAnVZgCLcB/s1600/Special%2BProjects%2Bcopy.png'"; 
	    }
	    else if(ListCategoryImg.indexOf('EQAO') > -1)
	    {
			ListImage = "'https://1.bp.blogspot.com/-fBF7DOmfF5o/V_Pqj19w_iI/AAAAAAAAA0w/uF-z49wktdo5IF4jM1Q7WfrNE14uwsXoQCLcB/s1600/DSC00052.JPG'"; 
	    }
	}

	//----------------------------------- Printing List 
	var listing = "<li><a href=" 
	+ListUrl+ 
	" id='block-link'><img src=" 
	+ListImage+ 
	"/><div id='recent-block-content'><label>"+ListCategory+"</label><h3>"+ListTitle+"</h3></div></a>"; 
	document.write(listing); 
	} 
	document.write("</ul>"); 
	} 
	</script> 
	<!-- ######### Invoking the Callback Function ############# --> 
	<script> 
	ListBlogLink = "https://assistivetechtdsb-dev.blogspot.ca"; 
	ListCount = 3; 
	TitleCount = 70; 
	ListLabel = "label"; 
	ChrCount = 150;
	document.write("<script src='"+ListBlogLink+"/feeds/posts/default?alt=json-in-script&callback=mbtlist'></"+"script>"); 


		
	</script> 
	<!-- ######### Styles for Look ############# -->