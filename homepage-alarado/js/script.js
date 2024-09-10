let hamburguer=document.querySelector(".hamburguer")
const bar=[...document.getElementsByClassName("bar")]
let menu=document.querySelector('.menu')
let iconeTemas=document.querySelector('.iconeTemas')
let body=document.querySelector('.body')
let janela=document.querySelector('.janela')

class Tema{
    constructor(corBody, corIcone){
        this.corBody=corBody
        this.corIcone=corIcone
    }
    ativar=()=>{
        body.style.background = this.corBody
        iconeTemas.style.background=this.corIcone
    }
}

const temaEscuro=new Tema('#111729','write')
const temaClaro=new Tema('white','#111729')

hamburguer.addEventListener('click',()=>{
    hamburguer.classList.toggle('ativo')
    if(hamburguer.classList.contains('ativo')){
    menu.style.display='flex'
    menu.style.flexDirection='column'
    iconeTemas.style.display='flex'
    janela.style.height='100%'
    }else{
        menu.style.display='none'
        iconeTemas.style.display='none'
        janela.style.height=''
    }
})

iconeTemas.addEventListener('click',()=>{
    console.log()
    if(body.style.backgroundColor=="rgb(17, 23, 41)"){
        temaClaro.ativar()
    }else{temaEscuro.ativar()}
    
})