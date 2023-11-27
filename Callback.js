/* Callbacks means calling a function within a function. 
Callbacks are used to perform a relationship between functions.
Callbacks are also used to delay functions execution until other functions completes
 and returns with data*/

let order = (call_production) => {
    console.log("order placed, kindly begin the nxt step in stack");
    call_production();  //to link order and production functions
};
let production = () => {
    console.log("production of ordered product begins");
};
order(production);