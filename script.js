'use strict';

function getDogImages() {
  // this function calls on the API
  fetch('https://dog.ceo/api/breeds/image/random/3')
    .then(response => response.json())
    .then(responseJson => console.log(responseJson))
    .catch(error => alert('Something went wrong. Try again later.'));
}

function handleForm() {
  // this function disables the default form behavior
  // it records the number input by the user
  $('form').submit(event => {
    event.preventDefault();
    getDogImages();
  });
}


$(function() {
    console.log('App loaded! Waiting for submit!');
    handleForm();
  });