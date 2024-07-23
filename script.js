document.addEventListener("DOMContentLoaded", function() {
    // Countdown function
    const countdown = () => {
        const eventDate = new Date("Jul 28, 2024 08:00:00").getTime();
        const now = new Date().getTime();
        const distance = eventDate - now;

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        document.getElementById("countdown").innerHTML = `
            <div class="countdown-box">${days}d</div>
            <div class="countdown-box">${hours}h</div>
            <div class="countdown-box">${minutes}m</div>
            <div class="countdown-box">${seconds}s</div>
        `;

        if (distance < 0) {
            clearInterval(countdownInterval);
            document.getElementById("countdown").innerHTML = "<div class='countdown-box'>Acara Sedang Berlangsung</div>";
        }
    };

    const countdownInterval = setInterval(countdown, 1000);

    // Play music and show invitation on button click
    window.playMusicAndShowInvitation = () => {
        const audio = document.getElementById("background-music");
        if (audio) {
            audio.play().catch(error => {
                console.error("Error playing audio:", error);
            });
        }

        document.getElementById("opening").style.display = "none";
        const invitation = document.getElementById("invitation");
        invitation.style.display = "block";
        invitation.classList.add("fade-in");
    };
});
