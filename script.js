const toGetIP = 'https://api.ipify.org/?format=json'
// 'https://ipinfo.io/185.22.207.155/geo'

document.querySelector('button').onclick = getIP;


function getIP() {
    

    fetch(toGetIP)
        .then((response => {
            return response.json()
        }))
        .then((ip => {
            console.log(ip)

            fetch(`https://ipinfo.io/${ip.ip}/geo`)
            .then((resp => {
                return resp.json()
            })).then((data => {
                console.log(data)
                renderData(data)
            }))
        })).catch((e) => {
            console.error(e)
        })
}

function renderData(ip) {
    document.querySelector('main').innerHTML = 
    `
        <button>Узнать данные</button>
        <table>
            <tr>
                <td>Ваш IP: </td>
                <td>${ip.ip}</td>
            </tr>
            <tr>
                <td>Country: </td>
                <td>${ip.country}</td>
            </tr>
            <tr>
                <td>Region: </td>
                <td>${ip.region}</td>
            </tr>
            <tr>
                <td>Town: </td>
                <td>${ip.city}</td>
            </tr>
        </table>
    `
}

