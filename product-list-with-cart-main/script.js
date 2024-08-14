let add_cart=[...document.getElementsByClassName('add-cart')]
let add_to_cart=[...document.getElementsByClassName('add-to-cart')]
let buttons=[...document.getElementsByClassName('buttons')]
let input=[...document.getElementsByClassName('input')]
let somar=[...document.getElementsByClassName('somar')]
let diminuir=[...document.getElementsByClassName('diminuir')]
let carrinho_vazio=document.getElementById('carrinho_vazio')
let carrinho_cheio=document.getElementById('carrinho_cheio')
let img=[...document.getElementsByClassName('img')]
let item=[...document.getElementsByClassName('item')]
let preco=[...document.getElementsByClassName('preco')]

let resetAddCart=(i)=>{
      add_cart[i].style.backgroundColor='#fff'
      add_to_cart[i].style.display='flex'
      add_cart[i].style.cursor='pointer'
      buttons[i].style.display='none'
      input[i].value=0
}

let resetCarrinho=()=>{
      carrinho_cheio.innerHTML=''
      carrinho_cheio.style.display='none'
      carrinho_vazio.style.display='flex'
}

let clickRemover=()=>{
      let remover=[...document.getElementsByClassName('remove')]
      let carrinho_atual=[...document.getElementsByClassName('carrinho_atual')]
      remover.forEach((evt,i)=>{
            evt.addEventListener('click',()=>{ 
                  let ind=i
                  add_to_cart.forEach((evt,i)=>{
                        if(evt.id==carrinho_atual[ind].id){
                              resetAddCart(i)
                        }    
                  })
                  carrinho_atual[i].remove()

                  if(carrinho_cheio.children.length==0){
                        resetCarrinho()
                  }
            })
      })
}

let criarDiv=(i)=>{
      let div=document.createElement('div')
      div.setAttribute('id',item[i].innerHTML)
      div.setAttribute('class','carrinho_atual')
      let nome=document.createElement('div')
      nome.setAttribute('class','nome')
      nome.innerHTML=item[i].innerHTML
      let remove=document.createElement('button')
      remove.setAttribute('class','remove')
      remove.innerHTML='x'
      nome.appendChild(remove)
      let valores=document.createElement('div')
      valores.setAttribute('class','valores')
      let quant=document.createElement('div')
      quant.setAttribute('class','quant')
      quant.innerHTML=input[i].value+'x'
      let valor_item=document.createElement('div')
      valor_item.setAttribute('class','valor_item')
      valor_item.innerHTML='$'+preco[i].value
      let total=document.createElement('div')
      total.setAttribute('class','total')
      total.innerHTML='Total: $'+(input[i].value*preco[i].value).toFixed(2)
      valores.appendChild(quant)
      valores.appendChild(valor_item)
      valores.appendChild(total)
      div.appendChild(nome)
      div.appendChild(valores)
      carrinho_cheio.appendChild(div)
      clickRemover()
}

let itemIgual=(i)=>{
      let carrinho_atual=[...document.getElementsByClassName('carrinho_atual')]
      let item_atual=item[i].innerHTML
      carrinho_atual.forEach((evt,i)=>{
            if(item_atual==evt.id){
                  evt.remove()
            }
      })
}

add_to_cart.forEach((evt,i)=>{
      evt.addEventListener('click',()=>{
            console.log('clicou')
            add_cart[i].style.backgroundColor='hsl(14, 72%, 52%)'
            add_cart[i].style.cursor='default'
            add_to_cart[i].style.display='none'
            buttons[i].style.display='flex'
            input[i].value=1
            criarDiv(i)
            carrinho_vazio.style.display='none'
            carrinho_cheio.style.display='flex'  
      })
})

diminuir.forEach((evt,i)=>{
      evt.addEventListener('click',()=>{
            if(input[i].value==1){
                  resetAddCart(i)
                  if(carrinho_cheio.children.length==1){
                        resetCarrinho()
                  }else{
                        itemIgual(i)
                  }
            }else{
                  input[i].value--
                  itemIgual(i)
                  criarDiv(i)
            }
      })
})

somar.forEach((evt,i)=>{
      evt.addEventListener('click',()=>{
            input[i].value++
            itemIgual(i)
            criarDiv(i)
      })
})
