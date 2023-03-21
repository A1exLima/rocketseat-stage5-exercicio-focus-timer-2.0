import { querySelect } from "./querySelect.js"
import { audioData } from "./audio.js"

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
  }
}
