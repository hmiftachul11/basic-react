import React from "react";

const makanans = [
  {
    nama: "Soto",
    harga: 6000,
  },
  {
    nama: "Bakso",
    harga: 7000,
  },
  {
    nama: "Ayam",
    harga: 8000,
  },
  {
    nama: "Pentol",
    harga: 9000,
  },
];

// Reduce
const total_bayar = makanans.reduce((total_harga, makanan) => {
    return total_harga+makanan.harga;
}, 0)

const Map = () => {
  return (
    <div>
      <h2>Map Sederhana</h2>
      <ul>
        {makanans.map((makanan) => (
          <li>
            {makanan.nama} - Harga {makanan.harga}
          </li>
        ))}
      </ul>

      <h2>Map Filter Harga Lebih dari 8000 </h2>
      <ul>
        {makanans
          .filter((makanan) => makanan.harga > 8000)
          .map((maknaan) => (
            <li>{maknaan.harga}</li>
          ))}
      </ul>

      <h3>Total Bayar : {total_bayar}</h3>
    </div>
  );
};

export default Map;
