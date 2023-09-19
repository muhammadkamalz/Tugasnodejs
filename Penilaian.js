const grading = require('./Kondisi.js');
const prompt = require('prompt-sync')()

const print = () => {

    let angka = parseFloat(prompt("masukkan nilai anda : "));
    if(isNaN(angka)){
        console.log("Gagal");
        print();
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

module.exports = print;

