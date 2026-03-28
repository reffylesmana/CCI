const { hitungNilaiAkhir, tentukanGrade } = require("./calculate")

let mahasiswa = [
    {
        nama: "Reffy",
        nim: "103012500062",
        tugas: 80,
        uts: 75,
        uas: 90
    },
    {
        nama: "Andi",
        nim: "103012500063",
        tugas: 70,
        uts: 65,
        uas: 80
    }
]

for (let i = 0; i < mahasiswa.length; i++) {

    let nilaiAkhir = hitungNilaiAkhir(
        mahasiswa[i].tugas,
        mahasiswa[i].uts,
        mahasiswa[i].uas
    )

    let grade = tentukanGrade(nilaiAkhir)

    mahasiswa[i].nilaiAkhir = nilaiAkhir
    mahasiswa[i].grade = grade

}

console.log("LAPORAN NILAI MAHASISWA")
console.log("=======================")

for (let i = 0; i < mahasiswa.length; i++) {

    console.log("Nama :", mahasiswa[i].nama)
    console.log("NIM  :", mahasiswa[i].nim)
    console.log("Nilai Akhir :", mahasiswa[i].nilaiAkhir)
    console.log("Grade :", mahasiswa[i].grade)
    console.log("----------------------")

}
