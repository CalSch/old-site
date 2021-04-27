alert("Hack started v5.2")
try{
  function hide(elm){elm.style.display="none"}
  function show(elm){elm.style.display="initial"}
  function grab(q){return document.querySelector(q)}
  function setRedBar(){
    let val=parseInt(prompt("Red bar value:"));
    player.money.red=val;
  }
  function setGreenBar(){
    let val=parseInt(prompt("Green bar value:"));
    player.money.green=val;
  }
  function setBlueBar(){
    let val=parseInt(prompt("Blue bar value:"));
    player.money.blue=val;
  }
  function setRedLevel(){
    let val=parseInt(prompt("Red upgrade level:"));
    player.level.red=val;
  }
  function setGreenLevel(){
    let val=parseInt(prompt("Green upgrade level:"));
    player.level.green=val;
  }
  function setBlue1Level(){
    let val=parseInt(prompt("Blue upgrade #1 level:"));
    player.level.blue[0]=val;
  }
  function setBlue2Level(){
    let val=parseInt(prompt("Blue upgrade #2 level:"));
    player.level.blue[1]=val;
  }
  function setBlue3Level(){
    let val=parseInt(prompt("Blue upgrade #3 level:"));
    player.level.blue[2]=val;
  }
  function setBlue4Level(){
    let val=parseInt(prompt("Blue upgrade #4 level:"));
    player.level.blue[3]=val;
  }
  function hackDebug(){
    grab("#hack-save").innerText=btoa(JSON.stringify(player))
  }
  let hackMenuContent=`<h3>Hack Menu</h3>
<button onclick="show(grab('#hack-menu-setval'));hide(grab('#hack-menu-debug'));">Set Values</button> |
<button onclick="show(grab('#hack-menu-debug'));hide(grab('#hack-menu-setval'));hackDebug()">Debug</button>
<hr>
<div id="hack-menu-setval">
<button onclick="setRedBar()">Set red bar value</button><br>
<button onclick="setGreenBar()">Set green bar value</button><br>
<button onclick="setBlueBar()">Set blue bar value</button><br>
<button onclick="setRedLevel()">Set red upgrade level</button><br>
<button onclick="setGreenLevel()">Set green upgrade level</button><br>
<p>Set blue upgrade levels:</p>
<button onclick="setBlue1Level()">#1</button>
<button onclick="setBlue2Level()">#2</button>
<button onclick="setBlue3Level()">#3</button>
<button onclick="setBlue4Level()">#4</button>
</div>
<div id="hack-menu-debug">

<p>Save data:</p>
<pre id="hack-save" style="max-width: 70px; word-wrap: break-word"></pre>
</div>`;
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
