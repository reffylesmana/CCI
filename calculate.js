function hitungNilaiAkhir(tugas, uts, uas) {
    return (tugas + uts + uas) / 3
}

function tentukanGrade(nilai) {

    if (nilai >= 85) {
        return "A"
    }
    else if (nilai >= 70) {
        return "B"
    }
    else if (nilai >= 60) {
        return "C"
    }
    else {
        return "D"
    }

}

module.exports = {
    hitungNilaiAkhir,
    tentukanGrade
}
