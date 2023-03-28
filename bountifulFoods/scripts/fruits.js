fetch('./data/data.json')
    .then((response) => response.json())
    .then((data) => displayFruitOptions(data));

const displayFruitOptions = data => {
    const fruitSelect1 = document.querySelector("#fruits1");
    const fruitSelect2 = document.querySelector("#fruits2");
    const fruitSelect3 = document.querySelector("#fruits3");  // select the output container element
    
    data.forEach(fruit => {
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
//Display Input
const displayInput = data => {
    const name = document.querySelector("#display_name");
    const email = document.querySelector("#display_email");
    const phone = document.querySelector("#display_phone");  // select the output container element
    
    data.forEach(info => {
        let input1 = document.createElement('option');
        let input2 = document.createElement('option');
        let input3 = document.createElement('option');
        
        input1.setAttribute('value', info.name);
        input1.setAttribute('label', info.name);
        input2.setAttribute('value', info.name);
        input2.setAttribute('label', info.name);
        input3.setAttribute('value', info.name);
        input3.setAttribute('label', info.name);

        name.appendChild(input1);
        phone.appendChild(input2);
        email.appendChild(input3);
    })
}
// Hidden element on Join Page
// const today = new Date();
// document.querySelector('#dateTime').value = today;


function store(){
    const submissionsDisplay = document.querySelector(".submissions");

    let numsubmissions = Number(window.localStorage.getItem("submission"));
    if (numsubmissions !== 0) {
        submissionsDisplay.textContent = numsubmissions;
    } else {
        submissionsDisplay.textContent = "This is your first order!"
    }

    numsubmissions++;
    localStorage.setItem("submission", numsubmissions);
}

//Display Output
const register = function (event) {
    // Receive user input
    let r_name = document.querySelector("#name").value;
    let r_email = document.querySelector("#email").value;
    // Output on page
    display_name.innerHTML = r_name;
    display_email.innerHTML = r_email;
    event.preventDefault();
    };

