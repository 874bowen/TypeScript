function addTwo(num: number): number {
   
   return num + 2;
   // return "hello";
}

function getUpper(val: String){
   return val.toUpperCase();
}

function signUpUser(name: String, email: string, isPaid: boolean) { }

// when you want to pass 2 arguments but you need 3 params use a default value as below:
let loginUser = (name: string, email: string, isPaid: boolean = true) => { }

addTwo(5);
getUpper("Ivan");
signUpUser("ivan", "bowenivan@gmail.com", true);
loginUser("Ian", "ian@gmail.com")

// function getValue(myVal: number): boolean {
//    if (myVal > 5) return true;
//    return "200 OK"
// }

const getHello = (s: string):string => { return "" }

const heros = ["thor", "spiderman", "ironman"];
// const heros = [1, 2, 3];

heros.map((hero): string => {
   return `hero is ${hero}`;
});

function consoleError(errMsg: string): void {
   console.log(errMsg);
   // return 1;
}

function handleError(errMsg: string): never {
   throw new Error(errMsg); 
}
// temporarily removes the duplicate func declaration error
export{}