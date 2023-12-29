const next = document.querySelector('.next')
const prev = document.querySelector('.prev')

const num = document.querySelectorAll('.num')

const body = document.querySelector('body')

let currentNum = 0

next.addEventListener('click', () => {
  if (currentNum === 3) return;
  
  currentNum++
  update()
})

prev.addEventListener('click', () => {
  if (currentNum === 0) return;
  
  currentNum--
  update()
})

const update = () => {
  body.setAttribute('style', `--line-width-progress: ${currentNum}00px;`)

  const newNum = [...num]

  newNum.slice(1,4).forEach((num, i) => {
    if (currentNum > i) {
      num.classList.add('active')
    }
    else {
      num.classList.remove('active')
    }
  });
}