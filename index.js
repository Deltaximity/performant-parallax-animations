const fg = document.querySelector('#foreground');
const s = document.querySelector('#subject');
const bg = document.querySelector('#background');
const sections = document.querySelectorAll('.sect');

window.addEventListener('scroll', () => {
    let offset = window.scrollY;
    fg.style.top = "-" + offset*1.7 + "px";
    s.style.top = "-" + offset*1.3 + "px";
    bg.style.top = "-" + offset*1.1 + "px";
});

sections.forEach(section => {
    let rand = Math.round(Math.random(5, 70) * 70);
    section.style.padding = `0 0 0 ${rand}%`;
});