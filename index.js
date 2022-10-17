const requestURL = 'https://anapioficeandfire.com/api/books'

function fetchBooks() {
  return fetch(requestURL) /** DONT FORGET RETURN!!!! */
    .then((resp) => resp.json())
    .then(function (json) {
      renderBooks(json)
      book5(json)
      // character1031(json)
    })
}

function renderBooks(books) {
  const main = document.querySelector('main')
  books.forEach((book) => {
    const p = document.createElement('p')
    p.innerText = book.name
    main.appendChild(p)
  })
}

function book5(books) {
  const main = document.querySelector('main')
  let h4 = document.createElement('h4')
  h4.className = '5thbook'
  h4.innerHTML = `
  <h4 style="color:red">The 5th book in the series is </h4>
  `
  main.appendChild(h4)

  const p = document.createElement('p')
  p.innerText = books[4].name
  p.style.color = 'red'
  document.querySelector('main').appendChild(p)
}

// function character1031(character) {
//     const main = document.querySelector('main')
//     let h4 = document.createElement('h4')
//     h4.className = '5thbook'
//     h4.innerHTML = `
//     <h4 style="color:red">The 1031st character in the series is </h4>
//     `
//     main.appendChild(h4)

//   for (unit of character) {
//     let found = unit.characters[1030]
//     const p = document.createElement('p')
//     p.textContent = found
//     p.style.color = 'red'
//     document.querySelector('main').appendChild(p)
//   }  
// }

document.addEventListener('DOMContentLoaded', function () {
  fetchBooks()
})
