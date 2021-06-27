`use restrict`;

let Seattle = {
  minCustomer: 23,
  maxCustomer: 65,
  avgCookie: 6.3,
  NoOfRndCustomer: 0,

  getNoOfRnd: function () {
    this.NoOfRndCustomer = randomCustomer(
      Seattle.minCustomer,
      Seattle.maxCustomer
    );
  },

  cookiePurchased: 0,
  getNoOfPurchased: function () {
    this.cookiePurchased = amountOfCookie(
      Seattle.avgCookie,
      Seattle.NoOfRndCustomer
    );
  },

  //--------------
[Object1['d'], Object2['f']] ,
};

Seattle.getNoOfRnd();
Seattle.getNoOfPurchased();

//console.log(Seattle);
function randomCustomer(minCustomer, maxCustomer) {
  return Math.round(
    Math.random() * (maxCustomer - minCustomer + 1) + minCustomer
  );
}

console.log(Seattle);
console.log(Seattle.NoOfRndCustomer);
//-----------------------------------
function amountOfCookie(avgCookie, NoOfRndCustomer) {
  return Math.round(NoOfRndCustomer * avgCookie);
}

console.log(Seattle.cookiePurchased);

//-------------------------------------------------

let parent = document.getElementById("rest");

let headerSeattle = document.createElement("h2");
parent.appendChild(headerSeattle);
headerSeattle.textContent = "Seattle";

let unOl = document.createElement("ul");
parent.appendChild(unOl);

for (let i = 0; i < 10; i++) {
  let listItem = document.createElement("li");
  unOl.appendChild(listItem);
  listItem.textContent = "asdfghjk";
}
