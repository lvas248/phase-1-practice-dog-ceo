console.log('%c HI', 'color: firebrick')
const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
const breedUrl = 'https://dog.ceo/api/breeds/list/all'

document.addEventListener('DOMContentLoaded', ()=>{
    fetchImages()
    fetchBreeds()
    changeLiColor()
    filterBreeds()
}) 




//---------------------------------------------------------------------
//challenge 1
function fetchImages(){
    fetch(imgUrl)
    .then(res => res.json())
    .then(data => {
        let urlList = data.message
        urlList.forEach((url)=>{
            document.querySelector('#dog-image-container').innerHTML += `<img width="80%" src="${url}"/>`
        })
})
}

//challenge 2
function fetchBreeds(){
    fetch(breedUrl)
    .then(res => res.json())
    .then(data => {
        let breedArray = Object.keys(data.message)
        breedArray.forEach(breed => {
            document.querySelector('#dog-breeds').innerHTML += `<li class="breed">${breed}</li>`
        }   
    )
})
}
//challenge 3

function changeLiColor(){
    document.querySelector("ul").addEventListener('click', (e)=> {
        if(e.target.className === "breed")
        {e.target.style.color = "blue"}
    })
}

// challenge 4
function filterBreeds(){
    document.querySelector('#breed-dropdown').addEventListener('change', (e)=> {
       document.querySelector("#dog-breeds").innerHTML = ""
        fetch(breedUrl)
       .then(res => res.json())
       .then(data => {
        let breeds = Object.keys(data.message)
           let filteredBreeds = breeds.filter(breed => breed.startsWith(e.target.value))
           filteredBreeds.forEach((breed)=> {
            let li = document.createElement('li')
            li.textContent = breed
            li.className = "breed"
            document.querySelector("#dog-breeds").appendChild(li)
           })
        }
       )
    })}
    

    




