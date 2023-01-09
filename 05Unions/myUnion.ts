// allows you to be in a situation where you aren't sure which type of data is going to come in and we don't want to use `any`
//  use union in a very clever way
let score: number | string = 33;

score = "55";

type User = {
   name: string;
   id: number;
}
type Admin = {
   adminname: string;
   id: number;
}

let bowen: User | Admin = {name: "bowen", id: 334};

bowen = {adminname: "ivan", id: 2323};

// function getDbId(id: number | string){
//    // making some api calls
//    console.log(`DB id is: ${id}`);
   
// }

getDbId(3);
getDbId("3");

function getDbId (id: number | string) {
   // since the param can be a number or string we need to do validations
   if (typeof id === "string"){
      id.toLowerCase();
   }

}

// array
const data: number[] = [1, 2, 3];
const data2: string[] = ["1", "2", "3"]
const data3: Array<number | string> = [1, 2, 3, "4"];
const data4: (string | number)[] = [1, 2, 3, "4"]

// very strict
let pi: 3.14 = 3.14;
// pi = 3.142;

console.log(data, data2, data3, data4);

let seatAllotment: "aisle" | "middle" | "window";

// seatAllotment = "ms"
seatAllotment =  "middle"


export {};