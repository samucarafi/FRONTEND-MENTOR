let hamburguer=document.querySelector(".hamburguer")
const bar=[...document.getElementsByClassName("bar")]

hamburguer.addEventListener('click',()=>{
    hamburguer.classList.toggle('ativo')
})
