fetch('https://www.googleapis.com/books/v1/volumes?q='+search+'&key=AIzaSyBI7w9JfGzUp8CZg22K-DRgI_RVqYlnteI'+'&maxResults=40')
.then((data) => {
    return data.json();
})
.then((jsonedData) => {
    console.log(jsonedData);
})
.catch((err) => {
    console.log("Unfortunate situation", err);
})
.finally(() => {
    console.log("ish");
})

//-----------------------------
async function training() {
    const response = await fetch('');
    const data = response.json();
    console.log(1);
    console.log(data);
}
training();
//or 
async function anotherMethod() {
    try {
    const response = await fetch('https://www.googleapis.com/books/v1/volumes?q='+search+'&key=AIzaSyBI7w9JfGzUp8CZg22K-DRgI_RVqYlnteI'+'&maxResults=40');
    const data = response.json();
    console.log(1);
    console.log(data);
    }
    catch(err) {
        console.log("Something went wrong");
        console.log(err);
    }
}
anotherMethod();