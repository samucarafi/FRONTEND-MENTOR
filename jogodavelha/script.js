const quadrados=document.querySelectorAll('.quadrado')
const frase=document.getElementById('frase')

const jogador01=window.prompt('Nome do jogador 1')
const jogador02=window.prompt('Nome do jogador 2')
let jogador1=true
let fimDeJogo=false

quadrados.forEach((el,i)=>{
    el.addEventListener('click',()=>{
        if(el.childNodes.length==0){
        const img=document.createElement('img')
        if(jogador1){
        img.src='./img/letra-x.png'
        img.setAttribute('class','X')
        }else{
            img.src='./img/circulo.png'
            img.setAttribute('class','O')
        }
        el.appendChild(img)
        jogador1=!jogador1
        }
        if(quadrados[0].firstChild.hasAttribute('class','X') && quadrados[1].firstChild.hasAttribute('class','X') &&quadrados[2].firstChild.hasAttribute('class','X')){
            frase.innerHTML=`${jogador01} ganhou!!`
            fimDeJogo=true
        }else if(quadrados[0].firstChild.hasAttribute('class','O') && quadrados[1].firstChild.hasAttribute('class','O') &&quadrados[2].firstChild.hasAttribute('class','O')){
            frase.innerHTML=`${jogador02} ganhou!!`
            fimDeJogo=true
        }
        
    })
    
})
