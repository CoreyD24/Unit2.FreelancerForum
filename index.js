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
//made new array to help with my own sanity
const prices = [25, 51, 43, 81, 43, 76, 47, 72]


//created elements
const body = document.body;
const h1 = document.createElement(`h1`);
const h2 = document.createElement(`h2`);
const h1E1 = document.createElement(`h1`);

const group1 = document.createElement(`section`)

const nameList = document.createElement(`table`);

    const nLi1 = document.createElement(`li`);
    const nLi2 = document.createElement(`li`);
    const nLi3 = document.createElement(`li`);
    const nLi4 = document.createElement(`li`);
const priceList = document.createElement(`ol`);
    const pLi1 = document.createElement(`li`);
    const pLi2 = document.createElement(`li`);
    const pLi3 = document.createElement(`li`);
    const pLi4 = document.createElement(`li`);
const occupationList = document.createElement(`ol`);
    const oLi1 = document.createElement(`li`);
    const oLi2 = document.createElement(`li`);
    const oLi3 = document.createElement(`li`);
    const oLi4 = document.createElement(`li`);

//this is to add elements to HTML
body.appendChild(h1);
body.appendChild(h2);
body.appendChild(h1E1);

body.appendChild(group1);
    group1.appendChild(nameList);
        group1.appendChild(nLi1);
        group1.appendChild(nLi2);
        group1.appendChild(nLi3);
        group1.appendChild(nLi4);
    group1.appendChild(priceList);
        group1.appendChild(pLi1);
        group1.appendChild(pLi2);
        group1.appendChild(pLi3);
        group1.appendChild(pLi4);
    group1.appendChild(occupationList);
        group1.appendChild(oLi1);
        group1.appendChild(oLi2);
        group1.appendChild(oLi3);
        group1.appendChild(oLi4);






//this is to set attributes of each element
group1.setAttribute(`style`, `display: block;`)

const olTags = document.querySelectorAll(`ol`);
olTags.forEach((ol) => {
    ol.setAttribute(
        `style`, `display:block;`);
});

const liTags = document.querySelectorAll(`li`);
liTags.forEach((li) => {
    li.setAttribute(
        `style`, `display: block;`)
});

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
h2.textContent = `The average starting price is: ${getAverage(prices)}`;
h1E1.textContent = `Available Freelancers`;
nameList.textContent = `Name`;
    nLi1.textContent = `${freelancers[0].name}`;
    nLi2.textContent = `${freelancers[1].name}`;
    nLi3.textContent = `${freelancers[2].name}`;
    nLi4.textContent = `${freelancers[3].name}`;
priceList.textContent = `Price`;
    pLi1.textContent = `$${freelancers[0].price}`;
    pLi2.textContent = `$${freelancers[1].price}`;
    pLi3.textContent = `$${freelancers[2].price}`;
    pLi4.textContent = `$${freelancers[3].price}`;
occupationList.textContent = `Occupations`;
    oLi1.textContent = `${freelancers[0].occupation}`;
    oLi2.textContent = `${freelancers[1].occupation}`;
    oLi3.textContent = `${freelancers[2].occupation}`;
    oLi4.textContent = `${freelancers[3].occupation}`;