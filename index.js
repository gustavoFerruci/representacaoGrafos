function ma(info) {
    let tamanhoMatriz =  info.vertices; // O TAMANHO DA MA
    let tamanhoArestas = info.arestas; // é possivel possuir mais arestas que vertices
    let arestas = [];

    //---MATRIZ---
    let matriz = [];
    
    // forma array de origem e destino
    for (let i = 0; i < tamanhoArestas; i++) {

        let aux = {
            origem : document.getElementById(`origem_${i}`).value, 
            destino : document.getElementById(`destino_${i}`).value, 
            valor : document.getElementById(`valor_${i}`).value
        }

        arestas[i] = aux;
        console.log(arestas[i].valor);
        // let o = arestas[i].origem.charCodeAt(0);
        // let d = arestas[i].destino.charCodeAt(0);
        // console.log("origem : "+ (o-65) +"\n"); // ok isso deu certo
        // console.log("destino : "+ (d-65) +"\n");
    }
    
    //LINHA = ORIGEM || COLUNA = DESTINO
    //forma matriz
    for (let i = 0; i < tamanhoMatriz; i++) { 
        matriz[i] = [];
        for (let j = 0; j < tamanhoMatriz; j++) {
            matriz[i][j] = 0;
        }
    }

    //aloca valores
    for (let i = 0; i < tamanhoArestas; i++) {
        let o = arestas[i].origem.charCodeAt(0);
        let d = arestas[i].destino.charCodeAt(0);
        
            matriz[o-65][d-65] = arestas[i].valor
    }


    for (let i = 0; i < tamanhoMatriz; i++) {
        for (let j = 0; j < tamanhoMatriz; j++) {
            console.log("["+ matriz[i][j]+"] ");
        }
    }
}

function mi(info) {
    // se for MI
}

function li(info) {
    // 
}

function converte() {

}

function recebe() {
    let representacao = document.getElementById('representacao').value;
    let info = {
        vertices : parseInt(document.getElementById('vertices').value),
        arestas : parseInt(document.getElementById('arestas').value),
        valorado : document.getElementById('valorado').value,
        tipo : document.getElementById('tipo').value
    }

    if (representacao == "adjacencia") {
        console.log("ma");
        ma(info)
    } else if (representacao == "incidencia") {
        console.log("mi");
        mi(info)
    } else {
        console.log("li");
        li(info)
    }
}