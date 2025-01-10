window.changeVersion = (card_version) => {
  console.log('changeVersion called with:', card_version);
  let vip = localStorage.getItem('vip')

  if (card_version.indexOf('lover') == 0) {
    localStorage.setItem('card_version', card_version)
    location.href = "./card.html"
    return
  }
  if (!vip) {
    alert('会员私密空间')
    location.href = './about.html'
    return
  }

  localStorage.setItem('card_version', card_version)
  location.href = "./card.html"
}