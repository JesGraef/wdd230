let fruits = [];

fetch('./data/data.json')
    .then((response) => response.json())
    .then((data) => displayFruitOptions(data));

const displayFruitOptions = data => {
    fruits = data;

    const fruitSelect1 = document.querySelector("#fruits1");
    const fruitSelect2 = document.querySelector("#fruits2");
    const fruitSelect3 = document.querySelector("#fruits3");  // select the output container element
    
    data.forEach(fruit => {
        // console.log(fruit.nutritions);
        let option1 = document.createElement('option');
        let option2 = document.createElement('option');
        let option3 = document.createElement('option');
        
        option1.setAttribute('value', fruit.name);
        option1.setAttribute('label', fruit.name);
        option2.setAttribute('value', fruit.name);
        option2.setAttribute('label', fruit.name);
        option3.setAttribute('value', fruit.name);
        option3.setAttribute('label', fruit.name);

        fruitSelect1.appendChild(option1);
        fruitSelect2.appendChild(option2);
        fruitSelect3.appendChild(option3);  
        
       
    })  
}

// Hidden element on Join Page
const today = new Date();
document.querySelector('#dateTime').value = today;


//Display Input
function drinkSubmission() {
    const name = document.querySelector("#name").value;
    const email = document.querySelector("#email").value;
    const phone = document.querySelector("#phone").value;
    const fruits1 = document.querySelector("#fruits1").value;
    // const carb1 = fruits[fruits1.nutritions.carbohydrates];
    const fruits2 = document.querySelector("#fruits2").value;
    const fruits3 = document.querySelector("#fruits3").value;
    const comments = document.querySelector("#comments").value;

    document.querySelector("#print_name").innerHTML = `Name: ${name}`;
    document.querySelector("#print_email").innerHTML = `Email: ${email}`;
    document.querySelector("#print_phone").innerHTML = `Phone: ${phone}`;
    document.querySelector("#print_fruit1").innerHTML = `Fruit1: ${fruits1}`;
    // document.querySelector("#carb1").innerHTML = `Carbohydrates: ${fruits[fruits1.nutritions.carbohydrates]}`;
    document.querySelector("#print_fruit2").innerHTML = `Fruit2: ${fruits2}`;
    document.querySelector("#print_fruit3").innerHTML = `Fruit3: ${fruits3}`;
    document.querySelector("#print_comments").innerHTML = `Comments: ${comments}`;
    document.querySelector("#print_orderDate").innerHTML = `Order Date: ${today.toDateString()}`;

    let numsubmissions = Number(localStorage.getItem("submission"));
    numsubmissions++;
    localStorage.setItem("submission", numsubmissions);

}

// console.log(JSON.parse(fruits)[fruits1.nutritions.carbohydrates]);

