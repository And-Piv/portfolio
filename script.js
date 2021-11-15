function AddElement(string) {
    let lastChild = document.getElementById('last')
    let element = document.createElement('div')
    element.classList.add('icon')
    element.innerHTML = `<a><i class="${string}"></i></a>`
    let skill = document.getElementById('skills')
    skill.insertBefore(element, lastChild)
}

function myFunction() {
    document.getElementById("dropdown").classList.toggle('show')
    // document.getElementById("dropdown").style.display("block");
}