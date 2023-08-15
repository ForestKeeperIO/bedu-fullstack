const input = document.getElementById("search")
const button = document.getElementById("button")

const results = document.getElementById("results")

button.addEventListener("click", searchGifs)

function searchGifs() {
    const search = input.value

    if(search){
        const url = buildUrl(search)

        getGiphyResults(url)
        .then(function(gifs){
            console.log(gifs)

            gifs.forEach(function(gif){
                const img = document.createElement("img")
                img.src = gif.images.fixed_height.url

                results.appendChild(img)
            })
        })

    }
}

function getGiphyResults (url){
    return fetch(url)
        .then(function(response){
            console.log(response)
            return response.json()
        })
        .then(function(data){
            console.log(data)
            return data.data
        })
}

function buildUrl(search){
    const APIKEY = "AKc4UniENl0Onl9BLXPfktoez3GzEEVE"
    const base = 'http://api.giphy.com/v1/gifs/search'

    return `${base}?q=${search}&api_key=${APIKEY}&limit=9`
}