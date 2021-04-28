alert("Hack started v6")
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
  function setSpectrum(){
    let val=parseInt(prompt("Spectrum:"));
    player.spectrum=val;
  }
  function setBlueLevel(i){
    let val=parseInt(prompt("Blue upgrade #"+i.toString()+" level:"));
    player.level.blue[i-1]=val;
  }
  function playerDataSave(){
    player=JSON.parse(grab("#hack-player-data").value);
  }
  function playerDataLoad(){
    grab("#hack-player-data").value=JSON.stringify(player);
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
<button onclick="setBlueLevel(1)">#1</button>
<button onclick="setBlueLevel(2)">#2</button>
<button onclick="setBlueLevel(3)">#3</button>
<button onclick="setBlueLevel(4)">#4</button><br>
<button onclick="setSpectrum()">Set spectrum</button>
</div>

<div id="hack-menu-debug" style="display: none;">
<p>Player data:</p>
<textarea id="hack-player-data"></textarea><br>
<button onclick="playerDataSave()">Save</button> |
<button onclick="playerDataLoad()">Load</button>
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
