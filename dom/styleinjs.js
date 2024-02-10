const sections = document.querySelectorAll('section');
// console.log(sections);
for ( const section of sections){
    section.style.border = '2px solid steelblue';
    section.style.marginBottom = '5px';
    section.style.borderRadius = '15px';
    section.style.paddingLeft = '7px';
    section.style.backgroundColor = 'lightgray';
    // console.log(section);
}

// const placesContainer = document.getElementById('places-container');
// placesContainer.style.backgroundColor = 'yellow';

const placesContainer = document.getElementById('places-container');
// to center text
placesContainer.classList.add('text-center');
// to remove font size of placescontainer
placesContainer.classList.remove('large-text');
document.getElementById('places-container').style.fontSize
