function cekGanjilGenap(data) {
    if(data % 2 === 0) {
        console.log('Genap');
    } else {
        return 'ganjil'
    }
}

const cekData = cekGanjilGenap(5)
console.log(cekData);
