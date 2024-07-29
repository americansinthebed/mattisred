let button = document.querySelector('button');
let counter = document.getElementById('counter'); 
let count = 0;

// Get the cookie value (if it exists)
let savedCount = getCookie("clickCount");

// If a cookie exists, use its value for the count
if (savedCount) {
  count = parseInt(savedCount);
  counter.textContent = count; 
}

button.addEventListener('click', () => {
  count++;
  counter.textContent = count;
  setCookie("clickCount", count, 365); // Save the count in a cookie
});

// Cookie functions
function getCookie(cname) {
  let name = cname + "=";
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(';');
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

function setCookie(cname, cvalue, exdays) {
  const d = new Date();
  d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
  let expires = "expires=" + d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}