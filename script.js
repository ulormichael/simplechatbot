document.addEventListener('DOMContentLoaded', function() {
  showMessage("Chatbot: Hi! How can I help you today?");
});

function sendMessage() {
  var userMessage = document.getElementById('user-message').value;
  showMessage("You: " + userMessage);

  
  if (userMessage.toLowerCase().includes("services")) {
    showMessage("Chatbot: We offer a range of services to meet your needs. Whether you're looking for Service 1 or Service 2, we've got you covered.");
    showCTA("Learn more about our services", "https://ulormichael.netlify.app/");
  } else if (userMessage.toLowerCase().includes("contact")) {
    showMessage("Chatbot: You can reach us by phone at +2348060624316 or send us an email at ulormichael@gmail.com. Our team is ready to assist you.");
    showCTA("Contact us now", "https://ulormichael.netlify.app/");
  } else {
    showMessage("Chatbot: I'm sorry, I didn't understand that. Can you please ask another question?");
  }


  document.getElementById('user-message').value = '';
}

function showMessage(message) {
  var chatMessages = document.getElementById('chat-messages');
  chatMessages.innerHTML += "<p>" + message + "</p>";
}

function showCTA(text, link) {
  var chatMessages = document.getElementById('chat-messages');
  chatMessages.innerHTML += '<p class="cta-message">' + text + '</p>';
  chatMessages.innerHTML += '<p><a href="' + link + '" target="_blank">Click here</a></p>';
}
