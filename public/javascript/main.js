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
    controlButtons.lofiTree()
    console.log("Teste Tree")
  },

  buttonLofiCloud(event) {
    event.preventDefault(event)
    controlButtons.LofiCloud()
    console.log("Teste Cloud")
  },

  buttonLofiCoffe(event) {
    event.preventDefault(event)
    controlButtons.LofiCoffe()
    console.log("Teste Coffe")
  },

  buttonLofiFire(event) {
    event.preventDefault(event)
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
querySelect.buttonLofiCloud.addEventListener("click", startupControl.buttonLofiCloud)
querySelect.buttonLofiCoffe.addEventListener("click", startupControl.buttonLofiCoffe)
querySelect.buttonLofiFire.addEventListener("click", startupControl.buttonLofiFire)