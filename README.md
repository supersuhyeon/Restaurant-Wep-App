# Restaurant Web App

![ezgif com-gif-maker (1)](https://user-images.githubusercontent.com/94214512/186267108-2b6f01ae-2249-4f43-a1a8-54f61a17076b.gif)<br>
Simple restaurant web app created with HTML, SCSS, JavaScript, and PWA. <br>
[Restaurant-Web-App](https://ephemeral-babka-0232af.netlify.app/ "link to the Restaurant-Web-App Project")

## Goal of the project

1. practice SCSS, array APIs, fetching JSON file data.
2. make a web app with pwabuilder and open it as an app in the browser

## Languages

HTML, SCSS, JavaScript

## Features

![readme-1](https://user-images.githubusercontent.com/94214512/186042233-226c2833-b599-4346-a31d-0999425a1746.png)

1. When you click each flag icon, it will match up with the key value that represents the respective country's restaurants in the data.json file

```c
function onbtnHandler(event, foodItems){
    const target = event.target.dataset
    const key = target.key
    const value = target.value

    if (key == null || value == null){
         return // due to event delegation ('menu') so that only can work when the click the buttons
       }

    showItems(foodItems.filter((foodItem)=>{return foodItem[key] === value}))
}
```

2. When you click the "by rating" button, it will sort by the number of reviews

```c
function showItems(foodItems){
    const listWrapper = document.querySelector('.listwrapper')
    listWrapper.innerHTML = foodItems.map((foodItem)=>{return innerHtml(foodItem)}).join('')

    const sort = document.querySelector('.sort')
    sort.addEventListener('click', ()=>{
        return sortHandler(foodItems), sort.style.background = "yellow"})

}

function sortHandler(foodItems){
    showItems(foodItems.sort((a,b)=>{return b.reviews - a.reviews}))
}
```

3. You can see the download icon as pwa in the address bar<br>
   ![readme-2](https://user-images.githubusercontent.com/94214512/186042543-f3ab0d6f-e40a-4e75-a8c4-712ec21f355c.png) <br>
   pwa-builder reference url : https://github.com/pwa-builder/pwabuilder-web/blob/V2/src/assets/next-steps.md

## Self-reflection

It was great to review array API such as map, filter, join, and sort.<br>
Will need to continue reviewing promises using "then" and "catch."<br>
Refactored the JavaScript to optimize performance. Future steps are to add another sort button for number of reviews and add a refresh button.
