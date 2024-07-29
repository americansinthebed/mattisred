let button = document.querySelector('button');
let counter = document.getElementById('counter');
let count = 0;
let bronzeCount = 0;
let silverCount = 0;
let goldCount = 0;
let diamondCount = 0;

// Get the cookie values (if they exist)
let savedCount = getCookie("clickCount");;
let savedBronzeCount = getCookie("bronzeCount");
let savedSilverCount = getCookie("silverCount");
let savedGoldCount = getCookie("goldCount");
let savedDiamondCount = getCookie("diamondCount");

// If cookies exist, use their values
if (savedCount) {
  count = parseInt(savedCount);
  counter.textContent = count;
}
if (savedBronzeCount) {
  bronzeCount = parseInt(savedBronzeCount);
}
if (savedSilverCount) {
  silverCount = parseInt(savedSilverCount);
}
if (savedGoldCount) {
  goldCount = parseInt(savedGoldCount);
}
if (savedDiamondCount) {
  diamondCount = parseInt(savedDiamondCount);
}

updateHeader();

button.addEventListener('click', () => {
  count++;
  counter.textContent = count;
  setCookie("clickCount", count, 365); 

  let rarity = determineRarity();

  switch (rarity) {
    case "bronze":
      bronzeCount++;
      break;
    case "silver":
      silverCount++;
      break;
    case "gold":
      goldCount++;
      break;
    case "diamond":
      diamondCount++;
      break;
  }

  setCookie("bronzeCount", bronzeCount, 365);
  setCookie("silverCount", silverCount, 365);
  setCookie("goldCount", goldCount, 365);
  setCookie("diamondCount", diamondCount, 365);

  switch (rarity) {
    case "bronze":
      button.style.backgroundColor = "brown";
      break;
    case "silver":
      button.style.backgroundColor = "silver";
      break;
    case "gold":
      button.style.backgroundColor = "gold";
      break;
    case "diamond":
      button.style.backgroundColor = "lightblue";
      break;
  }

  updateHeader();
});

function determineRarity() {
  let randomChance = Math.random() * 100;

  if (randomChance < 70) {
    return "bronze";
  } else if (randomChance < 90) {
    return "silver";
  } else if (randomChance < 98) {
    return "gold";
  } else {
    return "diamond";
  }
}

function updateHeader() {
  counter.textContent = `Bronze: ${bronzeCount}, Silver: ${silverCount}, Gold: ${goldCount}, Diamond: ${diamondCount}`;
}

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
