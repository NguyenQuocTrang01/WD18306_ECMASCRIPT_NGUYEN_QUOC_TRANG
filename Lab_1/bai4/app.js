fetch ("https://datausa.io/api/data?drilldowns=Nation&measures=Population")
    .then (response => {
        response.json ().then ((data) => {
            let tbodyTable = document.getElementById ('table1')
            tbodyTable.innerHTML = `
                <thead style = 'background-color: rgb(249, 174, 60);'>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Nation</th>
                        <th scope="col">Year</th>
                        <th scope="col">Population</th>
                    </tr>
                </thead>
                <tbody>
            `   
            let list = data.data
            let stt = 0 

            list.forEach(element => {
                stt += 1
                let html = `
                    <tr>
                        <th scope="row">${stt}</th>
                        <td>${element.Nation}</td>
                        <td>${element.Year}</td>
                        <td>${element.Population}</td>
                    </tr>
                `
                tbodyTable.innerHTML += html 
            });

            tbodyTable.innerHTML += `
                </tbody>
            `
        })
    })
    .catch ((error) => {
        console.error ('Có lỗi xảy ra') 
    })

fetch ("https://65929f4fbb129707198fe18e.mockapi.io/tinhpv10/students")
    .then (response => {
        response.json ().then ((data) => {
            let tbodyTable = document.getElementById ('tbodyTable2')
            let list = data
            let stt = 0 

            list.forEach(element => {
                stt += 1
                let html = `
                    <tr>
                        <th scope="row">${stt}</th>
                        <td><img style = 'width: 10%' src='${element.avatar}' alt="" /></td>
                        <td>${element.name}</td>
                        <td>${element.createdAt}</td>
                    </tr>
                `
                tbodyTable.innerHTML += html 
            });
        })
    })
    .catch ((error) => {
        console.error ('Có lỗi xảy ra') 
    })