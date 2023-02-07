// Add imports above this line
import { galleryItems } from './gallery-items';
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
// Change code below this line

const galleryRef = document.querySelector(".gallery");

galleryRef.insertAdjacentHTML(
    "afterbegin",
    createGalleryMarkupFromArray(galleryItems)
  );

  function createGalleryMarkupFromArray(itemArray) {
    return itemArray.map((item) => {
        return `
  <li>
      <a class="gallery__item" href="${item.original}">
          <img class="gallery__image" src="${item.preview}" alt="${item.description}" />
      </a>
  </li>`;
      }).join("");
  }

  new SimpleLightbox('.gallery, .gallery__item',{captionsData:'alt',captionDelay: 250});

