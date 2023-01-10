// almost identical to types

interface User {
   readonly dbId: number,
   email: string,
   userId: number,
   googleId?: string,
   // function definition
   // startTrial: () => string
   startTrial(): string,
   getCoupon(couponName: string): number,
}

interface User {
   githubToken: string
}

interface Admin extends User{
   role: "admin" | "teacher" | "learner"
}

const ivan: Admin = { 
   dbId: 2343, 
   email: "ivan@gmail.com", 
   userId: 92394,
   githubToken: "8weh8w9eujw9uw4",
   role: "teacher",
   startTrial: () => {
      return "string";
   },
   getCoupon: (name: "ivanee") => {
      return 20;
   }
}

ivan.email = "itb@gmail.com";
// ivan.dbId = 234;