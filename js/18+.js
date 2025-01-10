window.unLockPositions = () => {

  let lockCode = $("#lockCode").val()
  localStorage.setItem('vip', true)
  location.href = "./index.html"
}
window.rt = () => {

  let lockCode = $("#lockCode").val()
  location.href = "./index.html"
}
