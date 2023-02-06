import { galleryItems } from './gallery-items.js';

const galleryEl = document.querySelector('.gallery');

const galleryMarkup = galleryItems.map(({ preview, original, description }) => {
  return `
    <a class="gallery__item" href="${original}">
      <img class="gallery__image" src="${preview}" alt="${description}" />
    </a>
  `;
}).join('');

galleryEl.insertAdjacentHTML('beforeend', galleryMarkup);

const lightbox = new SimpleLightbox('.gallery a', {
  captionSelector: 'alt',
  captionType: 'data',
  captionDelay: 250
});


const galleryLinks = galleryEl.querySelectorAll('.gallery__link');

galleryLinks.forEach(link => {
  link.addEventListener('click', event => {
    event.preventDefault();
    const instance = basicLightbox.create(`
      <img src="${link.href}" alt="${link.querySelector('img').alt}">
    `);
    instance.show();

    const closeModalOnEscape = event => {
      if (event.code === 'Escape') {
        instance.close();
        document.removeEventListener('keydown', closeModalOnEscape);
      }
    };

    document.addEventListener('keydown', closeModalOnEscape);
  });
});
