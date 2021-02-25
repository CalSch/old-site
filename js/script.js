//alert("test");

function hideBttnHTML(num){
	return "<button onclick='hideShown("+num+");'><b><-</b></button>";
}
function showBttnHTML(num){
	return "<a href='javascript: showHidden("+num+");'><b> . . . </b></a>";
}

//Show/Hide sections (shs)
let shs=document.getElementsByClassName("show-hide");
let shsl=[];
for (i = 0; i < shs.length; i++) {
	shsl.push(shs[i]);
}
var originalHTMLsList=[];
shsl.forEach(function(elm){
	originalHTMLsList.push(elm.innerHTML);
	console.log("html: "+elm.innerHTML);
	elm.innerHTML=showBttnHTML(shsl.indexOf(elm));
});
const originalHTMLs=originalHTMLsList; //Lock the variable;
function showHidden(num){
	$(shsl[num]).fadeOut("fast", function(){
		shsl[num].innerHTML=originalHTMLs[num]+"&nbsp;&nbsp;"+hideBttnHTML(num);
		$(shsl[num]).fadeIn("fast");
	});
}
function hideShown(num){
	$(shsl[num]).fadeOut("fast", function(){
		shsl[num].innerHTML=showBttnHTML(num);
		$(shsl[num]).fadeIn("fast");
	});
}

function collToList(elmColl){
	let newList=[];
	for (i=0; i<elmColl.length; i++){
		newList.push(elmColl[i]);
	}
	return(newList);
}

//Include HTML function from w3Schools

function includeHTML() {
  var z, i, elmnt, file, xhttp;
  // Loop through a collection of all HTML elements:
  z = document.getElementsByTagName("*");
  for (i = 0; i < z.length; i++) {
    elmnt = z[i];
    //search for elements with a certain atrribute:
    file = elmnt.getAttribute("w3-include-html");
    if (file) {
      // Make an HTTP request using the attribute value as the file name:
      xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function() {
        if (this.readyState == 4) {
          if (this.status == 200) {elmnt.innerHTML = this.responseText;}
          if (this.status == 404) {elmnt.innerHTML = "Page not found.";}
          // Remove the attribute, and call this function once more:
          elmnt.removeAttribute("w3-include-html");
          includeHTML();
        }
      }
      xhttp.open("GET", file, true);
      xhttp.send();
      // Exit the function:
      return;
    }
  }
}
includeHTML();

function langImg() {
	document.body.innerHTML=document.body.innerHTML.replace(/<!--html5-->/g,"<img src=\"https://repl.it/public/images/languages/web_project.svg\", width=20, height=20>");
	document.body.innerHTML=document.body.innerHTML.replace(/<!--python-->/g,"<img src=\"https://repl.it/public/images/languages/python.svg\", width=20, height=20>");
}

document.write("\n<div w3-include-html=\"/boxgame_button.html\"></div>");

setTimeout(function(){
	console.log("boxgame");

	var boxgameButton = document.getElementsByClassName("boxgameBttn")[0];
	var boxgameContainer = document.getElementsByClassName("boxgame-container")[0];

	$(boxgameContainer).hide();
	$(boxgameButton).click(function(){
		console.log("boxgame");
		$(boxgameButton).fadeOut("fast",function(){
			$(boxgameContainer).load("/boxgame.html",function(){
				$(boxgameContainer).fadeIn();
				$("#boxgame-quit").click(function(){
					$(boxgameContainer).fadeOut("fast",function(){
						$(boxgameContainer).innerHTML="";
						$(boxgameButton).fadeIn();
					});
				});
			});
		});
	});
},400);

function setCookie(cname, cvalue, exdays) {
  var d = new Date();
  d.setTime(d.getTime() + (exdays*24*60*60*1000));
  var expires = "expires="+ d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}
function getCookie(cname) {
  var name = cname + "=";
  var decodedCookie = decodeURIComponent(document.cookie);
  var ca = decodedCookie.split(';');
  for(var i = 0; i <ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

/* Start of a button animation thing with jQuery
$("button").mouseenter(function(){

});
$("button").mouseleave(function(){

});
*/