function helado_con_toppings(){
    let texto;
    let topping = document.getElementById("toppings").value;
    const helado = 1.90;
    const oreo = 1;
    const kitkat = 1.50;
    const brownie = 0.75;
    const lacasitos = 0.95;

    if(topping == "A"){
        texto = "Tu helado sencillo cuesta " + helado + "€";
    }
    else if(topping == "B")
    {
        texto = "Tu helado con oreos cuesta " + (helado + oreo) + "€";
    }
    else if(topping == "C")
    {
        texto = "Tu helado con kitkats cuesta " + (helado + kitkat) + "€";
    }
    else if(topping == "D")
    {
        texto = "Tu helado con brownie cuesta " + (helado + brownie) + "€";
    }
    else if(topping == "E")
    {
        texto = "Tu helado con lacasitos cuesta " + (helado + lacasitos) + "€";
    }
    else{
        texto = "no tenemos este topping, lo sentimos.";
    }
    document.getElementById("respuesta").innerHTML = texto;
}
