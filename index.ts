function imageHandler() {
    const smallImgs = document.querySelectorAll(".small-img") as NodeListOf<HTMLImageElement>;
    
    document.querySelectorAll(".scrollable").forEach((e) => {
        e.scrollLeft = 0;
    })

    function resetImgs(sectionNumber: number) {
        console.log(sectionNumber)
        console.log(document.getElementById("proj-" + sectionNumber))
        const prevSmallActiveImg = document.getElementById("proj-" + sectionNumber)?.querySelector('.small-active');

        console.log(prevSmallActiveImg)
        prevSmallActiveImg?.classList.replace("-translate-y-1", "-translate-y-0")
        prevSmallActiveImg?.classList.add("opacity-50");
        prevSmallActiveImg?.classList.remove("small-active");

        console.log(document.getElementById("proj-" + sectionNumber));
        console.log(document.getElementById("proj-" + sectionNumber)?.querySelector(".big-active"));
        const prevBigActiveImg = document.getElementById("proj-" + sectionNumber)?.querySelector(".big-active");
        prevBigActiveImg?.classList.remove("big-active")
        prevBigActiveImg?.classList.replace("-translate-y-1", "-translate-y-0");

    }
    smallImgs.forEach((element) => {
        element.addEventListener("click", (e) => {
            const target = e.target as HTMLImageElement
            //proj-[id]
            const sectionNumber = target.id[1];
            resetImgs(Number(sectionNumber));
            target.classList.add("small-active")
            target.classList.replace("-translate-y-0", "-translate-y-1")
            target.classList.remove("opacity-50")

            console.log(document.getElementById('proj-'+sectionNumber))
            
            const newBigActiveImg = document.getElementById("b" + target.id)!
            
            const scrollWidth = newBigActiveImg!.getBoundingClientRect().width
            newBigActiveImg.classList.add("big-active")
            newBigActiveImg.classList.replace("-translate-y-0", "-translate-y-1")
            console.log(newBigActiveImg)
            document.getElementById("proj-" + sectionNumber)!.querySelector('.scrollable')!.scrollLeft = scrollWidth * Number(newBigActiveImg.id[1]);
        })


    })


}

function scrollFadeInHandler() {
    const fadeInElements = document.querySelectorAll('.fade-in-element');

    fadeInElements.forEach((element, index) => {
        if (element.getBoundingClientRect().y > 0 || window.scrollY === 0) {

            console.log(index + '  ' + element.getBoundingClientRect().y)
            element.classList.add('fade-in-scroll')
        }
    })
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                console.log('innersection')
                entry.target.classList.add('is-visible')
                observer.unobserve(entry.target)
            }
        })
    })
    fadeInElements.forEach(element => observer.observe(element))
}

function animateCards() {
    document.querySelectorAll('.experience-card').forEach((element, index) => {
        setTimeout(() => {
            element.classList.add('animate-fadeIn')
        }, 100 * index);
    })
}

imageHandler();
scrollFadeInHandler();
animateCards();
