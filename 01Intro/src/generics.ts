// abstraction of the type
// const strEcho  = (arg: string): string => arg
const echo = <T>(arg: T): T => arg;

const isObj = <T>(arg: T): boolean => {
	return typeof arg === "object" && !Array.isArray(arg) && arg !== null;
};

console.log(isObj(true));
console.log(isObj("Ivan"));
console.log(isObj([1, 2, 3]));
console.log(isObj({ name: "Bowen" }));
console.log(isObj(null));

const isTrue = <T>(arg: T): { arg: T; is: boolean } => {
	if (Array.isArray(arg) && !arg.length) {
		return { arg, is: false };
	}
	if (isObj(arg) && !Object.keys(arg as keyof T).length) {
		return { arg, is: false };
	}
	return { arg: arg, is: !!arg };
};

console.log(isTrue(false));
console.log(isTrue(0));
console.log(isTrue(true));
console.log(isTrue(1));
console.log(isTrue("Ivan"));
console.log(isTrue(""));
console.log(isTrue(null));
console.log(isTrue(undefined));
console.log(isTrue({}));
console.log(isTrue({ name: "Bowen" }));
console.log(isTrue([]));
console.log(isTrue([1, 2, 3]));
console.log(isTrue(NaN));
console.log(isTrue(Infinity));
console.log(isTrue(-0));

interface BoolCheck<T> {
	arg: T;
	is: boolean;
}

const checkIsTrue = <T>(arg: T): BoolCheck<T> => {
	if (Array.isArray(arg) && !arg.length) {
		return { arg, is: false };
	}
	if (isObj(arg) && !Object.keys(arg as keyof T).length) {
		return { arg, is: false };
	}
	return { arg: arg, is: !!arg };
};

interface HasID {
	id: number;
}

const processUser = <T extends HasID>(user: T): T => {
	return user;
};

console.log(processUser({ id: 1, name: "Ivan" }));
// console.log(processUser({name: "Ivan"}));

const getUsersProperty = <T extends HasID, K extends keyof T>(
	users: T[],
	key: K
): T[K][] => {
	return users.map((user) => user[key]);
};

const users = [
	{ id: 1, name: "Ivan" },
	{ id: 2, name: "Bowen" },
	{ id: 3, name: "Ivan Bowen" },
];

console.log(getUsersProperty(users, "name"));

class StateObject<T> {
   private data: T;
   constructor(public state: T) {
      this.data = state
   }
   
   public get value() : T {
      return this.data
   }

   public set value(v : T) {
      this.data = v
   }
}

const store = new StateObject("Ivan Bowen")
console.log(store.value);
store.value = "Bowen Ivan"
console.log(store.value);
// store.value = 1

const myState = new StateObject<string | number | boolean>(1)
console.log(myState.value);
myState.value = "Ivan Bowen"
console.log(myState.value); 