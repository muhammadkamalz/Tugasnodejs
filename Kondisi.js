let kode;
function grading(nilai){
    if (nilai == 0){
        kode = 1;
        console.log("Nilai Anda adalah : F");
    }
    else if (nilai > 0 && nilai <= 20){
        kode = 1;
        console.log("Nilai Anda adalah : E");
    }
    else if (nilai > 20 && nilai <= 40){
        kode = 1;
        console.log("Nilai Anda adalah : D");
    }
    else if (nilai > 40 && nilai <=60){
        kode = 1;
        console.log("Nilai Anda adalah : C");
    }
    else if (nilai > 60 && nilai <= 80){
        kode = 1;
        console.log("Nilai Anda adalah : B");
    }
    else if (nilai > 80 && nilai <= 100){
        kode = 1;
        console.log("Nilai Anda adalah : A");
    }
    else if (nilai < 0 || nilai > 100){
        kode = 0;
        console.log("Angka tidak valid!");
    }
    // else if (isNaN(nilai)){
    //     kode = 2;
    //     console.log("FAIL");
    //     console.log(typeof nilai)
    // }
    return {kode};
}
module.exports = grading;