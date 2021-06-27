`use restrict`;

let Seattle = {
  minCustomer: 23,
  maxCustomer: 65,
  avgCookie: 6.3,
  NoOfRndCustomer: 0,
  // rnd of customer
  getNoOfRnd: function () {
    this.NoOfRndCustomer = randomCustomer(
      Seattle.minCustomer,
      Seattle.maxCustomer
    );
  },

  ///rnd no. of sales
  cookiePurchased: 0,
  getNoOfPurchased: function () {
    this.cookiePurchased = amountOfCookie(
      Seattle.avgCookie,
      Seattle.NoOfRndCustomer
    );
  },

  sales: [],

  //--------------
};

Seattle.getNoOfRnd();
Seattle.getNoOfPurchased();

function randomCustomer(minCustomer, maxCustomer) {
  return Math.round(
    Math.random() * (maxCustomer - minCustomer + 1) + minCustomer
  );
}

//-----------------------------------
function amountOfCookie(avgCookie, NoOfRndCustomer) {
  return Math.round(NoOfRndCustomer * avgCookie);
}

console.log(Seattle);
console.log(Seattle.sales);

for (let i = 0; i < 14; i++) {
  Seattle.sales.push(
    Math.floor(
      Seattle.avgCookie *
        Math.random() *
        (Seattle.maxCustomer - Seattle.minCustomer + 1) +
        Seattle.minCustomer
    )
  );
}
console.log(Seattle.sales);
let sumSeatel = 0;
for (let j = 0; j < Seattle.sales.length; j++) {
  sumSeatel = sumSeatel + Seattle.sales[j];
}
console.log("total = " + sumSeatel);

//-------------------------------------------------

let parent = document.getElementById("rest");

let headerSeattle = document.createElement("h2");
parent.appendChild(headerSeattle);
headerSeattle.textContent = "Seattle";

let unOl = document.createElement("ul");
parent.appendChild(unOl);

for (let lt = 0; lt < 14; lt++) {
  let listItem = document.createElement("li");
  unOl.appendChild(listItem);
  let amPm = 6 + lt;

  if (amPm < 12) {
    listItem.textContent = amPm + " am : " + Seattle.sales[lt];
  } else if (amPm == 12) {
    listItem.textContent = amPm + " pm : " + Seattle.sales[lt];
  } else {
    let rre = amPm - 12;
    listItem.textContent = rre + " pm : " + Seattle.sales[lt];
  }
}
let listItem2 = document.createElement("li");
unOl.appendChild(listItem2);
listItem2.textContent = "Total : " + sumSeatel;
//--------------------end of seattle -----------------------
//
//
//
//------------------- start of Tokyo ----------------------------
`use restrict`;

let Tokyo = {
  minCustomer: 3,
  maxCustomer: 24,
  avgCookie: 1.2,
  NoOfRndCustomer: 0,
  // rnd of customer
  getNoOfRnd: function () {
    this.NoOfRndCustomer = randomCustomer(Tokyo.minCustomer, Tokyo.maxCustomer);
  },

  ///rnd no. of sales
  cookiePurchased: 0,
  getNoOfPurchased: function () {
    this.cookiePurchased = amountOfCookie(
      Tokyo.avgCookie,
      Tokyo.NoOfRndCustomer
    );
  },

  sales: [],

  //--------------
};

Tokyo.getNoOfRnd();
Tokyo.getNoOfPurchased();

function randomCustomer(minCustomer, maxCustomer) {
  return Math.round(
    Math.random() * (maxCustomer - minCustomer + 1) + minCustomer
  );
}

//-----------------------------------
function amountOfCookie(avgCookie, NoOfRndCustomer) {
  return Math.round(NoOfRndCustomer * avgCookie);
}

console.log(Tokyo);
console.log(Tokyo.sales);

for (let i = 0; i < 14; i++) {
  Tokyo.sales.push(
    Math.floor(
      Tokyo.avgCookie *
        Math.random() *
        (Tokyo.maxCustomer - Tokyo.minCustomer + 1) +
        Tokyo.minCustomer
    )
  );
}
console.log(Tokyo.sales);
let sumTokyo = 0;
for (let j = 0; j < Tokyo.sales.length; j++) {
  sumTokyo = sumTokyo + Tokyo.sales[j];
}
console.log("total = " + sumTokyo);

//-------------------------------------------------

//let parent = document.getElementById("rest");

let headerTokyo = document.createElement("h2");
parent.appendChild(headerTokyo);
headerTokyo.textContent = "Tokyo";

let unOl2 = document.createElement("ul");
parent.appendChild(unOl2);

for (let lt = 0; lt < 14; lt++) {
  let listItem = document.createElement("li");
  unOl2.appendChild(listItem);
  let amPm = 6 + lt;

  if (amPm < 12) {
    listItem.textContent = amPm + " am : " + Tokyo.sales[lt];
  } else if (amPm == 12) {
    listItem.textContent = amPm + " pm : " + Tokyo.sales[lt];
  } else {
    let rre = amPm - 12;
    listItem.textContent = rre + " pm : " + Tokyo.sales[lt];
  }
}
let listItem22 = document.createElement("li");
unOl2.appendChild(listItem22);
listItem22.textContent = "Total : " + sumTokyo;
//--------------------end of Tokyo -----------------------
//
//
//
//------------------- start of Dubai ----------------------------
let Dubai = {
  minCustomer: 11,
  maxCustomer: 38,
  avgCookie: 3.7,
  NoOfRndCustomer: 0,

  getNoOfRnd: function () {
    this.NoOfRndCustomer = randomCustomer(
      Dubai.NoOfRndCustomer,
      Dubai.minCustomer
    );
  },
  cookiePurchased: 0,
  getNoOfPurchased: function () {
    this.cookiePurchased = amountOfCookie(
      Dubai.avgCookie,
      Dubai.NoOfRndCustomer
    );
  },

  sales: [],
};
Dubai.getNoOfRnd();
Dubai.getNoOfPurchased();

function randomCustomer(minCustomer, maxCustomer) {
  return Math.round(
    Math.random() * (maxCustomer - minCustomer + 1) + minCustomer
  );
}
function amountOfCookie(avgCookie, NoOfRndCustomer) {
  return Math.round(NoOfRndCustomer * avgCookie);
}

for (let i = 0; i < 14; i++) {
  Dubai.sales.push(
    Math.floor(
      Dubai.avgCookie *
        Math.random() *
        (Dubai.maxCustomer - Dubai.minCustomer + 1) +
        Dubai.minCustomer
    )
  );
  //console.log("ddddddddd" + Dubai.sales);
}

let sumDubai = 0;
for (let k = 0; k < Dubai.sales.length; k++) {
  sumDubai = sumDubai + Dubai.sales[k];
}

let headerDubai = document.createElement("h2");
parent.appendChild(headerDubai);
headerDubai.textContent = "Dubai";

let unOlDubai = document.createElement("ul");
parent.appendChild(unOlDubai);

for (let lt = 0; lt < 14; lt++) {
  let listItemDubai = document.createElement("li");
  unOlDubai.appendChild(listItemDubai);

  let amPm = 6 + lt;

  if (amPm < 12) {
    listItemDubai.textContent = amPm + " am : " + Tokyo.sales[lt];
  } else if (amPm == 12) {
    listItemDubai.textContent = amPm + " pm : " + Tokyo.sales[lt];
  } else {
    let rre = amPm - 12;
    listItemDubai.textContent = rre + " pm : " + Tokyo.sales[lt];
  }
}
let listItemDubai = document.createElement("li");
unOlDubai.appendChild(listItemDubai);
listItemDubai.textContent = "Total : " + sumDubai;
//----------end of Dubai --------------
//
//
//
//------------- start of Paris------------

let Paris = {
  minCustomer: 20,
  maxCustomer: 38,
  avgCookie: 2.3,
  NoOfRndCustomer: 0,
  // rnd of customer
  getNoOfRnd: function () {
    this.NoOfRndCustomer = randomCustomer(Paris.minCustomer, Paris.maxCustomer);
  },

  ///rnd no. of sales
  cookiePurchased: 0,
  getNoOfPurchased: function () {
    this.cookiePurchased = amountOfCookie(
      Paris.avgCookie,
      Paris.NoOfRndCustomer
    );
  },

  sales: [],

  //--------------
};

Paris.getNoOfRnd();
Paris.getNoOfPurchased();

function randomCustomer(minCustomer, maxCustomer) {
  return Math.round(
    Math.random() * (maxCustomer - minCustomer + 1) + minCustomer
  );
}

//-----------------------------------
function amountOfCookie(avgCookie, NoOfRndCustomer) {
  return Math.round(NoOfRndCustomer * avgCookie);
}

console.log(Paris);
console.log(Paris.sales);

for (let i = 0; i < 14; i++) {
  Paris.sales.push(
    Math.floor(
      Paris.avgCookie *
        Math.random() *
        (Paris.maxCustomer - Paris.minCustomer + 1) +
        Paris.minCustomer
    )
  );
}
console.log(Paris.sales);
let sumParis = 0;
for (let j = 0; j < Paris.sales.length; j++) {
  sumParis = sumParis + Paris.sales[j];
}
console.log("total = " + sumParis);

//-------------------------------------------------

//let parent = document.getElementById("rest");

let headerParis = document.createElement("h2");
parent.appendChild(headerParis);
headerParis.textContent = "Paris";

let unOlParis = document.createElement("ul");
parent.appendChild(unOlParis);

for (let lt = 0; lt < 14; lt++) {
  let listItemParis = document.createElement("li");
  unOlParis.appendChild(listItemParis);
  let amPm = 6 + lt;

  if (amPm < 12) {
    listItemParis.textContent = amPm + " am : " + Paris.sales[lt];
  } else if (amPm == 12) {
    listItemParis.textContent = amPm + " pm : " + Paris.sales[lt];
  } else {
    let rre = amPm - 12;
    listItemParis.textContent = rre + " pm : " + Paris.sales[lt];
  }
}
let listItemParis = document.createElement("li");
unOlParis.appendChild(listItemParis);
listItemParis.textContent = "Total : " + sumParis;
//--------------------end of Paris-----------
//
//
//
//------------start of lima ----------

let Lima = {
  minCustomer: 2,
  maxCustomer: 16,
  avgCookie: 4.6,
  NoOfRndCustomer: 0,
  // rnd of customer
  getNoOfRnd: function () {
    this.NoOfRndCustomer = randomCustomer(Lima.minCustomer, Lima.maxCustomer);
  },

  ///rnd no. of sales
  cookiePurchased: 0,
  getNoOfPurchased: function () {
    this.cookiePurchased = amountOfCookie(Lima.avgCookie, Lima.NoOfRndCustomer);
  },

  sales: [],

  //--------------
};

Lima.getNoOfRnd();
Lima.getNoOfPurchased();

function randomCustomer(minCustomer, maxCustomer) {
  return Math.round(
    Math.random() * (maxCustomer - minCustomer + 1) + minCustomer
  );
}

//-----------------------------------
function amountOfCookie(avgCookie, NoOfRndCustomer) {
  return Math.round(NoOfRndCustomer * avgCookie);
}

console.log(Lima);
console.log(Lima.sales);

for (let i = 0; i < 14; i++) {
  Lima.sales.push(
    Math.floor(
      Lima.avgCookie *
        Math.random() *
        (Lima.maxCustomer - Lima.minCustomer + 1) +
        Lima.minCustomer
    )
  );
}
console.log(Lima.sales);
let sumLima = 0;
for (let j = 0; j < Lima.sales.length; j++) {
  sumLima = sumLima + Lima.sales[j];
}
console.log("total = " + sumLima);

//-------------------------------------------------

//let parent = document.getElementById("rest");

let headerLima = document.createElement("h2");
parent.appendChild(headerLima);
headerLima.textContent = "Lima";

let unOlLima = document.createElement("ul");
parent.appendChild(unOlLima);

for (let lt = 0; lt < 14; lt++) {
  let listItemLima = document.createElement("li");
  unOlLima.appendChild(listItemLima);
  let amPm = 6 + lt;

  if (amPm < 12) {
    listItemLima.textContent = amPm + " am : " + Lima.sales[lt];
  } else if (amPm == 12) {
    listItemLima.textContent = amPm + " pm : " + Lima.sales[lt];
  } else {
    let rre = amPm - 12;
    listItemLima.textContent = rre + " pm : " + Lima.sales[lt];
  }
}
let listItemLima = document.createElement("li");
unOlLima.appendChild(listItemLima);
listItemLima.textContent = "Total : " + sumLima;
//--------------------end of Lima
