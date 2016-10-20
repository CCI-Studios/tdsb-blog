<!-- ######### Writing Callback Function ############# --> 
<script type="text/javascript"> 
//----------------------------Defaults 
var ListBlogLink = window.location.hostname; 
var ListCount = 8; 
var TitleCount = 70; 
var ListLabel =" "; 
var ChrCount = 80;
var ImageSize = 221;
//----------------------------Function Start 
function mbtlist(json) { 
document.write('<div id="mbtlist-content">');
var listing= ListUrl = ListTitle = ListConten = ListContent =ListImage =thumbUrl =sk = listing1 = listing = ""; 
  var result =[];
  var category = [];

for(k=0;k<json.feed.category.length;k++)
{	
	var myStr1 = json.feed.category[k].term;
	myStr = myStr1.replace(/\s+/g, "-");
  var div = "<div id="+myStr+" class='category'><h1 class='title'>"+myStr1+"</h1>"
  document.write(div);	
  document.write('<a href="/search/label/'+myStr1+'" class="read-more view-all">View all posts</a></div>')
}


for (var i = 0; i < json.feed.entry.length; i++) 
{ 
//-----------------------------Variables Declared 
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
ListImage= "'" + sk.replace("?imgmax=220","") + "'"; 
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
for(k=0;k<json.feed.category.length;k++)
{	
	console.log(json.feed.entry[i].category.length);
	for(l=0; l<json.feed.entry[i].category.length; l++)
	{	
		
		if(json.feed.entry[i].category[l].term==json.feed.category[k].term)
		{	
			var myStr1 = json.feed.category[k].term;
			console.log(myStr1);
			console.log(ListTitle);
			myStr1 = myStr1.replace(/\s+/g, "-");
			var theResults = "<div class='rows'><div class='image'><img src=" 
			+ListImage+ 
			"/></div><div class='list-content'><label>"+ListCategory.join(',')+"</label><h2 class='mbttitle'>" 
			+ListTitle+ 
			"</h2><div><div><div class='icontent'>" 
			+ListContent+ 
			" ... </div><div> <a href=" 
			+ListUrl+ 
			" class='read-more'>READ POST</div><div class='social'><a href='https://facebook.com/sharer.php?u="+ListUrl1+"'><img src='https://3.bp.blogspot.com/-qGwAA2z3-WU/V4PCOhULIsI/AAAAAAAAGik/JHL2Wti_1Ec5YmA9x1RmL4_G7gBSLnv3wCLcB/s1600/fb-green.png'></a>"+
			"<a href='http://www.twitter.com/share?url="+ListUrl1+"'><img src='https://3.bp.blogspot.com/-aRrDIEtw4LQ/V4PCVvz1U9I/AAAAAAAAGi0/JQcUWC03CwgZTy4CFh9pAeBhXRUYcBGVACLcB/s1600/twitter-green.png'></a>"+
			"<a href='http://assistivetechtdsb-dev.blogspot.com/feeds/posts/default'><img src='https://3.bp.blogspot.com/-Dw-0louT5DA/V7okFrPbauI/AAAAAAAAAxc/PU_TPDnci_MKD48X4q-aNpCod9d99W6AACLcB/s1600/rss.png'/></a></div><div>";
           $('#'+myStr1).append(theResults);
          // console.log($('#'+myStr1));
		}
	}
}
 //category.push(result);


//document.write(div);	
} 


console.log(category);

document.write("</div>"); 
}
</script> 
<!-- ######### Invoking the Callback Function ############# --> 
<script> 
ListBlogLink = "https://assistivetechtdsb-dev.blogspot.ca/"; 
ListCount = 8; 
TitleCount = 70; 
ListLabel = "label"; 
ChrCount = 150;
document.write("<script src='"+ListBlogLink+"/feeds/posts/default?alt=json-in-script&callback=mbtlist'></"+"script>"); 

	
</script> 
<!-- ######### Styles for Look ############# -->