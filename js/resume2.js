let http = new XMLHttpRequest();
http.open("get", "../data.json", true);
http.send();

http.onload = function () {
    if (this.readyState == 4 && this.status == 200) {
        let jsonOutput = JSON.parse(this.responseText);
        resume1Top(jsonOutput);

    }
};

function resume1Top(jsonOutput) {
    let firstOutput = "";
    firstOutput += `
        <div class="resume1_container-top" id="resume1_container-top">
            
            <div class="bg-grey padding-container" style="width: inherit;">
                <div class="resume1-header">
                    <h1 class="f-blue" style="font-size: 2.8em; letter-spacing: 1.2px; text-transform: uppercase; margin-bottom: -0.3em;">${jsonOutput.name}</h1>
                    <span class="main_header-res1 f-blue main_sub-header fw_300" style="font-size: 1em;">${jsonOutput.current_profile}</span>
                    <p class="f-blue" style="font-size: 0.8em;">
                        <a class="f-blue" href="https://hyphen0013.github.io/portfolio-bio/" target="_blank">https://hyphen0013.github.io/portfolio-bio/</a>
                    </p>
                    <div class="top_subheader font-p" style="margin-top: 0.5em;">
                        <div>
                            <p><i class="fas fa-mobile-alt"></i> +91 8130683129</p>
                            <p><i class="fa fa-map-marker"></i> Bijwasan, New Delhi (India) - 110061</p>
                        </div>
                        <div>
                            <p><i class="fas fa-envelope-square"></i> aditya813068@gmail.com</p>
                            <p><i class="fab fa-linkedin-in"></i> https://www.linkedin.com/in/aditya-b9366b132/</p>
                            <a href="https://www.youtube.com/@BinaryCall" target="_blank">
                            <i class="fab fa-youtube" style="color: red;"></i> https://www.youtube.com/@BinaryCall
                            </a>
                        </div>
                        <div>
                            <p><i class="fab fa-github"></i> https://github.com/digyspab</p>
                            <p><i class="fab fa-github"></i> https://github.com/hyphen0013</p>
                        </div>
                    </div>
                </div>
            </div>  
        </div>
        <div class="resume1_container-bottom" id="resume1_container-bottom"></div>
    `;
    document.querySelector("#resume1-top").insertAdjacentHTML("afterend", firstOutput);
    resume1BottomLeft(jsonOutput);
    resume1BottomRight(jsonOutput);
}

// BOTTOM RIGHT
function resume1BottomRight(jsonOutput) {

    let firstOutput = "";
    firstOutput += `
        <div class="resume1_bottom-left2">
            <div class="resume1_bottom-icon" id="technical-res1">
                <table>
                    <tbody style="border-bottom: none; vertical-align: baseline;" id="social-details"></tbody>
                </table>                 
            </div>  
            
        </div>
        
    `;
    document.querySelector("#resume1_container-bottom").insertAdjacentHTML("beforeend", firstOutput);
    technicalSkillsRight(jsonOutput);
    programmingSkillsRight(jsonOutput);
    educationsResumeRight(jsonOutput);
}

function technicalSkillsRight(jsonOutput) {
    let firstOutput = "";
    firstOutput += `
        <h3 class="main_header-res1 f-blue">TECHNICAL SKILLS</h3>
        <div class="res1_technical-skills">
    `;

    for (let technical of jsonOutput.technical) {
        firstOutput += `
            <div>
                <span class="font-p" style="border: 1px solid grey; color: black;">
                    ${technical.language}
                </span>
            </div>
        `;
    }
    firstOutput += `</div>`;
    document.querySelector("#technical-res1").insertAdjacentHTML("beforeend", firstOutput);

}
function programmingSkillsRight(jsonOutput) {
    let firstOutput = "";
    let checkImage;
    let styleImg;

    firstOutput += `
        <h3 class="main_header-res1 f-blue">PROGRAMMING SKILLS</h3>
        <div class="res1_technical-skills">
    `;

    for (let programming of jsonOutput.programming) {
        if (programming.display === 'Y') {
            if (programming.image.includes("react.png")) {
                styleImg = "height: 14px; width: 26px;";
            } else if (programming.image.includes("spring-boot.png")) {
                styleImg = "height: 14px; width: 60px;";
            } else if (programming.image.includes("JSP.png")) {
                styleImg = "height: 14px; width: 20px;";
            } else {
                styleImg = "height: 14px; width: 14px;";
            }

            checkImage = programming.check_img === "Y" ? `<img src=".${programming.image}" style='${styleImg}' />` : `<i class='${programming.class}'></i>`;

            firstOutput += `
                <div>
                    <span class="bg-grey font-p">
                        ${checkImage}
                        ${programming.language}
                    </span>
                </div>
            `;
        }
    }
    firstOutput += `</div>`;
    document.querySelector("#technical-res1").insertAdjacentHTML("beforeend", firstOutput);

}

function educationsResumeRight(jsonOutput) {
    let firstOutput = "";
    firstOutput += `
        <h3 class="main_header-res1 f-blue" style="margin-top: 1.5rem;">EDUCATIONS</h3>
        <div class="res1_technical-skills">
    `;    

    for(let i = 0; i < Object.keys(jsonOutput.education).length; i++) {
        var eduNo = String(Object.keys(jsonOutput.education)[i]);
        var board = beautifyWord(jsonOutput.education[eduNo]['cource'], '"') == 'B. Tech' ? 'AFFILIATED' : 'BOARD';

        firstOutput += `
            <div class="p-4 font-p">
                <span class="bg-grey p_2-4" style="color: black;">
                    <i class="${jsonOutput.education[eduNo]['class']}"></i>
                    ${beautifyWord(jsonOutput.education[eduNo]['cource'], '"')}
                </span>
                <p class="sub-description" style="word-break: break-all;">${beautifyWord(jsonOutput.education[eduNo]['college'], '"')}</p>
                
                <div style="display: flex; flex-direction: column;">
                    <p class="fw_300 sub-description f-roboto font-p " style="margin-bottom: -8px;">Year - ${jsonOutput.education[eduNo]['year']}</p>
                    <p class="fw_300 sub-description">${jsonOutput.education[eduNo]['branch']}</p>                
                    <p class="fw_300 sub-description">- ${jsonOutput.education[eduNo]['city']} (${jsonOutput.education[eduNo]['state']})</p>                
                </div>

                <p class="sub-description res1-left">${board} (${jsonOutput.education[eduNo]['affiliated']})</p>
            </div>
            </br>
        `;
    }
    firstOutput += `</div>`;
    document.querySelector("#technical-res1").insertAdjacentHTML("beforeend", firstOutput);
}

// BOTTOM LEFT
function resume1BottomLeft(jsonOutput) {
    let firstOutput = "";
    firstOutput += `<div class="resume1_bottom-right2" id="work-experience"></div>`

    document.querySelector("#resume1_container-bottom").insertAdjacentHTML("beforeend", firstOutput);
    professionalLeft(jsonOutput);
    workExperResumeLeft(jsonOutput);
    keyAchievementLeft(jsonOutput);
}

function professionalLeft(jsonOutput) {
    let firstOutput = `
        <div class="resume1_right-content">
            <h3 class="main_header-res1 f-blue">PROFESSIONAL SUMMARY</h3>
            <hr>  
            <div class="padding-container_1">
                <div class="resume1-header">
                    ${filterWordsAndModify("3 years and 8 Months", jsonOutput.career_object.header_description)}
                </div>
            </div> 
    `;
    firstOutput += "</div>";
    document.querySelector("#work-experience").insertAdjacentHTML("beforeend", firstOutput);
}

function workExperResumeLeft(jsonOutput) {
    let firstOutput = `
        <div class="resume1_right-content">
            <h3 class="main_header-res1 f-blue">WORK EXPERIENCE</h3>
            <hr>  
    `;
    for(let i = 0; i < Object.keys(jsonOutput.work_experience).length; i++) {
        var work = String(Object.keys(jsonOutput.work_experience)[i]);

        firstOutput += '<div class="padding-equal border-dotted">';
        firstOutput += '<span class="main_header-res1 main_sub-header fw_300" style="font-size: 1.3em;">'+ jsonOutput.work_experience[work]['type'] +'</span>';
        firstOutput += '<p class="mt-1 f-roboto main_sub-header font-p" style="font-size: 1em;"><i>' + beautifyWord(jsonOutput.work_experience[work]['organization'], '"') +'</i></p>';
        firstOutput += '<ul>';
        firstOutput += '<li class="work_exper-address fw_100 main_sub-header font-p">';
        firstOutput += '<i>' + jsonOutput.work_experience[work]['year'] + '</i>';
        firstOutput += '<i><small>' + jsonOutput.work_experience[work]['short_address'] + '</small></i>';
        firstOutput += '</li>';
        firstOutput += '<div class="mt-1 work_exper-description main_sub-header font-p">';
        
        // Project 1
        // firstOutput += '<p class="project-border"><b style="padding-right: 10px;">Projects 1: </b> '+ jsonOutput.work_experience[work]['project_1'] +'</p>';

        // firstOutput += '<p style="margin-bottom: 10px;"> <b>Duration: </b> '+ jsonOutput.work_experience[work]['duration_1'] +'</p>';

        // firstOutput += '<p style="margin-bottom: 10px;"> <b>Skills: </b> '+ jsonOutput.work_experience[work]['skills_1'] +'</p>';
        
        // firstOutput += '<p style="margin-bottom: 5px;"><b>Roles & Responsibilities</b></p>';
        jsonOutput.work_experience[work]['work_description'].forEach(function(value, index) {
            firstOutput += '<li style="margin-bottom: 5px;">' + value + '</li>';
        }) 
        
        // if(jsonOutput.work_experience[work]['project_2'] != undefined) {
        // // Project 2
        // firstOutput += '<p class="project-border"><b style="padding-right: 10px;">Projects 2:</b> '+ jsonOutput.work_experience[work]['project_2'] +'</p>';

        // firstOutput += '<p style="margin-bottom: 10px;"> <b>Duration: </b> '+ jsonOutput.work_experience[work]['duration_2'] +'</p>';

        // firstOutput += '<p style="margin-bottom: 10px;"> <b>Skills: </b> '+ jsonOutput.work_experience[work]['skills_2'] +'</p>';
        
        // firstOutput += '<p style="margin-bottom: 5px;"><b>Roles & Responsibilities</b></p>';
        //     jsonOutput.work_experience[work]['work_description_2'].forEach(function(value, index) {
        //         firstOutput += '<li style="margin-bottom: 5px;">' + value + '</li>';
        //     });
        // }
        
        firstOutput += '</div>';
        firstOutput += '</ul>';

        firstOutput += '</div>';
    }
    firstOutput += "</div>";
    document.querySelector("#work-experience").insertAdjacentHTML("beforeend", firstOutput);
}

function keyAchievementLeft(jsonOutput) {
    let firstOutput = `
        <div class="resume1_right-content">
            <h3 class="main_header-res1 f-blue">KEY ACHIEVEMENT</h3>
            <hr>  
            <div class="res1_technical-skills padding-equal font-p">
    `;
    firstOutput += '<span class="main_header-res1 main_sub-header fw_300" style="font-size: 1.5em;"><i class="far fa-star f-blue" style="font-size:20px;"></i> Spot Appreciation</span>';
    firstOutput += `<p class="main_header-res1 main_sub-header fw_300" style="margin-top: 5px;">
                    Rated with the best annual performance rating for the year 2022 during my sprint;
                </p>`;
    firstOutput += "</div>";
    document.querySelector("#work-experience").insertAdjacentHTML("beforeend", firstOutput);
}