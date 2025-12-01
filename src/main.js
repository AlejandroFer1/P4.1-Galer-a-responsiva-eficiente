import './style.css'

const modal = document.getElementById('modal');
const modalImg = document.getElementById('modal-img');
const captionText = document.getElementById('caption');
const closeBtn = document.querySelector('.close');
const galleryItems = document.querySelectorAll('.gallery-item');

// Evento click para modal
galleryItems.forEach(item => {
  item.addEventListener('click', () => {
    const fullImgSrc = item.getAttribute('data-full');
    const description = item.getAttribute('data-description');

    modal.classList.remove('hidden');
    modalImg.src = fullImgSrc;
    captionText.textContent = description;
  });
});

// Cerrar modal
closeBtn.addEventListener('click', () => {
  modal.classList.add('hidden');
});

modal.addEventListener('click', (e) => {
  if (e.target === modal) {
    modal.classList.add('hidden');
  }
});


