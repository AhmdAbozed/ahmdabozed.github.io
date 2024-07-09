const smallImgs = document.querySelectorAll(".small-img") as NodeListOf<HTMLImageElement>;
console.log(smallImgs)
const bigImgs = document.querySelectorAll(".big-img") as NodeListOf<HTMLImageElement>
function resetScrolls(){
    const imgSections = document.querySelectorAll(".scrollable").forEach((e)=>{
        e.scrollLeft = 0;
    })
}
resetScrolls();
function resetImgs(sectionNumber: number){
    const prevSmallActiveImg = document.querySelector(".small-active" + sectionNumber);
    
    console.log(prevSmallActiveImg)
    prevSmallActiveImg?.classList.replace("-translate-y-1", "-translate-y-0")
    prevSmallActiveImg?.classList.add("opacity-50");
    prevSmallActiveImg?.classList.remove("small-active" + sectionNumber);

    const prevBigActiveImg = document.querySelector(".big-active" + sectionNumber);
    prevBigActiveImg?.classList.remove("big-active" + sectionNumber)
    prevBigActiveImg?.classList.replace("-translate-y-1", "-translate-y-0");
    prevBigActiveImg?.classList.add("opacity-50");

}
smallImgs.forEach((element) => {
    console.log("hmm")
    element.addEventListener("click", (e) => {
        const target = e.target as HTMLImageElement
        //second digit of id points to section number, to seperate sections' logic 
        const sectionNumber = target.id[1]
        resetImgs(Number(sectionNumber));
        target.classList.add("small-active" + sectionNumber)
        target.classList.replace("-translate-y-0", "-translate-y-1")
        target.classList.remove("opacity-50")

        const newBigActiveImg = document.getElementById("b" + target.id)!
        newBigActiveImg.classList.add("big-active" + sectionNumber)
        newBigActiveImg.classList.replace("-translate-y-0", "-translate-y-1")
        newBigActiveImg.classList.remove("opacity-50")

        const prevBigActiveImg = document.querySelector(".big-active" + sectionNumber);
        const scrollWidth = prevBigActiveImg!.getBoundingClientRect().width
        document.getElementById("proj-"+sectionNumber)!.scrollLeft = scrollWidth*Number(newBigActiveImg.id[1]) ;
    })


})


