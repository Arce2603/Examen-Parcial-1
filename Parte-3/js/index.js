
function watch() {
    let form = document.getElementById('formComment');
    form.addEventListener('submit', function (e) {
        e.preventDefault();
        let nameT = document.getElementsByClassName("userName");
        let comm = document.getElementById("userComment").value;
        name = nameT[0].value;
        console.log(name);
        console.log(comm);
        if (name === '' || comm === '')
            console.log("Enter something");
        else {
            let comment = document.getElementsByClassName("seccionComments");
            let divN = document.createElement('div');
            let div = document.createElement('div');
            divN.setAttribute('class', 'name');
            divN.textContent = name;
            comment[0].appendChild(divN);
            div.setAttribute('class', 'comm');
            div.textContent = comm;
            comment[0].appendChild(div);
        }
    });
}

function init() {
    watch();
}

init();