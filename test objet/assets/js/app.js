// Les objets en JS

// Difference entre variables et objets
var A = 5;
var B = A;
console.log('A = ', A); // 5
console.log('B = ', B); // 5

// on modifie B
B += 5;

console.log('A = ', A); // 5
console.log('B = ', B); // 10

// Seul B a été modifié car A et B en tant que variables 
// sont toujours distinctes en NOM et en VALEUR.
// Elle pointent chacune vers une adresse memoire differente.

// Lors de l'affectation, la valeur de A est copiée dans une nouvelle
// case mémoire de la RAM et son adresse est rangée dans B

// Pour les o jets ce comportement ne s'applique pas.

var myObj = {prop1: 5, prop2: 'hello'};
var yourObj = myObj;

console.log('myObj : ', myObj); // {prop1: 5, prop2: 'hello'}
console.log('yourObj : ', yourObj); // {prop1: 5, prop2: 'hello'}

// modifions yourObj:
yourObj.prop1 = 10;
yourObj.prop2 = "world";

console.log('yourObj : ', yourObj); // {prop1: 10, prop2: 'world'}
console.log('myObj : ', myObj); // {prop1: 5, prop2: 'hello'}

// myObj a été modifié parce que myObj et yourObj contienent tout deux 
// la meme adresse memoire de la case ou est stocké l'objet créé en 
// ligne 24.
// Contrairement aux variables, lors de l'affectation, l'objet vers
// lequel pointe myObj n'est pas duppliqué. Il y a juste une copie de 
// l'adresse de la case ou est stocké l'objet depuis sa creation dans
// youObj.

// creer une fonction n nommée squareIt() qui retourne le carré 
// d'un nombre.

const squareIt = (x) => {
    return x*x;
}

console.dir(squareIt);

// étant donnée la nature prototypique des objets en JS,
// je peux incorporer la fonction squareIt a n'importe
// qul prototype uy compris au prototype de l'Object de base
Object.prototype.squareIt = (x) => {
    return x*x;
}

// Dès lors n'importe quel objet créé par la suite possedera
// une methode squareIt() provenant du prototype de Object.
var objetBidon = {
    a: 5
}

var monCarre = objetBidon.squareIt(objetBidon.a);
console.log(monCarre);

// CREATION D'OBJETS:

// 1. Methode litterale
const user1 = {
    name : "jeff",
    age: 23,
    email: "jeff@email.com",
}

console.log('user1 ', user1);

var nomDeUser1 = user1['name'];
var user1Email = user1.email;

console.log('nomDeUser1: ', nomDeUser1);
console.log('user1Email: ', user1Email);

user1.name = "Jeff";
console.log('user1 ', user1);

const user2 = {
    name : "Sarah",
    age: 20,
    email: "sarah@email.com",
    direBonjour: function() {
        return ' - ' + this.name + ': Bonjour je m\'appelle ' + this.name + '! :)';
    }
}

console.log('user2 : ', user2);
console.log("Faisons user2 dire bonjour: ", user2.direBonjour());


function User(nom, age, mail) {
    this.name = nom;
    this.age = age;
    this.email = mail;
    this.direBonjour = function () {
        return ' - ' + this.name + ': Bonjour je m\'appelle ' + this.name + '! :)';
    }
}

var jeff = new User('Jeff', 23, 'jeff')

console.log(jeff)




class Utilisateur {
    constructor(nom, age, mail) {
        this.name = nom;
        this.age = age;
        this.email = mail
    }

    direBonjour(){
        return ' - ' + this.name + ': Bonjour je m\'appelle ' + this.name + '! :)';
    }
    augmenteSonAge(n) {
        console.log(this.name + ' augmente son age de ' + n + ' ans');
        this.age += n;
    }
    direSonAge() {
        return ' - ' + this.name + ': j\'ai ' + this.age + ' ans!';
    }
}

fred = new Utilisateur('Fred', 30, 'fred@email.com');



// methodes statiques
// methodes internes a la classe et non a l'objet
// on ne l'appelle pas depuis l'objet mais depuis la classe
// ça permet de ne pas allourdir les objets avec des methodes generiques

class AnimalDuZoo{
    constructor(nom, typeParc) {
        this.name = nom;
        this.location = typeParc;
    }
    seDeplace() {
        return this.name + ' se deplace dans son ' + this.location;
    }
    static respire(element) {
        return element + ' respire!!';
    }
}

elephant = new AnimalDuZoo('Dumbo', 'enclos des éléphants');

console.log(elephant)
console.log(AnimalDuZoo.respire(elephant.name))


// Autre fondamental de la POO (programmation orienté objet) : l'encapsulation
// ça consiste à cacher des propriétés et des methodes a l'interieur a l'interieur de la class afin qu'elles ne soit pas forcement accessible
// en dehors de l'objet créé par celle ci
// l'encapsulation permet de mettre des securités sur l'objet comme empecher certaines modif ou de recuperer des données


class abonnerEncapsuler {
    constructor(nom,email){
        this._name = nom;
        this._email = email;
    }
    get name() {
        return this._name;
    }
    set name(nom) {
        this._name = nom;
    }
}
var sam = new abonnerEncapsuler('Sam', 'sam@email.com')
console.log('sam.name', sam.name)


// heritage


class Employe
    {
        constructor(nom, age, email) {
            this._name = nom;
            this._age = age;
            this._email = email;
        }

        get name() {
            return this._name;
        }
        set name(nom) {
            this._name = nom;
        }

        get age() {
            return this._age;
        }
        set age(age) {
            this._age = age;
        }

        get email() {
            return this._age;
        }
        set email(email) {
            this._email = email;
        }

        direBonjour() {
            return this.name + ': Bonjour, je m\'appelle ' + this.name + '! :) et j\'ai '+ 
            sam.age + ' ans';
        }
    }


    class Manager extends Employe
    {
        constructor(nom, age, email, salaire, cumulInitial){
            super(nom, age, email);
            this._salaire;
            this._balance;
            this.initialiseCumul(cumulInitial);
            this.initialiseSalaire(salaire);
        }

        get salaire() {
            return this._salaire;
        }
        set salaire(salaire) {
            this._salaire = salaire;
        }

        get balance() {
            return this._balance;
        }
        set balance(cumul) {
            this._balance = cumul;
        }

        initialiseCumul(cumulInitial){
            this._balance = cumulInitial;
        }

        initialiseSalaire(salaire) {
            this._salaire = salaire;
        }

        payer(){
            this._balance += this._salaire;
        }
    }

    sam = new Manager('Sam', 25, 'sam@email.com', 2500, 0);
    console.log(sam);

   console.log( sam.direBonjour());



   // exo


class Rh extends Employe {
    constructor(nom, age, email, salaire, cumulInitial) {
        super(nom, age, email);
    }
        payeDuMois = (employe) => {
            if (employe instanceof Manager) {
                console.log(employe.name + ' va etre payé ' + employe.salaire + '.')
                employe.payer()
            }
        }
    }
var odile = new Rh('odile', 25, 'odile@email.com');
odile.payeDuMois(sam)
console.log(sam.balance)

interface iSalaire {
    payer(employe)
}



