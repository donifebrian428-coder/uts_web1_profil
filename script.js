// Seleksi elemen DOM menggunakan getElementById dan querySelector
const tombolSapa = document.getElementById("btn-sapa");
const teksPesan = document.querySelector("#pesan-dinamis");
const formKontak = document.getElementById("form-kontak");
const inputNama = document.querySelector("#nama-pengirim");
const hasilForm = document.getElementById("hasil-form");

// Event Handler untuk tombol sapaan
function tampilkanSapaan() {
  teksPesan.textContent = "Selamat datang di website portofolio UTS Pemrograman Web 1 saya!";
  teksPesan.style.color = "#047857";
}

// Event Listener klik tombol
tombolSapa.addEventListener("click", tampilkanSapaan);

// Event Listener & Handler untuk submit form
formKontak.addEventListener("submit", function(event) {
  event.preventDefault();
  const nama = inputNama.value;
  hasilForm.textContent = "Terima kasih, " + nama + "! Pesan Anda telah tercatat.";
  inputNama.value = "";
});