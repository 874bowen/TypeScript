function addTwo(num: number) {
   
   return num + 2;
}

function getUpper(val: String){
   return val.toUpperCase();
}

function signUpUser(name: String, email: string, isPaid: boolean){

}

// when you want to pass 2 arguments but you need 3 params use a default value as below:
let loginUser = (name: string, email: string, isPaid: boolean = true) => {

}

addTwo(5);
getUpper("Ivan");
signUpUser("ivan", "bowenivan@gmail.com", true);
loginUser("Ian", "ian@gmail.com")

// temporarily removes the duplicate func declaration error
export{}