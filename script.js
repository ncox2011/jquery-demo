// First, let's go through the basic process of creating and appending an element with vanilla JavaScript and jquery

// create a new div
const vanilla = document.createElement("div");
const $jMagic = $("<div>")


// Give your div some text
vanilla.textContent = "This is vanilla JS!"
$jMagic.text("HELLO ITS JQUERY")


// Give it a class of "box"
vanilla.classList.add("box");
$jMagic.addClass("box");

// give it an id of "box-a"
vanilla.id = "box-a";
$jMagic.attr("id", "box-b");



// append it to the DOM
const containerVanilla = document.querySelector("#vanilla-container");
containerVanilla.appendChild(vanilla);

$("jquery-container").append($jMagic);
$jMagic.appendTo($("#jqery-container"));

// There are lot of ways to append things with jQuery! I personally like .appendTo() and .prependTo() a lot because they're nice when you want to chain jQuery methods.

// Now let's look at it all in one line
$("<div>").text("HELLO ITS JQUERY").addClass("box").attr("id", "box-b").appendTo($("#jquery-container"));


// Now let's put it together!
// Creating a Business Card
// When the user clicks a button, it should create a new business card

// First, target the button and add an event listener to it. The callback function should create a card with an h4 element for the person's name and two paragraph elements for the person's position and company.
// How would we do this with vanilla js?
const $newCard = $("<div>").addClass("card");
$("#create-card").click(() => {
    $("<h4>").addClass("name").attr("id", "name-heading").appendTo($newCard);
    $("<h4>").addClass("position").attr("id", "position-heading").appendTo($newCard)
    $("<h4>").addClass("company").attr("id", "company-heading").appendTo($newCard)
    $newCard.appendTo($("#card-container"))
})

// Next, target the inputs and add event listeners so that when the inputs change, the text on the card changes
$("#name-input").keyup(() => {
    const textValue = $("#name-input").val()
    $("#name-heading").text(textValue)
})

$("#position-input").keyup(() => {
    const textValuePosition = $("#position-input").val()
    $("#position-heading").text(textValuePosition)
})

$("#company-input").keyup(() => {
    const textValueCompany = $("#company-input").val()
    $("#company-heading").text(textValueCompany)
})

// What if we wanted to put an event listener on something that we added dynamically with javascript?
$("body").on("click", "#name-heading", () => {
    console.log("does it work?")
})

// LIGHTNING CHALLENGE: 

// Add event listeners to the last input. When you enter text in the input, the text in the card should change.

// Add an event listener to the remove card button. When the button is clicked, the entire card should disappear. Experiment with the .hide() and .remove() methods. What's the difference between them? 
$("#delete-card").on("click", function() {
    $($newCard).remove()
})
//remove deletes it and allows another to be added upon create click
//hide alone won't let another be added upon create click

