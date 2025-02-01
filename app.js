'use strict'

const shareButton = document.querySelector('button')

const dialogueBox = document.querySelector('.rectangle')

const cardFooter = document.querySelector('.card__footer')

const cardFooterButton = document.querySelector('.card__footer button')

const buttonSVG = cardFooterButton.querySelector('path');

const cardProfileTemplate = document.querySelector('.card__profile-template');

const cardFooterShareTemplate = document.querySelector('.card__footer-share-template');

const desktopWidth=1064;

function toClone(template) {
    if (shareButton.previousElementSibling != null) {
        shareButton.previousElementSibling.remove();
    }
    let cloned = template.content.cloneNode(true);
    cardFooter.insertBefore(cloned, cardFooterButton);
}

function switchToActiveButton() {
    cardFooterButton.style.backgroundColor = 'hsl(214, 17%, 51%)'
    // const buttonSVG = cardFooterButton.querySelector('path');

    buttonSVG.setAttribute("fill", "hsl(210, 46%, 95%)");
}

function switchToInactiveButton() {
    cardFooterButton.style.backgroundColor = 'hsl(218, 85%, 92%)'
    // const buttonSVG = cardFooterButton.querySelector('path');

    buttonSVG.setAttribute("fill", "#6E8098");
}


function resetFooter() {
    dialogueBox.classList.remove('card__rectangle--show');

    cardFooter.classList.remove('card__footer--dark-background');
    toClone(cardProfileTemplate)
    switchToInactiveButton();
}


//if detects i click the button, then just toggle it, if i dont click there, then just close (not need to check just close)

//when on load, load in the profile icon
toClone(cardProfileTemplate)
const cardIcons=document.querySelectorAll('.card__icons-item')



window.addEventListener("resize", () => {

    if (window.innerWidth >= desktopWidth) {
        const cardFooterShare = document.querySelector('.card__footer-share');

        if (cardFooterShare !== null) {
            if (cardFooterShare.classList.contains('card__footer-share')) {
                //then change it back to card profile, change it to inactive button
                resetFooter();}
        }

    } else {

        if (dialogueBox.classList.contains('card__rectangle--show')) {
            resetFooter();
        }
    }
});



document.addEventListener('click', (event) => {
    if (window.innerWidth >= desktopWidth) {

        
        if (event.target === shareButton) {
            //check if rectangle visibility is shown, if no then show and switch color. If yes, then remove and switch color. 
            if (!dialogueBox.classList.contains('card__rectangle--show')) {
                cardFooter.classList.remove('card__footer--dark-background');
                toClone(cardProfileTemplate)
                dialogueBox.classList.add('card__rectangle--show')
                switchToActiveButton();


            }
        } else if (!event.target.classList.contains('card__icons-item') ) {
            resetFooter();
          
        } 
    } else {
        //small screen

        if (event.target === shareButton) {

            //if card__footer--dark-background is not available and shared button clicked, then switch template, switch to active button and add dark background

            if (!cardFooter.classList.contains('card__footer--dark-background')) {
                //to replace template with card profile share, need to remove first

                toClone(cardFooterShareTemplate)
                cardFooter.classList.add('card__footer--dark-background');
                switchToActiveButton();
            } 
        } else if (!event.target.classList.contains('card__icons-item')) {
            resetFooter();

        } 
    }

});





