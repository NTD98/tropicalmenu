function handleImageError(img,imgUrl) {
    if (imgUrl !== img.getAttribute('data-placeholder')) {
        img.src = imgUrl;
    }
}