function openLetter() {
    document.querySelector(".flap").style.transform = "rotateX(180deg)";
    document.querySelector(".letter").style.transform = "translateY(0)";
    document.querySelector(".letter").style.opacity = "1";
}

// Chơi nhạc khi trang tải xong
document.addEventListener("DOMContentLoaded", function () {
    var audio = document.getElementById("music");
    audio.play().catch(error => console.log("Tự động phát bị chặn, nhấn vào màn hình để phát nhạc!"));
});
