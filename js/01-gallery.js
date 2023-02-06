import { galleryItems } from './gallery-items.js';
console.log(galleryItems)

const galleryEl = document.querySelector('.gallery');
const galleryMarkup = galleryItems.map(({ preview, original, description }) => {
  return `
    <div class="gallery__item">
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
    </div>
  `;
}).join('');

galleryEl.insertAdjacentHTML('beforeend', galleryMarkup);

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



