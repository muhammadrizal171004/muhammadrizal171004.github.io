let quotes = [
    "Udah gapapa yang penting kamu udah berjuang, masalah dia mau milih siapa itu urusannya, yakin aja tuhan pasti memiliki rencana yang lebih baik",
    "Sakit ya?, maka-nya kalau berharap ke orang itu sewajarnya aja gausah berlebihan",
    "Udah biarin aja itukan udah pilihannya, belum tentu yang terbaik itu baik kok",
    "Mencintai tanpa memiliki itu sakit. apalagi memiliki tanpa dicintai",
    "Ada beberapa perasaan sakit yang tak akan tersembuhkan, hanya bisa coba dilupakan.",
"Hanya satu hal yang bisa dilakukan dengan baik oleh seorang kekasih, yaitu meremukkan hati.",
"Tahukah kau rasanya saat hatimu begitu sakit sampai kau bisa merasakan darah yang menetes?",
"Tangisan adalah cara mata berbicara ketika mulut terbungkam, tak sanggup menjelaskan seberapa hancurnya hati ini.",
"Kamu seperti bab yang rusak dari cerita favoritku.",
"Harusnya aku tahu bahwa cintamu adalah sebuah permainan.",
"Baru kusadari cintaku bertepuk sebelah tangan. Kau buat remuk seluruh hatiku. Semoga aku akan memahami isi hatimu yang beku. Semoga akan datang keajaiban hingga kau pun mau.",
"Manusia butuh jatuh sakit untuk tahu arti sehat, manusia butuh sakit hati untuk belajar mendapatkan cinta sejati.",
"Terima kasih sudah singgah meski lalu pergi. Setidaknya, aku bahagia walau hanya sesaat.",
"Meninggalkanku adalah keputusan yang terbaik bagimu daripada mendapatkan cinta palsu.",
"Aku mencintaimu dengan segenap hatiku, tapi kau malah membagi perasaanmu dengan orang lain.",
"Saat orang yang kita cintai menghilang seluruh dunia terasa kosong.",
"Jika cintamu kepada makhluk tidak berbalas maka berputus asa lah terhadap cinta itu. Dengan berputus asa hati ini akan beristirahat dan segera melupakan hal tersebut.",
"Menaruh hati di atas ketidakpastian sikap sama saja seperti menaruh tangan di tangan seseorang yang tidak mau menggenggam.",
"Air mata akan berbicara saat mulut tak mampu lagi menjelaskan sebuah rasa sakit.",
"Berhentilah menyeberangi lautan untuk orang yang bahkan tak mau melompati genangan air untukmu.",
"Cinta memang layak diperjuangkan, tapi menjadi tak layak jika kamu yang berjuang sendirian.",
"Dan sekarang, kamu hanyalah orang asing yang tahu segala rahasia-rahasiaku.",
"Kadang lebih baik meninggalkan mantanmu di masa lalu daripada membawa kesalahan yang sama untuk masa depanmu.",
"Kamu dulu segalanya untukku, tapi sekarang kamu hilang dari hidupku. Memang begitulah hidup.",
"Kamu tak perlu mengatakan apa yang telah kamu lakukan. Aku sudah tahu, aku tahu darinya. Sekarang tidak ada lagi kesempatan bagiku dan dirimu. Tak akan pernah ada.",
"Lebih baik kita usai di sini, sebelum cerita indah tergantikan pahitnya sakit hati.",
"Memang sakit untuk melepaskan, tapi akan lebih sakit lagi jika terus bertahan.",
"Salah satu alasan seseorang sulit temukan bahagia adalah karena mereka selalu melihat masa lalu lebih baik dari pada saat ini.",
"Tak perlu merasa cemburu saat melihat mantan pacarmu bersama orang lain. Karena orang tua kita mengajarkan untuk memberikan mainan yang sudah tidak terpakai ke orang yang kurang beruntung.",
"Raperlu sih nunjukke roso sayang seng luwih, nek suk akhire kowe nunjukke wong seng anyar seng mbok celuk sayang.",
"Janjimu tresnamu gede, nyatane saiki mbok tinggalne.",
"Aku Sadar diri,aku iki sopo.",
"Nek koe golek sek sempurna ro sugih aku mundur. Tapi nek koe golek sek rajin sholat ro khatam Quran aku tetep mundur.",
"Tresno iki kadang diibaratno kripik telo, iso remuk lek nggowomu ora ngati-ati.",
"Pengen nyanding koe tapi kok not responding.",
"Sing modus dipercoyo sing tulus digawe sengsoro. Tiwas kelaran munine 'wong kabeh podo' hoalah asu.",
"Jarene wes ikhlas de’e nyanding sing liyo, kok iseh ngomong ' Nek Tuhan ra bakal mbales, karma sing mbales. ' ",
"Koe lungo gowo kenangan. Lha kok teko maneh nggowo undangan."

];

arr_bulan = ["","januari", "februari", "maret", "april", "mei", "juni", "juli", "agustus", "september", "oktober", "november", "desember"];

var tmp ;

//


const btnSearch = document.getElementById("tombol")
const search = document.getElementById("isi")[0];


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


//

function displayTime(){
    var today = new Date();
    var time=new Date(today.getTime());

    // format tanggal
    var tgl = today.getDate();
    var bln = arr_bulan[today.getMonth()];
    var thn = today.getFullYear();

    // fotmat waktu
    var sh=time.getHours().toString();
    var sm=time.getMinutes().toString();
    var ss=time.getSeconds().toString();

    // peng-GB an:v
    var date = tgl + " " + bln + " " + thn + " " ;
    var times = date + (sh.length==1?"0"+sh:sh)+":"+(sm.length==1?"0"+sm:sm)+":"+(ss.length==1?"0"+ss:ss);
  
  tmp = times;
}

function getRandomNumber (min, max) {
    const get = document.getElementById('get');
    const load = document.getElementById('load');

    get.style.display="none"
    load.style.display="inline"
    
    let step1 = max - min + 1;
    let step2 = Math.random() * step1;
    let result = Math.floor(step2) + min;
  

    return result;
  }

  function quot () {
    const get = document.getElementById('get');
    const load = document.getElementById('load');

    

    let index = getRandomNumber(0, quotes.length-1);
    Swal.fire ({
        title : '~ Quotes of the day ~' ,  
        text : '"' + ' ' + (quotes[index]) + ' ' + '"' ,
        footer : '˗˗' + ' ' + tmp + ' ' + '˗˗'
    
    }); 

    get.style.display="inline"
    load.style.display="none"
}
