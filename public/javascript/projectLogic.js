import { querySelect } from "./querySelect.js"
import { audioData } from "./audio.js"
import { controlButtons } from "./controlButton.js"

let IdTimerOut
let minutes
let seconds
let displayMinute
let displaySecond

export const projectLogic = {
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

      // audio Play
      audioData.lofiAudioTree.play()
      audioData.lofiAudioTree.loop = true
      audioData.lofiAudioCloud.pause()
      audioData.lofiAudioCoffe.pause()
      audioData.lofiAudioFire.pause()
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

      // audio Play

      audioData.lofiAudioCloud.play()
      audioData.lofiAudioCloud.loop = true
      audioData.lofiAudioTree.pause()
      audioData.lofiAudioCoffe.pause()
      audioData.lofiAudioFire.pause()
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

      // audio Play

      audioData.lofiAudioCoffe.play()
      audioData.lofiAudioCoffe.loop = true
      audioData.lofiAudioCloud.pause()
      audioData.lofiAudioTree.pause()
      audioData.lofiAudioFire.pause()
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

      // audio Play

      audioData.lofiAudioFire.play()
      audioData.lofiAudioFire.loop = true
      audioData.lofiAudioCoffe.pause()
      audioData.lofiAudioCloud.pause()
      audioData.lofiAudioTree.pause()
    }
  },

  pauseContentHideTree() {
    let containsTree = querySelect.containsTree.classList.contains("hide")

    if (containsTree) {
      audioData.lofiAudioTree.pause()
    }
  },

  pauseContentHideCloud() {
    let containsCloud = querySelect.containsCloud.classList.contains("hide")

    if (containsCloud) {
      audioData.lofiAudioCloud.pause()
    }
  },

  pauseContentHideCoffe() {
    let containsCoffe = querySelect.containsCoffe.classList.contains("hide")

    if (containsCoffe) {
      audioData.lofiAudioCoffe.pause()
    }
  },

  pauseContentHideFire() {
    let containsFire = querySelect.containsFire.classList.contains("hide")

    if (containsFire) {
      audioData.lofiAudioFire.pause()
    }
  },

  countDown() {
    IdTimerOut = setTimeout(function () {
      minutes = querySelect.displayMinute.textContent
      seconds = querySelect.displaySecond.textContent

      if (seconds <= 0) {
        seconds = 60
        querySelect.displayMinute.textContent = String(--minutes).padStart(
          2,
          "0"
        )
      }

      querySelect.displaySecond.textContent = String(--seconds).padStart(2, "0")

      if (minutes == 0 && seconds == 0) {
        projectLogic.clearTimeout(IdTimerOut)
        controlButtons.pause()
        audioData.kitchenTimer.play()
        return
      }

      projectLogic.countDown()
    }, 1000)
  },

  clearTimeout() {
    clearTimeout(IdTimerOut)
  },

  StopDisplayTimer() {
    projectLogic.clearTimeout()
    querySelect.displaySecond.textContent = String(displaySecond).padStart(
      2,
      "0"
    )
    querySelect.displayMinute.textContent = String(displayMinute).padStart(
      2,
      "0"
    )
  },

  setTimerAndPlay() {
    minutes = querySelect.displayMinute.textContent
    seconds = querySelect.displaySecond.textContent

    let minAndSecReset = minutes == 0 && seconds == 0

    if (minAndSecReset) {
      alert("ADICIONE um valor para MINUTOS e um valor para SEGUNDOS")
    } else {
      projectLogic.countDown()
      controlButtons.play()
    }
  },

  setEncrement() {
    projectLogic.EncrementverificationPauseDisplayMinutesAndSeconds()

    minutes = querySelect.displayMinute.textContent
    seconds = querySelect.displaySecond.textContent

    if (seconds == 55) {
      querySelect.displaySecond.textContent = String(Number(0)).padStart(2, "0")
      querySelect.displayMinute.textContent = String(
        Number(minutes) + 1
      ).padStart(2, "0")
    } else {
      querySelect.displaySecond.textContent = String(
        Number(seconds) + 5
      ).padStart(2, "0")
    }

    if (minutes >= 99 && seconds == 55) {
      querySelect.displayMinute.textContent = String(Number(0)).padStart(2, "0")
      querySelect.displaySecond.textContent = String(Number(0)).padStart(2, "0")
    }

    displayMinute = querySelect.displayMinute.textContent
    displaySecond = querySelect.displaySecond.textContent
  },

  setDecrement() {
    projectLogic.DecrementverificationPauseDisplayMinutesAndSeconds()

    minutes = querySelect.displayMinute.textContent
    seconds = querySelect.displaySecond.textContent

    if (seconds == 0) {
      querySelect.displaySecond.textContent = String(Number(55)).padStart(
        2,
        "0"
      )
      querySelect.displayMinute.textContent = String(
        Number(minutes) - 1
      ).padStart(2, "0")
    } else {
      querySelect.displaySecond.textContent = String(
        Number(seconds) - 5
      ).padStart(2, "0")
    }

    if (minutes == 0 && seconds == 0) {
      querySelect.displayMinute.textContent = String(Number(99)).padStart(
        2,
        "0"
      )
    }

    displayMinute = querySelect.displayMinute.textContent
    displaySecond = querySelect.displaySecond.textContent
  },

  EncrementverificationPauseDisplayMinutesAndSeconds() {
    minutes = querySelect.displayMinute.textContent
    seconds = querySelect.displaySecond.textContent

    seconds = Array.from(seconds).pop()

    if (seconds != 0 && seconds != 5) {
      
      if (seconds >= 1 && seconds <= 4) {
        seconds = Array.from(querySelect.displaySecond.textContent).shift()
        querySelect.displaySecond.textContent = String(seconds + 0).padStart(2,"0")
      }

      if (seconds >= 6 && seconds <= 9) {
        seconds = Array.from(querySelect.displaySecond.textContent).shift()
        querySelect.displaySecond.textContent = String(seconds + 5).padStart(2,"0")}
    }
  },

  DecrementverificationPauseDisplayMinutesAndSeconds() {
    minutes = querySelect.displayMinute.textContent
    seconds = querySelect.displaySecond.textContent
    
    seconds = Array.from(seconds).pop()

    if (seconds != 0 && seconds != 5) {

      if (seconds >= 1 && seconds <= 4) {
        seconds = Array.from(querySelect.displaySecond.textContent).shift()
        querySelect.displaySecond.textContent = String(seconds + 5).padStart(2,"0")
      }

      if (seconds >= 6 && seconds <= 9) {
        seconds = Array.from(querySelect.displaySecond.textContent).shift()
        Number(seconds++)
        querySelect.displaySecond.textContent = (String(seconds) + 0).padStart(2,"0")
      }
    }
  },
}
