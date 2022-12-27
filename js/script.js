/*-=-Parallax -=- */
document.addEventListener("mousemove", parallax);

function parallax(e) {
    this.querySelectorAll(".img").forEach(img => {
        const speed = img.getAttribute('data-speed');

        const x = (window.innerWidth - e.pageX * speed)/100;
        const y = (window.innerHeight - e.pageY * speed)/100;

        img.style.transform = `translateX(${x}px) translateY(${y}px)`
    });
}

/*-=- Tabs -=- */
let tabs = document.querySelector('.tarifs_tabs'),
tabsTitle = document.querySelectorAll('.tarifs_tabs_title'),
tarifPrice = document.querySelectorAll('.number'),
tarifDuring = document.querySelectorAll('.during');

tabs.addEventListener('click', e => {
    tabsTitle.forEach(tab => tab.classList.remove('active'));
    e.target.classList.add('active');

    if (e.target.dataset.time === 'year') {
        tarifPrice.forEach(price => price.innerHTML *= 12);
        tarifDuring.forEach(during => during.innerHTML = "/year");
    }

    if (e.target.dataset.time === 'month') {
        tarifPrice.forEach(price => price.innerHTML /= 12);
        tarifDuring.forEach(during => during.innerHTML = "/month");
    }
})