console.log(' second file');
// to create an element by id
const secondList = document.getElementById('second-list');

// 01. what add ?
// create li
const li = document.createElement('li');
// push text in li
li.innerText = 'My dynamic item'

// append li(child) in ul ( parent) with text
secondList.appendChild(li);

