// Fungsi salam otomatis berdasarkan waktu
function salamWaktu() {
  let jam = new Date().getHours();
  let salam;

  if (jam >= 5 && jam < 12) {
    salam = "Selamat Pagi 🌅";
  } else if (jam >= 12 && jam < 16) {
    salam = "Selamat Siang ☀️";
  } else if (jam >= 16 && jam < 19) {
    salam = "Selamat Sore 🌇";
  } else {
    salam = "Selamat Malam 🌙";
  }

  // Teks Dalam Elemen
  document.getElementById("salam").innerText = salam;
}
document.addEventListener("DOMContentLoaded", salamWaktu);

// Fungsi hitung usia
function hitungUsia() {
  let inputLahir = document.getElementById("lahir").value;
  if (!inputLahir) {
    document.getElementById("hasilUsia").innerText =
      "⚠️ Silakan pilih tanggal lahir dulu.";
    return;
  }

  let tglLahir = new Date(inputLahir);
  let hariIni = new Date();

  let usia = hariIni.getFullYear() - tglLahir.getFullYear();
  let bulan = hariIni.getMonth() - tglLahir.getMonth();

  if (bulan < 0 || (bulan === 0 && hariIni.getDate() < tglLahir.getDate())) {
    usia--;
  }

  document.getElementById(
    "hasilUsia"
  ).innerText = `🎉 Usia Anda: ${usia} tahun`;
}

// Validasi Kirim Pesan
function kirimPesan() {
  let nama = document.getElementById("nama").value;
  let email = document.getElementById("email").value;
  let pesan = document.getElementById("pesan").value;

  if (nama === "" || email === "" || pesan === "") {
    alert("Semua field wajib diisi!");
  } else {
    alert("Terima kasih, " + nama + ". Pesan Anda berhasil dikirim.");
  }
}

// Navigation Toggle
const navToggle = document.getElementById("navToggle");
const navMenu = document.getElementById("navMenu");

navToggle.addEventListener("click", () => {
  navMenu.classList.toggle("active");
  navToggle.classList.toggle("active");
});

// Close Mobile Menu
document.querySelectorAll;
