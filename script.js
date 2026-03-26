let canvas;
let ctx;
let FPS = 50;

let ampleC = 50;
let altC = 50;

let retras = 0;

let tilemap;
let posicionllave = {x:17, y:11};
let vidas = 5;
let personaje = 1;

let escenari = [
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 0, 0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 0],
    [0, 2, 2, 0, 0, 0, 0, 0, 0, 2, 2, 2, 2, 0, 0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 0, 2, 0, 0, 0, 0, 0, 0, 2, 0],
    [0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 0, 2, 2, 2, 2, 2, 2, 0, 2, 1],
    [0, 2, 2, 2, 0, 2, 2, 2, 2, 2, 2, 2, 2, 0, 2, 2, 2, 2, 2, 2, 0, 0, 0, 0, 0, 2, 2, 2, 2, 2, 2, 0, 2, 0],
    [0, 2, 2, 2, 0, 2, 2, 2, 2, 2, 2, 2, 2, 0, 0, 0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 0, 0, 0],
    [0, 2, 2, 2, 0, 0, 0, 0, 0, 2, 2, 2, 2, 0, 0, 0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 0],
    [0, 2, 2, 2, 0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2 ,2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 0],
    [0, 2, 2, 2, 0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 0],
    [0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 0, 0, 0, 0, 0, 0, 2, 0, 0],
    [0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 0, 0, 0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 0, 2, 2, 2, 2, 0],
    [0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 0, 3, 0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 0, 2, 2, 2, 2, 0],
    [0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 2, 2, 2, 0, 0, 0, 0, 2, 0, 0, 0, 0, 2, 2, 2, 2, 2, 2, 0, 2, 2, 2, 2, 0],
    [0, 2, 2, 0, 0, 0, 0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 0, 2, 2, 2, 2, 0],
    [0, 2, 2, 0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 0, 2, 2, 2, 2, 0],
    [0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 0],
    [0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 0, 2, 2, 2, 2, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
]


let imatge;
let imatge2;

function inicializar() {
    canvas = document.getElementById("pantalla");
    ctx = canvas.getContext('2d');
    imatge = new Image();
    imatge.src = "./img/bella.png"
    imatge2 = new Image();
    imatge2.src = "./img/rapunzel.png"
    tilemap = new Image();
    tilemap.src = './img/pixels.png'

    setInterval(function () {
        principal();
    }, 1000 / FPS)
    let eleccion = prompt("Elige princesa: 1, 2 o 3");

personaje = parseInt(eleccion);

if (personaje < 1 || personaje > 3 || isNaN(personaje)) {
    personaje = 1;
}
}

function borrarPantalla() {
    canvas.width = 1700
    canvas.heigth = 900
}

let malo = function (x, y) {
    this.x = x;
    this.y = y;

   this.dibuixa = function () {
let spriteX = (personaje - 1) * 32;
ctx.drawImage(tilemap,96,32,32,32,this.x, this.y, 50, 50)   }
    this.moviment = function () {
        let haMuerto = julen.muerte(this.x,this.y)
        if(haMuerto && vidas == 0){
            alert('TE HAS MUERTO')
            julen.x = 100
            julen.y = 100
            escenari[posicionllave.y][posicionllave.x] = 3
            julen.clau = false;
        }else if(haMuerto && vidas > 0){
            vidas--
            julen.x = 100
            julen.y = 100
            alert("TE QUEDAN "+vidas+" VIDAS")
        }
        retras++;
        if (retras == 10) {
            let posicion = Math.floor(Math.random() * 4)

            if (posicion == 0) {
                if (!this.margenes(this.x, this.y - 50)) {
                    this.y = this.y - 50
                }
            }

            if (posicion == 1) {
                if (!this.margenes(this.x, this.y + 50)) {
                    this.y = this.y + 50
                }
            }

            if (posicion == 2) {
                if (!this.margenes(this.x - 50, this.y)) {
                    this.x = this.x - 50
                }
            }
            if (posicion == 3) {
                if (!this.margenes(this.x + 50, this.y)) {
                    this.x = this.x + 50
                }
            }
            retras = 0;
        }
    }



    this.margenes = function (x, y) {
        let colisio = false;
        if (escenari[y / 50][x / 50] == 0 ) {
            colisio = true;
            return colisio;
        }

        return colisio;
    }
}

let prota = function (x, y) {
    this.x = x;
    this.y = y;
    this.clau = false;

    this.muerte = function(x,y){
        let sehaMatado = false;
        if(this.x == x && this.y == y){
            sehaMatado = true;
        }
        return sehaMatado
        }
  
    this.margenes = function (x, y) {
        let colisio = false;
        if (escenari[y / 50][x / 50] == 0 ) {
            colisio = true;
            return colisio;
        }

        return colisio;
    }
    this.logica = function () {
        if (escenari[this.y / 50][this.x / 50] == 3) {
            this.clau = true;
            alert('¡HAS ENCONTRADO LA LLAVE!')
            escenari[this.y / 50][this.x / 50] = 2
        }


        if (escenari[this.y / 50][this.x / 50] == 1) {
            if (this.clau) {
                alert('¡HAS CONSEGUIDO SALIR!')
            } else {
                alert('ESTA CERRADA TONTO, BUSCA LA LLAVE')
            }

        }

    }

    this.dibuixa = function () {
let princess = 0;

if (personaje == 1) princess = 0;
if (personaje == 2) princess = 32;
if (personaje == 3) princess = 64;

ctx.drawImage(tilemap, princess, 32, 32, 32, this.x, this.y, 50, 50);    }

    this.text = function () {
        ctx.font = '30px impact'
        ctx.fillStyle = '#f86e44'
        ctx.fillText("x: " + this.x + " y: " + this.y, 50, 50)
    }

    this.adalt = function () {
        if (!this.margenes(this.x, this.y - 50)) {
            this.y = this.y - 50
            this.logica()
        }

    }
    this.abaix = function () {
        if (!this.margenes(this.x, this.y + 50)) {
            this.y = this.y + 50
            this.logica()
        }
    }
    this.izquierda = function () {
        if (!this.margenes(this.x - 50, this.y)) {
            this.x = this.x - 50
            this.logica()
        }
    }
    this.derecha = function () {
        if (!this.margenes(this.x + 50, this.y)) {
            this.x = this.x + 50
            this.logica()
        }
    }
  
}
let julen = new prota(50, 50);
let enemic = new malo(1200, 100)
let enemic2 = new malo(50, 500)
let enemic3 = new malo(800, 800)

document.addEventListener('keydown', function (tecla) {
    if (tecla.key == 'ArrowUp')
        julen.adalt()
    if (tecla.key == 'ArrowDown')
        julen.abaix()
    if (tecla.key == 'ArrowLeft')
        julen.izquierda()
    if (tecla.key == 'ArrowRight')
        julen.derecha()
})



function dibuixaEscenari() {
    for (let y = 0; y < 18; y++) {
        for (let x = 0; x < 34; x++) {
            let tile = escenari[y][x]
            ctx.drawImage(tilemap,tile*32,0,32,32,x*ampleC, y*altC, ampleC, altC)
        }
    }
}




function principal() {
    borrarPantalla();
    dibuixaEscenari();
    julen.dibuixa()
    enemic.dibuixa()
    enemic.moviment();
    enemic2.dibuixa()
    enemic2.moviment();
    enemic3.dibuixa()
    enemic3.moviment();
}

