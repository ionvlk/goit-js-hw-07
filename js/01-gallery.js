import { galleryItems } from './gallery-items.js';

const galleryEl = document.querySelector('.gallery');
const galleryMarkup = galleryItems.map(({ preview, original, description }) => {
  return `<div class="gallery__item"> 
<a class="gallery__link" href="${original}" > 
<img class="gallery__image"
src="${preview}" data-source="${original}" 
alt="${description}" /> 
</a>
</div>`;
}).join('');

galleryEl.insertAdjacentHTML('beforeend', galleryMarkup);

galleryEl.addEventListener('click', event => {
const target = event.target;
if (target.nodeName !== 'IMG') {
return;
}

event.preventDefault();
const instance = basicLightbox.create( `<img src="${target.dataset.source}" alt="${target.alt}">` );
instance.show();

const closeModalOnEscape = event => {
if (event.code === 'Escape') {
instance.close();
document.removeEventListener('keydown', closeModalOnEscape);
}
};

document.addEventListener('keydown', closeModalOnEscape);
});

