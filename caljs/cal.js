//alert("test");
const showHideEnabled=true;
//const linkRegex = /(https?:\/\/)(\w+\.)+(\w)+(\/\w+|\/)*(\.\w+)?/gi;

if (showHideEnabled){
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
		$(shsl[num]).hide(0, function(){
			shsl[num].innerHTML=originalHTMLs[num]+"  "+hideBttnHTML(num);
			$(shsl[num]).fadeIn("fast");
		});
	}
	function hideShown(num){
		$(shsl[num]).show(0, function(){
			shsl[num].innerHTML=showBttnHTML(num);
			$(shsl[num]).fadeIn("fast");
		});
	}
}

function collToList(elmColl){
	let newList=[];
	for (i=0; i<elmColl.length; i++){
		newList.push(elmColl[i]);
	}
	return(newList);
}

/* WIP
function makeLinks(){
	var spans=collToList(document.getElementsByTagName("span"));
	spans.forEach(function(item){
		if (item.innerText.search(linkRegex)!==-1){
			
		}
	});
}*/

function CustomElement(name, args, func) {
	let elms = document.getElementsByTagName(name);
	for (let i = 0; i < elms.length; i++) {
		let elm = elms[i];
		let argList = {};
		for (arg of args) {
			argList[arg] = elm.getAttribute(arg);
		}
		func(elm, argList);
	}
}