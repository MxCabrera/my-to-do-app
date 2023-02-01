console.log('hey')

// to do app code here
// when a user submits the form, whatever is in the input should be added to the ul as a li
// there should be some way of checking off tasks

// target the form
const form = document.querySelector('form');

// listen for the submit event on that form
form.addEventListener('submit', function (event) {
   // prevent the default action of page reloading (we don't have an action attribute on the form right now)
   event.preventDefault();
   // target the input
   const inputElement = document.querySelector('input');
   // find out what is in the input
   const task = inputElement.value;
   // check that the task is a string, and that string is not empty
   // typeof task === 'string'
   // ** how do we keep strings of empty space from being submitted?
   // if(task != ''){
   // use type coercion to our benefit here. an empty string of any length is falsy, so we are looking for only truthy values (e.g. non-empty string)

   // if task evalues to truthy (rather than falsy)
   if (task) {
      // add the task to an li and that li to the ul
      // create a list item
      const listItemElement = document.createElement('li');
      // add the checkbox
      listItemElement.innerHTML = '<i class="far fa-square"></i>';
      // created a p tag 
      const taskText = document.createElement('p');
      // put the task text inside the p tag
      taskText.textContent = task;
      // put the p tag inside the li we made
      listItemElement.appendChild(taskText);

      // target ul node
      const ulElement = document.querySelector('ul');
      // add li to ul 
      ulElement.appendChild(listItemElement);

      // clear the input
      inputElement.value = '';
   }
});

// target the ul element to take advantage of event bubbling 
const ul = document.querySelector('ul');
// attached a listener to the parent (there are no list items to attach a listener to) so it can hear the events happening to its children
ul.addEventListener('click', function (event) {
   // check if you've clicked the box
   if (event.target.tagName === 'I') {
      updateToDo(event.target);
   }
});
const updateToDo = function (iElement) {
   // swap the classes that show the check mark
   iElement.classList.toggle('fa-square');
   iElement.classList.toggle('fa-check-square');
   // add or remove the text-muted class to the parent (the li)
   iElement.parentElement.classList.toggle('text-muted');
}