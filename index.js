const freelancers = [
    { name: "Dr. Slice", price: 25, occupation: "gardener" },
    { name: "Dr. Pressure", price: 51, occupation: "programmer" },
    { name: "Prof. Possibility", price: 43, occupation: "teacher" },
    { name: "Prof. Prism", price: 81, occupation: "teacher" },
    { name: "Dr. Impulse", price: 43, occupation: "teacher" },
    { name: "Prof. Spark", price: 76, occupation: "programmer" },
    { name: "Dr. Wire", price: 47, occupation: "teacher" },
    { name: "Prof. Goose", price: 72, occupation: "driver" },
  ];
//made new arrays to help with my own sanity
const names = [`Dr. Slice`, `Dr. Pressure`, `Prof. Possibility`, `Prof. Prism`, `Dr. Impulse`, `Prof. Spark`, `Dr. Wire`, `Prof. Goose`]
const prices = [25, 51, 43, 81, 43, 76, 47, 72]
const occupations = [`gardener`, `programmer`, `teacher`, `teacher`, `teacher`, `programmer`, `teacher`, `driver`]


//created elements
const body = document.body;
const h1 = document.createElement(`h1`);
const h2 = document.createElement(`h2`);
const info = document.createElement(`section`);


//this is to add elements to HTML
body.appendChild(h1);
body.appendChild(h2);
body.appendChild(info);

//this is to get the average price of the freelancers
const getSum = (prices) => {
    let priceSum = 0;
    for (let i=0; i < prices.length; i++){
    priceSum += prices[i];}
return priceSum;}
const getAverage = (prices) =>{
    return getSum(prices)/prices.length;} 









//this puts words into the HTML elements described above
h1.textContent = `Freelancer Forum`;
h2.textContent = `The average starting price is: ${getAverage(prices)}`
