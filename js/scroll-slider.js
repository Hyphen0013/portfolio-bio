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

let userStatusArr = [
    {
        id: 1,
        image: {
            image1: "./images/img/2017-02-07-13-17-58-217.jpg",
            image2: "./images/img/2017-03-30-13-18-42-342.jpg",
            image3: "./images/img/2017-03-30-13-21-04-074.jpg",
        }
    },
    {
        id: 2,
        image: {
            image1: "./images/img/IMG_20160421_083429.jpg",
            image2: "./images/img/IMG_20170419_163354.jpg",
            image3: "./images/img/IMG_20170419_163457.jpg",
        }
    },
    {
        id: 3,
        image: {
            image1: "./images/img/IMG_20170921_114815054.jpg",
            image2: "./images/img/IMG_20170921_114901734.jpg",
            image3: "./images/img/IMG_20170921_115046196.jpg",
        }
    },
    {
        id: 4,
        image: {
            image1: "./images/img/IMG_20180318_211022.jpg",
            image2: "./images/img/IMG_20180318_212510.jpg",
            image3: "./images/img/selfiecamera_2016-04-23-14-32-16-041.jpg",
        }
    }
]

/**
 * PROJECTS SLIDER
 */
function projectSlider() {
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
                    <a href="javascript:void(0)" data-li="example" class="login_btn" id="${projectArr[i].id}" data-url="#"  data-project="650px" data-width="100%" data-placement="top">${projectArr[i].popupBtn}</a>
                </p>
            </li>`;
    }
    document.querySelector("#projectslider-tab").insertAdjacentHTML("beforeend", prjectSliderOutput);    
    prjectSliderOutput += `</ul>`;

    // Slider for FramePopup
    document.addEventListener('click', checkFrameBtnClick);
    let framePopup = "";
    function checkFrameBtnClick(e) {
        
        if(e.target.getAttribute('data-project') != null) {
            var frameHeight = e.target.getAttribute('data-project');
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
                            framePopup +=
                        `</ul>             
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

       
/**
 * USER STATUS
 */

function userStatusChange() {
    let userId = [];
    let usersOutput = "";
    usersOutput += `
    <section class="tab-section-slider">
        <div class="group-header">
            <div class="group-title">${sentencedCase("Status", seprater = " ")}</div>
        </div>
    </section>
    <div id="userslider-tab"></div>`;  

    document.querySelector("#user-slider").innerHTML = usersOutput;

    let userSlider = "";
    
    userSlider = `<ul id="responsive-tab" class="cs-hidden ul-light-slider">`;

    for(let i = 0; i < userStatusArr.length; i++) {
        userId.push(userStatusArr[i].id);

        userSlider += `
            <li class="card_grid" style="position: relative; height: 300px; align-items: center;">
                <img class="card_grid-img" src="${userStatusArr[i].image.image1}" />
                <a href="javascript:void(0)" style="position: relative; height: 300px; align-items: center; cursor: default;" data-li="example" id="${userStatusArr[i].id}" data-url="#" data-height="650px" data-width="100%" data-placement="top">
                    <img style="border: 6px solid rgba(255, 255, 255, .3); cursor: pointer;" src="./images/logo.png" alt="" class="card_grid-avtar">
                </a>
            </li>`;
    }
    document.querySelector("#userslider-tab").insertAdjacentHTML("beforeend", userSlider);    
    userSlider += `</ul>`;

    // userStatus FramePopup
    document.addEventListener('click', checkUserStatusClick);

    function checkUserStatusClick(e) {
        if(e.target.parentElement.getAttribute('data-li') != null) {

            var filterUserImage = userStatusArr.filter((value, index) => {
                return value.id == e.target.parentElement.id;
            });
            
            let userPopup = "";
            userPopup = `
                <div id="frameModal" class="modal">
                    <div class="modal-content m-custom" style="height: 600px;">
                        <div class="modal_iframe-slider" style="height: inherit; padding: 0px;">
                            <div data-change="change_status" class="status_slide" id="change_status" style="padding: 0px;">
                                <div class="status_slide-items" style="border-radius: 0;">`;
                                for(let i = 0; i < Object.keys(filterUserImage[0].image).length; i++) {
                                    let imageKey = Object.keys(filterUserImage[0].image)[i];

                                    userPopup +=
                                    `<div>
                                        <img src="${filterUserImage[0].image[imageKey]}" alt="">
                                    </div>`;                                    
                                }                                
                                userPopup +=
                                `</div>
                                <div class="user_status-back">
                                    <a href="javascript:void(0);" class="close" style="background: none;">
                                        <i class="fas fa-arrow-left"></i>
                                    </a>
                                </div>                                
                                <nav class="status_slide-nav">
                                    <div class="status_slide-thumb"></div>
                                    <button class="slide_prev">Prev</button>
                                    <button class="slide_next">Next</button>
                                </nav>
                            </div>
                            
                        </div>
                    </div>
                </div>`;
                document.querySelector("body").insertAdjacentHTML("beforeend", userPopup);  

                new SliderShow('status_slide');
            // Some delay to open iframe
            setInterval(() => {
                $('#frameModal').show();
            }, 10);
        }
        // On click each slider id open frame
        userId.forEach(function (id) {
            $('#' + id).on('click', function (e) {
                $('#frameModal').show();
            });
            $('.close').on('click', function () {
                $('#frameModal').remove();
            });
        });
    }
    // On click each slider id open frame
    userId.forEach(function (id) {
        $('#' + id).on('click', function (e) {
            $('#frameModal').show();
        });
        $('.close').on('click', function () {
            $('#frameModal').remove();
        });
    });
}

function showProjectSlider() {
    projectSlider();
    userStatusChange();
}

showProjectSlider();

