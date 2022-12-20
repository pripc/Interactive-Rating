# Frontend Mentor - Interactive rating component solution

This is a solution to the [Interactive rating component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/interactive-rating-component-koxpeBUmI). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Select and submit a number rating
- See the "Thank you" card state after submitting a rating


### Links

- Solution URL: [Add solution URL here](https://github.com/pripc/Interactive-Rating.git)
- Live Site URL: [Add live site URL here](https://funny-llama-8137bc.netlify.app)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid


### What I learned

1) With this challenge I`ve learned how to migrate from a page to another onde (Index.html to thanksPage.html)

```js
  function submit(){
    let number = (selectItem[selectItem.length - 1])
    window.location.href = `thanksPage.html?number=${number}`
    
  }
    function showOnScreen(){
    let params = (new URL(document.location)).searchParams;
    let number = params.get('number')
    console.log(number)
    window.document.getElementById('result').innerHTML = `You selected ${number} out of 5`
  }
```
2) I also have learned that the position where we  put <script></script> inside the HTML is importante. At first I was trying to put it inside the HTML head and the function called "showOnScreen()" wasn`t work, than I replace the <script></script> into the HTML body and the function works properly.


### Continued development

With this challenge I realize that I have to practice more DOM and the interaction between different pages. 



### Useful resources

- [W3 school](https://www.w3schools.com/js/default.asp) - This helped me to remember some concepts and commands.
- [StackOverflow](https://stackoverflow.com/) - This website has a lot of answered question that helped me to figure out some problems that I`ve facedin suring this challenge.


## Author

- Frontend Mentor - [@pripc](https://www.frontendmentor.io/profile/pripc)