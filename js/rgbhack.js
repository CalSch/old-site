alert("Hack started")
try{
  let hackMenuContent=`<h3>Hack Menu</h3>`;
  let hackMenu=document.createElement("div")
  hackMenu.id="hack-menu";
  hackMenu.style.backgroundColor="orange";
  hackMenu.style.position="fixed";
  hackMenu.style.left="5px";
  hackMenu.style.bottom="5px";
  hackMenu.style.borderRadius="15px";
  hackMenu.style.borderStyle="solid";
  hackMenu.style.borderColor="#d18324";
  hackMenu.style.borderWidth="2px";
  hackMenu.style.padding="5px";
  hackMenu.innerHTML=hackMenuContent;

  document.body.appendChild(hackMenu);
}
catch(e) {alert("Error: "+e.message)}
