import YoutubePlayer from 'youtube-player';

window.onload = () => {
    const player = YoutubePlayer('video'),
        overlay = document.querySelector('.overlay');
    
    player.loadVideoById(overlay.dataset.id);

    overlay.addEventListener('click', () => {
        overlay.classList.add('hidden');

        player.playVideo();
    })
}