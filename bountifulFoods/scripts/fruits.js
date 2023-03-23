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
