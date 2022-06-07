class Unit {
    constructor(hp,str,mag,def,res,spd, lvl, status,) {
        life._hp;
        strength._str;
        magic._mag;
        defence._def;
        resistance._res;
        speed._spd;
        level._lvl;
        effects._status
    }
    level_up() {
      this.life +=  Math.floor(Math.random() * (7 - 3)) + 3;
    }
}

