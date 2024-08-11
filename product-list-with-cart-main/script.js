let add_cart=[...document.getElementsByClassName('add-cart')]


add_cart.forEach((evt)=>{
   evt.addEventListener('click',()=>{
      evt.style.backgroundColor='hsl(14, 72%, 52%)'
      evt.innerHTML=''
      evt.style.justifyContent='space-between'
      evt.style.cursor='default'
      let diminuir=document.createElement('div')
      diminuir.setAttribute('type','button')
      diminuir.setAttribute('class','button diminuir')
      diminuir.innerHTML=' - '
      evt.appendChild(diminuir)
      let quant=document.createElement('span')
      quant.setAttribute('class','span')
      quant.innerHTML=1
      evt.appendChild(quant)
      let soma=document.createElement('div')
      soma.setAttribute('type','button')
      soma.setAttribute('class','button soma')
      soma.innerHTML='+'
      evt.appendChild(soma)
   })
})
