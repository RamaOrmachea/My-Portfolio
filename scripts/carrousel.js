document.querySelectorAll(".carousel").forEach((carousel) => {
    const items = carousel.querySelectorAll(".carousel__item");
    const buttonsHtml = Array.from(items, () => {
        return `<span class="carousel__button"></span>`;
    });

    carousel.insertAdjacentHTML(
        "beforeend",
        `
        <div class="carousel__nav">
            ${buttonsHtml.join("")}
        </div>
        `
    );

    const buttons = carousel.querySelectorAll(".carousel__button");

    let currentIndex = 0;

    const changeItem = (index) => {
        items.forEach((item) =>
            item.classList.remove("carousel__item--selected")
        );
        buttons.forEach((button) =>
            button.classList.remove("carousel__button--selected")
        );

        items[index].classList.add("carousel__item--selected");
        buttons[index].classList.add("carousel__button--selected");
    };

    buttons.forEach((button, i) => {
        button.addEventListener("click", () => {
            currentIndex = i;
            changeItem(currentIndex);
        });
    });

    
    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    
                    const intervalId = setInterval(() => {
                        currentIndex = (currentIndex + 1) % items.length;
                        changeItem(currentIndex);
                    }, 5000);

                    
                    carousel.carouselIntervalId = intervalId;
                } else {
                    
                    clearInterval(carousel.carouselIntervalId);
                }
            });
        },
        { threshold: 0.5 } 
    );

    
    observer.observe(carousel);

    
    items[0].classList.add("carousel__item--selected");
    buttons[0].classList.add("carousel__button--selected");
});
