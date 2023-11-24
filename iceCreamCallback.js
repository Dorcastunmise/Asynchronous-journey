let stocks = {
    Fruits: ["Strawberry", "Grapes", "Banana", "Apple"],
    Liquid: ["Water", "Ice"],
    Holder: ["Cone", "Cup", "Stick"],
    Toppings: ["Chocolate", "Peanuts"]
};
let order = (fruitName, callProduction) => {
    setTimeout(() => {
        console.log(`${stocks.Fruits[fruitName]} was selected`);
        callProduction();   /*placing this function before },2000 so that production will wait 
                            for fruit item to be picked */
    }, 2000);
}
//This is a calllback hell format
let production = () => {
    setTimeout(() => {
        console.log("production commences");

        setTimeout(() => {
            console.log(`${stocks.Fruits[0]} is chopped`);

            setTimeout(() => {
                console.log(`Adding ${stocks.Liquid[0]} & ${stocks.Liquid[1]} to the mixture`);

                setTimeout(() => {
                    console.log("Machine is turned on to commence task");

                    setTimeout(() => {
                       console.log(`The ice cream is placed on ${stocks.Holder[0]} by the machine`); 

                        setTimeout(() => {
                            console.log(`${stocks.Toppings[0]} is added as toppings`);

                            setTimeout(() => {
                                console.log("ice cream is served");
                            }, 2000);
                        }, 3000);
                    }, 2000);
                }, 1000);
            }, 1000)
        }, 2000);
    });
};
order(0, production);

