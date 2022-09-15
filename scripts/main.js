let myImage = document.querySelector("img");

myImage.onclick = () => {
  let imageSource = myImage.getAttribute("src");
  if (imageSource === "images/ingrid.jpg") {
    myImage.setAttribute("src", "images/ingrid2.jpg");
  } else {
    myImage.setAttribute("src", "images/ingrid.jpg");
  }
};

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName() {
  const myName = prompt("Please enter your name.");
  if (!myName) {
    setUserName();
  } else {
    localStorage.setItem("name", myName);
    myHeading.textContent = `Mozilla is cool, ${myName}`;
  }
}

if (!localStorage.getItem("name")) {
  setUserName();
} else {
  const storedName = localStorage.getItem("name");
  myHeading.textContent = `Mozilla is cool, ${storedName}`;
}

myButton.onclick = () => {
  setUserName();
};
