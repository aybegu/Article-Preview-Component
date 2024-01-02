const btnShare = document.getElementById('share-button')
const share = document.getElementById('share')

btnShare.addEventListener('click', () => {
    share.classList.toggle('fading')
})

share.addEventListener('mouseleave', () => {
    share.classList.remove('fading')
})