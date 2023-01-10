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



const ivan: User = { 
   dbId: 2343, 
   email: "ivan@gmail.com", 
   userId: 92394,
   startTrial: () => {
      return "string";
   },
   getCoupon: (name: "ivanee") => {
      return 20;
   }
}

ivan.email = "itb@gmail.com";
// ivan.dbId = 234;