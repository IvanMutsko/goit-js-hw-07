import { galleryItems } from './gallery-items.js';

// =================================

// пошук місця інтеграції галереї
const gallery = document.querySelector('.gallery');

// посилання на велике зображення
let urlForModal = '';

makeGalleryMarkup(galleryItems);

function makeGalleryMarkup(items) {
  const pictureMarkupString = items
    .map(({ description, original, preview }) => {
      return `<div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>`;
    })
    .join('');

  gallery.insertAdjacentHTML('beforeend', pictureMarkupString);
}

// слухач на клік по галереї
gallery.addEventListener('click', urlSelectedImg);

// отримання посилання на велике зображення
function urlSelectedImg(evt) {
  evt.preventDefault();
  // перевірка куди клікнули
  if (evt.target.nodeName !== 'IMG') {
    return;
  }
  urlForModal = evt.target.getAttribute('data-source');

  // відкриття модалки
  showBigImg();
}

// модалка
function showBigImg() {
  const modal = basicLightbox.create(`
    <img src="${urlForModal}">
`);

  modal.show();

  // закриття модалки через Escape
  document.addEventListener('keydown', event => {
    if (event.code === 'Escape') {
      modal.close();
    }
  });
}
