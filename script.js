document.getElementById('divProject1').addEventListener('click', function() {
    window.open('https://github.com/FernandoZMaciel/task-tracker'); 
});

let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navabr');
let sections = document.querySelector('section');
let navLinks = document.querySelector('header nav a');

window.onscroll = () => {
    sections.foreEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id =sec.getAttribute('id');

        if(top >= offset && top < offset + height){
            navLinks.foreEach(links =>{
                links.classList.remove('active');
                document.querySelector('header nav a [href =' + id + ']').classList.add('active');
            })
        }
    })
}

menuIcon.onclick = () =>{
    menuIcon.classList.toggle(bx-x);
    navbar.classList.toggle('active');
}