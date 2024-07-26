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
    
    resAno.innerHTML=diaAtual
})