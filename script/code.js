let people = []

// buttons

let submit = document.querySelector('#submit');
let display = document.querySelector('#display');

// Add event listener

submit.addEventListener('click', (e) => {
  e.preventDefault();
  
  let first = document.querySelector('#first').value;
  let surname = document.querySelector('#surname').value;
  let email = document.querySelector('#email').value;

  // Push an object into an array

  people.push(
    {
        first,
        surname,
        email
    }
  )

  console.table(people);

  // Local storage

  localStorage.setItem('data', JSON.stringify(people));
})

/// Display 

display.addEventListener('click', (e) => {
    e.preventDefault();

    console.log(
       JSON.parse(localStorage.getItem('data'))
    );
})