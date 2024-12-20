function hitungBiayaParkir() {
    let jamMasuk = document.getElementById('jam_masuk').value
    let jamKeluar = document.getElementById('jam_keluar').value
    let lamaParkir = jamKeluar - jamMasuk

    //Biaya 2 jam pertama
    let biayaParkir = 3000
    lamaParkir -= 2

    //Hitung sisa jam
    if(lamaParkir > 0) {
        biayaParkir = biayaParkir + (lamaParkir * 1000)
    }

    console.log(biayaParkir)
    // Tampilan hasil ke dalam html
    document.getElementById('biaya_parkir').innerHTML = "Rp. " + biayaParkir
}

