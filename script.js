//your code here!

const list = document.getElementById("infi-list");
let itemCount = 10; // Initial 10 items

// Function to add items to the list
function addItems(count) {
  for (let i = 0; i < count; i++) {
    const listItem = document.createElement("li");
    listItem.textContent = `Item ${itemCount + 1}`;
    list.appendChild(listItem);
    itemCount++;
  }
}

// Initial load of 10 items
addItems(10);

// Event listener for scrolling
list.addEventListener("scroll", function () {
  if (list.scrollTop + list.clientHeight >= list.scrollHeight) {
    addItems(2); // Add 2 more items when scrolled to bottom
  }
});