const btnSearch = document.getElementById("tombol")
const search = document.getElementById("isi")[0];
const msgButton = document.getElementById ("msg")

msgButton.addEventListener('click', event => {
    messenger();
})

btnSearch.addEventListener('click', event =>{
    searchData();
});
search.addEventListener('keyup', event => {
    if (event.keyCode === 13) {
        searchData
    }
})



function searchData() {
    if (document.getElementById('isi').value){
        alert('Wahh Sayang Sekali Kawan Pencarian Untuk "' + document.getElementById('isi').value.toUpperCase() + '" Belum Bisa Ditemukan, Dikarenakan Untuk Saat Ini Fitur Search Belum Siap Untuk Digunakan.')
        alert ('Mohon Dimaklumi Developer Sangat Capek Dikarenakan Mengerjakan Ini Semua Sendirian, Developer Juga Manusia Dan Juga Harus Menjaga Kesehatan Agar Tidak Sakit Terus Karena Sebelumya Developer Sudah Sangat Sering Tersakiti Oleh Orang Yang Sangat Dia Perjuangkan Namun Tidak Pernah Menganggap Perjuangan-nya Tersebut. :(')
    } else {
        
    } 
    
}

function messenger() {
    alert ('Mohon Maaf Untuk Saat Ini Opsi Messenger Belum Tersedia, Silahkan Gunakan Opsi Lainnya :) ')
}