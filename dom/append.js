//1. where to add

// console.log('append js');
const placesList = document.getElementById('places-list');
// console.log(placesList);
//2. what to be added
const li = document.createElement('li');
li.innerText = 'pahartoli bon';
// 3. add the child
placesList.appendChild(li);

// **************************************************************************
// to create a full section add

//1. where to add
const mainContainer = document.getElementById('main-container');
// console.log('main-container');
//2. what to be added
const section = document.createElement('section');

const h1 = document.createElement('h1');
h1.innerText ='My Food List';
// 3. add the child
section.appendChild(h1);

const ul = document.createElement('ul');
const li1 = document.createElement('li');
li1.innerText ='biriyani';
ul.appendChild(li1);

const li2 = document.createElement('li');
li2.innerText ='borhani';
ul.appendChild(li2);

const li3 = document.createElement('li');
li3.innerText ='salad';
ul.appendChild(li3);

// 3. add the child
section.appendChild(ul);

mainContainer.appendChild(section);


// ***********************************************************************

// set inner text directly
const sectionDress = document.createElement('section');
sectionDress.innerHTML = `
<h1> My dress section</h1>
<ul>
    <li> T-shirt </li>
    <li> Lungi</li>
    <li> Sando Ganji </li>
</ul>
`
mainContainer.appendChild(sectionDress);