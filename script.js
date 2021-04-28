function generate() {
    let num = document.querySelector("input[name='number']")
    let res = document.querySelector("select[name='result']")


    if(num.value.length == 0){
        alert("Por favor, digite um número.")
    } else{
        let n = Number(num.value) //!!NÃO ESQUECER DO .VALUE para pegar o valor do input!!
        res.innerHTML = '' //para limpar a área de resposta sempre antes de digitar um novo número
        for(let i = 1; i <= 10; i++){
            let r = n * i

            let item = document.createElement('option') //criou um elemento do tipo option
            item.value = `v${i}`
            
            item.text = `${n} x ${i} = ${r}` 
            res.appendChild(item)
        }
    }


}