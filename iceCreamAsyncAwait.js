/* Async & Await syntax
async function name() {
    try {
        await abc;
    } catch(error) {
        console.log("abc doesn't exist", error);
    } finally {
        console.log("runs anyway");
    }
}
name();
*/


let stocks = {
    Fruits: ["Strawberry", "Grapes", "Banana", "Apple"],
    Liquid: ["Water", "Ice"],
    Holder: ["Cone", "Cup", "Stick"],
    Toppings: ["Chocolate", "Peanuts"]
};
let is_shop_open = true;

function time(ms) {
    return new Promise((resolve, reject) => {
        if(is_shop_open) {
            setTimeout(resolve, ms);
        }
        else {
           reject( console.log("shop is closed"))
        }
    })
}
async function kitchen() {
    try{
        await time(2000);
        console.log(`client chose ${stocks.Fruits[0]}`)

        await time(1000);
        console.log("production commences");

        await time(1000);
        console.log(`${stocks.Fruits[0]} is chopped`);

        await time(2000);
        console.log(`Adding ${stocks.Liquid[0]} & ${stocks.Liquid[1]} to the mixture`);

        await time(3000)
        console.log(`${stocks.Toppings[0]} is added as toppings`);

        await time(2000);
        console.log("ice cream is served");

        await time();
        console.log("cleaning utensils");

    }
    catch(error){
        console.log("customer left", error);
    }
    finally{
        console.log("shop closed");
    }
}
kitchen();


// let toppingsChoice = () => {

//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(
//                 console.log("Which topping would you love? ")
//             )
//         }, 3000);
//     });
// };

// async function kitchen() {
//     console.log("production commences");
//     console.log(`${stocks.Fruits[0]} is chopped`);
//     console.log(`Adding ${stocks.Liquid[0]} & ${stocks.Liquid[1]} to the mixture`);
//     console.log("Machine is turned on to commence task");
//     console.log(`The ice cream is placed on ${stocks.Holder[0]} by the machine`); 
//     await toppingsChoice()
//     console.log("ice cream is served");
// }
// kitchen();
// console.log("cleaning utensils");
// console.log("Turning off the machine utilized");