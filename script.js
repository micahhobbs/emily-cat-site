'use strict'

const title = document.getElementsByTagName('h1')[0]
const paragraph = document.getElementsByTagName('p')[0]
const button = document.getElementsByTagName('button')[0]
const imageElement = document.createElement('img')

button.addEventListener('click', getCatImage)

function getCatImage() {
    paragraph.style.display = 'none'
    button.textContent = 'More cats plz'
    
    const xhr = new XMLHttpRequest()

    xhr.open('GET', 'https://aws.random.cat/meow', true)
    
    xhr.onload = function () {
        const catData = JSON.parse(this.response)
        const catImage = catData.file
        imageElement.setAttribute('src',  catImage)
        imageElement.setAttribute('alt',  'image of a cat')
        title.after(imageElement)
    }
    
    xhr.send()
}

