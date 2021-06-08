function par_impar(){
    let texto;
    let numero = document.getElementById("numero").value;

    if(numero % 2 == 0){
        texto = "El número es par";
    }
    else{
        texto = "El número es impar";
    }
    document.getElementById("respuesta").innerHTML = texto;
}
