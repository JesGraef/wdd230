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
        let option1 = document.createElement('option');
        let option2 = document.createElement('option');
        let option3 = document.createElement('option');
        
        option1.value = fruit.name;
        option1.innerHTML = fruit.name;
        option2.value = fruit.name;
        option2.innerHTML = fruit.name;
        option3.value = fruit.name;
        option3.innerHTML = fruit.name;

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
    const fruits1Object = fruits.find(item => item.name === fruits1); 
    const fruits2 = document.querySelector("#fruits2").value;
    const fruits2Object = fruits.find(item => item.name === fruits2);
    const fruits3 = document.querySelector("#fruits3").value;
    const fruits3Object = fruits.find(item => item.name === fruits3);
    const comments = document.querySelector("#comments").value;

    document.querySelector("#print_name").innerHTML = `Name: ${name}`;
    document.querySelector("#print_email").innerHTML = `Email: ${email}`;
    document.querySelector("#print_phone").innerHTML = `Phone: ${phone}`;
    document.querySelector("#print_comments").innerHTML = `Comments: ${comments}`;
    document.querySelector("#print_orderDate").innerHTML = `Order Date: ${today.toDateString()}`;

    document.querySelector("#print_fruit1").innerHTML = `Fruit1: ${fruits1}`;
    document.querySelector("#carb1").innerHTML = `Carbohydrates: ${fruits1Object.nutritions.carbohydrates}`;
    document.querySelector("#protein1").innerHTML = `Protein: ${fruits1Object.nutritions.protein}`;
    document.querySelector("#fat1").innerHTML = `Fat: ${fruits1Object.nutritions.fat}`;
    document.querySelector("#cal1").innerHTML = `Calories: ${fruits1Object.nutritions.calories}`;
    document.querySelector("#sugar1").innerHTML = `Sugar: ${fruits1Object.nutritions.sugar}`;

    document.querySelector("#print_fruit2").innerHTML = `Fruit2: ${fruits2}`;
    document.querySelector("#carb2").innerHTML = `Carbohydrates: ${fruits2Object.nutritions.carbohydrates}`;
    document.querySelector("#protein2").innerHTML = `Protein: ${fruits2Object.nutritions.protein}`;
    document.querySelector("#fat2").innerHTML = `Fat: ${fruits2Object.nutritions.fat}`;
    document.querySelector("#cal2").innerHTML = `Calories: ${fruits2Object.nutritions.calories}`;
    document.querySelector("#sugar2").innerHTML = `Sugar: ${fruits2Object.nutritions.sugar}`;

    document.querySelector("#print_fruit3").innerHTML = `Fruit3: ${fruits3}`;
    document.querySelector("#carb3").innerHTML = `Carbohydrates: ${fruits3Object.nutritions.carbohydrates}`;
    document.querySelector("#protein3").innerHTML = `Protein: ${fruits3Object.nutritions.protein}`;
    document.querySelector("#fat3").innerHTML = `Fat: ${fruits3Object.nutritions.fat}`;
    document.querySelector("#cal3").innerHTML = `Calories: ${fruits3Object.nutritions.calories}`;
    document.querySelector("#sugar3").innerHTML = `Sugar: ${fruits3Object.nutritions.sugar}`;

    let numsubmissions = Number(localStorage.getItem("submission"));
    numsubmissions++;
    localStorage.setItem("submission", numsubmissions);
}




