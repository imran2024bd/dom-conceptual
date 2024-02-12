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
