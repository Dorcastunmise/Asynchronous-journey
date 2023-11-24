/*  Promise important features:
1. Relationship between time and work 
2. Promise chaining (the .then task steps to execute)
3. Error handling (note to give when major task cannot be carried out)
4. The .finally handler (final work to execute after either work is fulfilled or rejected)

SYNTAX
let order = () => {

    return new Promise((resolve, reject) => {
        if(true) {
            resolve()
        } else (
            reject()
        )
    })
}
order() ....step that preceeds the subsequent smaller tasks
.then()
.then() ....used according to the number of steps to execute
.catch() ...for error handling
.finally() ....execute anyways

*/

let stocks = {
    Fruits: ["Strawberry", "Grapes", "Banana", "Apple"],
    Liquid: ["Water", "Ice"],
    Holder: ["Cone", "Cup", "Stick"],
    Toppings: ["Chocolate", "Peanuts"]
};
let is_shop_open = true;
let order = (time, work) => {
    return new Promise((resolve, reject) => {
        if(is_shop_open) {
            setTimeout(() => {
                resolve(work);
            }, time);
        } else {
            reject(console.log("shop is closed"));
        }
    });
};
order(2000, console.log(`client chose ${stocks.Fruits[0]}`))
.then(() => {
    return order (0o0, console.log("production commences"));
})
.then(() => {
    return order (2000, console.log(`${stocks.Fruits[0]} is chopped`));
})
.then(() => {
    return order (1000, console.log(`Adding ${stocks.Liquid[0]} & ${stocks.Liquid[1]} to the mixture`));
})
.then(() => {
    return order (1000, console.log("Machine is turned on to commence task"))
})
.then(() => {
    return order (2000, console.log(`The ice cream is placed on ${stocks.Holder[0]} by the machine`))
})
.then(() => {
    return order (3000, console.log(`${stocks.Toppings[0]} is added as toppings`));
})
.then(() => {
    return order (2000, console.log("ice cream is served"))
})

//error handling
.catch(() => {
    console.log("Customer leaves");
})

.finally(() => {
    console.log("Sales done for the day...shop is closed");
})