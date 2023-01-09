// having restrictive enums(options)
var SeatChoice;
(function (SeatChoice) {
    SeatChoice[SeatChoice["AISLE"] = 0] = "AISLE";
    SeatChoice[SeatChoice["MIDDLE"] = 1] = "MIDDLE";
    SeatChoice[SeatChoice["WINDOW"] = 2] = "WINDOW";
    SeatChoice[SeatChoice["FOURTH"] = 3] = "FOURTH";
})(SeatChoice || (SeatChoice = {}));
var hcSeat = SeatChoice.AISLE;
console.log(hcSeat);
// you can also change the default(0) increasing order say to start from 10
var SeatChoiceB;
(function (SeatChoiceB) {
    SeatChoiceB[SeatChoiceB["AISLE"] = 20] = "AISLE";
    SeatChoiceB[SeatChoiceB["MIDDLE"] = 3] = "MIDDLE";
    SeatChoiceB[SeatChoiceB["WINDOW"] = 4] = "WINDOW";
})(SeatChoiceB || (SeatChoiceB = {}));
