`use strict`;
const workingHours = [
  "",
  "6am",
  "7am",
  "8am",
  "9am",
  "10am",
  "11am",
  "12pm",
  "1pm",
  "2pm",
  "3pm",
  "4pm",
  "5pm",
  "6pm",
];

// rnd function
function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

let Lima = {
  locationName: "Lima",
  minCustomer: 20,
  maxCustomer: 38,
  avgCookie: 2.3,
  total: 0,
  //customer random value array
  customerNumEachHour: [],
  // cookies per hour
  cookiesNumEachHour: [],

  //rnd customer num function
  calcCustomerNumEachHour: function () {
    for (let i = 0; i < workingHours.length; i++) {
      this.customerNumEachHour.push(random(this.minCustomer, this.maxCustomer));
    }
  },
  //cookies num each hour
  calCookiesNumEachHour: function () {
    for (let i = 0; i < workingHours.length; i++) {
      this.cookiesNumEachHour.push(
        Math.floor(this.avgCookie * this.customerNumEachHour[i])
      );
      this.total += this.cookiesNumEachHour[i];
    }
    console.log(this.cookiesNumEachHour);
  },
  //export data lists
  exportResults: function () {
    let parent = document.getElementById("rest");
    let branchName = document.createElement("h2");
    parent.appendChild(branchName);
    branchName.textContent = this.locationName;

    let unOrderList = document.createElement("ul");
    parent.appendChild(unOrderList);
    for (let i = 0; i < workingHours.length; i++) {
      let liItem = document.createElement("li");
      parent.appendChild(liItem);

      liItem.textContent = `${workingHours[i]}: ${this.cookiesNumEachHour[i]} cookies `;
    }
    let totalItem = document.createElement("li");
    parent.appendChild(totalItem);
    totalItem.textContent = `Total :${this.total} cookies`;
  },
};

Lima.calcCustomerNumEachHour();
Lima.calCookiesNumEachHour();
Lima.exportResults();

render = function () {
  const parentElement = document.getElementById("rest");

  let tableElement = document.createElement("table");
  parentElement.appendChild(tableElement);

  let headerRow = document.createElement("tr");
  tableElement.appendChild(headerRow);

  for (let i = 0; i < workingHours.length; i++) {
    let th1 = document.createElement("th");
    headerRow.appendChild(th1);
    th1.textContent = workingHours[i];
  }

  let locRow = document.createElement("tr");
  tableElement.appendChild(locRow);

  let td1 = document.createElement("td");
  locRow.appendChild(td1);
  td1.textContent = Lima.locationName;
  //   for (let j = 0; j < workingHours.length; j++) {
  let td2 = document.createElement("td");
  locRow.appendChild(td2);
  td2.textContent = cookiesNumEachHour[1];
  //   }
};

render();
