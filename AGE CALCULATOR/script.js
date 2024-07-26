const i_dia =Number(document.querySelector("#dia").value)



const hoje= new Date()
const diaAtual= hoje.getDay()
const mesAtual= hoje.getMonth()+1
const anoAtual= hoje.getFullYear()

let resAno= document.querySelector("#resAno")

const button=document.querySelector("#button")

button.addEventListener("click",()=>{
    let i_ano=document.querySelector("#ano").value
    let i_mes=document.querySelector("#mês").value
    let i_dia=document.querySelector("#dia").value
    if(diaAtual<i_dia){

    }
    
    resAno.innerHTML=mesAtual
})