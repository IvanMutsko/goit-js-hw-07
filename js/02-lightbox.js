import { galleryItems } from './gallery-items.js';

const gallery = document.querySelector('.gallery');

// виклик створення розмітки
makeMarkupGallery(galleryItems);
// функція створення розмітки
function makeMarkupGallery(pictures) {
  const markup = pictures
    .map(
      ({ description, original, preview }) => `<a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>`
    )
    .join('');
  // пушимо в HTML
  gallery.insertAdjacentHTML('beforeend', markup);
}

// запуск галереї
let lightbox = new SimpleLightbox('.gallery a', {
  // налаштування галереї
  captionsData: 'alt',
  captionDelay: 250,
  close: false,
  showCounter: false,
});
