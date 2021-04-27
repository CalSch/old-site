alert("Hack started 1")
try{
  function setRedBar(){
    let val=prompt("Red bar value:");
    player.money.red=val;
  }
  function setGreenBar(){
    let val=prompt("Green bar value:");
    player.money.green=val;
  }
  function setBlueBar(){
    let val=prompt("Blue bar value:");
    player.money.blue=val;
  }
  let hackMenuContent=`<h3>Hack Menu</h3>
<button onclick="setRedBar()">Set red bar value</button>
<button onclick="setGreenBar()">Set green bar value</button>
<button onclick="setBlueBar()">Set blue bar value</button>`;
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
