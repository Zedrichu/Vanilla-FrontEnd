# Frontend Mentor - Product preview card component solution

This is a solution to the [Product preview card component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/product-preview-card-component-GO7UmttRfa). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
- [Author](#author)

## Overview - expected outcome

![Design preview for the Product preview card component coding challenge](./design/desktop-preview.jpg)

### The challenge
The challenge is to build out this product preview card component and get it looking as close to the design as possible. You will find both a mobile and a desktop version of the design. All the required assets are optimized in the `/images` folder.

There is also a `style-guide.md` file containing needed information, such as color palette and fonts.

Any tools can be used to help complete the challenge. So if you've got something you'd like to practice, feel free to give it a go.

The users should be able to:

- View the optimal layout depending on their device's screen size
- See hover and focus states for interactive elements

### Screenshot

![](./result.png)

Add a screenshot of your solution. Then crop/optimize/edit your image however you like, add it to your project, and update the file path in the image above.
### Links

- Solution URL: [GitHub Repo](https://github.com/Zedrichu/Vanilla-FrontEnd/tree/main/Product-Preview-Card)
- Live Site URL: [Page](https://zedrichu.github.io/Vanilla-FrontEnd/Product-Preview-Card/index.html)

## My process

### Built with
- Semantic HTML5 markup
- CSS custom properties
- Flex-box

Started work on the project by organizing the card content into HTML components. Following, the basic styling of elements was added in a top-down approach. More accurate styling and typography proportions were added to match the the design. In the end, the screen media controls were added to style the card properly for a mobile aspect-ratio.

### What I learned

Use this section to recap over some of your major learnings while working through this project. Writing these out and providing code samples of areas you want to highlight is a great way to reinforce your own knowledge.

* CSS media controls to dynamically change the image source:
  ```css
  @media only screen and (min-width: 600px) {
      .card img {
          content: url('./images/image-product-desktop.jpg');
          object-fit: cover;
      }
  }
  ```
* `srcset`, `sizes` in the HTML component (optimization):
  ```html
  <img src="./images/image-product-desktop.jpg" 
      alt="Bottle of Perfume" 
      srcset="./images/image-product-desktop.jpg 600w, ./images/image-product-mobile.jpg 686w"
      sizes="(max-width: 600px) 686px, (min-width: 600px) 600px">
  ```
* Practice with CSS Flex-box:
  ```css
  .card img {
    flex-grow: 1;
    flex-shrink: 0;
    flex-basis: 50%;
    object-fit: cover;
  }
  ```

## Author
Zedrichu - Adrian Zvizdenco

**Have fun building!** 🚀