window.changeVersion = (card_version) => {
  console.log('changeVersion called with:', card_version);
  let vip = localStorage.getItem('vip')

  if (card_version.indexOf('lover') == 0) {
    localStorage.setItem('card_version', card_version)
    location.href = "./card.html"
    return
  }
  if (!vip) {
    alert('请确认您已满18岁')
    location.href = './about.html'
    return
  }

  localStorage.setItem('card_version', card_version)
  location.href = "./card.html"
}
