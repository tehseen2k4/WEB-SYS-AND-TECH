const intro = document.getElementById('intro');
const changeTextButton = document.getElementById('changeTextBtn');
const list=document.getElementById('list');
const addItemButton = document.getElementById('addItemBtn');
const removeItemButton = document.getElementById('removeItemBtn');
const newItemInput = document.getElementById('newItem');

// Change the text of the intro paragraph
changeTextButton.addEventListener('click', () => {
    intro.textContent = 'i have changed the text!'; 
});

// Add a new item to the list
addItemButton.addEventListener('click',() => {
    const newItemText = newItemInput.value;
    if (newItemText) {
        const newItem = document.createElement('li');
        newItem.textContent = newItemText;
        list.appendChild(newItem);
        newItemInput.value = ''; // Clear the input field
    }
}); 

// Remove the last item from the list   
removeItemButton.addEventListener('click', () => {
    const items = list.getElementsByTagName('li');
    if (items.length > 0) {
        list.removeChild(items[items.length - 1]);
    }
}); 

// Change the background color of the intro paragraph
intro.addEventListener('mouseover', () => {
    intro.style.backgroundColor = 'lightblue';
});
intro.addEventListener('mouseout', () => {
    intro.style.backgroundColor = '';
});
// Change the text color of the intro paragraph
intro.addEventListener('click', () => {
    intro.style.color = 'red';
});
// Reset the text color of the intro paragraph
intro.addEventListener('dblclick', () => {
    intro.style.color = '';
});
