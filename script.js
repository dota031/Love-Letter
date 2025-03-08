document.addEventListener("DOMContentLoaded", function () {
    openLetter(); // Tự mở thư khi vào trang
    playMusic();  // Cố gắng phát nhạc
});

// Mở thư khi vào trang
function openLetter() {
    setTimeout(() => {
        document.querySelector(".flap").style.transform = "rotateX(180deg)";
        document.querySelector(".letter").style.transform = "translateY(0)";
        document.querySelector(".letter").style.opacity = "1";
    }, 500);
}

// Phát nhạc
function playMusic() {
    var audio = document.getElementById("music");
    audio.play().then(() => {
        document.getElementById("playMusic").style.display = "none"; // Ẩn nút nếu phát được
    }).catch(() => {
        document.getElementById("playMusic").style.display = "block"; // Hiện nút nếu bị chặn
    });
}

// Nếu nhạc bị chặn, chạm vào màn hình sẽ phát
document.addEventListener("click", function () {
    var audio = document.getElementById("music");
    if (audio.paused) {
        audio.play();
    }
});
