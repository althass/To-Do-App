var button = document.getElementById("add")

button.addEventListener('click', () =>{
    var div = document.createElement('div');
    div.classList.add('newdiv');
    document.getElementById('main').appendChild(div);
 
    var input = document.createElement('input')
    input.classList.add("input")
    div.appendChild(input)

    var favicon = document.createElement('img')
    favicon.classList.add("image")
    favicon.src = "delete.png";
    div.appendChild(favicon)

    var checkbox = document.createElement('img')
    checkbox.classList.add("checkbox")
    checkbox.src = "checkbox.png";
    div.appendChild(checkbox)

    var checkboxtext = document.createElement('h2')
    checkboxtext.innerHTML += "Please enter text"
    checkboxtext.classList.add("inputtext")
    div.appendChild(checkboxtext)

    favicon.addEventListener('click', () => {
        div.classList.add('animate')

        setTimeout(() =>{
            div.classList.remove('animate')
            document.getElementById('main').removeChild(div)
        }, 500)

    })
    var i = 1
    checkbox.addEventListener('click', () => {
        i += 1
        if ((i % 2) === 0){
            checkbox.src = "check.png"
        } else {
            checkbox.src = "checkbox.png"
        }


    })

    input.addEventListener('focus', () => {
        setTimeout(() => {
            checkboxtext.classList.add('active');
            document.getElementById('main').removeChild(checkboxtext)
        }, 500)
        input.classList.add('active')
    });

    input.addEventListener('mouseleave', () => {
        if (!input.value) {
            div.appendChild(checkboxtext)
            checkboxtext.classList.remove('active');
            input.classList.remove('active')
        }
    })
})

