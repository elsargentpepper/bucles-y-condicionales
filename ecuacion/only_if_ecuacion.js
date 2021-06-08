function ecuacion(){
    let texto;
    let a = document.getElementById("a").value;
    let b = document.getElementById("b").value;
    let c = document.getElementById("c").value;
    let d = (Math.pow(b,2))-4*a*c;
    let e = 2*a;

    if(d == 0){
        texto = "El resulatdo es x1= x2 =" + (-b/e);
    }
    else{
        if(d > 0){
            texto = "El resultado es x1 = " + ((-b + Math.sqrt(d))/e) + " x2 = " + ((-b - Math.sqrt(d))/e);
        }
        else{
            texto = "El resultado es x1 = " + (((-b/e)+(Math.sqrt(d))/e)*i) + " x2 = " + (((-b/e)-(Math.sqrt(d))/e)*i);
        }
    }
    document.getElementById("respuesta").innerHTML = texto;
}
