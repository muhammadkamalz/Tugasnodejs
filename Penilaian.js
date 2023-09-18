const grading = require('./Kondisi.js');
const prompt = require('prompt-sync')()

const print = () => {

let angka = null;
while (angka === null){

let input = prompt("Masukkan nilai angka anda : ");
angka = parseInt(input);


// if (input === "" ){
//     console.log("Angka tidak valid, silahkan coba lagi");
//     print();
// }
// else {
//     angka = input;
//     if (angka < 0 || angka > 100){
//         console.log("Angka tidak valid, silahkan coba lagi");
//         grading(angka);
//     }
//     else{
//         grading(angka);
//     }
//         }


if(Number.isInteger(angka)){
    grading(angka)
        // if (angka < 0 || angka > 100){
        //     console.log("Angka tidak valid, silahkan coba lagi");
        //     print();
        // }
        // else{
        //     grading(angka);
        // }
    }
        else{
        console.log("Ini bukan angka")
    print();   
    }

     }
}
print();

module.exports = print;

