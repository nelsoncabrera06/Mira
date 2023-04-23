//alert("hola mira!!!");

b = document.getElementById("boton");
p = document.getElementById("text");

var number = 0;

b.onclick = function() {

    /*
    if(number == 0){
        p.innerHTML="Hello world!!!!!";
        number = 1;
    } else if (number == 1) {
        p.innerHTML="Have a nice day";
        number = 0;
    }*/
    
    //alert("hola mira!!!");

    switch(number) {
        case 0:
            p.innerHTML="Hello world!!!!!";
            number = 1;
            break;
        case 1:
            p.innerHTML="Have a nice day";
            number = 55;
          break;
        default:
            p.innerHTML="Have a nice Sunday";
            number = 0;
      }

}