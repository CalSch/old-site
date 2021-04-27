alert("Hack started")
try{
  let hackMenuContent=`<h3>Hack Menu</h3>`;
  let hackMenu=document.createElement("div")
  hackMenu.id="hack-menu";
  hackMenu.innerHTML=hackMenuContent;

  document.appendChild(hackMenu);
}
catch(e) {alert("Error: "+e.message)}
