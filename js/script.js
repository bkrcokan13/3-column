function getCars() {
    let categoriesColor = [
        "--sedans-color",
        "--suvs-color",
        "--luxury-color"
    ];

    let carInfo = [
        {
            category: "SEDANS",
            description: "Choose a sedan for its affordability and excellent fuel economy. Ideal for cruising in the city or on your next road trip.",
            carIcon: "/images/icon-sedans.svg"
        },
        {
            category: "SUVS",
            description: "Take an SUV for its spacious interior, power, and versatility. Perfect for your next family vacation and off-road adventures.",
            carIcon : "/images/icon-suvs.svg",
        
        },
        {
            category: "LUXURY",
            description: "Cruise in the best car brands without the bloated prices. Enjoy the enhanced comfort of a luxury rental and arrive in style.",
            carIcon: "/images/icon-luxury.svg"
        }
    ];

    const container = document.querySelector(".container");

    let content = ""

    for (let i = 0; i < carInfo.length; i++) {
        
        content += `

            <div class="car-card" style="background-color: var(${categoriesColor[i]})">
                <div class="car-title">
                    <div class="car-icon" style="background-image:url(${carInfo[i]["carIcon"]})"></div>
                        <h1>${carInfo[i]["category"]}</h1>
                    </div>
                <div class="car-description">
                    <p>${carInfo[i]["description"]}</p>
                    <a href="#">Learn More</a>
                </div>
            </div>
        
        `;
       
    }

    container.innerHTML = content


    // // const getCarCard = document.querySelectorAll(".car-card");

    // // getCarCard.forEach((val, idx) => {
    // //     val.style.backgroundColor = `var(${categoriesColor[idx]})`;
    // //     val.style.color = `#FFFFFF`;


    //     val.innerHTML = `
        
    //     <div class="car-title">
    //         <div class="car-icon" style="background-image:url(${carInfo[idx]["carIcon"]})"></div>
    //             <h1>${carInfo[idx]["category"]}</h1>
    //         </div>
    //     <div class="car-description">
    //         <p>${carInfo[idx]["description"]}</p>
    //         <a href="#">Learn More</a>
    //     </div>
        
    //     `
        
    // // });
}


getCars();
