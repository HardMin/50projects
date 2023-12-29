const labels = document.querySelectorAll('form label')

labels.forEach(label => {
  const text = label.innerHTML
    .split('').map((text, i) => `<span style='transition-delay: ${i * 50}ms;'>${text}</span>`)
    .join('')
    
  label.innerHTML = text
})

