let booksDetails = {
    data: [
      {
        bookName: "Junior Level Books Introduction to Computer",
        author: "Amit_Garg",
        year: "2011",

      },
      {
        bookName: "Publish News Letter",
        author: "Amit_Garg",
        year: "2011",

      },
      {
        bookName: "Client Server Computing",
        author: "Amit_Garg",
        year: "2012",

      },
      {
        bookName: "Mobile Computing",
        author: "Vinay_Kumar_Singhal",
        year: "2011",

      },
      {
        bookName: "Data Structure Using C",
        author: "Sharad_Kumar_Verma",
        year: "2015",

      },
      {
        bookName: "Computer Networks",
        author: "Sharad_Kumar_Verma",
        year: "2010",

      },
      {
        bookName: ".NET Framework & C#",
        author: "Sharad_Kumar_Verma",
        year: "2009",

      },
      {
        bookName: "CBOT",
        author: "Gunjan_Verma",
        year: "2014",

      },
      {
        bookName: "Computer Networks",
        author: "Sharad_Kumar_Verma",
        year: "2015-16",

      },
      {
        bookName: "C++",
        author: "Vinay_Kumar_Singhal",
        year: "2011",

      },


      {
        bookName: "Junior Level Books Introduction to Computer",
        author: "Amit_Garg",
        year: "2011",

      },
      {
        bookName: "Publish News Letter",
        author: "Amit_Garg",
        year: "2011",

      },
      {
        bookName: "Client_Server_Computing",
        author: "Amit_Garg",
        year: "2012",

      },
      {
        bookName: "Mobile Computing",
        author: "Vinay_Kumar_Singhal",
        year: "2011",

      },
      {
        bookName: "Data Structure Using C",
        author: "Sharad_Kumar_Verma",
        year: "2015",

      },
      {
        bookName: "Computer Networks",
        author: "Sharad_Kumar_Verma",
        year: "2010",

      },
      {
        bookName: ".NET Framework & C#",
        author: "Sharad_Kumar_Verma",
        year: "2009",

      },
      {
        bookName: "CBOT",
        author: "Gunjan_Verma",
        year: "2014",

      },
      {
        bookName: "Computer Networks",
        author: "Sharad_Kumar_Verma",
        year: "2015-16",

      },
      {
        bookName: "C++",
        author: "Vinay_Kumar_Singhal",
        year: "2011",

      },
    ],
  };

  //Books count
  let book = "Total Books: "
  let count = booksDetails.data.length
  document.getElementById("bookCount").innerHTML = book+count;
  
  for (let i of booksDetails.data) {
    //Creating Card
    let card = document.createElement("div");

    card.classList.add("card", i.author, "hide");
   
    let container = document.createElement("div");
    container.classList.add("container");
    //Book name
    let name = document.createElement("h3");
    name.classList.add("book-name");
    name.innerText = "Title: "+i.bookName.toUpperCase();
    container.appendChild(name);
    //author name
    let author = document.createElement("h5");
    author.innerText = "Author: "+i.author;
    container.appendChild(author);
    //publish date
    let year = document.createElement("h6")
    year.innerText = "Publish Year: "+ i.year;
    container.appendChild(year)
  
    card.appendChild(container);
    document.getElementById("Books").appendChild(card);
  }
  

  function filterBook(value) {
    //Button class code
    let buttons = document.querySelectorAll(".button-value");
    buttons.forEach((button) => {

      if (value.toUpperCase() == button.innerText.toUpperCase()) {
        button.classList.add("active");
      } else {
        button.classList.remove("active");
      }
    });
  

    let elements = document.querySelectorAll(".card");

    elements.forEach((element) => {

      if (value == "all") {
        element.classList.remove("hide");
      } else {

        if (element.classList.contains(value)) {
          //display based on author
          element.classList.remove("hide");
        } else {

          element.classList.add("hide");
        }
      }
    });
  }
  
  //Search button click
  document.getElementById("search").addEventListener("click", () => {

    let searchInput = document.getElementById("search-input").value;
    let elements = document.querySelectorAll(".book-name");
    let cards = document.querySelectorAll(".card");
  

    elements.forEach((element, index) => {
      //checking if text includes the search value
      if (element.innerText.includes(searchInput.toUpperCase())) {

        cards[index].classList.remove("hide");
      } else {

        cards[index].classList.add("hide");
      }
    });
  });
  
  //Initially showing all books availble in library
  window.onload = () => {
    filterBook("all");
  };