const data = [
  {
    imageSrc: "./public/src/img/google.jpg",
    altText: "Google",
    title: "The Rise of Google Home & Google 'Action'",
  },
  {
    imageSrc: "./public/src/img/map.jpg",
    altText: "Google",
    title: "Google Maps now has a video feature for Android",
  },
  {
    imageSrc: "./public/src/img/ios18.jpg",
    altText: "Google",
    title: "iOS 18: New text format and effects in messengers",
  },
  {
    imageSrc: "./public/src/img/phone.jpg",
    altText: "Google",
    title: "New anti-theft feature rolling out on Android 15",
  },
  {
    imageSrc: "./public/src/img/trick.jpg",
    altText: "Google",
    title: "Secret trick to send a text",
  },
  {
    imageSrc: "./public/src/img/speacker.jpg",
    altText: "Google",
    title: "Set up your smart speaker",
  },
  {
    imageSrc: "./public/src/img/google.jpg",
    altText: "Google",
    title: "The Rise of Google Home & Google 'Action'",
  },
  {
    imageSrc: "./public/src/img/map.jpg",
    altText: "Google",
    title: "Google Maps now has a video feature for Android",
  },
  {
    imageSrc: "./public/src/img/ios18.jpg",
    altText: "Google",
    title: "iOS 18: New text format and effects in messengers",
  },
];

// Card View
const cardData = document.getElementById("cardData");
let cardsHTML = "";
for (let i = 0; i < data.length; i++) {
  const item = `
          <div class="mt-2 shadow-md rounded-md">
            <img src="${data[i].imageSrc}" alt="${data[i].altText}" class="h-32 rounded-md object-cover" />
            <p class="font-medium p-2">${data[i].title}</p>
          </div>
        `;
  cardsHTML += item;
}
cardData.innerHTML = cardsHTML;

// Table View
const tableData = document.getElementById("tableData");
let tableHTML = "";
for (let i = 0; i < data.length; i++) {
  const row = `
          <tr class="border border-black">
            <td class="p-2 border border-black text-center">
              <img src="${data[i].imageSrc}" alt="${data[i].altText}" class="h-10 w-32 object-cover mx-auto rounded">
            </td>
            <td class="p-2 border border-black text-center text-black">${data[i].title}</td>
          </tr>
        `;
  tableHTML += row;
}
tableData.innerHTML = tableHTML;

// Toggle Views
const tableContainer = document.getElementById("tableContainer");
const tableViewBtn = document.getElementById("tableViewBtn");
const cardViewBtn = document.getElementById("cardViewBtn");

tableViewBtn.addEventListener("click", () => {
  tableContainer.classList.remove("hidden");
  cardData.classList.add("hidden");
});

cardViewBtn.addEventListener("click", () => {
  cardData.classList.add("grid");
  cardData.classList.remove("hidden");
  tableContainer.classList.add("hidden");
});

let count = 0;
const clickcountContainer = document.getElementById("clickcount");
const clickcount = document.querySelector("#clickcount span");
const tableClickCountBtn = document.getElementById("tableViewBtn");
const cardViewClickcountBtn = document.getElementById("cardViewBtn");

function updateCount() {
  if (count < 10) {
    count += 1;
    clickcount.innerHTML = count;
  } else {
    clickcountContainer.innerHTML = "Free Limit Over";
  }
}

tableClickCountBtn.addEventListener("click", updateCount);

cardViewClickcountBtn.addEventListener("click", updateCount);
