'use strict'

const catDOMElement = document.getElementsByClassName('image')[0]
const button = document.getElementsByTagName('button')[0]


button.addEventListener('click', getCatImage)

function getCatImage() {
    const xhr = new XMLHttpRequest()

    xhr.open('GET', 'https://aws.random.cat/meow', true)
    
    xhr.onload = function () {
        const catData = JSON.parse(this.response)
        const catImage = catData.file
        // TODO: Just keeps creating new image - create html element and just update
        const imgElement = document.createElement('img')
        imgElement.setAttribute('src',  catImage)
        catDOMElement.appendChild(imgElement)
    }
    
    xhr.send()
}

