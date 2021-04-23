try {

  alert("Terminal init")

  var term={
    running: false,
    start: function(){
      this.running=true;
      alert("started")
      while (this.running){
        let cmd=getInput();
        let codeReturn=null,
            isError=false;

        try {
          codeReturn=eval(cmd);
        } catch(e) {
          isError=true;
          onError(e.message)
        }

        if (!isError){
          onCmdRan(cmd,codeReturn)
        }
      }
    },
    stop: function(){
      this.running=true;
    }
  };
  let bsCDN={
    css: document.createElement("link"),
    jquery: document.createElement("script"),
    popper: document.createElement("script"),
    js: document.createElement("script")
  }

  bsCDN.css.rel="stylesheet";
  bsCDN.css.href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css"
  bsCDN.jquery.src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"
  bsCDN.popper.src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.0/umd/popper.min.js"
  bsCDN.js.src="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"
  document.head.appendChild(bsCDN.css)
  document.head.appendChild(bsCDN.js)
  document.head.appendChild(bsCDN.jquery)
  document.head.appendChild(bsCDN.popper)
  
  function makeModal(id,titleHTML,bodyHTML){
    let modal=document.createElement("div")
    modal.classList.add("modal")
    modal.classList.add("fade")
    modal.id=id
    let dialog=document.createElement("div")
    dialog.classList.add("modal-dialog")
    let content=document.createElement("div")
    content.classList.add("modal-content")
    let header=document.createElement("div")
    header.classList.add("modal-header")
    let body=document.createElement("div")
    body.classList.add("modal-body")
    
    body.innerHTML=bodyHTML
    header.innerHTML=titleHTML
    
    content.appendChild(header)
    content.appendChild(body)
    dialog.appendChild(content)
    modal.appendChild(dialog)
    document.body.appendChild(modal)
  }

  function onError(message){
    alert("error:"+message)
  }
  function onCmdRan(cmd,codeReturn){
    makeModal("cr","hey",codeReturn)
  }
  function getInput(){
    return prompt("1+1");
  }

  term.start()
  
} catch(e){
  alert(e.message)
}
