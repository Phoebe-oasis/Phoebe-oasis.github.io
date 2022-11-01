const myImage = document.querySelector("img");

myImage.onclick = () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "images/uname.png") {
    myImage.setAttribute("src", "images/van.jpg");
  } else {
    myImage.setAttribute("src", "images/uname.png");
  }
};

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName() {//让用户输入自己的名字
    const myName = prompt("Please enter your name.");
    if (!myName) {
      setUserName();//如果未输入名字，则回到开头，确保用户输入了名字
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
  