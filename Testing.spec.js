const {expect} = require('chai')
const access = require('./Kondisi.js')
const nilai = require('./Penilaian.js')

describe('Menguji Penilaian', function() {
    it('Seharusnya berhasil karena angka valid', function() {
        // access(50);
        const hasil = access();
        expect(hasil.kode).to.be.equal(1);
        nilai();
  
    })
    it('Seharusnya gagal karena angka tidak valid', function() {
        // access(-50);
        const hasil = access();
        expect(hasil.kode).to.be.equal(0);
        nilai();
  
    })
    it('Seharusnya gagal karena inputan kosong', function() {
        // access("");
        const hasil = access();
        expect(hasil.kode).to.be.equal(3);
    })
    it.skip('Seharusnya gagal karena bukan angka', function() {
        const hasil = access();
        expect(hasil.kode).to.be.equal(2);
    })
})