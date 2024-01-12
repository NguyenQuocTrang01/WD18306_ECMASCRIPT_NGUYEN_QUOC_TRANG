fetch ("https://www.boredapi.com/api/activity")
    .then (function (response) {
        response.json ().then (function (data) {
            let app = document.getElementById ('container')
            let html = `
                <ul>
                    <li>${data.accessibility}</li>
                    <li>${data.activity}</li>
                    <li>${data.key}</li>
                    <li>${data.price}</li>
                    <li>${data.type}</li>
                    <li>${data.participants}</li>
                    <li>${data.link}</li>
                </ul>
            `
            app.innerHTML = html 
        })
    })
    .catch (function (error) {
        console.error ('Có lỗi xảy ra') 
    })