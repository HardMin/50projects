const body = document.querySelector('body')

const btn_header = document.querySelectorAll('.btn-navbar span')

const btn_header_open = btn_header[0]
const btn_header_close = btn_header[1]

const btn_menu_navbar = document.querySelectorAll('.menu-navbar nav ol li')


btn_header_open.addEventListener('click', () => {
  body.setAttribute('style', `
    --rotate-btn-close: 0deg;
    --rotate-btn-open: -90deg;
    --rotate-content: -20deg;
  `)

  btn_menu_navbar.forEach((btn) => {
    btn.setAttribute('style', 'animation-name: menu-open;')
  })
})
btn_header_close.addEventListener('click', () => {
  body.setAttribute('style', `
  --rotate-btn-close: 90deg;
  --rotate-btn-open: 0deg;
  --rotate-content: 0deg;
  `)
  btn_menu_navbar.forEach((btn) => {
    btn.setAttribute('style', 'animation-name: menu-close;')
  })
  
})