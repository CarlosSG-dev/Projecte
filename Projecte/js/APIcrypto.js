
"use strict";

/*Fem Obfuscation per a ocultar el codi de la apiKey 
JS del navegador i la declaració de la variable queda així:/ He utilitzat
javascriptofuscator.com i daftlogic per a ocultar la key 

var _0xfb96 = ["\x66\x66\x34\x31\x63\x37\x33\x66\x2D\x66\x36\x34\x31\x2D\x34\x64\x34\x32\x2D\x61\x39\x30\x31\x2D\x65\x64\x66\x61\x30\x61\x61\x62\x39\x33\x34\x66"];
eval(function (p, a, c, k, e, d) {
    e = function (c) {
        return c
    };
    if (!''.replace(/^/, String)) {
        while (c--) {
            d[c] = k[c] || c
        }
        k = [function (e) {
            return d[e]
        }];
        e = function () {
            return '\\w+'
        };
        c = 1
    };
    while (c--) {
        if (k[c]) {
            p = p.replace(new RegExp('\\b' + e(c) + '\\b', 'g'), k[c])
        }
    }
    return p
}('3 1=2[0]', 4, 4, '|apiKey|_0xfb96|let'.split('|'), 0, {}))

*/
let apiKey=`ff41c73f-f641-4d42-a901-edfa0aab934f`;

let url = "https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest",
    qString = "?CMC_PRO_API_KEY=" + apiKey + "&start=1&limit=2&convert=USD";

    /*FETCH*/

let dades = fetch(url + qString, {
    mode: `cors`
})
    .then(function (resp) {
        console.log(resp);
        return resp.json();
    })
    .then(function (datos) {
        console.log(datos);
    })

/*XMLHttpRequest*/

let peticio = `https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest?CMC_PRO_API_KEY=ff41c73f-f641-4d42-a901-edfa0aab934f&start=1&limit=2&convert=USD`;
const rankingCos = document.querySelector("#rankings-table > tbody");

function cargarRankings(){

    const request = new XMLHttpRequest();

    request.open("get", "peticio","true");
    request.onload = () => {
        
        try{
        const json = JSON.parse(request.responseText);
        populateRankings(json);
        }catch(error){
            console.warn("No se han podido cargar los rankings :(");
        }
    };
        request.send();
}

function populateRankings(json){
    console.log(json);

}

/*Loop, Iteració, Metode*/
function crearTabla(dades){
    
    let table =document.getElementById('cosTabla');
    
    for (let i = 0; i < dades.length; i++) {
        let preu = dades[i].quote.USD.price;
        let row = `<tr>
                        <td>${dades[i].name}</td>
                        <td>${dades[i].preu}</td>
                        <td>${dades[i].data[i].symbol}</td>
                   </tr>`

        table.innerHTML += row;
        
    }
}


 
