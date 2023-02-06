import { galleryItems } from './gallery-items.js';

console.log(galleryItems)

const galleryEl = document.querySelector('.gallery');
const galleryMarkup = galleryItems.map(({ preview, original, description }) => {
  return `
    
      <a
        class="gallery__link"
        href="${original}"
      >
        <img
          class="gallery__image"
          src="${preview}"
          data-source="${original}"
          alt="${description}"
        />
      </a>
    
  `;
}).join('');

galleryEl.insertAdjacentHTML('beforeend', galleryMarkup);

const lightbox = new SimpleLightbox('.gallery a');
lightbox.options.captionSelector = 'alt';
lightbox.options.captionType = 'data';
lightbox.options.captionDelay = 250;

const galleryLinks = galleryEl.querySelectorAll('.gallery__link');

galleryLinks.forEach(link => {
  link.addEventListener('click', event => {
    event.preventDefault();

    const closeModalOnEscape = event => {
      if (event.code === 'Escape') {
        instance.close();
        document.removeEventListener('keydown', closeModalOnEscape);
      }
    };

    document.addEventListener('keydown', closeModalOnEscape);
  });
});



