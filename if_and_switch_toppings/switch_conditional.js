function helado_con_toppings(){
    let texto;
    let topping = document.getElementById("toppings").value;
    const helado = 1.90;
    const oreo = 1;
    const kitkat = 1.50;
    const brownie = 0.75;
    const lacasitos = 0.95;

    switch(topping){
        case "A":
            texto = "Tu helado sencillo cuesta " + helado + "€";
        break;
        case "B":
            texto = "Tu helado con oreos cuesta " + (helado + oreo) + "€";
        break;
        case "C":
            texto = "Tu helado con kitkats cuesta " + (helado + kitkat) + "€";
        break;
        case "D":
            texto = "Tu helado con brownie cuesta " + (helado + brownie) + "€";
        break;
        case "E":
            texto = "Tu helado con lacasitos cuesta " + (helado + lacasitos) + "€";
        break;
        default:
            texto = "Lo siento, la opción indicada no es válida 😡";
    }
    document.getElementById("respuesta").innerHTML = texto;
}

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
