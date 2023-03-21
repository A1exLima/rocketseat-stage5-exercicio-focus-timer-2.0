import { querySelect } from "./querySelect.js"
import { controlButtons } from "./controlButton.js"
import { projectLogic} from "./projectLogic.js"
import { audioData } from "./audio.js"

const startupControl = {
  buttonPlay(event) {
    event.preventDefault(event)
    controlButtons.play()
    audioData.buttonPressAudio.play()
    console.log("Teste Play")
  },

  buttonPause(event) {
    event.preventDefault(event)
    controlButtons.pause()
    audioData.buttonPressAudio.play()
    console.log("Teste Pause")
  },

  buttonStop(event) {
    event.preventDefault(event)
    audioData.buttonPressAudio.play()
    console.log("Teste Stop")
  },

  buttonEncrement(event) {
    event.preventDefault(event)
    audioData.buttonPressAudio.play()
    console.log("Teste +++")
  },

  buttonDecrement(event) {
    event.preventDefault(event)
    audioData.buttonPressAudio.play()
    console.log("Teste ---")
  },

  buttonLofiTree(event) {
    event.preventDefault(event)

    projectLogic.hideTree()
    projectLogic.pauseContentHideTree()
    controlButtons.lofiTree()
    audioData.buttonPressAudio.play()
    
  },

  buttonLofiCloud(event) {
    event.preventDefault(event)

    projectLogic.hideCloud()
    projectLogic.pauseContentHideCloud()
    controlButtons.LofiCloud()
    audioData.buttonPressAudio.play()
    console.log("Teste Cloud")

  },

  buttonLofiCoffe(event) {
    event.preventDefault(event)

    projectLogic.hideCoffe()
    projectLogic.pauseContentHideCoffe()
    controlButtons.LofiCoffe()
    audioData.buttonPressAudio.play()
    console.log("Teste Coffe")
  },

  buttonLofiFire(event) {
    event.preventDefault(event)

    projectLogic.hideFire()
    projectLogic.pauseContentHideFire()    
    controlButtons.LofiFire()
    audioData.buttonPressAudio.play()
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
