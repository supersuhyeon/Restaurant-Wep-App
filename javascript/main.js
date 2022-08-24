// fetch('http://example.com/movies.json')
//   .then((response) => response.json())
//   .then((data) => console.log(data));

//1.connect with the data.json file
function fetchJson (){
    return fetch('data/data.json')
    .then((response)=>{return response.json()})
    .then((value)=>{return (value.foodItems)})
}

//2. display the elements under the ul tag
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


//3. Create HTML tag lists from the foodItems in data.json file
function innerHtml(foodItem){
    return ` <li class="list">
    <img src="${foodItem.src}" alt="">
    <span>${foodItem.place}, Reviews : (${foodItem.reviews})</span>
    </li>`
}

//4. match up the buttons' dataset key value with the data json file 
function onbtnHandler(event, foodItems){
    const target = event.target.dataset
    const key = target.key
    const value = target.value


    if (key == null || value ==null){
        return
    }
    showItems(foodItems.filter((foodItem)=>{return foodItem[key] === value}))
}

//5. logo and menu's eventlistener
function clickListener(foodItems){
    const logo = document.querySelector('.logo img')
    logo.addEventListener('click',()=>{return showItems(foodItems)})

    const menu = document.querySelector('.menu')
    menu.addEventListener('click',(event)=>{return onbtnHandler(event,foodItems)})
   
}
//fetch API returns promises (then, catch, finally)
fetchJson()
.then((foodItems)=>{
    return showItems(foodItems),clickListener(foodItems)
})
.catch((error)=>{console.log(error)})