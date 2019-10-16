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
    
};
