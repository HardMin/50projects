const boxAudio = document.querySelectorAll('.audio') 

const sourceAudio = [
  {
    src: './fast-run-113726.mp3',
    name: 'Fast Run',
    s: 5,
    active: false
  },
  {
    src: './game-bonus-144751.mp3',
    name: 'Game Bonus',
    s: 3,
    active: false
  },
  {
    src: './punch-1-166694.mp3',
    name: 'Punch 1',
    s: .5,
    active: false
  },
  {
    src: './punch-6-166699.mp3',
    name: 'Punch 6',
    s: .5,
    active: false
  },
  {
    src: './success_bell-6776.mp3',
    name: 'Succes Bell',
    s: 3.8,
    active: false
  },
  {
    src: './surprise-sound-effect-99300.mp3',
    name: 'Surprise',
    s: 1,
    active: false
  }
]

boxAudio.forEach((audio, i) => {
  audio.innerHTML = `${sourceAudio[i].name}<span class="active-audio"></span>`

  audio.lastChild.style.animationDuration = `${sourceAudio[i].s}s`

  audio.addEventListener('click', () => {
    if (sourceAudio[i].active) return
    
    sourceAudio[i].active = true

    const srcAudio = new Audio(sourceAudio[i].src)
    
    audio.lastChild.classList.add('audio-active')
    srcAudio.play()

    srcAudio.addEventListener('ended', () => {
      audio.lastChild.classList.remove('audio-active')
      sourceAudio[i].active = false
    })
  })
})