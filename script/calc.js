
var a=0;
var b=0;
var total=0;
var op="" ;


function operador(o) {
    op = o;
    b = parseInt(b);
    b = a;
    a = 0;
    document.getElementById("visor").value += o;
}

function resultado() {

    switch (op) {
        case '+':

            var total = parseInt(b) + parseInt(a);

            break;
            case '-':

            var total = parseInt(b) - parseInt(a);

            break;
            case '÷':

            var total = parseInt(b) / parseInt(a);

            break;
            case 'x':

            var total = parseInt(b) * parseInt(a);

            break;
    }



    document.getElementById("visor").value = total;
     a= total;

}

function agregarNumero(n) {

    a = a + n;

    document.getElementById("visor").value += n;

}

function Limpiar()
{
    document.getElementById("visor").value = "";
    a=0;
    b=0;
    total=0;
    op="" ;
}