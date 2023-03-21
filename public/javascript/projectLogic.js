import { querySelect } from "./querySelect.js"

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
