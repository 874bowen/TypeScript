// having restrictive enums(options)

enum SeatChoice {
   AISLE,
   MIDDLE,
   WINDOW,
   FOURTH
}

const hcSeat = SeatChoice.AISLE

console.log(hcSeat);

// you can also change the default(0) increasing order say to start from 10

enum SeatChoiceB {
   AISLE = 20,
   MIDDLE = 3,
   WINDOW
}

// you can also match it up with anything

enum SeatChoicec {
   AISLE = "aisle",
   MIDDLE = "middle",
   WINDOW = 3,
   FOURTH
}

export {}