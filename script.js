let arr = ['green', 'blue', 'yellow', 'pink']
let counter = 0

let toggle = document.querySelector('#toggle')
let Random = document.querySelector('#randomode')


function changeColor() {

    if (toggle.checked) {
        if (Random.checked) {
            let color = '#' + Math.floor(Math.random() * 16777215).toString(16);
            document.body.style.backgroundColor = color;
            document.querySelector('#color').innerHTML = color
        } else {
            document.querySelector('#color').innerHTML = arr[counter]

            document.body.style.backgroundColor = arr[counter]
            counter = (counter + 1) % arr.length
        }
    }
}

let interval
let startChangingColor = function () {

    // let changer = () => (document.body.style.backgroundColor = changeColor())
    if (!interval) {
        interval = setInterval(changeColor, 200)
    }
}
let stopChangingColor = () => {
    clearInterval(interval)
    interval = null
}


document.querySelector('#start').addEventListener("click", changeColor)
document.addEventListener('keydown', function (e) {
    if (e.key === "Enter") {
        changeColor()
    }
});

document.querySelector('#reset').addEventListener('click', function () {
    document.body.style.backgroundColor = 'white'
    counter = 0
    document.querySelector('#color').innerHTML = ''
})

document.querySelector('#add-color').addEventListener('click', function () {
    if (toggle.checked) {
        let inputt = document.querySelector('#inputt').value.trim();
        const feedback = document.querySelector('#color-feedback');

        // Validate color
        const test = new Option().style;
        test.color = '';
        test.color = inputt;

        if (test.color !== '') {
            // ✅ Valid color → Apply it
            document.body.style.backgroundColor = inputt;
            document.querySelector('#color').textContent = inputt;
            feedback.textContent = `✅ `;

        } else {
            // ❌ Invalid color → Show error
            feedback.textContent = `❌ `;

        }
    }
})

document.querySelector('#automodeON').addEventListener('click', startChangingColor)
document.querySelector('#automodeOFF').addEventListener('click', stopChangingColor)

const sidebar = document.getElementById('sidebar');
const mainContent = document.getElementById('mainContent');
const toggleSidebarBtn = document.getElementById('toggleSidebar');

toggleSidebarBtn.addEventListener('click', () => {
    sidebar.classList.toggle('closed');
    mainContent.classList.toggle('expanded');
});

