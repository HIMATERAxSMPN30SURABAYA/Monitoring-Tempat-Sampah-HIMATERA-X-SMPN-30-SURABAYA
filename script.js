const colors = ["#FF5733", "#33FF57", "#3357FF", "#F0FF33", "#FF33A1"];
const button = document.getElementById("colorButton");

// Fungsi untuk mengubah warna latar belakang
function changeBackgroundColor() {
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    document.body.style.backgroundColor = randomColor;
}

// Mengubah warna latar belakang setiap 5 detik
setInterval(changeBackgroundColor, 5000);

// Anda masih bisa menambahkan event listener pada tombol jika ingin
button.addEventListener("click", changeBackgroundColor);

const socket = io();

socket.on('statusUpdate', (status) => {
    const button = document.getElementById("colorButton");
    button.textContent = status;
    button.style.backgroundColor = status === 'Penuh' ? "#FF0000" : "#007BFF";
});
