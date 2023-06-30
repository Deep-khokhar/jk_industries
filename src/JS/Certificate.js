document.querySelectorAll('.certificategallery img').forEach(image =>{
    image.onclick = () =>{
        document.querySelector('.popupsection').style.display = 'block';
        document.querySelector('.popupsection img').src = image.getAttribute('src');
        document.querySelector('body').style.overflow = 'hidden';

    }
});

document.querySelector('.popupsection span').onclick = () =>{
    document.querySelector('.popupsection').style.display = 'none';
    document.querySelector('body').style.overflow = 'auto';
}