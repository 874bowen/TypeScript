// Error: type of array but an empty array
// const superHeros: [] = [];

const superHeros: string[] = [];
// one way of creating an array
// const heroPower: number[] = []; 
// second way of creating an array: NO way is superior to the other
const heroPower: Array<number> = [];


type Hero = {
   name: string;
   age: number;
   isAlive: boolean;
   power?: string; 
}

const heros: Hero[] = [];

heros.push({name: "batman", age: 16, isAlive: true})
heros.push({name: "hulk", age: 20, isAlive: true, power: "smashing"})
console.log(heros);

// an array of arrays
const MLModels: number[][] = [
   [255, 255, 255],
   []
]

superHeros.push("spiderman")