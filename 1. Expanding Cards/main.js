const panels = document.querySelectorAll('.panel')
const container = document.querySelector('.container-img')

const removeActive = () => {
  panels.forEach(panel => {
    panel.classList.remove('active')
  })
}

const changeBackground = (element) => {
  const img = element.children[0]
  const src = img.getAttribute('src')
  if (src) {
    container.style.backgroundImage = `url(${src})`
  }s
}

panels.forEach(panel => {
  panel.addEventListener('click', () => {
    removeActive()
    panel.classList.add('active')
    changeBackground(panel)
  })
});

panels.forEach(panel => {
  if (panel.classList.contains('active')) {
    changeBackground(panel);
  }

})