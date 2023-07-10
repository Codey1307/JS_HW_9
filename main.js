arr = ["hello", "world", "Kiev", "Kharkiv", "Odessa", "Lviv"];
parent = document.body;

function getList(arr, parent) {
  ul = document.createElement("ul");
  parent.prepend(ul);
  for (let i = 0; i < arr.length; i++) {
    li = document.createElement("li")
    ul.append(li);
    li.textContent = arr[i];
  }
}

getList(arr, parent);
