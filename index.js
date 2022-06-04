
//want each item to have it's own Id
//so create a variable called ID this is how we will be able to refer to each one uniquely
let id = 0;

// eventListener will listen for click and pass into a function this is what will be executed when the button is clicked
document.getElementById('add').addEventListener('click', () => {
    let table = document.getElementById('list'); // reference to our table
    let row = table.insertRow(1) //insert Row at position 1 because 0 is the first position,
    //we are inserting a row under the header so it will be position 1
    row.setAttribute('id', `item-${id}`) //Attributes ID and using back ticks use temporal literals
    //each row will get a ID called ID
    row.insertCell(0).innerHTML = document.getElementById('new-item').value; //this will allow set the value of the first cell in the row
    row.insertCell(1).innerHTML = document.getElementById('quantity').value;
    row.insertCell(2).innerHTML = document.querySelector('input[name="coupon"]:checked').value; //getting the value of the checked radio button so it will say either yes or no
    //need to create a button that will be our actions button, need to create a variable for it
    let actions = row.insertCell(3);
    //want to have a button appended to this actions cell, the button will ask which ID to delete when clicked
    //added a function and incremented id
    actions.appendChild(createDeleteButton(id++)); //will be a delete button

    document.getElementById('new-item').value = ''; //setting this to blank so it starts over for a good user experience
    document.getElementById('quantity').value = ''; 
});
//function for the delete button

function createDeleteButton(id) {
    //button creation
    let btn = document.createElement('button'); //tag of the element we want to create
    btn.className = 'btn btn-danger'; //make look pretty
    btn.id = id; 
    btn.innerHTML = 'Delete'; //Text on the button
    //button creation
    //binds a method/function to  to that button on click properties, so when clicked it will delete that row that the button is assigned.
    //Add an event listener to it, another way to do it besides eventListener
    btn.onclick = () => {
        console.log(`Deleting row with id: item-${id}`);
        let elementToDelete = document.getElementById(`item-${id}`); //delete test id
        elementToDelete.parentNode.removeChild(elementToDelete)
        //find the parent of the element that we want to delete then call the remove child method, remove the child from the parent node
    };
    //the very end we want to return the button
    return btn;
}

