// Function to toggle the chat screen's visibility

var context = "";
function toggleChat() {
  const chatScreen = document.getElementById('chat-screen');

  if (chatScreen.classList.contains('hidden')) {
    chatScreen.classList.remove('hidden'); // Show chat screen
  } else {
    chatScreen.classList.add('hidden'); // Hide chat screen
  }
}

// Functionality for the 'Send' button to send user messages
document.getElementById('sendBtn').addEventListener('click', function () {
  sendMessage();
});

// Function to handle the 'Enter' keypress to send a message
document.getElementById('userInput').addEventListener('keydown', function (event) {
  if (event.key === 'Enter') {
    sendMessage();
  }
});

// Function to send the user message
function sendMessage() {
  const userInput = document.getElementById('userInput').value;

  if (userInput.trim()) {
    addMessage(userInput, 'user');
    document.getElementById('userInput').value = ''; // Clear input
    getBotResponse(userInput); // Get the bot response
  }
}




// Function to add messages to chat with avatars
function addMessage(message, type) {
  const chatBody = document.querySelector('.chat-body');

  // Create a new message element
  const messageElement = document.createElement('div');
  messageElement.classList.add('chat-message', type); // 'bot' or 'user' class
  messageElement.style.marginTop = "20px";
  messageElement.style.display = "flex";
  messageElement.style.alignItems = "center";
  messageElement.style.padding = "8px";
  messageElement.style.marginBottom = "10px";
 
  // Create avatar
  const avatar = document.createElement('img');
  const messageText = document.createElement('span');
    messageElement.style.marginTop = "20px";
  if (type === 'bot') {
    avatar.src = 'assets/imagenes/limoncito_alegre.png'; // Placeholder bot avatar
    avatar.style.marginRight = "10px";
    messageElement.style.justifyContent = "flex-start";
    messageText.style.backgroundColor = "#eee";
    

  } else {
    avatar.src = 'https://www.w3schools.com/howto/img_avatar.png'; // Placeholder user avatar
    avatar.style.order = "1";
    messageElement.style.justifyContent = "flex-end";
    avatar.style.marginLeft = "10px";
    avatar.style.justifyContent = "flex-end";
    messageText.style.backgroundColor = "#00380a";
    messageText.style.color = "white";
    

  }
  avatar.style.width = "40px";
  avatar.style.height = "40px";
  avatar.style.borderRadius = "20px";
  avatar.classList.add('avatar');
  // Create message text
 
  messageText.textContent = message;
  messageText.style.display = "inline-block";
  messageText.style.padding = "10px";
  messageText.style.borderRadius = "12px";
  // Append avatar and text to the message element
  if (type === 'bot') {
    
    messageElement.appendChild(avatar);
    messageElement.appendChild(messageText);
  } else {
    messageElement.appendChild(messageText);
    messageElement.appendChild(avatar);
  }
  

  // Add message to chat body
  chatBody.appendChild(messageElement);
  chatBody.scrollTop = chatBody.scrollHeight; // Scroll to the bottom
}

// Function to get bot response based on user input
function getBotResponse(userInput) {
  let response = '...';
  let context = this.context;
  fetch('https://localhost:7102/api/Chat/Guardar', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      "context": context,
      "pregunta": userInput
    })
  })
    .then(response => response.json()).then(response => {
      let respuesta = JSON.stringify(response);
      console.log(respuesta);
      const myObj = JSON.parse(respuesta);
      console.log(myObj);
      x = myObj.value.pregunta;
      this.context += myObj.value.context; 
      console.log(myObj.value);
      setTimeout(() => {
        addMessage(JSON.stringify(x), 'bot')
      }, 1000);
     

    });

    

  // Simple keyword-based response logic
  /*if (userInput.toLowerCase().includes('hello')) {
    response = 'Hello! How can I assist you today?';
  } else if (userInput.toLowerCase().includes('help')) {
    response = 'Sure, I am here to help you! What do you need?';
  } else if (userInput.toLowerCase().includes('bye')) {
    response = 'Goodbye! Have a great day!';
  } else if (userInput.toLowerCase().includes('what is figma')) {
    response = 'Figma is a cloud-based design tool primarily used for UI/UX design, prototyping, and collaboration.';

  } else if (userInput.toLowerCase().includes('how to create a frame')) {
    response = 'To create a frame in Figma, press "F" on your keyboard or select the Frame tool from the toolbar, then click and drag to create a frame on your canvas.';

  } else if (userInput.toLowerCase().includes('how to export assets')) {
    response = 'To export assets in Figma, select the elements you want to export, click the export button in the right-hand sidebar, choose your format (PNG, SVG, etc.), and click "Export".';

  } else if (userInput.toLowerCase().includes('how to use components')) {
    response = 'Components in Figma are reusable design elements. To create one, select an element, right-click, and choose "Create Component". You can then use instances of this component throughout your design.';

  } else if (userInput.toLowerCase().includes('how to share my project')) {
    response = 'To share your Figma project, click on the "Share" button in the top-right corner and enter the email addresses of the people you want to invite. You can also set permissions to view or edit.';

  } else if (userInput.toLowerCase().includes('how to use prototyping')) {
    response = 'To create a prototype in Figma, go to "Prototype" mode, select the object you want to link, and drag the blue arrow to another frame to create a connection. You can adjust animations';
    // User asks about Figma prototypes
  } else if (userInput.toLowerCase().includes('prototype')) {
    response = 'To create a prototype in Figma, click the Prototype tab in the right panel, then connect frames by dragging interactions between them.';

    // User asks about sharing Figma files
  } else if (userInput.toLowerCase().includes('share')) {
    response = 'You can share your Figma file by clicking the "Share" button in the top-right corner and entering the email addresses of your collaborators.';

    // User asks about Figma components
  } else if (userInput.toLowerCase().includes('component')) {
    response = 'Figma components allow you to create reusable elements. You can create one by selecting your design and choosing "Create Component" from the right-click menu.';

    // User asks about Figma plugins
  } else if (userInput.toLowerCase().includes('plugin')) {
    response = 'To use plugins in Figma, go to the menu, select "Plugins", and browse the Plugin Library. You can install and use any plugin to extend Figma’s functionality.';

    // User asks about exporting designs
  } else if (userInput.toLowerCase().includes('export')) {
    response = 'To export a design in Figma, select the object or frame, click "Export" in the right panel, choose the format (PNG, JPG, etc.), and click "Export".';

    // User asks about design systems
  } else if (userInput.toLowerCase().includes('design system')) {
    response = 'A design system in Figma helps maintain consistency. You can create one by organizing styles, components, and assets into a shared library for your team.';

    // User asks about creating grids in Figma
  } else if (userInput.toLowerCase().includes('grid')) {
    response = 'To add a grid in Figma, select a frame, go to the right panel, and click the "+" next to Layout Grids. You can adjust columns, rows, or set custom grid styles.';

    // User asks about Figma auto layout
  } else if (userInput.toLowerCase().includes('auto layout')) {
    response = 'Auto Layout in Figma helps you create flexible and responsive designs. Select your frame or group, and click "Add Auto Layout" in the right panel to adjust spacing and alignment.';

    // User asks about Figma version history
  } else if (userInput.toLowerCase().includes('version history')) {
    response = 'To view version history in Figma, click the file name at the top of your file, then select "Show Version History". You can view, restore, or name previous versions.';

    // User asks about creating animations in Figma
  } else if (userInput.toLowerCase().includes('animation')) {
    response = 'To create animations in Figma, use Smart Animate. When setting up interactions in the Prototype tab, choose Smart Animate to automatically animate changes between frames.';

    // User asks about Figma libraries
  } else if (userInput.toLowerCase().includes('library')) {
    response = 'Figma Libraries let you share components, styles, and assets. You can create a library by publishing components and styles to your team’s shared library.';

    // User asks about importing Sketch files into Figma
  } else if (userInput.toLowerCase().includes('import sketch')) {
    response = 'You can import Sketch files into Figma by dragging and dropping the .sketch file into Figma. Figma will automatically convert it for you to continue working on it.';

    // User asks about Figma shortcuts
  } else if (userInput.toLowerCase().includes('shortcut')) {
    response = 'Figma has many shortcuts, such as "Cmd + G" (Mac) or "Ctrl + G" (Windows) to group objects. You can find a full list under Help > Keyboard Shortcuts.';

    // User asks about Figma comments
  } else if (userInput.toLowerCase().includes('comment')) {
    response = 'You can add comments in Figma by selecting the Comment tool from the toolbar or pressing "C" on your keyboard, then clicking anywhere on the canvas to leave your feedback.';

    // User asks about constraints in Figma
  } else if (userInput.toLowerCase().includes('constraints')) {
    response = 'Constraints in Figma help control how objects behave when you resize their frames. You can set them in the right-hand panel by adjusting how objects are pinned.';

    // User asks about using styles in Figma
  } else if (userInput.toLowerCase().includes('style')) {
    response = 'You can create and apply styles for colors, text, and effects in Figma. Select an object, and in the right panel, click the four dots next to Fill, Stroke, or Text to create a style.';

  } else {
    response = "I'm sorry, kya bola?";
  }*/

  // Add bot response to chat after a short delay
  // 1 second delay for bot response
}
