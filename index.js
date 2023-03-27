function ma(info) {
    console.log("entrou ma");
    let linhas = colunas =  info[1];
    let matriz = new Array(colunas);
    let valores = new Array(linhas);

    for (var i = 0; i < linhas; i++) {
        console.log("entrou for i");
        for (let j = 0; j < 2; j++) {
            console.log("entrou for j");
            let aux = new Array(2); 
            aux[0] = document.getElementById(`origem_${i}`).value;
            aux[1] = document.getElementById(`destino_${i}`).value;

            // aux [2] para o valorado tofix
            valores[i] = aux;
        }
        
        console.log("origem : "+ valores[i][0]+" destino : "+valores[i][1]);

    }
    //LINHA = ORIGEM || COLUNA = DESTINO
    //forma matriz
    for (var i = 0; i < colunas; i++) 
        matriz[i] = new Array(linhas);

    console.log(parseInt(valores[1].charCodeAt(0)))
    for (const aresta in valores) {
        console.log(String.aresta[1].charCodeAt(0))
        matriz[aresta[1].charCodeAt(0)-65][aresta[0].charCodeAt(0)-65] = 1;
    }

    console.log("pos |0|0| : " + matriz[0][0]);
    console.log("pos |0|1| : " + matriz[0][1]);
    console.log("pos |0|2| : " + matriz[0][2]);
    console.log("pos |1|0| : " + matriz[1][0]);
    console.log("pos |1|1| : " + matriz[1][1]);
    console.log("pos |1|2| : " + matriz[1][2]);
    console.log("pos |2|0| : " + matriz[2][0]);
    console.log("pos |2|1| : " + matriz[2][1]);
    console.log("pos |2|2| : " + matriz[2][2]);
    // para acessar o conteudo matriz[coluna][linha] 
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
    console.log("recebe");
    let info = new Array(4);
    //vertices
    info[1] = parseInt(document.getElementById('vertices').value);
    //arestas
    info[2] = parseInt(document.getElementById('arestas').value);
    //valorado
    info[3] = document.getElementById('valorado').value;
    //grafo
    info[4] = document.getElementById('tipo').value;


    if (document.getElementById('representacao').value == "adjacencia") {
        console.log("ma");
        ma(info)
    } else if (document.getElementById('representacao').value == "incidencia") {
        console.log("mi");
        mi(info)
    } else {
        console.log("li");
        li(info)
    }
}