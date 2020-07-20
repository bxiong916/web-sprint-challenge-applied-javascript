// STEP 1: Create a Header component.
// -----------------------
// Write a function that returns the markup you see below:
//
//  <div class="header">
//    <span class="date">MARCH 28, 2020</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div>
//
// Use your function to create a header
// and append it to the DOM inside the div.header-container


function headerComponent() {
  // DOM Components
  const header = document.createElement("div");
  const dateLine = document.createElement("span");
  const headerTitle = document.createElement("h1");
  const temp = document.createElement("span");

  // Classes Section
  header.classList.add("header");
  dateLine.classList.add("date");
  temp.classList.add("temp");

  // Structure like HTML
    header.appendChild(dateLine);
    header.appendChild(headerTitle);
    header.appendChild(temp);

  // Content Section
    headerTitle.textContent = "Lambda Times";
    temp.textContent = "98°";
    
  return;
}

const headerContainer = document.querySelector("div.header-container");

headerContainer.appendChild(headerComponent());
