class Unit {
    constructor(hp,str,mag,def,res,spd, lvl, status,) {
        this._life = hp;
        this._strength=str;
        this._magic=mag;
        this._defence=def;
        this._resistance=res;
        this._speed=spd;
        this._level=lvl;
      this._element = status;
    }
    level_up() {
      this._life += Math.floor(Math.random() * (6-2)+2);
      this._strength += Math.floor(Math.random() * (3 - 0)+1);
    }
}
var perso = new Unit(20, 5, 5, 5, 5, 5, 5, 'fire')
console.log(perso._life)
console.log(perso._strength)
perso.level_up()
console.log(perso._strength)
console.log(perso._life)
perso.level_up()
console.log(perso._strength)
console.log(perso._life)
perso.level_up()
console.log(perso._strength)
console.log(perso._life)
perso.level_up()
console.log(perso._strength)
console.log(perso._life)

