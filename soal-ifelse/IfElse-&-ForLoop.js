const arrayData = [1, 2, 4, 5, 7];

const cekGanjilGenap = (dataArray) => {
  if (dataArray % 2 === 0) {
    return "genap";
  } else {
    return "ganjil";
  }
};

for (let i = 0; i < arrayData.length; i++) {
    const resultCheck = cekGanjilGenap(arrayData[i])
    console.log(`Angka ${arrayData[i]} Hasilnya ${resultCheck}`);
}