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
    i_dia=Number(i_dia)
    i_mes=Number(i_mes)
    i_ano=Number(i_ano)
    if(i_dia>diaAtual){
        i_mes++
        if(mesAtual==2||mesAtual==4||mesAtual==6||mesAtual==8||mesAtual==9||mesAtual==11||mesAtual==1){//revisar
            resDia.innerHTML=i_dia+29-diaAtual
        }
        else{
            resDia.innerHTML=i_dia+28-diaAtual
        }
        //colocar situação de fevereiro  e bissexto
    }else{ resDia.innerHTML= diaAtual-i_dia }

    if(i_mes>mesAtual){
        i_ano++
        resMes.innerHTML=mesAtual+11-i_mes
    }else{resMes.innerHTML=mesAtual-i_mes}

    if(i_ano<=anoAtual){
        resAno.innerHTML=anoAtual-i_ano
    }
})