const scriptURL = 'https://script.google.com/macros/s/AKfycbwX-k4a-OYBzQiCQ_pu1bo9OhLBhkdfgV7-z-jvL38pdE6QgGBUuYgdmdmkbmsYTDqy/exec'
const form = document.forms['submit-to-google-sheet']
const msg = document.querySelector("#msg");

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => {
      msg.textContent = "Thank you for subscribing!";
      setTimeout(function() {
        msg.textContent = "";
      }, 5000);
      form.reset();
    })
    .catch(error => console.error('Error!', error.message))
})