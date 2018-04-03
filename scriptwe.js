const text = document.getElementById('score'); 
const count = document.getElementById('weightok');

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

    // let countData =
    //     {g: 1,
    //     dag: 10,
    //     kg: 1000,
    //     t: 1000000};

    let data = new Map();
    data.set("g", 1);    
    data.set("dag", 10);    
    data.set("kg", 1000);
    data.set("t", 1000000);    
    data.set("gr", 0.06479891);    
    data.set("dr", 1.7718451953125);    
    data.set("oz", 28.349523125);    
    data.set("lb", 453.59237);    
    data.set("st", 6350.29318);    
    data.set("qr", 12700.58636);    
    data.set("cwt", 50802.34544);    
    data.set("t(us)", 1016046.9088);    
    data.set("slug", 14593.90294);    

    result = (amount * data.get(literalValue1)) / data.get(literalValue2);
    
    
    if (Number.isFinite(result)) {
        result = result.toFixed(13);
        result = parseFloat(result); 
    } else {
        result = result.toFixed(4);
        result = parseFloat(result);
    }

    result = Math.round(result * 1000)/1000;
    
    console.log(data.g);
    // console.log(data.get(g));
    console.log(data.get('g'));
    console.log(data.get(literalValue1));
    
    //console.log(countData.literalValue1);

    //ver 1
    // if(weight.literalValue1 == 'g'){
    //     switch (weight.literalValue2) {
    //         case 'dag':
    //             result = amount/10; 
    //             break;
    //         case 'kg':
    //             result = amount/1000; 
    //             break;
    //         case 't':
    //             result = amount/1000000; 
    //             break;
    //         default:
    //             break;
    //     }
    // }
    // if(weight.literalValue1 == 'dag'){
    //     switch (weight.literalValue2) {
    //         case 'g':
    //             result = amount*10; 
    //             break;
    //         case 'kg':
    //             result = amount/100; 
    //             break;
    //         case 't':
    //             result = amount/100000; 
    //             break;
    //         default:
    //             break;
    //     }
    // }
    // if(weight.literalValue1 == 'kg'){
    //     switch (weight.literalValue2) {
    //         case 'g':
    //             result = amount*1000; 
    //             break;
    //         case 'dag':
    //             result = amount*100; 
    //             break;
    //         case 't':
    //             result = amount/1000; 
    //             break;
    //         default:
    //             break;
    //     }
    // }
    // if(weight.literalValue1 =='t'){ 
    //    switch (weight.literalValue2) {
    //         case 'g':
    //             result = amount*1000000; 
    //             break;
    //         case 'dag':
    //             result = amount*10000; 
    //             break;
    //         case 'kg':
    //             result = amount*1000; 
    //             break;
    //         default:
    //             break;
    //    }        
    // }
    text.innerText = `${amount} ${literalValue1} it's ${result} ${literalValue2} `;
    // if (literalValue1 == literalValue2) {
    //     text.innerText = "Values which you wan't to differ are the same, choose diffrent one's";  
    // }
    }
}
        


count.addEventListener('click', change);

