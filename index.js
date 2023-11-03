const freelancers = [
    { name: "Dr. Slice", price: 25, occupation: "Gardener" },
    { name: "Dr. Pressure", price: 51, occupation: "Programmer" },
    { name: "Prof. Possibility", price: 43, occupation: "Teacher" },
    { name: "Prof. Prism", price: 81, occupation: "Teacher" },
    { name: "Dr. Impolse", price: 43, occupation: "Teacher" },
    { name: "Prof. Spark", price: 76, occupation: "Programmer" },
    { name: "Dr. Wire", price: 47, occupation: "Teacher" },
    { name: "Prof. Goose", price: 72, occupation: "Driver" },
  ];

//created elements
const body = document.body;
const h1 = document.createElement(`h1`);
const h2 = document.createElement(`h2`);
const h1E1 = document.createElement(`h1`);

const group1 = document.createElement(`section`)

const nameList = document.createElement(`ol`);

    const nLi1 = document.createElement(`li`);
    const nLi2 = document.createElement(`li`);
    const nLi3 = document.createElement(`li`);
    const nLi4 = document.createElement(`li`);
    const nLi5 = document.createElement(`li`);
    const nLi6 = document.createElement(`li`);
    const nLi7 = document.createElement(`li`);
    const nLi8 = document.createElement(`li`);
const priceList = document.createElement(`ol`);
    const pLi1 = document.createElement(`li`);
    const pLi2 = document.createElement(`li`);
    const pLi3 = document.createElement(`li`);
    const pLi4 = document.createElement(`li`);
    const pLi5 = document.createElement(`li`);
    const pLi6 = document.createElement(`li`);
    const pLi7 = document.createElement(`li`);
    const pLi8 = document.createElement(`li`);
const occupationList = document.createElement(`ol`);
    const oLi1 = document.createElement(`li`);
    const oLi2 = document.createElement(`li`);
    const oLi3 = document.createElement(`li`);
    const oLi4 = document.createElement(`li`);
    const oLi5 = document.createElement(`li`);
    const oLi6 = document.createElement(`li`);
    const oLi7 = document.createElement(`li`);
    const oLi8 = document.createElement(`li`);

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
        group1.appendChild(nLi5);
        group1.appendChild(nLi6);
        group1.appendChild(nLi7);
        group1.appendChild(nLi8);
    group1.appendChild(priceList);
        group1.appendChild(pLi1);
        group1.appendChild(pLi2);
        group1.appendChild(pLi3);
        group1.appendChild(pLi4);
        group1.appendChild(pLi5);
        group1.appendChild(pLi6);
        group1.appendChild(pLi7);
        group1.appendChild(pLi8);
    group1.appendChild(occupationList);
        group1.appendChild(oLi1);
        group1.appendChild(oLi2);
        group1.appendChild(oLi3);
        group1.appendChild(oLi4);
        group1.appendChild(oLi5);
        group1.appendChild(oLi6);
        group1.appendChild(oLi7);
        group1.appendChild(oLi8);






//this is to set attributes of each element
h1.setAttribute(`style`, `text-align: center`)
h2.setAttribute(`style`, `text-align: center`)
h1E1.setAttribute(`style`, `text-align: center`)
group1.setAttribute(`style`, `background-color: red;`)

const olTags = document.querySelectorAll(`ol`);
olTags.forEach((ol) => {
    ol.setAttribute(
        `style`, `background-color: grey;`);
});

const liTags = document.querySelectorAll(`li`);
liTags.forEach((li) => {
    li.setAttribute(
        `style`, `background-color: rebeccapurple;`)
});

//this is to get the average price of the freelancers
const prices = []
    for (let i = 0; i < freelancers.length; i++){
        if (freelancers[i].price !== 0){
            prices.push(freelancers[i].price)}
    }

const getSum = (prices) => {
    let priceSum = 0;
    for (let i=0; i < prices.length; i++){
    priceSum += prices[i];}
return priceSum;}
const getAverage = (prices) =>{
    return getSum(prices)/prices.length;} 

//this is setting everything to a variable `average` and using .toFixed(2)
//to round the average to 2 decimal places.
const average = (getAverage(prices).toFixed(2));



//this puts words into the HTML elements described above
h1.textContent = `Freelancer Forum`;
h2.textContent = `The average starting price is: $${average}`;
h1E1.textContent = `Available Freelancers`;
nameList.textContent = `Name`;
    nLi1.textContent = `${freelancers[0].name}`;
    nLi2.textContent = `${freelancers[1].name}`;
    nLi3.textContent = `${freelancers[2].name}`;
    nLi4.textContent = `${freelancers[3].name}`;
    nLi5.textContent = `${freelancers[4].name}`;
    nLi6.textContent = `${freelancers[5].name}`;
    nLi7.textContent = `${freelancers[6].name}`;
    nLi8.textContent = `${freelancers[7].name}`;
priceList.textContent = `Price`;
    pLi1.textContent = `$${freelancers[0].price}`;
    pLi2.textContent = `$${freelancers[1].price}`;
    pLi3.textContent = `$${freelancers[2].price}`;
    pLi4.textContent = `$${freelancers[3].price}`;
    pLi5.textContent = `$${freelancers[4].price}`;
    pLi6.textContent = `$${freelancers[5].price}`;
    pLi7.textContent = `$${freelancers[6].price}`;
    pLi8.textContent = `$${freelancers[7].price}`;
occupationList.textContent = `Occupations`;
    oLi1.textContent = `${freelancers[0].occupation}`;
    oLi2.textContent = `${freelancers[1].occupation}`;
    oLi3.textContent = `${freelancers[2].occupation}`;
    oLi4.textContent = `${freelancers[3].occupation}`;
    oLi5.textContent = `${freelancers[4].occupation}`;
    oLi6.textContent = `${freelancers[5].occupation}`;
    oLi7.textContent = `${freelancers[6].occupation}`;
    oLi8.textContent = `${freelancers[7].occupation}`;