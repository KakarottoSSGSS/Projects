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
    } else {
    console.log(literalValue1 + " " + literalValue2 + " " + amount);

    // let countData =
    //     {g: 1,
    //     dag: 10,
    //     kg: 1000,
    //     t: 1000000};
        
    if (literalValue1 == 'c') {

        if (literalValue2 == 'f') {
            result = (amount * 9/5) + 32;
        } else {//k
            result = amount + 273.15;
        }

    } else if (literalValue1 == 'k') {
        if (literalValue2 == 'c') {
            result =  amount - 273.15;
        } else {//f
            result = ((amount - 273.15) *9/5) +32;
        }

    } else {//f
        if (literalValue2 == 'c') {
            result = (amount - 32) *5/9;
        } else {//k
            result = ((amount - 32) *5/9) + 273.15;
        }
    }

    // result = (amount * data.get(literalValue1)) / data.get(literalValue2);
    
    
    if (Number.isFinite(result)) {
        
        result = parseFloat(result); 
        result = result.toFixed(13);
        result = parseFloat(result); 
    } else {
        
        result = parseFloat(result);
        result = result.toFixed(4);
        result = parseFloat(result);
    }
    result = Math.round(result *100)/100;
    // console.log(data.g);
    // // console.log(data.get(g));
    // console.log(data.get('g'));
    // console.log(data.get(literalValue1));
    
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

