class Coder {
	secondLang!: string; // in case you dont wanna instatiate this

	constructor(
		public readonly name: string,
		public music: string,
		private age: number,
		protected lang: string = "TypeScript"
	) {}

	public getAge() {
		return `Hello, I'm ${this.age}`;
	}
}

const Bowen = new Coder("Bowen", "Afro", 20);
console.log(Bowen.getAge());

class WebDev extends Coder {
	constructor(
		public computer: string,
		name: string,
		music: string,
		age: number
	) {
		super(name, music, age);
	}

	public getLang() {
		return `I write ${this.lang}`;
	}

   public setLang(lang: string) {
      this.lang = lang
   }
}

const Francis = new WebDev('Mac', 'Francis', 'Wakadinali', 23)

console.log(Francis.getLang());
Francis.setLang('JavaScript')
console.log(Francis.getLang());

// IMPLEMENTING INTEFACES IN CLASSES
interface Musician {
   name: string,
   instrument: string
   play(action: string): string 
}

class Drummer implements Musician {
   constructor(
      public name: string,
      public instrument: string
   ) { }

   play(action: string): string {
      return `${this.name} ${action} the ${this.instrument}`
   }
}

const Page = new Drummer('Jimmy', 'drum')
console.log(Page.play('drums'));

// /////////////////////////////////////// //
class Peeps {
   static count: number = 0
   // keep count not in instances but the class
   static getCount(): number {
      return Peeps.count
   }
   public id: number
   constructor(public name: string){
      // ++ so that id starts at 1
      this.id = ++Peeps.count
   }

}

const John = new Peeps('John');
const Steve = new Peeps('Steve')
const Idah = new Peeps('Idah')

console.log(Peeps.count);
console.log(Idah.id);

// setters and getters 
class MyBands {
   public dataState: string[]
   constructor(){
      this.dataState = []
   }

   public get data(){
      return this.dataState
   }
   public set data(values: string[]){
      if (Array.isArray(values) && values.every((value) => typeof value === 'string')){
         this.dataState = values
         return
      } else {
         throw new Error('Param is not an array of strings');
      }
   }
}

const myBands = new MyBands()
myBands.data = ['Nicky Minaj', 'Asake']
console.log(myBands.data);
myBands.data = [...myBands.data, 'Snoop Dog', 'Spyro']
console.log(myBands.data);
myBands.data = [...myBands.data, 'Khaligraph', "123"]
console.log(myBands.data);