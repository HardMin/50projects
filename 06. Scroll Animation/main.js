const box = document.querySelectorAll('.box')
// const line = document.querySelector('.showLineWindow')

const update = () => {
  const scroll = window.innerHeight / 5 * 4.5
  
  // line.style.top = `${scroll}px`
  
  box.forEach((box, i) => {
    // Obtiene la distancia de la caja a la parte superior de la pagina
    const boxTop = box.getBoundingClientRect().top

    if (boxTop < scroll) {
      box.classList.add('active')
    }
    else {
      box.classList.remove('active')
    }

  });
}



window.addEventListener('scroll', update)
