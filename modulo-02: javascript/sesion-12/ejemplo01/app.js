function getImagesFromNasa (){
    return fetch('https://epic.gsfc.nasa.gov/api/natural')
    .then(function(response){
        console.log(response)
        return response.json()
    })
}

function getImageUrl(data){
    const base = "https://epic.gsfc.nasa.gov/archive/natural"
    const date = data.date.substr(0,10).split("-")

    return `${base}/${date[0]}/${date[1]}/${date[2]}/png/${data.image}.png`
}

const app = document.getElementById("app")

getImagesFromNasa()
.then(function(datos){

    console.log(datos)

    datos.forEach(element => {
        const img = document.createElement("img")
        img.src = getImageUrl(element)

        app.appendChild(img)
    });
})
