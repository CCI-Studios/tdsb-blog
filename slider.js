<!-- ######### Writing Callback Function ############# --> 
	<script type="text/javascript"> 
	//----------------------------Defaults 
	var ListBlogLink = window.location.hostname; 
	var ListCount = 8; 
	var TitleCount = 70; 
	var ListLabel =" "; 
	var ChrCount = 80;
	var ImageSize = 1000;
	//----------------------------Function Start 
	function mbtlist(json) { 
	document.write('<ul class="mbtlist">'); 
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
	console.log(json.feed.entry);
	for (var k = 0; k < json.feed.entry[i].category.length; k++) { 

	  var cat_img = json.feed.entry[i].category[k].term;
	  var tag = "<a href='/search/label/"+json.feed.entry[i].category[k].term+"' class='tag-link'>"+json.feed.entry[i].category[k].term+"</a>";
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
	{ 		console.log(ListCategoryImg.indexOf("Math Initiatives") > -1);

		if(ListCategoryImg.indexOf('Learning Communities') > -1)
	    {
			ListImage = "'https://4.bp.blogspot.com/-RAl-muiUxNA/V_Pp-Xs8bdI/AAAAAAAAA0c/iJ9xP9oqwn4J_D0Bwaev7-k70ZseS_kXgCPcB/s1600/Learning%2BCommunities4.jpg'"; 
	    }
	    else if(ListCategoryImg.indexOf('RWG') > -1)
	    {
			ListImage = "'https://1.bp.blogspot.com/-XVTsM05xYSI/V_PqT7dUpuI/AAAAAAAAA0g/fCxhycFVJ-YNXct8QVahGCmDR1BPzabhwCLcB/s1600/RWG.JPG'"; 
	    }
	    else if(ListCategoryImg.indexOf('IWBs') > -1)
	    {
			ListImage = "'https://1.bp.blogspot.com/-sWHA7X0oHyo/V_PqYdz5W0I/AAAAAAAAA0k/zr6zoVAV7Z8I59mXyFgnqRV8Y7FK7Z4jQCLcB/s1600/IWB2.png'"; 
	    }
	    else if(ListCategoryImg.indexOf("Math Initiatives") > -1)
	    {	
			ListImage = "'https://4.bp.blogspot.com/-BzSRbwBRb78/V_PqbC_ZaOI/AAAAAAAAA0o/J-jo6p7Ap8olvuovupQnOQu9EZ5YrictQCLcB/s1600/Math.png'"; 
	    }
	    else if(ListCategoryImg.indexOf('Special Projects') > -1)
	    {
			ListImage = "'https://2.bp.blogspot.com/-nl8CczQxP1M/V_Pqfy7ZWMI/AAAAAAAAA0s/1sE5QVvzndcI_i5S5T8jK3gQWYdwQOtIACLcB/s1600/Special%2BProjects.png'"; 
	    }
	    else if(ListCategoryImg.indexOf('EQAO') > -1)
	    {
			ListImage = "'https://1.bp.blogspot.com/-fBF7DOmfF5o/V_Pqj19w_iI/AAAAAAAAA0w/uF-z49wktdo5IF4jM1Q7WfrNE14uwsXoQCLcB/s1600/DSC00052.JPG'"; 
	    }
	}

	//----------------------------------- Printing List 
	var listing = "<li><img src=" 
	+ListImage+ 
	"/><div id='content-banner'><label>"+ListCategory+"</label><h3>"+ListTitle+"</h3><a class='read-more' href=" 
	+ListUrl+ 
	">READ POST</a></div>"; 
	document.write(listing); 
	} 
	document.write("</ul>"); 
	} 
	</script> 
	<!-- ######### Invoking the Callback Function ############# --> 
	<script> 
	ListBlogLink = "https://assistivetechtdsb-dev.blogspot.ca"; 
	ListCount = 8; 
	TitleCount = 70; 
	ListLabel = "label"; 
	ChrCount = 150;
	document.write("<script src='"+ListBlogLink+"/feeds/posts/default?alt=json-in-script&callback=mbtlist'></"+"script>"); 


		
	</script> 
	<!-- ######### Styles for Look ############# -->