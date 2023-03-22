import { querySelect } from "./querySelect.js"
import { controlButtons } from "./controlButton.js"
import { projectLogic} from "./projectLogic.js"
import { audioData } from "./audio.js"

export const startupControl = {
  buttonPlay(event) {
    event.preventDefault(event)
    audioData.buttonPressAudio.play()
    projectLogic.setTimerAndPlay()
  },

  buttonPause(event) {
    event.preventDefault(event)
    controlButtons.pause()
    audioData.buttonPressAudio.play()
    projectLogic.clearTimeout()
    
  },

  buttonStop(event) {
    event.preventDefault(event)
    audioData.buttonPressAudio.play()
    projectLogic.StopDisplayTimer()
    controlButtons.pause()
  },

  buttonEncrement(event) {
    event.preventDefault(event)
    audioData.buttonPressAudio.play()
    projectLogic.setEncrement()
  },

  buttonDecrement(event) {
    event.preventDefault(event)
    audioData.buttonPressAudio.play()
    projectLogic.setDecrement()
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

  },

  buttonLofiCoffe(event) {
    event.preventDefault(event)

    projectLogic.hideCoffe()
    projectLogic.pauseContentHideCoffe()
    controlButtons.LofiCoffe()
    audioData.buttonPressAudio.play()
  },

  buttonLofiFire(event) {
    event.preventDefault(event)

    projectLogic.hideFire()
    projectLogic.pauseContentHideFire()    
    controlButtons.LofiFire()
    audioData.buttonPressAudio.play()
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
