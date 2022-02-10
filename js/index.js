'use strict';

//Create a variable `form` that refers to the `<form>` element in the DOM.
let form = document.querySelector('form');

// when submitted then do something with the inputs
form.addEventListener('submit', function() {

    // create notion base url
    let notion_base_url = "https://api.notion.com/v1/pages"
    let notionApiToken = document.querySelector('#notionApiToken').value;


    // create canvas base url
    let canvas_base_url = document.querySelector('#canvasClassUrl').value + "/assignment_groups";

    // Get project groups from canvas
    let response = fetch(canvas_base_url, {
        headers: {
            Authorization: "Bearer"  // token here
        }
    });
    // log the response
    let result = response.json();
    console.log(result.message);
    

    // For each project group get all the assignments, clean up the data, and put it in a page
})