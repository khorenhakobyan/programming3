class Grass {
    constructor(x, y, index) {
        this.x = x;
        this.y = y;
        this.index = index;
        this.multiply = 5;
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1]
        ];

    }
    chooseCell(character) {
        var found = [];
        for (var i in this.directions) {
            var x = this.directions[i][0];
            var y = this.directions[i][1];
            if (matrix[y][x] == character) {
                found.push(this.directions[i]);
            }
        }
        return found;
    }
    bazmanal() {
        this.multiply++;
        var norVandak = random(this.yntrelVandak(0));

        if (this.multiply >= 8 && norVandak) {
            var norXot = new Grass(norVandak[0], norVandak[1]);
            grassArr.push(norXot);
            matrix[norVandak[1]][norVandak[0]] = 1;
            this.multiply = 0;
        }
    }
    yntrelVandak(ch) {
        var found = [];
        for (var i in this.directions) {
            var x = this.directions[i][0];
            var y = this.directions[i][1];
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
                if (matrix[y][x] == ch) {
                    found.push(this.directions[i]);
                }
            }
        }
        return found;
    }
}

class Xotaker {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.energy = 3;
        this.MIN_energy = 3;
        this.MAX_energy = 8;
        this.directions = [];
        this.index = 2;
    }
    stanalNorKordinatner() {
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1]
        ];
    }


    yntrelVandak(ch) {
        this.stanalNorKordinatner();
        var found = [];
        for (var i in this.directions) {
            var x = this.directions[i][0];
            var y = this.directions[i][1];
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
                if (matrix[y][x] == ch) {
                    found.push(this.directions[i]);
                }
            }
        }
        return found;
    }
    sharjvel() {
        this.stanalNorKordinatner();
        var datarkvandakner = this.yntrelVandak(0);
        var norvandak = random(datarkvandakner);
        if (norvandak) {
            matrix[this.y][this.x] = 0;
            matrix[norvandak[1]][norvandak[0]] = 2;

            this.x = norvandak[0];
            this.y = norvandak[1];

            this.energy--;

            if (this.energy <= 0) this.mahanal();
        }
    }
    utel() {
        this.stanalNorKordinatner();
        var datarkvandakner = this.yntrelVandak(1);
        var norvandak = random(datarkvandakner);
        if (norvandak) {
            for (var i in grassArr) {
                if (norvandak[0] == grassArr[i].x && norvandak[1] == grassArr[i].y) {
                    grassArr.splice(i, 1);
                    break;
                }
            }

            matrix[this.y][this.x] = 0;
            matrix[norvandak[1]][norvandak[0]] = 2;

            this.x = norvandak[0];
            this.y = norvandak[1];

            this.energy++;
        }
        else {
            this.sharjvel();
        }
    }


    bazmanal() {
        var NorVandak = random(this.yntrelVandak(0));
        if (NorVandak && this.energy >= this.MAX_energy) {
            var norXotaker = new Xotaker(NorVandak[0], NorVandak[1]);
            grassEaterArr.push(norXotaker);
            matrix[NorVandak[1]][NorVandak[0]] = 2;
            this.energy = this.MIN_energy;
        }
    }
    mahanal() {

        matrix[this.y][this.x] = 0;

        for (var i in grassEaterArr) {
            if (this.x == grassEaterArr[i].x && this.y == grassEaterArr[i].y) {
                grassEaterArr.splice(i, 1);
            }
        }
    }
}


class Gishatich {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.energy = 30;
        this.MIN_energy = 15;
        this.MAX_energy = 40;
        this.directions = [];
        this.index = 3;
    }
    stanalNorKordinatner() {
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1]
        ];
    }
    yntrelVandak(ch) {
        this.stanalNorKordinatner();
        var found = [];
        for (var i in this.directions) {
            var x = this.directions[i][0];
            var y = this.directions[i][1];
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
                if (matrix[y][x] == ch) {
                    found.push(this.directions[i]);
                }
            }
        }
        return found;
    }

    sharjvel() {
        this.stanalNorKordinatner();
        var datarkvandakner = this.yntrelVandak(0);
        var norVandak = random(datarkvandakner);
        if (norVandak) {
            matrix[this.y][this.x] = 0;
            matrix[norVandak[1]][norVandak[0]] = 3;
            this.x = norVandak[0];
            this.y = norVandak[1];
            this.energy--;
            if (this.energy <= 0) this.mahanal();


        }
    }
    utel() {
        this.stanalNorKordinatner();
        var datarkvandakner = this.yntrelVandak(2);
        var norvandak = random(datarkvandakner);
        if (norvandak) {
            matrix[this.y][this.x] = 0;
            matrix[norvandak[1]][norvandak[0]] = 3;
            for (var p in grassEaterArr) {
                if (this.x == grassEaterArr[p].x && this.y == grassEaterArr[p].y) {
                    grassEaterArr.splice(p, 1);
                }
            }

            this.x = norvandak[0];
            this.y = norvandak[1];
            this.energy++;
        }
        else {
            this.sharjvel();
        }
    }

    bazmanal() {
        var NorVandak = random(this.yntrelVandak(0));
        if (NorVandak && this.energy >= this.MAX_energy) {
            var norGishatich = new Gishatich(NorVandak[0], NorVandak[1]);
            gishatichArr.push(norGishatich);
            matrix[NorVandak[1]][NorVandak[0]] = 3;
            this.energy = this.MIN_energy;
        }
    }
    mahanal() {

        matrix[this.y][this.x] = 0;
        for (var h in gishatichArr) {
            if (this.x == gishatichArr[h].x && this.y == gishatichArr[h].y) {
                gishatichArr.splice(h, 1);

            }

        }
    }
}




class Bnapahpan {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.directions = [];
    }

    stanalNorKordinatner() {
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1]
        ];
    }

    yntrelVandak(ch) {
        this.stanalNorKordinatner();
        var found = [];
        for (var i in this.directions) {
            var x = this.directions[i][0];
            var y = this.directions[i][1];
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
                if (matrix[y][x] == ch) {
                    found.push(this.directions[i]);
                }
            }
        }
        return found;
    }



    sharjvel() {
        this.stanalNorKordinatner();
        var datarkvandakner = this.yntrelVandak(0);
        var norvandak = random(datarkvandakner);
        if (norvandak) {
            matrix[this.y][this.x] = 1;

            var norXot = new Grass(this.x, this.y);
            grassArr.push(norXot);

            matrix[norvandak[1]][norvandak[0]] = 4;

            this.x = norvandak[0];
            this.y = norvandak[1];
        }
    }
}
class Kendanapahpan {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.directions = [];
    }
    stanalNorKordinatner() {
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1]
        ];
    }
    yntrelVandak(ch) {
        this.stanalNorKordinatner();
        var found = [];
        for (var i in this.directions) {
            var x = this.directions[i][0];
            var y = this.directions[i][1];
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
                if (matrix[y][x] == ch) {
                    found.push(this.directions[i]);
                }
            }
        }
        return found;
    }
    sharjvel() {
        this.stanalNorKordinatner();
        var datarkvandakner = this.yntrelVandak(0);
        var norvandak = random(datarkvandakner);
        if (norvandak) {
            matrix[this.y][this.x] = 2;
            var norXotaker = new Xotaker(this.x, this.y);
            grassEaterArr.push(norXotaker);
            matrix[norvandak[1]][norvandak[0]] = 5;
            this.x = norvandak[0];
            this.y = norvandak[1];
        }
    }
}




class Balansapahpan {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.energy = 1000;
        this.directions = [];
    }
    stanalNorKordinatner() {
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1]
        ];
    }
    yntrelVandak(ch) {
        this.stanalNorKordinatner();
        var found = [];
        for (var i in this.directions) {
            var x = this.directions[i][0];
            var y = this.directions[i][1];
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
                if (matrix[y][x] == ch) {
                    found.push(this.directions[i]);
                }
            }
        }
        return found;
    }
    sharjvel() {
        this.stanalNorKordinatner();
        var datarkvandakner = this.yntrelVandak(0);
        var norvandak = random(datarkvandakner);
        if (norvandak) {
            matrix[this.y][this.x] = 3;
            var norGishatich = new Gishatich(this.x, this.y);
            gishatichArr.push(norGishatich);
            matrix[norvandak[1]][norvandak[0]] = 6;
            this.x = norvandak[0];
            this.y = norvandak[1];
        }
    }
}




class Fire {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.energy = 1000;
        this.directions = [];
    }
    stanalNorKordinatner() {
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1]
        ];
    }
    yntrelVandak(ch) {
        this.stanalNorKordinatner();
        var found = [];
        for (var i in this.directions) {
            var x = this.directions[i][0];
            var y = this.directions[i][1];
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
                if (matrix[y][x] == ch) {
                    found.push(this.directions[i]);
                }
            }
        }
        return found;
    }
    mahanal() {
        matrix[this.y][this.x] = 0;

        for (var i in fireArr) {
            if (this.x == fireArr[i].x && this.y == fireArr[i].y) {
                fireArr.splice(i, 1);
                break;
            }
        }
    }
    taracvel() {
        this.stanalNorKordinatner();

        for (var i in this.directions) {

            var x = this.directions[i][0];
            var y = this.directions[i][1];

            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length)
            {
                if (matrix[y][x] == 1) {
                    matrix[y][x] = 7;
                    fireArr.push(new Fire(x, y));
                    for (var i in grassArr) {
                        if (x == grassArr[i].x && y == grassArr[i].y) {
                            grassArr.splice(i, 1);
                            break;
                        }
                    }
                }
                if (matrix[y][x] == 2) {
                    matrix[y][x] = 7;
                    fireArr.push(new Fire(x, y));
                    for (var i in grassEaterArr) {
                        if (x == grassEaterArr[i].x && y == grassEaterArr[i].y) {
                            grassEaterArr.splice(i, 1);
                            break;
                        }
                    }
                }
                if (matrix[y][x] == 3) {
                    matrix[y][x] = 7;
                    fireArr.push(new Fire(x, y));
                    for (var i in gishatichArr) {
                        if (x == gishatichArr[i].x && y == gishatichArr[i].y) {
                            gishatichArr.splice(i, 1);
                            break;
                        }
                    }
                }
            }
        }

        this.mahanal();
    }
}
