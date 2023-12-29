const msg = document.querySelector('.msg')

const btn = document.querySelector('button')

const config = {
  headers: {
    Accept: 'application/json',
  }
}

btn.addEventListener('click', () => {
  fetch('https://www.icanhazdadjoke.com', config).then((res) => {
    console.log(res)
  })
})
