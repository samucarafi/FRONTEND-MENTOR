const hoje= new Date()
const diaAtual= hoje.getDate()
const mesAtual= hoje.getMonth()+1
const anoAtual= hoje.getFullYear()

let resAno= document.querySelector("#resAno")
let resMes=document.querySelector('#resMes')
let resDia=document.querySelector('#resDia')

const button=document.querySelector("#button")

button.addEventListener("click",()=>{
    let i_ano=document.querySelector("#ano").value
    let i_mes=document.querySelector("#mês").value
    let i_dia=document.querySelector("#dia").value
    if(i_dia<diaAtual){
        if(mesAtual==11||mesAtual==12||mesAtual==2||mesAtual==4||mesAtual==6||mesAtual==9){//revisar
        resDia.innerHTML=diaAtual+31-i_dia
        }
        //colocar situação de fevereiro 
    }else{ resDia.innerHTML=diaAtual-i_dia }
})