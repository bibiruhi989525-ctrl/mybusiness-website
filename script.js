function sendMessage() {
  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let message = document.getElementById("message").value;

  let whatsappURL = "https://wa.me/91XXXXXXXXXX?text="
    + "Name: " + name + "%0A"
    + "Email: " + email + "%0A"
    + "Message: " + message;

  window.open(whatsappURL, "_blank");
}
