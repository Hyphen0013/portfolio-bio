const projectArr = [
    {
        id: "modalid1",
        projectName: "nigyroom",
        popupBtn: "Click here",
        image: "./images/bg-image/work1.jpg",
        image2: "./images/logo.png",
        iframeImage: {
            image1: {
                image: "./images/internship.png",
                description: "First Page",
            },
            image2: {
                image: "./images/organization.png",
                description: "Second Page",
            },
            image3: {
                image:  "./images/prolitus.png",
                description: "Third Page",
            },
        },        
        description: "Hi i am Aditya"
    },
    {
        id: "modalid2",
        projectName: "resume",
        popupBtn: "Check out",
        image: "./images/bg-image/work2.jpg",
        image2: "./images/koo.svg",
        iframeImage: {
            image1: {
                image: "./images/programming/api.png",
                description: "Check 1 Page",
            },
            image2: {
                image: "./images/programming/CSS.png",
                description: "check 2 Page",
            },
            image3: {
                image:  "./images/programming/html.png",
                description: "check 3 Page",
            },
        },         
        description: "I am Rocky, currently i'm working in GDI India"
    },
    {
        id: "modalid3",
        projectName: "static website",
        popupBtn: "Check website",
        image: "./images/bg-image/work3.jpg",
        image2: "./images/6.jpg",
        iframeImage: {
            image1: {
                image: "./images/bg-image/work1.jpg",
                description: "Example 1 Page",
            },
            image2: {
                image: "./images/bg-image/work3.jpg",
                description: "Example 2 Page",
            },
            image3: {
                image: "./images/bg-image/work2.jpg",
                description: "Example 3 Page. This page is belongs to renter where you can list all the renter and on click on them it open details of the rent related to monts.",
            },
        },         
        description: "Room rent website. Log history of all renters"
    }
]

function showProjectSlider() {
    var frameIdArr = [];

    let projectsOutput = "";
    projectsOutput += `
    <section class="tab-section-slider">
        <div class="group-header">
            <div class="group-title">${sentencedCase("Projects", seprater = " ")}</div>
        </div>
    </section>
    <div id="projectslider-tab"></div>`;    
    
    document.querySelector("#project-slider").innerHTML = projectsOutput;

    let prjectSliderOutput = "";
    prjectSliderOutput = `<ul id="adaptive" class="cs-hidden ul-light-slider">`;

    for(let i = 0; i < projectArr.length; i++) {
        frameIdArr.push(projectArr[i].id);
        prjectSliderOutput += `
            <li class="card_grid" style="position: relative;">
                <img class="card_grid-img" src="${projectArr[i].image}" />
                <h3 class="text_border-shadow" style="opacity: 0.6; width: fit-content; position: absolute;">${returnFormattedPara(sentencedCase(projectArr[i].projectName, seprater = " "))}</h3>
                <img src="${projectArr[i].image2}" alt="" class="card_grid-avtar">
                <p class="card_grid-p">
                    <span>${returnFormattedPara(projectArr[i].description)}</span>
                    <a href="javascript:void(0)" data-li="example" class="login_btn" id="${projectArr[i].id}" data-url="#" data-height="650px" data-width="100%" data-placement="top">${projectArr[i].popupBtn}</a>
                </p>
            </li>`;
    }
    document.querySelector("#projectslider-tab").insertAdjacentHTML("beforeend", prjectSliderOutput);    
    prjectSliderOutput += `</ul>`;

    // Slider for FramePopup
    document.addEventListener('click', checkFrameBtnClick);
    let framePopup = "";
    function checkFrameBtnClick(e) {
        var frameHeight = e.target.getAttribute('data-height');

        if(e.target.getAttribute('data-height') != null) {
            var filterArr = projectArr.filter((value, index) => {
                return value.id === e.target.id;
            });
            
            framePopup = `
            <div id="frameModal" class="modal">
                <div class="modal-content m-md">
                    <div class="modal_close-btn">
                        <a href="#close" class="close">&times;</a>
                    </div>
    
                    <div class="modal_iframe-slider">
                        <ul id="adaptive-frame">`;

                        for(let i = 0; i < Object.keys(filterArr[0].iframeImage).length; i++) {
                            let frameImage = Object.keys(filterArr[0].iframeImage)[i];

                            framePopup +=`
                                <li class="card_grid-slider">
                                    <img class="card_grid-img" src="${filterArr[0].iframeImage[frameImage]['image']}" />
                                    <h3 class="text_border-shadow" style="opacity: 0.6; width: fit-content;">${returnFormattedPara(sentencedCase(filterArr[0].projectName, seprater = " "))}</h3>
                                    <p>${returnFormattedPara(filterArr[0].iframeImage[frameImage]['description'])}</p> 
                                </li>`;                            
                        }


                        framePopup +=`</ul>             
                    </div>
    
                </div>
            </div>`;
            document.querySelector("body").insertAdjacentHTML("beforeend", framePopup);  
            
            // Some delay to open iframe
            setInterval(() => {
                $('#frameModal').show();
            }, 10);
        }
       
        // On click each slider id open frame
        frameIdArr.forEach(function (id) {
            $('#' + id).on('click', function (e) {
                $('#frameModal').show();
            });
            $('.close').on('click', function () {
                $('#frameModal').remove();
            });
        }); 
        
        // Ifram auto height
        $('#adaptive-frame').lightSlider({
            // adaptiveHeight:true,
            // auto: true,
            loop: true,
            pauseOnHover: true,
            item: 1,
            slideMargin: 15,
            vertical:true,
            verticalHeight:500,   
            enableDrag: false,     
        });         
    }

    // On click each slider id open frame
    frameIdArr.forEach(function (id) {
        $('#' + id).on('click', function (e) {
            $('#frameModal').show();
        });
        $('.close').on('click', function () {
            $('#frameModal').remove();
        });
    }); 
    
    // Ifram auto height
    $('#adaptive-frame').lightSlider({
        // adaptiveHeight:true,
        // auto: true,
        loop: true,
        pauseOnHover: true,
        item: 1,
        slideMargin: 15,
        vertical:true,
        verticalHeight:500,    
        enableDrag: false,    
    });      
       
    
}
showProjectSlider();

