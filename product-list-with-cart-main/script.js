let add_cart=[...document.getElementsByClassName('add-cart')]
let add_to_cart=[...document.getElementsByClassName('add-to-cart')]
let buttons=[...document.getElementsByClassName('buttons')]
let input=[...document.getElementsByClassName('input')]
let somar=[...document.getElementsByClassName('somar')]
let diminuir=[...document.getElementsByClassName('diminuir')]


add_to_cart.forEach((evt,i)=>{
      evt.addEventListener('click',()=>{
            console.log('clicou')
            add_cart[i].style.backgroundColor='hsl(14, 72%, 52%)'
            add_cart[i].style.cursor='default'
            add_to_cart[i].style.display='none'
            buttons[i].style.display='flex'
            input[i].value=1
      })
})

diminuir.forEach((evt,i)=>{
      evt.addEventListener('click',()=>{
            console.log(input[i].value)
            if(input[i].value==1){
                  console.log('clicou')
                  add_cart[i].style.backgroundColor='#fff'
                  add_to_cart[i].style.display='flex'
                  add_cart[i].style.cursor='pointer'
                  buttons[i].style.display='none'
                  input[i].value=0
            }else{
                  input[i].value--
            }
      })
})

somar.forEach((evt,i)=>{
      evt.addEventListener('click',()=>{
            input[i].value++
      })
})


