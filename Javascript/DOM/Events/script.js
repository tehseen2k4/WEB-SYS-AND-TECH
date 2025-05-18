document.addEventListener('DOMContentLoaded', () => {
    // Select elements
    const clickBox = document.getElementById('clickBox');
    const mouseBox = document.getElementById('mouseBox');
    const textInput = document.getElementById('textInput');
    const textArea = document.getElementById('textArea');
    const form = document.getElementById('myForm');
    const output = document.getElementById('output');
  
    // Quick check to make sure elements exist
    if (!clickBox || !mouseBox || !textInput || !textArea || !form || !output) {
      console.error('Missing one or more elements!');
      return;
    }
  
    // Helper function to log event info
    function logEvent(message) {
      output.textContent += message + "\n";
      output.scrollTop = output.scrollHeight; // scroll to bottom
    }
  
    // 1. Click events
    clickBox.onclick = () => {
      logEvent("clickBox: Click event triggered");
    };
  
    clickBox.ondblclick = () => {
      logEvent("clickBox: Double Click event triggered");
    };
  
    // 2. Mouse enter and leave
    mouseBox.addEventListener('mouseenter', () => {
      mouseBox.style.backgroundColor = '#d3f8d3'; // light green
      logEvent("mouseBox: Mouse entered");
    });
  
    mouseBox.addEventListener('mouseleave', () => {
      mouseBox.style.backgroundColor = '';
      logEvent("mouseBox: Mouse left");
    });
  
    // 3. Keyboard events on textInput
    textInput.addEventListener('keydown', (e) => {
      logEvent(`textInput: Key down - "${e.key}" (code: ${e.code})`);
    });
  
    textInput.addEventListener('keyup', (e) => {
      logEvent(`textInput: Key up - "${e.key}" (code: ${e.code})`);
    });
  
    // 4. Input and change events on textInput
    textInput.addEventListener('input', (e) => {
      logEvent(`textInput: Input event - current value: "${e.target.value}"`);
    });
  
    textInput.addEventListener('change', (e) => {
      logEvent(`textInput: Change event - final value: "${e.target.value}"`);
    });
  
    // 5. Focus and blur on textarea
    textArea.addEventListener('focus', () => {
      logEvent("textArea: Focus event - text area focused");
    });
  
    textArea.addEventListener('blur', () => {
      logEvent("textArea: Blur event - text area lost focus");
    });
  
    // 6. Form submission
    form.addEventListener('submit', (e) => {
      e.preventDefault(); // prevent actual form submission
      logEvent(`Form Submitted! Name: ${form.nameInput.value}, Email: ${form.emailInput.value}`);
      form.reset();
    });
  
    // 7. Event delegation example (clicks inside form)
    form.addEventListener('click', (e) => {
      if (e.target.tagName === 'INPUT') {
        logEvent(`Clicked on input: ${e.target.id}`);
      }
    });
  });
// This script handles various DOM events including click, mouse, keyboard, and form events.
// It logs the events to a designated output area and demonstrates event delegation.
// The script is designed to be run after the DOM content is fully loaded.
// It includes error handling for missing elements and ensures the output area scrolls to the latest event.  