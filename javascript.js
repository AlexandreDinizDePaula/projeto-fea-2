
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

function drop_handler(ev){
    ev.preventDefault();
    var data = ev.dataTransfer.getData("Text");
    ev.target.appendChild(document.getElementById(data));
    if (data == "taffarel" || data == "victor" || data == "joaoleite"){
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