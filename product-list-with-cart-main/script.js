let add_cart=[...document.getElementsByClassName('add-cart')]
let add_to_cart=[...document.getElementsByClassName('add-to-cart')]
let buttons=[...document.getElementsByClassName('buttons')]
let span=[...document.getElementsByClassName('span')]
let somar=[...document.getElementsByClassName('somar')]
let diminuir=[...document.getElementsByClassName('diminuir')]

let Umavez=[]


add_cart.forEach((evt,i)=>{
      evt.addEventListener('click',()=>{
            
            span[i].innerHTML=1
            evt.style.backgroundColor='hsl(14, 72%, 52%)'
            evt.style.cursor='default'
            add_to_cart[i].style.display='none'
            buttons[i].style.display='flex'
            
      })
})

diminuir.forEach((evt,i)=>{
      evt.addEventListener('click',()=>{
            console.log(add_cart[i])
      })
})


