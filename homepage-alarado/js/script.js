let hamburguer=document.querySelector(".hamburguer")
const bar=[...document.getElementsByClassName("bar")]
let menu=document.querySelector('.menu')

hamburguer.addEventListener('click',()=>{
    hamburguer.classList.toggle('ativo')
})
