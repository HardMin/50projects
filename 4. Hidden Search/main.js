const input = document.querySelector('input')
const search = document.querySelector('span')

let bool = false
search.addEventListener('click', () => {
  if (bool) {
    input.style.width = "0px"
    input.style.paddingLeft = '0px'
    bool = false
  }
  else{
    input.focus()
    input.style.width = "200px"
    input.style.paddingLeft = '10px'
    bool = true
  }
})