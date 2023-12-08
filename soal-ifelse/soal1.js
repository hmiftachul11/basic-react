// Pemeriksaan Bilangan:

// a. Buatlah program JavaScript yang meminta pengguna memasukkan sebuah bilangan. Kemudian,
// program akan menampilkan pesan apakah bilangan tersebut positif, negatif, atau nol.

// b. Modifikasi program di atas agar menampilkan pesan apakah bilangan tersebut genap atau ganjil.

let check = prompt("Masukkan Angka:");

function CekBilangan(checkData) {
  // Mengonversi input ke tipe data number
  checkData = parseFloat(checkData);

  if (!isNaN(checkData)) { // Memeriksa apakah input adalah angka
    if (checkData >= 0) {
      if (checkData === 0) {
        return "bilangan 0";
      } else if (checkData % 2 === 0) {
        return "bilangan genap";
      } else {
        return "ganjil";
      }
    } else {
      return "bilangan negatif";
    }
  } else {
    return "Input bukan angka";
  }
}

const result = CekBilangan(check);
console.log(result);



