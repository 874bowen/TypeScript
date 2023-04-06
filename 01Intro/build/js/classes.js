"use strict";
class Coder {
    constructor(name, music, age, lang = "TypeScript") {
        this.name = name;
        this.music = music;
        this.age = age;
        this.lang = lang;
    }
    getAge() {
        return `Hello, I'm ${this.age}`;
    }
}
const Bowen = new Coder("Bowen", "Afro", 20);
console.log(Bowen.getAge());
class WebDev extends Coder {
    constructor(computer, name, music, age) {
        super(name, music, age);
        this.computer = computer;
    }
    getLang() {
        return `I write ${this.lang}`;
    }
    setLang(lang) {
        this.lang = lang;
    }
}
const Francis = new WebDev('Mac', 'Francis', 'Wakadinali', 23);
console.log(Francis.getLang());
Francis.setLang('JavaScript');
console.log(Francis.getLang());
class Drummer {
    constructor(name, instrument) {
        this.name = name;
        this.instrument = instrument;
    }
    play(action) {
        return `${this.name} ${action} the ${this.instrument}`;
    }
}
const Page = new Drummer('Jimmy', 'drum');
console.log(Page.play('drums'));
// /////////////////////////////////////// //
class Peeps {
    // keep count not in instances but the class
    static getCount() {
        return Peeps.count;
    }
    constructor(name) {
        this.name = name;
        // ++ so that id starts at 1
        this.id = ++Peeps.count;
    }
}
Peeps.count = 0;
const John = new Peeps('John');
const Steve = new Peeps('Steve');
const Idah = new Peeps('Idah');
console.log(Peeps.count);
console.log(Idah.id);
// setters and getters 
class MyBands {
    constructor() {
        this.dataState = [];
    }
    get data() {
        return this.dataState;
    }
    set data(values) {
        if (Array.isArray(values) && values.every((value) => typeof value === 'string')) {
            this.dataState = values;
            return;
        }
        else {
            throw new Error('Param is not an array of strings');
        }
    }
}
const myBands = new MyBands();
myBands.data = ['Nicky Minaj', 'Asake'];
console.log(myBands.data);
myBands.data = [...myBands.data, 'Snoop Dog', 'Spyro'];
console.log(myBands.data);
myBands.data = [...myBands.data, 'Khaligraph', "123"];
console.log(myBands.data);
