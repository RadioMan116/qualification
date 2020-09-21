// cats handel
(() => {

    let cats = document.querySelector(".cats");
    if (cats) {
        let catcChild = cats.querySelectorAll(".cat");

        catcChild.forEach(el => {
            let element = el.querySelector(".cat-inner");
            let parentElement = element.parentElement.classList;
            let buttonBuy = el.querySelector(".js-cat-buy");
            if (buttonBuy) {
                buttonBuy.addEventListener("click", () => {
                    parentElement.toggle("active");
                });
            }

            if (element) {
                element.addEventListener("click", () => {
                    parentElement.toggle("active");
                    if (parentElement.contains("activeHover")) {
                        parentElement.remove("activeHover");
                    }
                });
                element.addEventListener("mouseenter", () => {
                    if (parentElement.contains("active")) {
                        parentElement.add("activeHover");
                    }
                });
                element.addEventListener("mouseleave", () => {
                    if (parentElement.contains("activeHover")) {
                        parentElement.remove("activeHover");
                    }
                });
            }

        });
    }
})();