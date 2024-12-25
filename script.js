let buttons = Array.from(document.getElementsByTagName("button"));
let report = document.querySelector(".report")
let i = document.querySelector('.ipt');
function weathercall(p, t) {
    let j = fetch(`https://wttr.in/${p}?${t}F`);
    j.then((response) => {
        return response.text();

    }).then((data) => {
        console.log(data);
        report.innerHTML = data;
    })
}
buttons.forEach(b => {
    b.addEventListener("click", (e) => {
        let type = e.target.id;
        let place = i.value;
        if (type == '0') {
            weathercall(place, type)
        }
        else if (type == '1') {
            weathercall(place, type)
        }
        else if (type == '2') {
            weathercall(place, type)
        }

    })
});
