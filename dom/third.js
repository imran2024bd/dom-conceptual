// how to add full section in a main (parent main-container)
// getElementById _ parent 
const mainContainer = document.getElementById('main-container');
// create section

const section = document.createElement('section');
section.innerHTML = `
<h1> My dynamic section </h1>
<p> Extra text added inside paragraph</p>
            <ul>
                <li> list item -1</li>
                <li> list item -2</li>
                <li> list item -3</li>
            </ul>
`
// append
mainContainer.appendChild(section);




const sectionFinal = document.getElementById('main-container');
const sectionF = document.createElement('section');

sectionF.innerHTML =`
<h1> My Final Section Create </h1>
<p>Lorem ipsum dolor sit amete .</p>
            <ul>
                <li> Final item -1</li>
                <li> Final item -2</li>
                <li> Final item -3</li>
            </ul>

`
mainContainer.appendChild(sectionF);
sectionF.style.textAlign = 'center';
