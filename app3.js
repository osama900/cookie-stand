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
//let customerNumEachHour = [],
// cookiesNumEachHour = [];
// rnd function
function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
let customerNumEachHour = [];
let cookiesNumEachHour = [];

function Brach(
  locationName,
  minCustomer,
  maxCustomer,
  avgCookie
  //   customerNumEachHour,
  //   cookiesNumEachHour
) {
  this.locationName = locationName;
  this.minCustomer = minCustomer;
  this.maxCustomer = maxCustomer;
  this.avgCookie = avgCookie;
  //   this.customerNumEachHour = customerNumEachHour;
  //   this.cookiesNumEachHour = cookiesNumEachHour;
}

let seattle = new Brach("Seattle", 20, 38, 2.3);
let dubai = new Brach("Dubai", 2, 2, 0.3);

Brach.prototype.getCalcCustomerNumEachHour = function () {
  for (let i = 0; i < workingHours.length; i++) {
    customerNumEachHour.push(random(this.minCustomer, this.maxCustomer));
  }
  this.customerNumEachHour = customerNumEachHour;
};

Brach.prototype.getCalCookiesNumEachHour = function () {
  for (let i = 0; i < workingHours.length; i++) {
    cookiesNumEachHour.push(
      Math.floor(this.avgCookie * customerNumEachHour[i])
    );
    // this.total += this.cookiesNumEachHour[i];
  }
  console.log(this.locationName + " dddd " + cookiesNumEachHour);
};

Brach.prototype.render = function () {
  this.getCalcCustomerNumEachHour();
  this.getCalCookiesNumEachHour();

  let t = 0;
  const parentElement = document.getElementById("rest");

  let tableElement = document.createElement("table");
  parentElement.appendChild(tableElement);

  let headerRow = document.createElement("tr");
  tableElement.appendChild(headerRow);

  let td1 = document.createElement("td");
  let locRow = document.createElement("tr");

  locRow.appendChild(td1);
  td1.textContent = this.locationName;

  let th1 = document.createElement("th");
  headerRow.appendChild(th1);
  th1.textContent = "";
  for (let i = 0; i < workingHours.length; i++) {
    let th1 = document.createElement("th");
    headerRow.appendChild(th1);
    th1.textContent = workingHours[i];
  }
  let thTotal = document.createElement("th");
  headerRow.appendChild(thTotal);
  thTotal.textContent = "Total";
  for (let i = 0; i < workingHours.length; i++) {
    // le totalTotal = totalTotal + cookiesNumEachHour[i];
    tableElement.appendChild(locRow);
    t = t + cookiesNumEachHour[i];
    let td2 = document.createElement("td");
    locRow.appendChild(td2);
    td2.textContent = cookiesNumEachHour[i];
    console.log(cookiesNumEachHour[i]);
  }
  let tdT = document.createElement("td");
  locRow.appendChild(tdT);
  tdT.textContent = t;
  console.log(t);
};

//seattle.getCalcCustomerNumEachHour();
//seattle.getCalCookiesNumEachHour();

seattle.render();
//customerNumEachHour = [];
//cookiesNumEachHour = [];
//customerNumEachHour = [];
//cookiesNumEachHour = [];

//dubai.getCalcCustomerNumEachHour();
//dubai.getCalCookiesNumEachHour();
dubai.render();
