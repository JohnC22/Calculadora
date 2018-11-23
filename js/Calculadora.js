function Calculadora() {

  /*
  Sección para asignar una función particular a cada evento "onmousedown"
  de cada boton (cuando se presiona el botón).
  */

  document.getElementById('0').onmousedown = Funcion_0;
  document.getElementById('1').onmousedown = Funcion_1;
  document.getElementById('2').onmousedown = Funcion_2;
  document.getElementById('3').onmousedown = Funcion_3;
  document.getElementById('4').onmousedown = Funcion_4;
  document.getElementById('5').onmousedown = Funcion_5;
  document.getElementById('6').onmousedown = Funcion_6;
  document.getElementById('7').onmousedown = Funcion_7;
  document.getElementById('8').onmousedown = Funcion_8;
  document.getElementById('9').onmousedown = Funcion_9;
  document.getElementById('punto').onmousedown = Funcion_PUNTO;
  document.getElementById('on').onmousedown = Funcion_ON;
  document.getElementById('sign').onmousedown = Funcion_SIGN;
  document.getElementById('raiz').onmousedown = Funcion_RAIZ;
  document.getElementById('div').onmousedown = Funcion_DIV;
  document.getElementById('por').onmousedown = Funcion_POR;
  document.getElementById('menos').onmousedown = Funcion_MENOS;
  document.getElementById('mas').onmousedown = Funcion_MAS;
  document.getElementById('igual').onmousedown = Funcion_IGUAL;

  /*
  Sección para asignar la función "Animacion_Botones" a cada evento "onclick"
  de cada boton (cuando se suelta el botón).
  */

  document.getElementById('0').onclick = Animacion_Botones;
  document.getElementById('1').onclick = Animacion_Botones;
  document.getElementById('2').onclick = Animacion_Botones;
  document.getElementById('3').onclick = Animacion_Botones;
  document.getElementById('4').onclick = Animacion_Botones;
  document.getElementById('5').onclick = Animacion_Botones;
  document.getElementById('6').onclick = Animacion_Botones;
  document.getElementById('7').onclick = Animacion_Botones;
  document.getElementById('8').onclick = Animacion_Botones;
  document.getElementById('9').onclick = Animacion_Botones;
  document.getElementById('punto').onclick = Animacion_Botones;
  document.getElementById('on').onclick = Animacion_Botones;
  document.getElementById('sign').onclick = Animacion_Botones;
  document.getElementById('raiz').onclick = Animacion_Botones;
  document.getElementById('div').onclick = Animacion_Botones;
  document.getElementById('por').onclick = Animacion_Botones;
  document.getElementById('menos').onclick = Animacion_Botones;
  document.getElementById('mas').onclick = Animacion_Botones;
  document.getElementById('igual').onclick = Animacion_Botones;

  /*
  Declaración e inicialisación de las variables globales.
  */

  var iniciar = true;
  var pantalla = 0;
  var digitos = 0;
  var punto = false;
  var signo = false;
  var num1 = 0;
  var num2 = 0;
  var resultado = 0;
  var operacion = "";
  var estado = 'inactivo';
  var conv = 0;
  var display = document.getElementById('display');

  /*
  Sección para declarar la función "Escribir", donde se tiene una condicional
  para revisar que el valor de la variable "digitos" sea menor o igual a 7,
  una vez revisado esto empieza una serie de condicionales para revisar el
  estado o valor de la variable "iniciar" y dependiendo de esto revisa si el
  número es igual o diferente de "0" o si es "." y cada caracter que se va
  escribiendo en la pantalla va siendo contado por la variable "digitos", para
  tener un control de la cantidad de caracteres que se han escrito y no se
  exceda de los 8 digitos.
  */

  function Escribir(numero){
    if (digitos <= 7) {
      if (iniciar == true) {
        if (numero == 0) {
          display.innerHTML = pantalla;
          digitos = 0;
        }
        else if (numero != 0) {
          pantalla = pantalla + numero;
          display.innerHTML = pantalla;
          digitos = digitos + 1;
          iniciar = false;
        }
      }
      else if (iniciar == false) {
        if (numero != '.') {
          pantalla = pantalla.toString() + numero.toString();
          display.innerHTML = pantalla;
          digitos = digitos + 1;
        }
        else {
          pantalla = pantalla.toString() + numero.toString();
          display.innerHTML = pantalla;
        }
      }
    }
  }

  /*
  Sección para declarar la función "Inicializar", donde lo unico que se hace es
  reasignar el valor de todas las variables a su valor inicial, "0", "true",
  "false" o "inactivo" dependiendo de la variable y se escribe un "0" en la
  pantalla.
  */

  function Inicializar(){
    iniciar = true;
    pantalla = 0;
    digitos = 0;
    punto = false;
    signo = false;
    num1 = 0;
    num2 = 0;
    operacion = "";
    estado = 'inactivo';
    display.innerHTML = pantalla;
  }

  /*
  Sección para declarar la función "Signo", donde lo unico que se hace es
  invertir el signo del número que se tiene en pantalla y se vuelve a imprimir.
  */

  function Signo(){
    if (pantalla != 0) {
      pantalla = -pantalla;
      display.innerHTML = pantalla;
    }
  }

  /*
  Sección para declarar la función "Guardar_Num1", donde se guarda el valor que
  esta en pantalla en la variable "num1", se limpia el valor de la variable
  "num2", el valor de la variable "estado" pasa a "inactivo", se limpia la
  pantalla y se reinician los valores de las variables "iniciar", "digitos" y
  "punto" para finalmente imprimir un espacio vacio en la pantalla.
  */

  function Guardar_Num1(){
    num1 = pantalla;
    num2 = 0;
    estado = 'inactivo';
    pantalla = " ";
    iniciar = true;
    digitos = 0;
    punto = false;
    display.innerHTML = "";
  }

  /*
  Sección para declarar la función "Guardar_Num2", donde se tiene una condición
  que checa el estado de la variable "estado" y dependiendo de esto se le asigna
  el valor numerico de la pantalla a la variable "num2" o "num1", para
  finalmente cambiar el valor de la variable "estado" a "activo".
  */

  function Guardar_Num2(){
    if (estado == 'inactivo'){
      num2 = Number(pantalla);
    }
    else if (estado == 'activo'){
      num1 = Number(pantalla);
    }
    estado = 'activo';
  }

  /*
  Sección para declarar la función "Operaciones", donde se tiene una serie de
  condicionales que dependiendo del valor que tenga la variable "operaciones",
  ejecuta alguna de las 4 rutinas con las operaciones basicas, donde en cada
  una se cambia el estado de la variable "estado" a "activo", una vez que se
  tiene almacenado el resultado de la operación en la variable "pantalla", se
  tiene una rutina con la que se determina la cantiadd de caracteres que tiene
  el resultado y si este tiene mas de 9 caracteres se reescribe en notación
  cientifica, esto para que el resultado no exceda las dimenciones de la
  pantalla.
  */

  function Operaciones(){

    if (operacion == '+') {
      pantalla = num1 + num2;
      estado = 'activo';
    }
    if (operacion == '-') {
      pantalla = num1 - num2;
      estado = 'activo';
    }
    if (operacion == '*') {
      pantalla = num1 * num2;
      estado = 'activo';
    }
    if (operacion == '/') {
      pantalla = num1 / num2;
      estado = 'activo';
    }

    var imprimir = parseFloat(pantalla);

    var conv = 0;
    conv = String(imprimir);
    var n = conv.length;
    console.log("pantalla:");
    console.log(pantalla);
    console.log("contador:");
    console.log(n);

    if (n >= 9) {
      display.innerHTML = imprimir.toPrecision(3);
    }
    else {
      display.innerHTML = imprimir;
    }

  }

  /*
  Sección para declarar las funciones asignadas a cada uno de los botones
  numéricos, de manera que cada una corre dos funciones cada vez que se
  presiona cualquier botón,en donde a "Presionar_Boton" se le manda una
  variable tipo string y a "Escribir" una variable tipo numérica, cuyo valor
  depende de la función a ejecutar.
  */

  function Funcion_0(){
    Presionar_Boton('0')
    Escribir(0)
  }
  function Funcion_1(){
    Presionar_Boton('1')
    Escribir(1)
  }
  function Funcion_2(){
    Presionar_Boton('2')
    Escribir(2)
  }
  function Funcion_3(){
    Presionar_Boton('3')
    Escribir(3)
  }
  function Funcion_4(){
    Presionar_Boton('4')
    Escribir(4)
  }
  function Funcion_5(){
    Presionar_Boton('5')
    Escribir(5)
  }
  function Funcion_6(){
    Presionar_Boton('6')
    Escribir(6)
  }
  function Funcion_7(){
    Presionar_Boton('7')
    Escribir(7)
  }
  function Funcion_8(){
    Presionar_Boton('8')
    Escribir(8)
  }
  function Funcion_9(){
    Presionar_Boton('9')
    Escribir(9)
  }

  /*
  Sección para declarar la función asignada al botón "punto", donde se corre la
  función "Presionar_Botón", a la cual se le manda una variable tipo string y
  se comprueva la condición del estado de la variable "punto", de manera que
  si ésta tiene el valor de "false" se corre la función de "Escribir" mandando
  una variable tipo string "." y se cambia el estado de la variable "punto" a
  "true", esto para que no se pueda escribir más de un punto sin reescribir el
  valor de la variable "punto" a "false".
  */

  function Funcion_PUNTO(){
    Presionar_Boton('punto')
    if (punto == false) {
      Escribir('.')
      punto = true;
    }
  }

  /*
  Sección para declarar la función asignada al botón "sign", donde se corre la
  función "Presionar_Botón", a la cual se le manda una variable tipo string y
  se corre la función "Signo".
  */

  function Funcion_SIGN(){
    Presionar_Boton('sign')
    Signo()
  }

  /*
  Sección para declarar la función asignada al botón "on", donde se corre la
  función "Presionar_Botón", a la cual se le manda una variable tipo string y
  se corre la función "Inicializar".
  */

  function Funcion_ON(){
    Presionar_Boton('on')
    Inicializar()
  }

  /*
  Sección para declarar las funciones asignadas a cada uno de los botones
  de las operaciones aritméticas, de manera que cada una corre dos funciones
  cada vez que se presiona cualquier botón,en donde a "Presionar_Boton" se le
  manda una variable tipo string, se ejecuta la función "Guardar_Num1" y se le
  asigna un dato tipo strign diferente por cada operación a la variable
  "operacion".
  */

  function Funcion_MAS(){
    Presionar_Boton('mas')
    Guardar_Num1()
    operacion = '+';
  }
  function Funcion_MENOS(){
    Presionar_Boton('menos')
    Guardar_Num1()
    operacion = '-';
  }
  function Funcion_POR(){
    Presionar_Boton('por')
    Guardar_Num1()
    operacion = '*';
  }
  function Funcion_DIV(){
    Presionar_Boton('div')
    Guardar_Num1()
    operacion = '/';
  }
  function Funcion_RAIZ(){
    Presionar_Boton('raiz')
  }

  /*
  Sección para declarar la función asignada al botón "igual", donde se corre la
  función "Presionar_Botón", a la cual se le manda una variable tipo string y
  se revisa la condición de que si la variable "digitos" es diferente de "0"
  entonces se corra la función "Guardar_Num2" y la función "Operaciones".
  */

  function Funcion_IGUAL(){
    Presionar_Boton('igual')
    if (digitos != 0) {
      Guardar_Num2()
      Operaciones()
    }
  }

  /*
  Sección para declarar la función "Presionar_Boton", la cual resive un dato
  tipo string y mediante el comando "document.getElementById" busca al elemento
  con ese Id dentro del DOM, utilizando el comando ".style" modifica sus
  dimenciones de alto y ancho a un 90% para dar la sensación visual de que el
  botón a sido presionado.
  */

  function Presionar_Boton(boton){
    document.getElementById(boton).style = "width: 90%; height: 90%;";
  }

  /*
  Sección para declarar la función "Animación_Boton", esta crea una variable
  "x" la cual es un arreglo que contiene todos los elementos del DOM cuya Clase
  sea "tecla", luego se corre un ciclo que va desde 0 hasta el tamaño de la
  variable "x", valor que se obtiene con el comando ".lenght", y a cada
  elemento de este arroglo mediante el comando ".style", se le modifica sus
  dimensiones de alto y ancho a un 95% para que el botón recupere sus
  dimensiones originales y de la sensación visual de que se dejo de presionar
  el botón.
  */

  function Animacion_Botones(){
    var x = document.getElementsByClassName("tecla");
    for (var i = 0; i < x.length; i++) {
      x[i].style = "width: 95%; height: 95%;";
    }
  }

}

Calculadora();
