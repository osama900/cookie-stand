`use strict`;

let workingHours = [
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

function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
let branchArray = [];

function Brach(locationName, minCustomer, maxCustomer, avgCookie) {
  this.locationName = locationName;
  this.minCustomer = minCustomer;
  this.maxCustomer = maxCustomer;
  this.avgCookie = avgCookie;
  //-------------------------------------------------
  this.customerNumEachHour = [];
  this.cookiesNumEachHour = [];
  //------------------------
  this.totalCookiesPerHour = 0;
  branchArray.push(this);
}

let seattle = new Brach("Seattle", 23, 65, 6.3);
let tokyo = new Brach("Tokyo", 3, 24, 1.2);
let dubai = new Brach("Dubai", 11, 38, 3.7);
let paris = new Brach("Paris", 20, 38, 2.3);
let lima = new Brach("Lima", 2, 16, 4.6);
//console.log("1--------------" + cookiesNumEachHour);

Brach.prototype.getCalcCustomerNumEachHour = function () {
  for (let i = 0; i < workingHours.length; i++) {
    this.customerNumEachHour.push(random(this.minCustomer, this.maxCustomer));
  }
};

Brach.prototype.getCalCookiesNumEachHour = function () {
  for (let i = 0; i < workingHours.length; i++) {
    this.cookiesNumEachHour.push(
      Math.floor(this.avgCookie * this.customerNumEachHour[i])
    );
    this.totalCookiesPerHour += this.cookiesNumEachHour[i];
  }
};

let parent = document.getElementById("rest");
let tableE = document.createElement("table");
parent.appendChild(tableE);

function makeHeader() {
  let headerRow = document.createElement("tr");
  tableE.append(headerRow);
  //------ create th
  let firstTh = document.createElement("th");
  headerRow.appendChild(firstTh);
  firstTh.textContent = "Branch Name";
  //-

  for (let i = 0; i < workingHours.length; i++) {
    let thElement = document.createElement("th");
    headerRow.appendChild(thElement);
    thElement.textContent = workingHours[i];
  }

  let lastTh = document.createElement("th");
  headerRow.appendChild(lastTh);
  lastTh.textContent = "Location Total";
}
makeHeader();

Brach.prototype.render = function () {
  let dataRaw = document.createElement("tr");
  tableE.appendChild(dataRaw);

  let nameData = document.createElement("td");
  dataRaw.appendChild(nameData);
  nameData.textContent = this.locationName;

  for (let i = 0; i < workingHours.length; i++) {
    let tdElement = document.createElement("td");
    dataRaw.appendChild(tdElement);
    tdElement.textContent = this.cookiesNumEachHour[i];
  }
  let totalD = document.createElement("td");
  dataRaw.appendChild(totalD);
  totalD.textContent = this.totalCookiesPerHour;
};
console.log(tableE);

for (let i = 0; i < branchArray.length; i++) {
  branchArray[i].getCalcCustomerNumEachHour();
  branchArray[i].getCalCookiesNumEachHour();

  branchArray[i].render();
}
function makeFooter() {
  let footerRow = document.createElement("tr");
  tableE.appendChild(footerRow);

  let footerTh = document.createElement("th");
  footerRow.appendChild(footerTh);
  footerTh.textContent = "total";
  /// total of t
  let megaTotal = 0;
  for (let i = 0; i < workingHours.length; i++) {
    let totalEachHour = 0;
    for (let j = 0; j < branchArray.length; j++) {
      totalEachHour += branchArray[j].cookiesNumEachHour[i];
      megaTotal += branchArray[j].cookiesNumEachHour[i];
    }

    let footerData = document.createElement("td");
    footerRow.appendChild(footerData);
    footerData.textContent = totalEachHour;
  }

  let finalTd = document.createElement("td");
  footerRow.appendChild(finalTd);
  finalTd.textContent = megaTotal;
}

makeFooter();
