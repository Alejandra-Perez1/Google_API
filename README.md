# Google_API
Part 1 - Assignment 2_WebApp

This is Part 1 of Assignment 2 for Web Application.

##### A book search website using google's: https://www.googleapis.com/books/  

It uses pagination to display sets of 20 books at a time using Next and Previous buttons to go back and forward. 
It displays the Author, Publisher and Publish Date of each book.

### Steps we took: 
- [x] Added a Previous and Next button to the HTML Page
- [x] Added CSS styling for the book information like the image and title etc. 
- [x] Updated the ```bookDisplay.js``` which has a HTML template which checks for any undefined fields and also gets all the information about the book
- [x] Used ```img :src="this.bookObj.volumeInfo.imageLinks.thumbnail"``` to get the thumbnail of the book
- [x] To see if there is no author, we check ```v-if="this.bookObj.volumeInfo.authors === 0"```and instead of not having any value, we print out "Unknown"
- [x] We use the same syntax to check if any other information about the book are undefined and print out appropriate values
