$(document).ready(function() {


    // Funcion para cambiar color
    $("#titulo").mouseenter(function() {
        $("#titulo").css("background-color", "rgb(166, 96, 206)");
        $("#titulo").css("color", "rgb(199, 199, 199)");
    });

    // Funcion para restablecer color
    $("#titulo").mouseleave(function() {
        $("#titulo").css("background-color", "rgb(83, 153, 176)");
        $("#titulo").css("color", "black");
    });


    //Función para hallar de PAR e IMPAR

    $("#obtener").click(function() {

        var Tpar = 0;
        var Timpar = 0;
        var Tcero = 0;
        var digito = 0;

        var numeros = $(Numero4D).val();


        if (numeros < 1000 || numeros > 9999) {
            alert("El numero no es de 4 digitos, Intente nuevamente");
        } else {

            //Primer Digito
            digito = parseInt(numeros / 1000);

            // alert("D1: " +digito);
            if (digito % 2 === 0 && digito != 0) {
                Tpar++;
            } else {
                if (digito % 2 === 1) {
                    Timpar++;
                } else {
                    if (digito == 0) {
                        Tcero++;
                    }
                }
            }

            // Segundo Digito
            digito = parseInt((numeros % 1000) / 100);

            // alert("D2: " +digito);
            if (digito % 2 === 0 && digito != 0) {
                Tpar++;
            } else {
                if (digito % 2 === 1) {
                    Timpar++;
                } else {
                    if (digito == 0) {
                        Tcero++;
                    }
                }
            }


            //Tercer Digito
            digito = parseInt(((numeros % 1000) % 100) / 10);

            // alert("D3: " +digito);
            if (digito % 2 === 0 && digito != 0) {
                Tpar++;
            } else {
                if (digito % 2 === 1) {
                    Timpar++;
                } else {
                    if (digito == 0) {
                        Tcero++;
                    }
                }
            }

            //Cuarto Digito
            digito = parseInt(numeros % 10);

            // alert("D4: " + digito);
            if (digito % 2 === 0 && digito != 0) {
                Tpar++;
            } else {
                if (digito % 2 === 1) {
                    Timpar++;
                } else {
                    if (digito == 0) {
                        Tcero++;
                    }
                }
            }

            //Envio de datos
            // alert("Total pares: " + Tpar);
            // alert("Total impares: " + Timpar);
            // alert("Total ceros: " + Tcero);


            $("#pares").val(Tpar);
            $("#impares").val(Timpar);
            $("#ceros").val(Tcero);
        } //Termina la operacion de par e impar

    });
});