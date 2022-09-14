import {addInput, list} from './tags.js'

function add(data) {
    const inputValue = addInput.value;
    const index = data.length;
  
    const li = document.createElement('li');
    li.classList.add('item');
    li.innerHTML = `<b>${index + 1}</b>${inputValue}<button class=\"del-btn\" data-index=\"${index}\">x</div>`;
    list.append(li);
  
    data.push(inputValue);
  
    addInput.value = '';
    addInput.focus();
  }