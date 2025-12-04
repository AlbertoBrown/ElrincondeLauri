/* ===============================================
   MUSIC-PLAYER.JS - Reproductor de Música
   El Rincón de Lauri
   =============================================== */

document.addEventListener('DOMContentLoaded', () => {
    // Crear reproductor de música
    const musicPlayer = document.createElement('div');
    musicPlayer.className = 'music-player';
    musicPlayer.innerHTML = `
        <button class="music-toggle" aria-label="Reproducir/Pausar música" title="Música ambiente">
            <svg class="music-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M9 18V5l12-2v13"></path>
                <circle cx="6" cy="18" r="3"></circle>
                <circle cx="18" cy="16" r="3"></circle>
            </svg>
            <svg class="music-icon-off" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="display: none;">
                <path d="M9 18V5l12-2v13"></path>
                <circle cx="6" cy="18" r="3"></circle>
                <circle cx="18" cy="16" r="3"></circle>
                <line x1="3" y1="3" x2="21" y2="21"></line>
            </svg>
        </button>
    `;
    document.body.appendChild(musicPlayer);

    // Crear elemento de audio
    const audio = document.createElement('audio');
    audio.loop = true;
    audio.volume = 0.3;
    audio.src = 'audio/ambiente.mp3';
    audio.preload = 'auto';
    document.body.appendChild(audio);
    
    const toggleBtn = musicPlayer.querySelector('.music-toggle');
    const iconOn = musicPlayer.querySelector('.music-icon');
    const iconOff = musicPlayer.querySelector('.music-icon-off');
    
    let isPlaying = false;

    toggleBtn.addEventListener('click', () => {
        if (isPlaying) {
            audio.pause();
            iconOn.style.display = 'block';
            iconOff.style.display = 'none';
            toggleBtn.classList.remove('playing');
            isPlaying = false;
        } else {
            // Intentar reproducir
            const playPromise = audio.play();
            
            if (playPromise !== undefined) {
                playPromise.then(() => {
                    iconOn.style.display = 'none';
                    iconOff.style.display = 'block';
                    toggleBtn.classList.add('playing');
                    isPlaying = true;
                }).catch(err => {
                    console.error('Error al reproducir:', err);
                    alert('No se pudo reproducir el audio. Verifica que el archivo audio/ambiente.mp3 exista.');
                });
            }
        }
    });

    // Guardar preferencia en localStorage
    const musicPreference = localStorage.getItem('musicEnabled');
    if (musicPreference === 'true' && audio.src) {
        toggleBtn.click();
    }

    // Guardar estado cuando cambie
    audio.addEventListener('play', () => {
        localStorage.setItem('musicEnabled', 'true');
    });

    audio.addEventListener('pause', () => {
        localStorage.setItem('musicEnabled', 'false');
    });
});
