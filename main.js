function enviar(){
    let nome = document.getElementById("nome").value;
    nome = nome.split(",");
    let time = []
    for(let i=0;i<10;i++){
        numeroSorteado = Math.floor(Math.random()*nome.length);
        let sorteado = nome[numeroSorteado];
        nome = nome.filter(x => x!== sorteado)
        time.push(sorteado)
   }
   let time1 = time.slice(0,5)
   let time2 = time.slice(5,10)
    
    document.getElementById("valor").value = `TIME 1: ${time1}\nTIME 2: ${time2}`;
}

