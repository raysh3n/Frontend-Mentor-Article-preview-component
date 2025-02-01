# Frontend Mentor - Article preview component solution

This is a solution to the [Article preview component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/article-preview-component-dYBN_pYFT). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
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

- View the optimal layout for the component depending on their device's screen size
- See the social media share links when they click the share icon

### Screenshot
<br>Mobile<br>
![](./mobile%20Screenshot%202025-02-01%20at%2015-32-32%20Frontend%20Mentor%20Article%20preview%20component.png)
<br>Desktop<br>
![](./desktop%20Screenshot%202025-02-01%20152846.png)




### Links

- Solution URL: [here](https://www.frontendmentor.io/solutions/responsive-article-preview-component-9R8YkC2vkK)
- Live Site URL: [here](https://app.netlify.com/sites/fem-article-preview-component-raysh3n/overview)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow


**Note: These are just examples. Delete this note and replace the list above with your own choices**

### What I learned

In this project, both html and body overflow must be set to hidden. Can do it for card overflow hidden because it will not able to fully show the dialoguebox. Both the body and html seems to be situated at the same place(may try use outline to see) 
```html
<h1>Some HTML code I'm proud of</h1>
```
```css
html, body {
  /* set the overflow to hiddne to both html and body as they are the same when used outline to investigate */
  overflow: hidden;
  /* outline:1px solid blue; */
}
```

to create the dialoguebox, Have created rectangle and triangle, combining them together. Rectangle and triangle will be relative to the button. This causes the overflow, but have set html and body to overflow hidden to fix this issue. Or else there will be extra space to scroll down and right in mobile version.
```css
button {
  border-radius: 50%;
  /* padding: 0.5rem; */
  /* width:50%; */
  width: 2.5rem;
  aspect-ratio: 1/1;
  border: none;
  position: relative;
  background-color: hsl(218, 85%, 92%);
}


.rectangle {
  visibility: hidden;
  display: flex;
  gap: 1.5rem;
  text-align: center;
  justify-content: center;
  align-items: center;
  position: absolute;
  height: 5rem;
  width: 21rem;
  background-color: var(--clr-very-dark-grayish-blue);
  top: -325%;
  right: -350%;
  border-radius: 10px;
  color: var(--clr-light-grayish-blue);
}



#triangle-down {
  /* z-index: -1; */
  position: absolute;
  border-left: 15px solid transparent;
  border-right: 15px solid transparent;
  border-top: 20px solid var(--clr-very-dark-grayish-blue);
  top: 92%;
  left: 52%;
  transform: translateX(-50%);
  /* background-color: red; */
}
```
pointer events none, when clicked, this will not go to the event in js. Especially useful when you want the button outside the image to be triggered to the js, not the element within like this img to go to js.
```css
.card__icons  img {
pointer-events: none;
}

```

document.querySelector is not dynamic. It will store whichever values that it has been set at first. The 2nd line of code below must be declared after toClone(cardProfileTemplate), or else it will be null.  
```js
toClone(cardProfileTemplate)
const cardIcons=document.querySelectorAll('.card__icons-item')
```

using 2 templates in this project. Load one of the template when the document on load. 


to change svg color via css, use fill 

to change svg color via js, this is how to do it, make sure target the PATH, then update the fill, (not use classList): 
```js
const buttonSVG = cardFooterButton.querySelector('path');
  buttonSVG.setAttribute("fill", "hsl(210, 46%, 95%)");

```

insertBefore 
parentElement.insertBefore(theElementYouWantToInsert, theBeforeElement)
```js
    cardFooter.insertBefore(cloned, cardFooterButton);
```


### Continued development
Refactor the code. 