import { querySelect } from "./querySelect.js"
import { audioData } from "./audio.js"

export const controlButtons = {
  play() {
    querySelect.buttonPause.classList.remove("hide")
    querySelect.buttonPlay.classList.add("hide")
  },

  pause() {
    querySelect.buttonPause.classList.add("hide")
    querySelect.buttonPlay.classList.remove("hide")
  },

  lofiTree() {
    querySelect.containsTree.classList.toggle("hide")
    querySelect.containsTree2.classList.toggle("hide")
  },

  LofiCloud() {
    querySelect.containsCloud.classList.toggle("hide")
    querySelect.containsCloud2.classList.toggle("hide")
  },

  LofiCoffe() {
    querySelect.containsCoffe.classList.toggle("hide")
    querySelect.containsCoffe2.classList.toggle("hide")
  },

  LofiFire() {
    querySelect.containsFire.classList.toggle("hide")
    querySelect.containsFire2.classList.toggle("hide")
  },
}