const projectArr = [
    {
        id: "modalid1",
        projectName: "nigyroom",
        popupBtn: "Open Nigyroom",
        image: "./images/project/frontend/front_simle_login.png",
        image2: "./images/logo.png",
        iframeImage: {
            image1: {
                image: "./images/project/frontend/1_signup-owner.png",
                description: "Signup page login as Renter/Owner",
            },
            image2: {
                image: "./images/project/frontend/front_simle_login.png",
                description: "Login page by simple username or password and with social site also",
            },
            image3: {
                image: "./images/project/frontend/2_login_blocked.png",
                description: "Login page with some validation show",
            },
            image4: {
                image:  "./images/project/frontend/4_dashboard.png",
                description: "Owner Dashboard page",
            },
            image5: {
                image:  "./images/project/frontend/5_add_house.png",
                description: "Add multiple house with single owner",
            },
            image6: {
                image:  "./images/project/frontend/6_list_all_house.png",
                description: "Third Page",
            },
            image7: {
                image:  "./images/project/frontend/7_house_detail.png",
                description: "List of house details",
            },
            image8: {
                image:  "./images/project/frontend/8_add_rooms.png",
                description: "Add multiple rooms of multiple house and filter with house with added rooms",
            },
            image9: {
                image:  "./images/project/frontend/9_list_of_rooms.png",
                description: "Rooms listing / Many project images are not included. This project has many features like search houes, friends comment on house like features and many more.",
            },
        },        
        description: "Hi i am Aditya"
    },
    {
        id: "modalid2",
        projectName: "portfolio",
        popupBtn: "Open Portfolio",
        image: "./images/project/1.l_res_top.png",
        image2: "./images/koo.svg",
        iframeImage: {
            image1: {
                image: "./images/project/1.l_res_top.png",
                description: "On top Resume button. By click on button new Resume page is open. Status section for status slider. Click on middle image to open Frame",
            },
            image2: {
                image: "./images/project/2.l_res_educat.png",
                description: "",
            },
            image3: {
                image:  "./images/project/3.l_res_project.png",
                description: "Project slider. On click button it open the frame where you can slide right or left",
            },
            image4: {
                image:  "./images/project/4.l_res_footer.png",
                description: "Footer section with details",
            },
            image5: {
                image:  "./images/project/5.l_res_status.png",
                description: "Status section on click on middle of the image (center round image) it open the frame. Click on left and right of the image for sliding. For close click bottom red arrow. Status has slide for all image.",
            },
            image6: {
                image:  "./images/project/6.l_res_project.png",
                description: "After click on resume button. Resume HTML page open form where you can save as PDF file",
            },
            image7: {
                image:  "./images/project/7.l_res_project.png",
                description: "After click on Print Resume button.",
            },
            image8: {
                image:  "./images/project/8.m_res_project.png",
                description: "Mobile View",
            },
            image9: {
                image:  "./images/project/9.m_res_project.png",
                description: "Mobile View",
            },
            image10: {
                image:  "./images/project/10.m_res_project.png",
                description: "Mobile View",
            },
            image10: {
                image:  "./images/project/11.m_res_project.png",
                description: "Mobile View",
            },
            image10: {
                image:  "./images/project/12.l_res_project_frame.png",
                description: "Project Frame Slider",
            },
        },         
        description: "This is my portfolio. On top click on resume button for save resume as pdf."
    },
    {
        id: "modalid3",
        projectName: "search engine",
        popupBtn: "Open Frame",
        image: "./images/project/1.l_search 12-40-45.png",
        image2: "./images/6.jpg",
        iframeImage: {
            image1: {
                image: "./images/project/1.l_search 12-40-45.png",
                description: "Example 1 Page",
            },
            image2: {
                image: "./images/project/2.l_search_output.png",
                description: "Example 2 Page",
            },
            image3: {
                image: "./images/project/3.l_search_div.png",
                description: "monts.",
            },
            image4: {
                image: "./images/project/4.l_search_image_div.png",
                description: "monts.",
            },
        },         
        description: "Simple search engine. On scroll down new div open."
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
            <li class="card_grid" style="position: relative; background-color: #000;">
                <img class="card_grid-img opacity-4" src="${projectArr[i].image}" />
                <h3 class="text_border-shadow color-white" style="width: fit-content; position: absolute;">${returnFormattedPara(sentencedCase(projectArr[i].projectName, seprater = " "))}</h3>
                <img src="${projectArr[i].image2}" alt="" class="card_grid-avtar">
                <p class="card_grid-p" style="align-items: flex-end;">
                    <span class="color-white" style="line-height: 1.7rem;">${returnFormattedPara(projectArr[i].description)}</span>
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
                                    <li class="card_grid-slider" style="background-color: #000;">
                                        <img class="card_grid-img" src="${filterArr[0].iframeImage[frameImage]['image']}" style="opacity: 0.8;"/>
                                        <p style="margin-top: 3rem; color: white; font-weight: 600;">${returnFormattedPara(filterArr[0].iframeImage[frameImage]['description'])}</p> 
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

