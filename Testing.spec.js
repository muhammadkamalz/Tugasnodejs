const {expect} = require('chai')
const access = require('./Kondisi.js')
const nilai = require('./Penilaian.js')
console.log(access.kode)

describe('Menguji Penilaian', function() {
    it('Seharusnya berhasil karena angka valid', function() {
        const hasil = access();
        expect(hasil.kode).to.be.equal(1);
        nilai();
    })
    it('Seharusnya gagal karena angka tidak valid', function() {
        const hasil = access();
        expect(hasil.kode).to.be.equal(0);
    })
    it.skip('Seharusnya gagal karena bukan angka', function() {
        const hasil = access();
        expect(hasil.kode).to.be.equal(2);
    })
})