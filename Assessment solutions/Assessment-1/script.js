const datas = document.querySelector("button")


// datas.addEventListener('click', results)

function results() {
    
    fetch("http://www.phpmyadmin.net").then((res) => {
        console.log(res)
    })

}