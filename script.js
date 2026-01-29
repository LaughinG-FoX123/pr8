const apiURL = 'https://api.ipify.org/?format=json'

document.querySelector('button').onclick = getIP;


function getIP() {
    let ip = ''

    fetch(apiURL).then((response) => {
            console.log(response)
            return response.json()
        })
        .then((data => {
            console.log(data)
            ip += data.ip
            console.log(ip)
            return ip
        }))
    
}

function renderData(data) {
    document.querySelector('main').innerHTML = 
    `
        <button>Узнать данные</button>
        <table>
            <tr>
                <td>Ваш IP: </td>
                <td>${}</td>
            </tr>
            <tr>
                <td>Country: </td>
                <td></td>
            </tr>
            <tr>
                <td>Region: </td>
                <td></td>
            </tr>
            <tr>
                <td>Town: </td>
                <td></td>
            </tr>
        </table>
    `
}