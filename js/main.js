'use strict'


function convert() {
    var els = document.querySelectorAll('.coins')
    var from = els[0].value
    var to = els[1].value
    getConvertFromApi(`https://free.currconv.com/api/v7/convert?q=${from}_${to}&compact=ultra&apiKey=ce3b5ec1ed3d1ddf9dc5`)
        .then(res => {
            var curency = res[`${from}_${to}`];
            renderConvert(curency)
        })
}

getConvertFromApi(`https://free.currconv.com/api/v7/countries?apiKey=ce3b5ec1ed3d1ddf9dc5`)
    .then(country => {
        return country.results
    })
    .then(results => {
        var countrys = Object.keys(results);
        countrys = countrys.sort()
        countrys.reduce((acc, country) => {
            var country = results[country].currencyId;
            if (!acc.includes(country)) {
                renderCuntry(country)
            }
            return acc += country + ' '
        })
    })

function renderConvert(curency) {
    document.querySelector('h4').innerText = curency
}
function renderCuntry(country) {
    var els = document.querySelectorAll('.coins')
    els.forEach(el => {
        el.innerHTML += `<option value="${country}">${country}</option>`
    })
}