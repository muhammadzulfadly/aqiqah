// Tanggal dan waktu yang menjadi target hitung mundur (gunakan waktu lokal pengguna)
const targetDate = new Date("2025-08-17T10:00:00");  // Tanggal target tanpa offset zona waktu

const countdownFunction = setInterval(function() {
  // Dapatkan waktu sekarang berdasarkan zona waktu pengguna
  const now = new Date().getTime();

  // Hitung selisih antara waktu target dan waktu sekarang
  const distance = targetDate.getTime() - now;

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Tampilkan hasil hitung mundur di elemen HTML
  document.getElementById("days").innerHTML = days;
  document.getElementById("hours").innerHTML = hours;
  document.getElementById("minutes").innerHTML = minutes;
  document.getElementById("seconds").innerHTML = seconds;

  // Jika hitung mundur selesai, berhentikan hitung mundur
  if (distance < 0) {
    clearInterval(countdownFunction);
    document.querySelector(".countdown").innerHTML = "Waktu telah habis!";
  }
}, 1000);

