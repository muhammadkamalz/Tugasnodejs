function grading(nilai){
    if (nilai == 0){
        console.log("Nilai Anda adalah : F");
    }
    else if (nilai > 0 && nilai <= 20){
        console.log("Nilai Anda adalah : E");
    }
    else if (nilai > 20 && nilai <= 40){
        console.log("Nilai Anda adalah : D");
    }
    else if (nilai > 40 && nilai <=60){
        console.log("Nilai Anda adalah : C");
    }
    else if (nilai > 60 && nilai <= 80){
        console.log("Nilai Anda adalah : B");
    }
    else if (nilai > 80 && nilai <= 100){
        console.log("Nilai Anda adalah : A");
    }
}

module.exports = grading;