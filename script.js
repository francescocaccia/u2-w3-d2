const paragraph = document.getElementById("savedName");
const yourName = document.getElementById("nome");
const saveBtn = document.getElementById("save");
const deleteBtn = document.getElementById("delete");

window.addEventListener("DOMContentLoaded", () => {
  saveBtn.addEventListener("click", event => {
    event.preventDefault();
    localStorage.setItem("name", yourName.value);
    paragraph.innerText = yourName.value;
  });
  deleteBtn.addEventListener("click", event => {
    event.preventDefault();
    localStorage.removeItem("name");
    yourName.value = "";
    paragraph.innerText = "";
  });
  setInterval(countingNumbers, 1000);
});

const countingNumbers = () => {
  let num = sessionStorage.getItem("counter");
  if (!num) {
    num = 0;
  }
  num++;
  sessionStorage.setItem("counter", num);
  document.getElementById("numbers").innerText = num;
};

window.onload = () => {
  let savedName = localStorage.getItem("name");

  if (savedName) {
    paragraph.innerText = savedName;
  }
};
