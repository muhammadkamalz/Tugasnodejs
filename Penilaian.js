const grading = require('./Kondisi.js');
const prompt = require('prompt-sync')()

const print = () => {

let angka = null;
while (angka === null){

let input = prompt("Masukkan nilai angka anda : ");
if (input === "" ){
    console.log("Angka tidak valid, silahkan coba lagi");
}
else {
    angka = input;
    if (angka < 0 || angka > 100){
        console.log("Angka tidak valid, silahkan coba lagi");
        print();
    }
    else{
        grading(angka);
    }
        }

     }
}
print();

module.exports = print;

