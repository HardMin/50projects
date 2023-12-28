const span = document.querySelector('span')

const img = document.querySelector('img')


let count = 0

const time = setInterval(() => {
  count++

  console.log(count)

  if(count >= 100) {
    clearInterval(time)
  }
  span.innerHTML = `${count}%`
  img.style.opacity = count / 100
  span.style.opacity = ((count / 100) - 1) * -1 
}, 35)


