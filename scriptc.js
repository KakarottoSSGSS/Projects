const text = document.getElementById('score'); 
const count = document.getElementById('weightok');
let data = new Map();
data.set("pln", 1);    
data.set("usd", 3.4139);    
data.set("eur", 4.2085);    
data.set("chf", 3.5812);
data.set("gbp", 4.7974);  

let accescurrency = (currency) => {

    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            // console.log(xhttp.responseText);
            let response = JSON.parse(xhttp.responseText);
            // console.log(response.rates[0].mid);
            data.set(currency, response.rates[0].mid);
        }
            
    }
    xhttp.open('GET','http://api.nbp.pl/api/exchangerates/rates/a/'+ currency +'/?format=json', true);
    xhttp.send();
}

accescurrency('usd');
accescurrency('eur');
accescurrency('chf');
accescurrency('gbp');


const change = function () {
    let result = 0;
    
    const amount = document.getElementById('weightInput').value;
    const literalValue1 = document.getElementById('weight').value;
    const literalValue2 = document.getElementById('weight2').value;
    if ((literalValue1 == literalValue2)&&amount<=0) {
        text.innerText = "If you wan't convert units they need to be diffrent, number must be positive and diffrent than 0."
    } else if (literalValue1 == literalValue2) {
        text.innerText = "If you wan't convert units they need to be diffrent.";  
    } else if (amount <= 0) {
        text.innerText = "Number must be positive and diffrent than 0.";
    } else {
    console.log(literalValue1 + " " + literalValue2 + " " + amount);

    // let data = new Map();
    // data.set("pln", 1);    
    // data.set("usd", 3.4139);    
    // data.set("eur", 4.2085);    
    // data.set("chf", 3.5812);
    // data.set("gbp", 4.7974);  
    
     


    // fetch('http://api.nbp.pl/api/exchangerates/rates/a/gbp/?format=json') // Call the fetch function passing the url of the API as a parameter
    // .then(function() {
    //     data.set("gbp", rates.mid);
    //     console.log(rates.mid);
    // // Your code for handling the data you get from the API
    // })
    // .catch(function() {
    // // This is where you run code if the server returns any errors
    // }); 

    result = (amount * data.get(literalValue2)) / data.get(literalValue1);
    
    
    if (Number.isFinite(result)) {
        result = result.toFixed(13);
        result = parseFloat(result); 
    } else {
        result = result.toFixed(4);
        result = parseFloat(result);
    }
    result = Math.round(result *10000)/10000;
    console.log(data.g);

    console.log(data.get('g'));
    console.log(data.get(literalValue1));
    

    text.innerText = `${amount} ${literalValue1} it's ${result} ${literalValue2} `;
    
    }
}
        


count.addEventListener('click', change);

