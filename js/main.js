const btn = document.getElementById("get-scheme")
const colorInput = document.getElementById("color-input")
const schemeInput = document.getElementById("color-scheme")
const colorBars = document.getElementById("color-bars")
const footer =  document.getElementById("footer")
let hexValue = "000000"
let schemeMode = "monochrome"
let URL = `https://www.thecolorapi.com/scheme?hex=${hexValue}&format=json&mode=${schemeMode}&count=5`


// gets input from the color picker

colorInput.addEventListener("input", () => {
    let color = colorInput.value
    hexValue = color.replace('#', '')
    console.log(hexValue)
    URL = `https://www.thecolorapi.com/scheme?hex=${hexValue}&format=json&mode=${schemeMode}&count=5`
})

// gets input from the scheme picker

schemeInput.addEventListener("input", () => {
    let scheme = schemeInput.value
    schemeMode = scheme
    console.log(schemeMode)
    URL = `https://www.thecolorapi.com/scheme?hex=${hexValue}&format=json&mode=${schemeMode}&count=5`
})


btn.addEventListener("click", getScheme)

function getScheme() {
    fetch(URL)
        .then(response => response.json())
        .then(data => {
            // sets the images for the scheme
            colorBars.innerHTML = `
                <img src=${data.colors[0].image.bare} class="bar" id="bar">
                <img src=${data.colors[1].image.bare} class="bar" id="bar">
                <img src=${data.colors[2].image.bare} class="bar" id="bar">
                <img src=${data.colors[3].image.bare} class="bar" id="bar">
                <img src=${data.colors[4].image.bare} class="bar" id="bar">
            `
            // push the values into footer
            footer.innerHTML = `
            
            <span class="rgb-value-1 rgb-box" id="rgb-value-1">${data.colors[0].hex.value}</span>
            <span class="rgb-value-2 rgb-box" id="rgb-value-2">${data.colors[1].hex.value}</span>
            <span class="rgb-value-3 rgb-box" id="rgb-value-3">${data.colors[2].hex.value}</span>
            <span class="rgb-value-4 rgb-box" id="rgb-value-4">${data.colors[3].hex.value}</span>
            <span class="rgb-value-5 rgb-box" id="rgb-value-5">${data.colors[4].hex.value}</span>
            
            `
        })
}