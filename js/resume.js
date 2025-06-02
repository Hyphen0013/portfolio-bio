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
    let image = jsonOutput.image.split("img");
    image = "."+image[0] + "img" + image[1];

    let firstOutput = "";
    firstOutput += `
        <div class="resume1_container-top" style="margin-top: 10px;" id="resume1_container-top">
            <div class="resume1-left" style="padding-top: 0;">
                <div class="resume1-image">
                    <img src="${image}" alt=${jsonOutput.name}>
                </div>
            </div>
            <div class="resume1-right bg-grey padding-container">
                <div class="resume1-header">
                    <h1 class="f-blue" style="font-size: 1.2em; letter-spacing: 1.2px;">${jsonOutput.name}</h1>
                    <span class="main_header-res1 f-blue main_sub-header fw_300">${jsonOutput.current_profile}</span>
                    ${filterWordsAndModify("5+ years", jsonOutput.career_object.header_description)}
                </div>
            </div>  
        </div>
        <div class="resume1_container-bottom" id="resume1_container-bottom"></div>
    `;
    // document.querySelector("#resume1-top").innerHTML = firstOutput;
    document.querySelector("#resume1-top").insertAdjacentHTML("afterend", firstOutput); 
    resume1BottomLeft(jsonOutput);
    resume1BottomRight(jsonOutput);
}

function resume1BottomLeft(jsonOutput) {
    
    let firstOutput = "";
    firstOutput += `
        <div class="resume1_bottom-left">
            <div class="resume1_bottom-icon" id="technical-res1">
                <table>
                    <tbody style="border-bottom: none; vertical-align: baseline;" id="social-details"></tbody>
                </table>                 
            </div>  
            
        </div>
        
    `;
    document.querySelector("#resume1_container-bottom").insertAdjacentHTML("beforeend", firstOutput); 
    personSocialResume1Details(jsonOutput);
    technicalResume1Skills(jsonOutput);
    educationsResume1(jsonOutput);
    interestsResume1(jsonOutput);
    languagesResume1(jsonOutput);

}

function personSocialResume1Details(jsonOutput) {
    let getProOutput = "";
    let icon
    let image
    for(let site of jsonOutput.social_site) {
        if(site.display == "Y") {
            if(site.image) {
                image = site.image.split("images/");
                image = "../images/" + image[1];
            }

            icon = site.fa_icon ? '<i class="'+ site.fa_icon +'"></i>' : '<img style="height: 20px;" src="'+ image + '" />';
            link = site.link_display == 'Y' ? site.link : site.email;
            getProOutput = `
                <tr style="border-bottom: none;" class="font-p">
                    <td style="width: 200px;" >${icon}</td>
                    <td class="fit-content">${link}</td>
                </tr> 
            `;
            
            document.querySelector("#social-details").insertAdjacentHTML("beforeend", getProOutput); 
        }
    }
}

function technicalResume1Skills(jsonOutput) {
    let firstOutput = "";
    let checkImage;
    let styleImg;

    firstOutput += `
        <h3 class="main_header-res1 f-blue">TECHNICAL SKILLS</h3>
        <div class="res1_technical-skills">
    `;    

    for(let programming of jsonOutput.programming) {
        if(programming.display === 'Y') {
            if(programming.image.includes("react.png")) {
                styleImg = "height: 14px; width: 26px;";
            } else if(programming.image.includes("spring-boot.png")) {
                styleImg = "height: 14px; width: 60px;";
            } else if(programming.image.includes("JSP.png")) {
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

function educationsResume1(jsonOutput) {
    let firstOutput = "";
    firstOutput += `
        <h3 class="main_header-res1 f-blue" style="margin-top: 1.5rem;">EDUCATIONS</h3>
        <div class="res1_technical-skills">
    `;    

    for(let i = 0; i < Object.keys(jsonOutput.education).length; i++) {
        var eduNo = String(Object.keys(jsonOutput.education)[i]);
        var collegeType = beautifyWord(jsonOutput.education[eduNo]['cource'], '"') == 'B. Tech' ? 'College' : 'School';
        var board = beautifyWord(jsonOutput.education[eduNo]['cource'], '"') == 'B. Tech' ? 'AFFILIATED' : 'BOARD';

        firstOutput += `
            <div class="p-4 font-p">
                <span class="bg-grey p_2-4">
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
            </br>
        `;
    }
    firstOutput += `</div>`;
    document.querySelector("#technical-res1").insertAdjacentHTML("beforeend", firstOutput);
}

function interestsResume1(jsonOutput) {
    let firstOutput = "";
    firstOutput += `
        <h3 class="main_header-res1 f-blue">INTERESTS</h3>
        <div class="res1_interests">
    `;    

    for(let hobbies of jsonOutput.hobbies) {
        firstOutput += `
            <div class="work_exper-description font-p">
                <div class="mb-1">
                    <li style="margin-bottom: 10px; word-break: break-all;">${hobbies}</li>
                </div>
            </div>
        `;
    }
    firstOutput += `</div>`;
    document.querySelector("#technical-res1").insertAdjacentHTML("beforeend", firstOutput);
}

function languagesResume1(jsonOutput) {
    let firstOutput = "";
    firstOutput += `
        <h3 class="main_header-res1 f-blue" style="margin-top: 1.5rem;">LANGUAGES</h3>
        <div class="res1_interests">
    `;    

    for(let language of jsonOutput.known_language) {
        firstOutput += `
            <div class="work_exper-description font-p">
                <div class="mb-1">
                    <li style="margin-bottom: 10px; word-break: break-all;"><a href="javascript:void(0);" class="bg-grey p_2-4" style="cursor: default; color: #333333;">${language}</a></li>
                </div>
            </div>
        `;
    }
    firstOutput += `</div>`;
    document.querySelector("#technical-res1").insertAdjacentHTML("beforeend", firstOutput);
}

// BOTTOM RIGHT
function resume1BottomRight(jsonOutput) {
    let firstOutput = "";
    firstOutput += `<div class="resume1_bottom-right" id="work-experience"></div>`

    document.querySelector("#resume1_container-bottom").insertAdjacentHTML("beforeend", firstOutput); 
    youtubeLink(jsonOutput);
    technicalSkillsRight(jsonOutput);
    workExperResume1(jsonOutput);
    projectResume1(jsonOutput);
    certificationResume1(jsonOutput);
    onOSWorkResume1(jsonOutput);
    functSkillResume1(jsonOutput);
    strengthResume1(jsonOutput);
    personalDetailsResume1(jsonOutput);
    declarationResume1(jsonOutput);
}

// YouTuber - 
function youtubeLink(jsonOutput) {
    let firstOutput = `
        <div class="resume1_right-content">
            <h3 class="main_header-res1 f-blue"><span style="color: var(--red)"><i class='fab fa-youtube'></i></span> YouTuber</h3>
            <hr>  
            <div class="res1_technical-skills padding-equal font-p">
    `;

    firstOutput += `
        <div>
            <span class="bg-grey">
                <i class="fas fa-link"></i>
                <a href="https://www.youtube.com/@BinaryCall" target="_blank">https://www.youtube.com/@BinaryCall</a>
            </span>
        </div>
    `;
    firstOutput += "</div>";
    document.querySelector("#work-experience").insertAdjacentHTML("beforeend", firstOutput);
}

function technicalSkillsRight(jsonOutput) {
    let firstOutput = `
        <div class="resume1_right-content">
            <h3 class="main_header-res1 f-blue">WORKING SKILLS</h3>
            <hr>  
    `;
    for(let i = 0; i < Object.keys(jsonOutput.technical_skills).length; i++) {
        var work = String(Object.keys(jsonOutput.technical_skills)[i]);

        firstOutput += '<div class="padding-equal border-dotted">';
        firstOutput += '<span class="main_header-res1 main_sub-header fw_300">'+ jsonOutput.technical_skills[work]['type'] +'</span>';
        firstOutput += '<ul>';
        firstOutput += '<div class="mt-1 work_exper-description main_sub-header font-p">';
        
        jsonOutput.technical_skills[work]['language_skills'].forEach(function(value, index) {
            firstOutput += '<li>' + value + '</li>';
        })        
        
        firstOutput += '</div>';
        firstOutput += '</ul>';

        firstOutput += '</div>';
    }
    
    firstOutput += "</div>";
    document.querySelector("#work-experience").insertAdjacentHTML("beforeend", firstOutput);
}

function workExperResume1(jsonOutput) {
    let firstOutput = `
        <div class="resume1_right-content">
            <h3 class="main_header-res1 f-blue">WORK EXPERIENCE</h3>
            <hr>  
    `;
    for(let i = 0; i < Object.keys(jsonOutput.work_experience).length; i++) {
        var work = String(Object.keys(jsonOutput.work_experience)[i]);

        firstOutput += '<div class="padding-equal border-dotted">';
        firstOutput += '<span class="main_header-res1 main_sub-header fw_300">'+ jsonOutput.work_experience[work]['type'] +'</span>';
        firstOutput += '<p class="mt-1 f-roboto main_sub-header font-p"><i>' + beautifyWord(jsonOutput.work_experience[work]['organization'], '"') +'</i></p>';
        firstOutput += '<ul>';
        firstOutput += '<li class="work_exper-address fw_100 main_sub-header font-p">';
        firstOutput += '<i>' + jsonOutput.work_experience[work]['year'] + '</i>';
        firstOutput += '<i><small>' + jsonOutput.work_experience[work]['short_address'] + '</small></i>';
        firstOutput += '</li>';
        firstOutput += '<div class="mt-1 work_exper-description main_sub-header font-p">';
        
        jsonOutput.work_experience[work]['work_description'].forEach(function(value, index) {
            firstOutput += '<li>' + value + '</li>';
        })        
        
        firstOutput += '</div>';
        firstOutput += '</ul>';

        firstOutput += '</div>';
    }
    
    firstOutput += "</div>";
    document.querySelector("#work-experience").insertAdjacentHTML("beforeend", firstOutput);
}

function projectResume1(jsonOutput) {
    let firstOutput = `
        <div class="resume1_right-content" id="github-link">
            <h3 class="main_header-res1 f-blue">PROJECTS LINKS</h3>
            <hr>  
    `;

    for(let project of jsonOutput.project[1].project_link) {
        firstOutput += '<div class="padding-equal work_exper-description font-p">';
        firstOutput += '<div class="mb-1">';
        
        firstOutput += '<li class="p-4"><a href="' + project.link + '" style="color: #333333" target="_blank" class="bg-grey p_2-4">' + project.link + '</a></li>';
        firstOutput += '<span class="m-r sub-description" style="display: block;">' + project.describe + '</span>';
        
        firstOutput += '</div>';
        firstOutput += '</div>';
    }
    firstOutput += '<div class="padding-equal" style="display: flex; gap: 5px;"><i class="fab fa-github"></i>Github Link</div>';
    for(let github of jsonOutput.project[1].github_link) {
        if(github.display === 'Y') {
            firstOutput += `
                <div class="padding-equal font-p work_exper-description">
                    <li><a href="${github.link}" style="color: #333333" target="_blank" class="bg-grey p_2-4">${github.link}</a></li>
                </div>
            `;
        }
    }
    firstOutput += "</div>";
    document.querySelector("#work-experience").insertAdjacentHTML("beforeend", firstOutput);
}


function certificationResume1(jsonOutput) {
    let firstOutput = `
        <div class="resume1_right-content">
            <h3 class="main_header-res1 f-blue">CERTIFICATIONS</h3>
            <hr>  
    `;
    for(let certification of jsonOutput['certification'])  {
        firstOutput += `
            <div class="padding-equal work_exper-description font-p">
                <div class="mb-1">
                    <li><a href="javaScript:void(0)" style="color: #333333; cursor: default;">${certification.type}</a></li>
                    <span class="m-r sub-description" style="display: block; margin-top: -10px;">${certification.description}</span>
                </div>
            </div>
        `;
    }
    
    firstOutput += "</div>";
    document.querySelector("#work-experience").insertAdjacentHTML("beforeend", firstOutput);
}

function onOSWorkResume1(jsonOutput) {
    let firstOutput = `
        <div class="resume1_right-content">
            <h3 class="main_header-res1 f-blue">OPERATING (OS) / GIT</h3>
            <hr>  
            <div class="res1_technical-skills padding-equal font-p">
    `;
    for(let certification of jsonOutput['os'])  {
        firstOutput += `
            <div>
                <span class="bg-grey">
                    <i class="${certification.class}"></i>
                    ${certification.os_type}
                </span>
            </div>
        `;
    }
    
    firstOutput += "</div>";
    firstOutput += "</div>";
    document.querySelector("#work-experience").insertAdjacentHTML("beforeend", firstOutput);
}

function functSkillResume1(jsonOutput) {
    let firstOutput = `
        <div class="resume1_right-content">
            <h3 class="main_header-res1 f-blue">FUNCTIONAL SKILLS</h3>
            <hr>  
            <div class="res1_technical-skills padding-equal font-p"  style="display: flex; flex-direction: row; gap: 5px;">
    `;
    for(let skill of jsonOutput['functional_skills'])  {
        if(Object.keys(skill)[0] === 'image') {
            styleImg = "height: 20px; width: 26px;";
        } else {
            styleImg = "font-size: 22px";
        }
        checkImage = Object.keys(skill)[0] === 'image' ? `<img src=".${skill.image}" style='${styleImg}' />` : `<i class='${skill.class}' style='${styleImg}'></i>`;

        firstOutput += `
            <div>
                <span class="bg-grey" style="display: flex; gap: 4px;">
                    ${checkImage}
                    ${skill['tech-name']}
                </span>
            </div>
        `;
    }
    
    firstOutput += "</div>";
    firstOutput += "</div>";
    document.querySelector("#work-experience").insertAdjacentHTML("beforeend", firstOutput);
}

function strengthResume1(jsonOutput) {
    let firstOutput = `
        <div class="resume1_right-content">
            <h3 class="main_header-res1 f-blue">STRENGTH</h3>
            <hr>  
    `;
    firstOutput += '<ul class="padding-equal">';
    for(let strength of jsonOutput['personal_strength'])  {
        
        firstOutput += `
            <div class="mt-1 work_exper-description main_sub-header font-p">
                <li>${strength} </li>
            </div>
        `;
    }
    firstOutput += '</ul>';
    firstOutput += "</div>";
    document.querySelector("#work-experience").insertAdjacentHTML("beforeend", firstOutput);
}

function personalDetailsResume1(jsonOutput) {
    let firstOutput = `
        <div class="resume1_right-content">
            <h3 class="main_header-res1 f-blue">PERSONAL DETAILS</h3>
            <hr>  
    `;
        firstOutput += `
            <div class="padding-equal">
                <div class="mb-1 font-p">
                    <table>
                        <tbody>
                            <tr style="padding: 0; white-space: nowrap;">
                                <td style="width: 25%;">Nick name </td>
                                <td>${jsonOutput.nic_name}</td>
                            </tr>  
                            <tr style="padding: 0; white-space: nowrap;">
                                <td style="width: 25%;"> Father's Name </td>
                                <td>${jsonOutput.personal_detail[0].father_name}</td>
                            </tr>  
                            <tr style="padding: 0; white-space: nowrap;">
                                <td style="width: 25%;">Mother's Name </td>
                                <td>${jsonOutput.personal_detail[0].mother_name}</td>
                            </tr>  
                        </tbody>
                    </table>   
                </div>
            </div>
        `;        
    
    firstOutput += "</div>";
    document.querySelector("#work-experience").insertAdjacentHTML("beforeend", firstOutput);
}

function declarationResume1(jsonOutput) {
    let firstOutput = `
        <div class="resume1_right-content">
            <h3 class="main_header-res1 f-blue">DECLARATION</h3>
            <hr>  
    `;
    for(let declaration in jsonOutput.declaration) {
        firstOutput += `
            <div class="padding-equal">
                <div class="mb-1 font-p">
                    <p>${jsonOutput.declaration[declaration]}</p>

                    <span style="display: block; margin-top: 1rem"><strong>Name: </strong> ${jsonOutput.name} </span>
                    <div style="display: flex; justify-content: space-between; margin-top: 2rem">
                        
                        <span> <strong>Place: </strong>  ${jsonOutput.personal_address[0].district} (${jsonOutput.personal_address[0].city}) </span> <span>
                            <strong class="date-border">Date: </strong>
                        </span>
                    </div>
                </div>
            </div>
        `;        
    }
    
    firstOutput += "</div>";
    document.querySelector("#work-experience").insertAdjacentHTML("beforeend", firstOutput);
}