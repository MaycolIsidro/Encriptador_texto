var btnenc = document.getElementById('btnencriptar');
var btndes = document.getElementById('btndesencriptar');
var btnCopiar = document.getElementById('btnCopiar');
var textinput = document.getElementById('textinput');
var txtoutput = document.getElementById('textoutput');


btnenc.addEventListener('click', ()=> {
    if (textinput.value != "") {
        Encriptar(textinput.value);
        textinput.value = "";
    }
    else{
        alert("El campo esta vacio");
    }
});
btndes.addEventListener('click', ()=>{
    if (txtoutput.value != "") {
        Desencriptar(txtoutput.value);
        txtoutput.value = "";
    }
    else{
        alert("El campo esta vacio");
    }
});
btnCopiar.addEventListener('click', ()=>{
    copiarAlPortapapeles(txtoutput.value);
});

function Encriptar(text) {
    let encriptacion = {
        a: "bcd",
        e: "fgh",
        i: "jkl",
        o: "pqr",
        u: "stv"
    };
    let regex = /[aeiou]/gi;
    let nuevaPalabra = text.replace(regex,function(match){
        let vocalEncriptada = encriptacion[match.toLowerCase()];
        return vocalEncriptada;
    });
    txtoutput.value = nuevaPalabra;
}

function Desencriptar(text){
    let encriptacion = {
        bcd: "a",
        fgh: "e",
        jkl: "i",
        pqr: "o",
        stv: "u"
    };
    let regex = /bcd|fgh|jkl|pqr|stv/gi;
    let nuevaPalabra = text.replace(regex,function(match){
        let vocalEncriptada = encriptacion[match.toLowerCase()];
        return vocalEncriptada;
    });
    textinput.value = nuevaPalabra;
}

function copiarAlPortapapeles(valor) {
    // Crea un elemento temporal de textarea
    const elementoTemporal = document.createElement("textarea");
    elementoTemporal.value = valor;
  
    // Añade el elemento al documento
    document.body.appendChild(elementoTemporal);
  
    // Selecciona y copia el contenido del elemento temporal
    elementoTemporal.select();
    document.execCommand("copy");
  
    // Remueve el elemento temporal del documento
    document.body.removeChild(elementoTemporal);
}