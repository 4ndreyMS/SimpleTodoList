// Create a "close" button and append it to each list item
var myNodelist = document.getElementsByTagName("LI");
var i;
for (i = 0; i < myNodelist.length; i++) {
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
}

// Click on a close button to hide the current list item
var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function () {
    var div = this.parentElement;
    div.style.display = "none";
  };
}

// Add a "checked" symbol when clicking on a list item
// var list = document.querySelector("ul");
// list.addEventListener(
//   "click",
//   function (ev) {
//     if (ev.target.tagName === "LI") {
//       ev.target.classList.add("checked");
//       const pElement = ev.target.querySelector("p");
//       pElement.style.textDecoration = "line-through";
//     }
//   },
//   false
// );

var list = document.querySelector("ul");
list.addEventListener(
  "click",
  function (ev) {
    if (ev.target.tagName === "LI") {
      ev.target.classList.add("checked");
      const pElement = ev.target.querySelector("p");
      pElement.style.textDecoration = "line-through";
    }
  },
  false
);

// Create a new list item when clicking on the "Add" button
function newElement() {
  var li = document.createElement("li");
  var inputValue = document.getElementById("myInput").value;
  var t = document.createElement("p");
  t.textContent = inputValue;
  li.appendChild(t);
  if (inputValue === "") {
    alert("You must write something!");
  } else {
    document.getElementById("myUL").appendChild(li);
  }
  document.getElementById("myInput").value = "";

  const staticEl = document.getElementById("staticEl");
  // Check if the element has the "display: none" property
  if (!staticEl.classList.contains("hide")) {
    // The element has "display: none"
    staticEl.classList.add("hide");
  }

  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);

  var divTools = document.createElement("div");
  divTools.classList.add("align-center");

  //   div.appendChild(span);
  var doneButton = document.createElement("span");
  doneButton.textContent = "\u2713";
  doneButton.className = "done";

  // Add click event listeners for the Done and Cancel buttons
  doneButton.addEventListener("click", function () {
    const parent = doneButton.parentElement.parentElement;
    parent.classList.add("checked");
    const pElement = parent.querySelector("p");
    pElement.style.textDecoration = "line-through";
    doneButton.classList.add("hide");
  });

  divTools.appendChild(doneButton);

  divTools.appendChild(span);
  li.appendChild(divTools);
  li.classList.add("align-center");

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function () {
      var div = this.parentElement.parentElement;
      div.style.display = "none";
    };
  }
}
