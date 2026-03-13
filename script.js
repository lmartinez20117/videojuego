let canvas;
let ctx;
let FPS = 50;

let ampleC = 50;
let altC = 50;

let cesped = '#078307'
let aigua = '#4ca1f7'
let terra = '#81542a'
let pedra = '#808379'
let clau = '#dac616'
let porta = '#58412f'

let retras = 0;

let escenari = [
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 0],
    [0, 2, 3, 3, 3, 3, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 5],
    [0, 2, 3, 3, 3, 3, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0],
    [0, 2, 1, 1, 1, 1, 3, 3, 3, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0],
    [0, 2, 3, 3, 1, 1, 1, 3, 3, 3, 3, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0],
    [0, 2, 3, 3, 3, 1, 1, 1, 1, 2, 2, 0, 0, 2, 2, 2, 3, 3, 3, 3, 3, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0],
    [0, 2, 3, 3, 3, 3, 1, 1, 1, 2, 2, 2, 2, 2, 2, 1, 0, 0, 1, 1, 1, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0],
    [0, 2, 3, 0, 0, 3, 1, 1, 1, 1, 1, 0, 0, 2, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 1, 1, 1, 0, 0, 0, 2, 0],
    [0, 2, 0, 0, 0, 3, 1, 1, 1, 1, 1, 0, 2, 2, 1, 2, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 2, 1, 0, 0, 0, 2, 0],
    [0, 2, 2, 2, 2, 3, 0, 0, 0, 0, 0, 0, 3, 0, 0, 2, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0],
    [0, 2, 2, 2, 2, 3, 3, 3, 3, 3, 0, 0, 3, 0, 0, 1, 0, 0, 3, 4, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0],
    [0, 2, 1, 1, 1, 1, 1, 3, 3, 3, 0, 0, 3, 0, 1, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0],
    [0, 2, 1, 1, 1, 1, 0, 2, 0, 3, 0, 0, 3, 0, 1, 1, 0, 3, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0],
    [0, 2, 1, 1, 0, 0, 0, 2, 3, 3, 3, 3, 3, 3, 3, 1, 3, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0],
    [0, 2, 1, 1, 0, 0, 0, 2, 0, 0, 0, 0, 3, 0, 3, 3, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0],
    [0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
]


function dibuixaEscenari() {
    let color;
    for (let y = 0; y < 18; y++) {
        for (let x = 0; x < 34; x++) {
            if (escenari[y][x] == 0) {
                color = pedra
            }
            if (escenari[y][x] == 1) {
                color = aigua
            }
            if (escenari[y][x] == 2) {
                color = cesped
            }
            if (escenari[y][x] == 3) {
                color = terra
            }
            if (escenari[y][x] == 4) {
                color = clau
            }
            if (escenari[y][x] == 5) {
                color = porta
            }
            ctx.fillStyle = color;
            ctx.fillRect(x * ampleC, y * altC, ampleC, altC)
        }
    }
}

let imatge;
let imatge2;

function inicializar() {
    canvas = document.getElementById("pantalla");
    ctx = canvas.getContext('2d');
    imatge = new Image();
    imatge.src = "./img/bella.png"
    imatge2 = new Image();
    imatge2.src = "./img/rapunzel.png"

    setInterval(function () {
        principal();
    }, 1000 / FPS)
}

function borrarPantalla() {
    canvas.width = 1700
    canvas.heigth = 900
}

let malo = function (x, y) {
    this.x = x;
    this.y = y;

    this.dibuixa = function () {
        ctx.drawImage(imatge2, this.x, this.y, 50, 50)
    }

    this.moviment = function () {

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
        if (escenari[y / 50][x / 50] == 0 || escenari[y / 50][x / 50] == 1) {
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

    this.margenes = function (x, y) {
        let colisio = false;
        if (escenari[y / 50][x / 50] == 0 || escenari[y / 50][x / 50] == 1) {
            colisio = true;
            return colisio;
        }

        return colisio;
    }
    this.logica = function () {
        if (escenari[this.y / 50][this.x / 50] == 4) {
            this.clau = true;
            alert('¡HAS ENCONTRADO LA LLAVE!')
            escenari[this.y / 50][this.x / 50] = 3
        }


        if (escenari[this.y / 50][this.x / 50] == 5) {
            if (this.clau) {
                alert('¡HAS CONSEGUIDO SALIR!')
            } else {
                alert('ESTA CERRADA TONTO, BUSCA LA LLAVE')
            }

        }

    }

    this.dibuixa = function () {
        ctx.drawImage(imatge, this.x, this.y, 50, 50)
    }
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
let enemic = new malo(50, 200)

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




function principal() {
    borrarPantalla();
    dibuixaEscenari();
    julen.dibuixa()
    enemic.dibuixa()
    enemic.moviment();
}

