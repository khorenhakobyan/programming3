var matrix = [];
var n
var m
var side = 10;
var grassArr = [];
var grassEaterArr = [];
var gishatichArr = [];
var BnapahpanArr = [];
var KendanapahpanArr=[];
var BalansapahpanArr=[];
var fireArr=[];

function setup() {

    n = Math.round(random(30, 50));
    m = Math.round(random(30, 50));

    for (var y = 0; y < n; ++y) {
        matrix[y] = [];
        for (var x = 0; x < m; ++x) {
            matrix[y][x] = Math.round(random(0, 0.59));
        }
    }
    matrix[1][1] = 2;
    matrix[20][28] = 2;
    matrix[15][15] = 2;
    matrix[23][18] = 3;
    matrix[10][10] = 3;
    matrix[26][26] = 4;
    matrix[7][17] = 4;
    matrix[3][3] = 5;
    matrix[23][23] = 5;
    matrix[22][22]=6;
    matrix[29][29]=7;
    frameRate(10);
    createCanvas(matrix[0].length * side, matrix.length * side);
    background('#acacac');

    for (var y = 0; y < matrix.length; ++y) {
        for (var x = 0; x < matrix[y].length; ++x) {
            if (matrix[y][x] == 1) {
                var gr = new Grass(x, y);
                grassArr.push(gr);
            }
            if (matrix[y][x] == 6) {
                var bl = new Balansapahpan(x, y);
                BalansapahpanArr.push(bl);
            }
            else if (matrix[y][x] == 2) {
                var xtk = new Xotaker(x, y, 2);
                grassEaterArr.push(xtk);
            }
            else if (matrix[y][x] == 3) {
                var gish = new Gishatich(x, y);
                gishatichArr.push(gish);
            }
            if (matrix[y][x] == 4) {
                var bn = new Bnapahpan(x, y);
                BnapahpanArr.push(bn);

            }
            if (matrix[y][x] == 5) {
                var kn = new Kendanapahpan(x, y);
                KendanapahpanArr.push(kn);

            }
            if (matrix[y][x] == 7) {
                var fr = new Fire(x, y);
                fireArr.push(fr);

            }
        }
    }
}
function drawMatrix() {

    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {
            if (matrix[y][x] == 2) {
                fill("yellow");
                rect(x * side, y * side, side, side);
            }
            if (matrix[y][x] == 3) {
                fill("brown");
                rect(x * side, y * side, side, side);
            }

            if (matrix[y][x] == 1) {
                fill("green");
                rect(x * side, y * side, side, side);
            }
            if (matrix[y][x] == 4) {
                fill("white");
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 0) {
                fill("#acacac");
                rect(x * side, y * side, side, side);
            }
             if (matrix[y][x] == 5) {
                fill("blue");
                rect(x * side, y * side, side, side);
            }
            if (matrix[y][x] == 6) {
                fill("red");
                rect(x * side, y * side, side, side);
            }

            if (matrix[y][x] == 7) {
                fill("orange");
                rect(x * side, y * side, side, side);
            }

        }

    }
}

var fireDur = 0;

function draw() {
    drawMatrix();

    for (var i in grassArr) {
        if (grassArr.length != 0) grassArr[i].bazmanal();
    }

    for (var q in grassEaterArr) {
        grassEaterArr[q].bazmanal();
        grassEaterArr[q].utel();
    }
    for (var l in gishatichArr) {
        gishatichArr[l].bazmanal();
        gishatichArr[l].utel();

    }
    for (var m in BnapahpanArr) {
        if(grassArr.length <= 20)   BnapahpanArr[m].sharjvel();


    }
    for (var k in KendanapahpanArr) {
        if(grassEaterArr.length <= 10)   KendanapahpanArr[k].sharjvel();
    }

 for (var b in BalansapahpanArr) {
        if(gishatichArr.length <= 1)   BalansapahpanArr[b].sharjvel();
    }

    for (var f in fireArr) {
        if(++fireDur >= 10)
        {
            fireArr[f].taracvel();
            fireDur = 0;
        }   
    }
}

