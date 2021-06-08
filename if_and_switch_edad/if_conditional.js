function mayoria_de_edad(){
    let texto;
    let edad = document.getElementById("edad_usuario").value;

    if(edad == "Si"){
        texto = "Entonces puedes ir a la disco! 💃🕺";
    }
    else if(edad == "No")
    {
        texto = "Lo siento, lo puedes ir a la disco 😔";
    }
    else{
        texto = "Lo siento, la opción indicada no es válida 😡";
    }
    document.getElementById("respuesta").innerHTML = texto;
}
