const querySelect = {
  buttonPlay: document.querySelector(".play"),
  buttonPause: document.querySelector(".pause"),
  buttonStop: document.querySelector(".stop"),
  buttonEncrement: document.querySelector(".encrement"),
  buttonDecrement: document.querySelector(".decrement"),
  
  buttonLofiTree: document.querySelector(".tree"),
  buttonLofiCloud: document.querySelector(".cloud"),
  buttonLofiCoffe: document.querySelector(".coffe"),
  buttonLofiFire: document.querySelector(".fire"),
  
  containsTree: document.querySelector(".imgTree1"),
  containsCloud: document.querySelector(".imgCloud1"),
  containsCoffe: document.querySelector(".imgCoffe1"),
  containsFire: document.querySelector(".imgFire1"),

  containsTree2: document.querySelector(".imgTree2"),
  containsCloud2: document.querySelector(".imgCloud2"),
  containsCoffe2: document.querySelector(".imgCoffe2"),
  containsFire2: document.querySelector(".imgFire2"),
}

const projectLogic = {
  verificationHideButtonLoFi() {
    let containsTree = querySelect.containsTree.classList.contains("hide")
    let containsCloud = querySelect.containsCloud.classList.contains("hide")
    let containsCoffe = querySelect.containsCoffe.classList.contains("hide")
    let containsFire = querySelect.containsFire.classList.contains("hide")

    let checkForHide =
      containsTree || containsCloud || containsCoffe || containsFire

    return checkForHide
  },

  hideTree() {
    let checkForHide = projectLogic.verificationHideButtonLoFi

    if (checkForHide) {
      querySelect.containsCloud.classList.remove("hide")
      querySelect.containsCloud2.classList.add("hide")
      querySelect.containsCoffe.classList.remove("hide")
      querySelect.containsCoffe2.classList.add("hide")
      querySelect.containsFire.classList.remove("hide")
      querySelect.containsFire2.classList.add("hide")
    }
  },

  hideCloud() {
    let checkForCloud = projectLogic.verificationHideButtonLoFi

    if (checkForCloud) {
      querySelect.containsTree.classList.remove("hide")
      querySelect.containsTree2.classList.add("hide")
      querySelect.containsCoffe.classList.remove("hide")
      querySelect.containsCoffe2.classList.add("hide")
      querySelect.containsFire.classList.remove("hide")
      querySelect.containsFire2.classList.add("hide")
    }
  },

  hideCoffe() {
    let checkForCoffe = projectLogic.verificationHideButtonLoFi

    if (checkForCoffe) {
      querySelect.containsTree.classList.remove("hide")
      querySelect.containsTree2.classList.add("hide")
      querySelect.containsCloud.classList.remove("hide")
      querySelect.containsCloud2.classList.add("hide")
      querySelect.containsFire.classList.remove("hide")
      querySelect.containsFire2.classList.add("hide")
    }
  },

  hideFire() {
    let checkForFire = projectLogic.verificationHideButtonLoFi

    if (checkForFire) {
      querySelect.containsTree.classList.remove("hide")
      querySelect.containsTree2.classList.add("hide")
      querySelect.containsCloud.classList.remove("hide")
      querySelect.containsCloud2.classList.add("hide")
      querySelect.containsCoffe.classList.remove("hide")
      querySelect.containsCoffe2.classList.add("hide")
    }
  },
}

const controlButtons = {
  play() {
    querySelect.buttonPause.classList.remove("hide")
    querySelect.buttonPlay.classList.add("hide")
  },

  pause() {
    querySelect.buttonPause.classList.add("hide")
    querySelect.buttonPlay.classList.remove("hide")
  },

  lofiTree() {
    
    document.querySelector(".imgTree1").classList.toggle("hide")
    document.querySelector(".imgTree2").classList.toggle("hide")

  },

  LofiCloud() {
    document.querySelector(".imgCloud1").classList.toggle("hide")
    document.querySelector(".imgCloud2").classList.toggle("hide")
  },

  LofiCoffe() {
    document.querySelector(".imgCoffe1").classList.toggle("hide")
    document.querySelector(".imgCoffe2").classList.toggle("hide")
  },

  LofiFire() {
    document.querySelector(".imgFire1").classList.toggle("hide")
    document.querySelector(".imgFire2").classList.toggle("hide")
  },
}

const startupControl = {
  buttonPlay(event) {
    event.preventDefault(event)
    controlButtons.play()
    console.log("Teste Play")
  },

  buttonPause(event) {
    event.preventDefault(event)
    controlButtons.pause()
    console.log("Teste Pause")
  },

  buttonStop(event) {
    event.preventDefault(event)
    console.log("Teste Stop")
  },

  buttonEncrement(event) {
    event.preventDefault(event)
    console.log("Teste +++")
  },

  buttonDecrement(event) {
    event.preventDefault(event)
    console.log("Teste ---")
  },

  buttonLofiTree(event) {
    event.preventDefault(event)
    
    projectLogic.hideTree()
    controlButtons.lofiTree()
    console.log("Teste Tree")
  },

  buttonLofiCloud(event) {
    event.preventDefault(event)

    projectLogic.hideCloud()
    controlButtons.LofiCloud()
    console.log("Teste Cloud")
  },

  buttonLofiCoffe(event) {
    event.preventDefault(event)

    projectLogic.hideCoffe()
    controlButtons.LofiCoffe()
    console.log("Teste Coffe")
  },

  buttonLofiFire(event) {
    event.preventDefault(event)

    projectLogic.hideFire()
    controlButtons.LofiFire()
    console.log("Teste Fire")
  },
}

querySelect.buttonPlay.addEventListener("click", startupControl.buttonPlay)
querySelect.buttonPause.addEventListener("click", startupControl.buttonPause)
querySelect.buttonStop.addEventListener("click", startupControl.buttonStop)
querySelect.buttonEncrement.addEventListener("click",startupControl.buttonEncrement)
querySelect.buttonDecrement.addEventListener("click",startupControl.buttonDecrement)
querySelect.buttonLofiTree.addEventListener("click",startupControl.buttonLofiTree)
querySelect.buttonLofiCloud.addEventListener("click",startupControl.buttonLofiCloud)
querySelect.buttonLofiCoffe.addEventListener("click",startupControl.buttonLofiCoffe)
querySelect.buttonLofiFire.addEventListener("click",startupControl.buttonLofiFire)
