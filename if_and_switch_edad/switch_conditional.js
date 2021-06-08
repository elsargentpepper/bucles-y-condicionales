function mayoria_de_edad(){
    let texto;
    let edad = document.getElementById("edad_usuario").value;

    switch(edad){
        case "Si":
            texto = "Entonces puedes ir a la disco! 💃🕺";
        break;
        case "No":
            texto = "Lo siento, lo puedes ir a la disco 😔";
        break;
        default:
            texto = "Lo siento, la opción indicada no es válida 😡";
    }
    document.getElementById("respuesta").innerHTML = texto;
}
