const quadrados=document.querySelectorAll('.quadrado')
const frase=document.getElementById('frase')
const nomeJogador1=document.getElementById('nomeJogador1')
const nomeJogador2=document.getElementById('nomeJogador2')
const jogador01=window.prompt('Nome do jogador 1')
const jogador02=window.prompt('Nome do jogador 2')
let jogador1=true
let fimDeJogo=false
nomeJogador1.innerHTML=jogador01
nomeJogador2.innerHTML=jogador02

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
        
        if((quadrados[0,1,2].hasChildNodes()&&quadrados[0].firstChild.classList.contains('X') && quadrados[1].firstChild.classList.contains('X') &&quadrados[2].firstChild.classList.contains('X'))||(quadrados[3,4,5].hasChildNodes()&&quadrados[3].firstChild.classList.contains('X') && quadrados[4].firstChild.classList.contains('X') &&quadrados[5].firstChild.classList.contains('X'))||(quadrados[6,7,8].hasChildNodes()&&quadrados[6].firstChild.classList.contains('X') && quadrados[7].firstChild.classList.contains('X') &&quadrados[8].firstChild.classList.contains('X'))){
            frase.innerHTML=`${jogador01} ganhou!!`
            fimDeJogo=true
        }else if((quadrados[0,1,2].hasChildNodes()&&quadrados[0].firstChild.classList.contains('O') && quadrados[1].firstChild.classList.contains('O') &&quadrados[2].firstChild.classList.contains('O'))||(quadrados[3,4,5].hasChildNodes()&&quadrados[3].firstChild.classList.contains('O') && quadrados[4].firstChild.classList.contains('O') &&quadrados[5].firstChild.classList.contains('O'))||(quadrados[6,7,8].hasChildNodes()&&quadrados[6].firstChild.classList.contains('O') && quadrados[7].firstChild.classList.contains('O') &&quadrados[8].firstChild.classList.contains('O'))){
            frase.innerHTML=`${jogador02} ganhou!!`
            fimDeJogo=true
        }
        if(fimDeJogo){

            for (let i of quadrados){
                if(i.hasChildNodes()){
                    i.firstChild.remove()
                    
                }
            }
            fimDeJogo=false
        }
    })
    
})
