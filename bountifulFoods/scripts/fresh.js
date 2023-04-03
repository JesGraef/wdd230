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
        option1.textContent = fruit.name;
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

// console.log(JSON.parse(fruits)[fruits1.nutritions.carbohydrates]);


//Display Input
function drinkSubmission() {
    const name = document.querySelector("#name").value;
    const email = document.querySelector("#email").value;
    const phone = document.querySelector("#phone").value;
    const fruits1 = document.querySelector("#fruits1").value;

    // const fruits1Object = fruits.find(item => item.name === fruits1); console.log('fruits1Object', fruits, fruits1, fruits1Object, fruits1Object.nutritions.carbohydrates)
    const fruits1Object = fruits.find(item => item.name === fruits1);
    // const fruits2Object = fruits.find(item => item.name === fruits2);
    // const fruits3Object = fruits.find(item => item.name === fruits3);

    const fruits2 = document.querySelector("#fruits2").value;
    const fruits3 = document.querySelector("#fruits3").value;
    const comments = document.querySelector("#comments").value;

    document.querySelector("#print_name").innerHTML = `Name: ${name}`;
    document.querySelector("#print_email").innerHTML = `Email: ${email}`;
    document.querySelector("#print_phone").innerHTML = `Phone: ${phone}`;

    document.querySelector("#print_fruit1").innerHTML = `Fruit1: ${fruits1}`;
    document.querySelector("#carb1").innerHTML = `Carbohydrates: ${fruits1Object.nutritions.carbohydrates}`;
    // document.querySelector("#protein1").innerHTML = `Protein: ${fruits1Object.nutritions.protein}`;
    // document.querySelector("#fat1").innerHTML = `Fat: ${fruits1Object.nutritions.fat}`;
    // document.querySelector("#cal1").innerHTML = `Calories: ${fruits2Object.nutritions.calories}`;
    // document.querySelector("#sugar1").innerHTML = `Sugar: ${fruits1Object.nutritions.sugar}`;


    document.querySelector("#print_fruit2").innerHTML = `Fruit2: ${fruits2}`;
    document.querySelector("#print_fruit3").innerHTML = `Fruit3: ${fruits3}`;
    document.querySelector("#print_comments").innerHTML = `Comments: ${comments}`;
    document.querySelector("#print_orderDate").innerHTML = `Order Date: ${today.toDateString()}`;

    let numsubmissions = Number(localStorage.getItem("submission"));
    numsubmissions++;
    localStorage.setItem("submission", numsubmissions);

}


// // get the feedback div element so we can do something with it.
// const feedbackElement = document.getElementById('feedback');
// // get the form so we can read what was entered in it.
// const formElement = document.forms[0];
// // add a 'listener' to wait for a submission of our form. When that happens run the code below.
// formElement.addEventListener('submit', function(e) {
//     // stop the form from doing the default action.
//     e.preventDefault();
//     // set the contents of our feedback element to a message letting the user know the form was submitted successfully. Notice that we pull the name that was entered in the form to personalize the message!
//     feedbackElement.innerHTML = 'Hello '+ formElement.user_name.value +'! Thank you for your message. We will get back with you as soon as possible!';
//     // make the feedback element visible.
//     feedbackElement.style.display = "block";
//     // add a class to move everything down so our message doesn't cover it.
//     document.body.classList.toggle('moveDown');
// });


