// 1. connect with data.json
function fetchJson (){
    return fetch('data/data.json')
    .then((response)=>{return response.json()})
    .then((value)=>{return (value.foodItems)})
}

//2. create the elements(=li(s)) under ul.listwrapper through javascript
function createElements (foodItem){

    const img = document.createElement("img")
    img.setAttribute("src", `${foodItem.src}`)
    img.setAttribute("alt", '')
    const span = document.createElement("span")
    span.textContent = `${foodItem.place},Reviews : (${foodItem.reviews})`
    const li = document.createElement("li")
    li.setAttribute("class", "list")
    li.setAttribute("data-country", `${foodItem.country}`)
    li.setAttribute("data-type", `${foodItem.type}`)
    li.append(img)
    li.append(span)
    return li
}


//3. match elements(=li(s)) with data.json
function onBtnHandler(event,foodItems){ //foodItems = elements = li(s)
    const target = event.target.dataset
    const key = target.key
    const value = target.value

    if(key == null || value == null){
        return
    }
    foodItems.forEach(foodItem=>{

        if(foodItem.dataset[key] === value){
            foodItem.classList.remove('inactive')

        }else{
            foodItem.classList.add('inactive')
        }
    })
}



// elements = li(s)
fetchJson()
.then((foodItems)=>{
    const elements = foodItems.map((foodItem)=>{return createElements(foodItem)})
    const listWrapper = document.querySelector('.listwrapper')
    listWrapper.append(...elements)
    const menu = document.querySelector('.menu')
    menu.addEventListener('click', (event)=> {return onBtnHandler(event,elements)})
    
})
.catch(console.log)