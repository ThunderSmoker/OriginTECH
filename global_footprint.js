//animate number counter

const workSection = document.querySelector('.global-footprint');
const workObserver = new IntersectionObserver((entries,observer)=>{
    const [entry] = entries;
    console.log(entry);

    if(!entry.isIntersecting) return;

    //animate number counter

const counterNum = document.querySelectorAll(".counter-numbers");

const speed = 4;

counterNum.forEach((curElem) => {
    const updateNumber =() =>{
        const targetNumber = parseInt(curElem.dataset.number);
        // console.log(targetNumber);

        const initialNum = parseInt(curElem.innerText);
        // console.log(initialNum);

        const incrementNum = Math.trunc(targetNumber/speed);
        // console.log(incrementNum);

        if(initialNum<targetNumber){
            curElem.innerText = `${initialNum+incrementNum}+`;

            setTimeout(updateNumber,150);
        }
    };
    

    updateNumber();
});

observer.unobserve(workSection);


},{
    root:null,
    threshold :0,
} );

workObserver.observe(workSection);
