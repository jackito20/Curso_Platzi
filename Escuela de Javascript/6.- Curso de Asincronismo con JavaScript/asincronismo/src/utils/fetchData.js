let XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;

const fetchData = (url_api) => {

    return new Promise((resolve, reject) => {
        const xhhtp = new XMLHttpRequest()
        xhhtp.open('GET', url_api, true)            
        xhhtp.onreadystatechange = (() => {       
            if(xhhtp.readyState === 4){
                (xhhtp.status === 200) 
                    ? resolve(JSON.parse(xhhtp.responseText))
                    : reject (new Error('Error ', url_api))
            }
        })
        xhhtp.send()
    })
}

module.exports = fetchData
