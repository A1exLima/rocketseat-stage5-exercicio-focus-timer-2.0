import { querySelect } from "./querySelect.js"
import { controlButtons } from "./controlButton.js"
import { projectLogic} from "./projectLogic.js"



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
