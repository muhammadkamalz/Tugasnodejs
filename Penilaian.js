const grading = require('./Kondisi.js');
const prompt = require('prompt-sync')()

const print = () => {

    let angka = prompt("masukkan nilai anda : ");
    if(angka == ""){
        grading(angka);
        // print();
    }
    else if (Number.isInteger(angka)){
        grading(angka);
    }
    // else if (angka < 0 || angka > 100){
    //     grading(angka);
    //     print();
    // }
    else {
        grading(angka);
    }

    
}

print();
// grading(-50);
// grading("");
// grading(50);


module.exports = print;

