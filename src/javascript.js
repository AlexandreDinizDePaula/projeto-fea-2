import './_imagens/joaoleite.png'
import './_imagens/taffarel.png'
import './_imagens/victor.png'
import './_imagens/joaoleite.png'
import './_imagens/leonardosilva.png'
import './_imagens/nelinho.png'
import './_imagens/luizinho.png'
import './_imagens/marcosrocha.png'
import './_imagens/procopio.png'
import './_imagens/afonso.png'
import './_imagens/gilberto.png'
import './_imagens/marcelooliveira.png'
import './_imagens/zedomonte.png'
import './_imagens/pauloisidoro.png'
import './_imagens/toninho.png'
import './_imagens/eder.png'
import './_imagens/mario.png'
import './_imagens/guilherme.png'
import './_imagens/reinaldo.png'
import './_imagens/dada.png'
import './_imagens/marques.png'
import './_imagens/ronaldinho.png'
import './_imagens/campo.png'
import './_imagens/logo.png'
import './css/index.css'


var array = [];
var goleiro = [];
var zagueiro = [];
var meia = [];
var atacante = [];
function dragstart_handler(ev){
    ev.dataTransfer.setData('text/plain', ev.target.id);
    
};

function dragover_handler(ev){
    ev.preventDefault();
};
// fiz a importação de um módulo simples, só com strings, porém, por algum motivo que
// não consegui descobrir o porque não funciona mais a função mostrar()
var nomes = require('../lib/nomes.js');


function drop_handler(ev){
    ev.preventDefault();
    var data = ev.dataTransfer.getData("Text");
    ev.target.appendChild(document.getElementById(data));
    if (data == nomes.taf || data == nomes.vic || data == nomes.joao){
        goleiro.push(data);
    };
    if (data == "leonardosilva" || data == "marcosrocha" || data == "luizinho" || data == "procopio" || 
        "marcelooliveira" || data == "afonso" || data == "nelinho"){
        zagueiro.push(data);
    };
    if (data == "pauloisidoro" || data == "eder" || data == "gilberto" || data == "toninho" || data == "zedomonte"){
        meia.push(data);
    };
    if  (data == "reinaldo" || data == "dada" || data == "marques" || data == "ronaldinho" || data == "mario" || 
        data == "guilherme" || data == "marques"){
        atacante.push(data);
    };  
};
//Espalhamento, Arrow Function e Set (obs: Usei o Set para elimiar duplicatas, pois não entendi o porquê
// está duplicando os nomes, mesmo quando eu só adiciono um jogador )
function mostrar(){
    novoArray =[...new Set(array)];
    array = [...goleiro,...zagueiro,...meia,...atacante];
    document.getElementById("resultado").innerHTML = novoArray.map(a => a.toUpperCase());
};
