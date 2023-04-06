/* Index Signatures and Type Assertions
- used when you don't know the exact name of the object keys but you know the shape 
*/

interface TransactionObj {
	readonly [index: string]: number;
	Pizza: number;
	Books: number;
	Job: number;
}
// interface TransactionObj {
//    readonly [index: string]: number
// }

const todaysTransactions: TransactionObj = {
	Pizza: -10,
	Books: -5,
	Job: 50,
};

console.log(todaysTransactions.Pizza);
console.log(todaysTransactions["Books"]);

// Accessing it dynamically
let prop: string = "Pizza";
console.log(todaysTransactions[prop]);

const todaysNet = (transactions: TransactionObj): number => {
	let total: number = 0;
	for (const transaction in transactions) {
		total += transactions[transaction];
	}
	return total;
};

// todaysTransactions.Pizza = 40
console.log(todaysTransactions["Chapati"]);

console.log(todaysNet(todaysTransactions));

//--------///////////////////////////////////
interface Student {
	// [index: string]: string | number | number[] | undefined
	name: string;
	GPA: number;
	classes?: number[];
}

const student: Student = {
	name: "Ivan",
	GPA: 4.0,
	classes: [100, 120],
};

// console.log(student.test);
// keyof creates a union type of the types in the inteface provided
for (const key in student) {
	console.log(`${key}: ${student[key as keyof Student]}`);
}

Object.keys(student).map((key) => {
	console.log(student[key as keyof typeof student]);
});

const logStudentKey = (student: Student, key: keyof Student): void => {
	console.log(`Student ${key}: ${student[key]}`);
};

logStudentKey(student, "name");

// //////////////////////////////// //
// interface Incomes {
//    [key: string]: number
// }

type Streams = 'salary' | 'bonus' | 'sideHustle'

// Utility class Record allows us to have keys with string literals -- shorter code
type Incomes = Record<Streams, number>

const monthlyIncomes : Incomes = {
   salary: 500,
   bonus: 100,
   sideHustle: 250
}

for (const revenue in monthlyIncomes){
   console.log(`${revenue}: ${monthlyIncomes[revenue as keyof Incomes]}`);
}