/*-------------------- INÍCIO JAVASCRIPT --------------------*/
function PBaddClass(ElementSelected) {
    console.log(ElementSelected)
    const elements = document.querySelectorAll(".payments_buttons")
    const icons = document.querySelectorAll(".payments_buttons_icons")
    console.log(icons[0])
    elements.forEach((resetClass, index) => {
        if (resetClass == ElementSelected) {
            elements[index].classList.add("button_active")
            icons[index].setAttribute("src", "assets/icons/active.svg")
        } else {
            elements[index].classList.remove("button_active")
            icons[index].setAttribute("src", "assets/icons/check_inactive.svg")
        }
    })
}
document.addEventListener('DOMContentLoaded', e => {
    console.log("Carregado")
/*    function addClass(navSelected) {
        let elementControl = 0
        clickElement.forEach((resetClass, index) => {
            if (resetClass == navSelected) {
                elementActivatedNumber = index

            }
            resetClass.classList.remove('active')
            clickElement[index].style.color = "#284F89"
        })
        //Consertar a praga da cor do texto que ta errada.

        navSelected.classList.add('active')

        let elementActivated = document.querySelector('.active')

        obj[0].style.transform = `translateX(calc(100% * ${elementActivatedNumber}))`

        clickElement[elementActivatedNumber].style.color = "white"
        switch (elementActivatedNumber) {
            case 0:
                obj[0].classList.add('border-radius-left')
                obj[0].classList.remove('border-radius-right')
                break;
            case clickElement.length:
                obj[0].classList.add('border-radius-right')
                obj[0].classList.remove('border-radius-left')
                break;
            default:
                obj[0].classList.remove('border-radius-right')
                obj[0].classList.remove('border-radius-left')
                break;
        }
    }

    function proxBtn(incrementValue) {
        let obj = document.getElementsByClassName("translate-element")
        let elementActivatedNumber = 0
        clickElement.forEach((resetClass) => {
            resetClass.classList.remove('active')
        })
        elementActivatedNumber++

        obj[0].style.transform = `translateX(calc(100% * ${elementActivatedNumber}))`
    }*/

    

    /*let payments_buttons = document.querySelectorAll(".payments_buttons")
    console.log(payments_buttons);

    for (let Element, index = 0; index < payments_buttons.length; index++) {
        Element = payments_buttons[index]
        console.log(Element);

        Element.addEventListener("click", (e) => {
            console.log("oi")

            PBaddClass(e) 
        })
    }*/
});
/* -------------------- FIM JAVASCRIPT --------------------*/