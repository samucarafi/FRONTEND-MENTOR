let add_cart=[...document.getElementsByClassName('add-cart')]


add_cart.forEach((evt)=>{
   evt.addEventListener('click',()=>{
      evt.style.backgroundColor='hsl(14, 72%, 52%)'
      evt.innerHTML=''
      evt.style.justifyContent='space-between'
      let diminuir=document.createElement('div')
      diminuir.setAttribute('type','button')
      diminuir.setAttribute('class','button')
      diminuir.setAttribute('id','diminuir')
      diminuir.innerHTML=' - '
      evt.appendChild(diminuir)
      let quant=document.createElement('span')
      quant.innerHTML=1
      evt.appendChild(quant)
      let soma=document.createElement('div')
      soma.setAttribute('type','button')
      soma.setAttribute('class','button')
      soma.setAttribute('id','soma')
      soma.innerHTML='+'
      evt.appendChild(soma)
   })
})


