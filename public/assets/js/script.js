// script.js

document.addEventListener('DOMContentLoaded', function() {
  var sendEmailBtn = document.getElementById('sendEmailBtn');

  sendEmailBtn.addEventListener('click', function() {
    var subject = encodeURIComponent("Message from Contact Form");
    var body = encodeURIComponent("Please fill in your message here.");

    window.location.href = "mailto:mounir.boumaza.art@gmail.com?subject=" + subject + "&body=" + body;
  });
});
