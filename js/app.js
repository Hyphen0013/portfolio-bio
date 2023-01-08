/**
    1. href - the entire URL
    2. protocol - the protocol of the URL
    3. host - the hostname and port of the URL
    4. hostname - the hostname of the URL
    5. port - the port number the server uses for the URL
    6. pathname - the path name of the URL
    7. search - the query portion of the URL
    8. hash - the anchor portion of the URL
    9. origin - the window.location.protocol + '//' + window.location.host

    console.log(window.location.origin)
 */
let http = new XMLHttpRequest();
http.open("get", "data.json", true);
http.send();
http.onload = function () {
    if (this.readyState == 4 && this.status == 200) {
        let jsonOutput = JSON.parse(this.responseText);

        profileDetail(jsonOutput);
        technicalSkills(jsonOutput);
        education(jsonOutput);
        intership(jsonOutput);
        certification(jsonOutput);
        workExperience(jsonOutput);
        projectExperience(jsonOutput);
        hobbies(jsonOutput);
        strength(jsonOutput);
        communitActivities(jsonOutput);
        operatingSystem(jsonOutput);
        functionalSkills(jsonOutput);
        personalDetails(jsonOutput);
    }
};

function profileDetail(jsonOutput) {
    let techOutput = "";
    techOutput += `
        <section class="tab-section">
            <div class="group-header">
                <div class="group-title" style="display: flex; align-items: end;">${sentencedCase("Details", seprater = " ")} </div> <a href="resume/resume1.html" target="_blank" class="login_btn"> Resume</a>
            </div>
            <span class="scroll-btn left_scroll-btn" id="left-button"><i class="fas fa-angle-left"></i></span>
            <div class="tab tab-slider" id="prodil-tab"></div>
            <span class="scroll-btn right_scroll-btn" id="right-button"><i class="fas fa-angle-right"></i></span>
        </section>    

    `;
    document.querySelector("#profile-detail").innerHTML = techOutput;
    let getProOutput = "";

    getProOutput = `
        <div class="tab-card profile-card">
            <div class="tab-avatar">
                <img src="${jsonOutput.image}" alt=${jsonOutput.name}>
            </div>
            <div>
                <p style="margin-bottom: 4px;">Aditya's Profile
                    <table>
                        <tbody style="font-size: var(--tab-profile-card-content); line-height: 0;">
                            <tr style="padding: 0; white-space: nowrap;">
                                <td style="padding: 0; border-left: 0;">Nick name </td>
                                <td>${jsonOutput.nic_name}</td>
                            </tr>  
                            <tr style="padding: 0; white-space: nowrap;">
                                <td style="padding: 0; border-left: 0;"> Height </td>
                                <td>${jsonOutput.detail[0]['height']}</td>
                            </tr>  
                            <tr style="padding: 0; white-space: nowrap;">
                                <td style="padding: 0; border-left: 0;">Mobile </td>
                                <td>${jsonOutput.detail[0]['mob_1']}</td>
                            </tr>  
                        </tbody>
                    </table>                     
                </p>
                                    
            </div>
        </div>
        <div class="tab-card profile-card">
            <div class="tab-avatar">
                <i class="far fa-address-card"></i>
            </div>
            <div>
                <p style="margin-bottom: 4px;">Address
                    <table style="white-space: nowrap;">
                        <tbody style="font-size: var(--tab-profile-card-content); line-height: 0;">
                            <tr style="padding: 0;">
                                <td style="padding: 0; border-left: 0;">House </td>
                                <td>${jsonOutput.personal_address[0]['house']}</td>
                            </tr>  
                            <tr style="padding: 0;">
                                <td style="padding: 0; border-left: 0;">Road / Gali </td>
                                <td>${jsonOutput.personal_address[0]['road_gali']}</td>
                            </tr>  
                            <tr style="padding: 0;">
                                <td style="padding: 0; border-left: 0;">Address </td>
                                <td style="white-space: nowrap;">${jsonOutput.personal_address[0]['area']}, ${jsonOutput.personal_address[0]['district']}, </td>
                            </tr>  
                            <tr style="padding: 0;">
                                <td style="padding: 0; border-left: 0;"></td>
                                <td style="white-space: nowrap;">(${jsonOutput.personal_address[0]['city']}) - ${jsonOutput.personal_address[0]['country']}</td>
                            </tr>  

                            <tr style="padding: 0;">
                                <td style="padding: 0; border-left: 0;">Pincode </td>
                                <td>${jsonOutput.personal_address[0]['pincode']}</td>
                            </tr>                                         
                        </tbody>
                    </table>                     
                </p>
                                    
            </div>
        </div>
        <div class="tab-card profile-card">
            <div class="tab-avatar">
                <i class="fas fa-briefcase"></i>
            </div>
            <div>
                <p style="margin-bottom: 4px;">Overall Total Experience
                    </br>
                    <span>${jsonOutput.overall_experience}</span>                    
                </p>
                                    
            </div>
        </div>`;

    for (let programming of jsonOutput.programming) {

    }
    document.querySelector("#prodil-tab").insertAdjacentHTML("beforeend", getProOutput);

    const rightBtn = document.querySelector('#right-button');
    const leftBtn = document.querySelector('#left-button');
    rightBtn.addEventListener("click", function (event) {
        const conent = document.querySelector('#prodil-tab');
        conent.scrollLeft += 300;
        event.preventDefault();
        // document.querySelector(".left-margin").style.cssText = `
        //     margin-left: 0px;
        // `;

    });

    leftBtn.addEventListener("click", function (event) {
        const conent = document.querySelector('#prodil-tab');
        conent.scrollLeft -= 300;
        event.preventDefault();
    });
}

// TECHNICAL SKIL
function technicalSkills(jsonOutput) {
    let techOutput = "";
    techOutput += `
        <section class="tab-section mt">
            <div class="group-header">
                <div class="group-title">${sentencedCase("technical skills", seprater = " ")} </div>
            </div>

            <div style="padding: 5px;" id="technical-tab"></div>
        </section>    

    `;
    document.querySelector("#technical").innerHTML = techOutput;

    let getProOutput = "";
    for (let programming of jsonOutput.programming) {
        getProOutput = `
            <div class="inline-block">
                <div class="tab-card inline-tab">
                    <div class="tab-content">
                        <i class='${programming.class}'></i>
                        ${programming.language}
                    </div>
                </div>
            </div> 
        `;
        document.querySelector("#technical-tab").insertAdjacentHTML("beforeend", getProOutput);
    }
}

// EDUCATIONS
function education(jsonOutput) {
    let eduOutput = "";
    eduOutput += `
        <section class="notification-section tab-section">
            <div class="group-header">
                <div class="group-title">${sentencedCase("Education", seprater = " ")}</div>
            </div>


            <div class="notification-grid" id="edu-grid"></div>
        </section>`;
    document.querySelector("#education").innerHTML = eduOutput;
    var getEduOutput = "";

    for (let i = 0; i < Object.keys(jsonOutput.education).length; i++) {
        var eduNo = String(Object.keys(jsonOutput.education)[i]);
        var collegeType = beautifyWord(jsonOutput.education[eduNo]['cource'], '"') == 'B. Tech' ? 'College' : 'School';
        var stream = beautifyWord(jsonOutput.education[eduNo]['cource'], '"') == 'B. Tech' ? 'Branch' : 'Stream';
        var streamTYpe;
        if (beautifyWord(jsonOutput.education[eduNo]['cource'], '"') == 'B. Tech') {
            streamTYpe = `<p><b>${stream}</b> ${jsonOutput.education[eduNo]['branch']}</p>`;
        } else {
            if (beautifyWord(jsonOutput.education[eduNo]['cource'], '"') == 'Intermediate (12th)') {
                streamTYpe = `<p><b>${stream}</b> ${jsonOutput.education[eduNo]['branch']}</p>`;
            } else {
                streamTYpe = '';
            }
        }

        getEduOutput = `
        <div class="avatar">
            <img src=${jsonOutput.education[eduNo]['image']} alt=${jsonOutput.education[eduNo]['cource']}>
        </div>
        <div class="notification-card">
            <div class="notification-header">
                <i class='${jsonOutput.education[eduNo]['class']}'></i>

                <div class="notification-title">${beautifyWord(jsonOutput.education[eduNo]['cource'], '"')}</div>
                <div class="notification-time">${jsonOutput.education[eduNo]['year']}</div>
            </div>

            <div class="notification-content edu-content">
                <p><b>${collegeType}</b> ${beautifyWord(jsonOutput.education[eduNo]['college'], '"')}</p>
                <p><b>Affiliated</b> ${jsonOutput.education[eduNo]['affiliated']}</p>
                ${streamTYpe}
                <p><b>${jsonOutput.education[eduNo]['perce_type']}</b> ${jsonOutput.education[eduNo]['aggregate']}</p>
                <p><b><i class="far fa-address-card"></i></b> ${jsonOutput.education[eduNo]['address']}, ${jsonOutput.education[eduNo]['city']}, (${jsonOutput.education[eduNo]['state']})</p>

                <p><b>Pincode</b> ${jsonOutput.education[eduNo]['pin']}</p>
            </div>
        </div>`;

        document.querySelector("#edu-grid").insertAdjacentHTML("beforeend", getEduOutput);
    }
}

// SUMMER INTERNSHIP
function intership(jsonOutput) {
    let interOutput = "";
    interOutput += `
        <section class="notification-section tab-section">
            <div class="group-header">
                <div class="group-title">${sentencedCase("Internship", seprater = " ")}</div>
            </div>


            <div class="notification-grid" id="intership-grid"></div>
        </section>`;
    document.querySelector("#intership").innerHTML = interOutput;
    var getInternOutput = "";


    for (let i = 0; i < Object.keys(jsonOutput.summer_intership).length; i++) {
        var intern = String(Object.keys(jsonOutput.summer_intership)[i]);
        getInternOutput = `
        <div class="avatar">
            <img src=${jsonOutput.summer_intership[intern]['image']} alt=${jsonOutput.summer_intership[intern]['type']}>
        </div>
        <div class="notification-card">
            <div class="notification-header">
                <i class='${jsonOutput.summer_intership[intern]['class']}'></i>

                <div class="notification-title">${jsonOutput.summer_intership[intern]['type']}</div>
                <div class="notification-time">${jsonOutput.summer_intership[intern]['year']}</div>
            </div>

            <div class="notification-content edu-content">
                <p><b>Field</b> ${jsonOutput.summer_intership[intern]['field']}</p>
                <p><b>Organization</b> ${beautifyWord(jsonOutput.summer_intership[intern]['organization'], '"')}</p>
                <p><b>Duration</b> ${jsonOutput.summer_intership[intern]['duration']}</p>
                <p><b>Year</b> ${jsonOutput.summer_intership[intern]['year']}</p>
            </div>
        </div>`;

        document.querySelector("#intership-grid").insertAdjacentHTML("beforeend", getInternOutput);
    }
}

// CERTIFICATION
function certification(jsonOutput) {
    let certiOutput = "";
    certiOutput += `
        <section class="notification-section tab-section">
            <div class="group-header">
                <div class="group-title">${sentencedCase("Certification", seprater = " ")}</div>
            </div>


            <div class="notification-grid" id="certification-grid"></div>
        </section>`;
    document.querySelector("#certification").innerHTML = certiOutput;
    var getCertiOutput = "";

    for (let certificate of jsonOutput.certification) {
        getCertiOutput = `
        <div class="avatar">
            <img src=${certificate['image']} alt=${certificate['type']}>
        </div>
        <div class="notification-card">
            <div class="notification-header">
                <i class='${certificate['class']}'></i>

                <div class="notification-title">${certificate['type']}</div>
            </div>

            <div class="notification-content edu-content">
                <p>${certificate['description']}</p>
            </div>
        </div>`;

        document.querySelector("#certification-grid").insertAdjacentHTML("beforeend", getCertiOutput);
    }
}

// WORK EXPERIENCE
function workExperience(jsonOutput) {
    let workExpeOutput = "";
    workExpeOutput += `
        <section class="notification-section tab-section">
            <div class="group-header">
                <div class="group-title">${sentencedCase("Work Experience", seprater = " ")}</div>
            </div>


            <div class="notification-grid" id="work_experience"></div>
        </section>`;
    document.querySelector("#work_expe").innerHTML = workExpeOutput;
    let getCompOutput = "";

    for (let i = 0; i < Object.keys(jsonOutput.work_experience).length; i++) {
        var work = String(Object.keys(jsonOutput.work_experience)[i]);
        var status = jsonOutput.work_experience[work]['status'] === 'working' ? '<b>Joined IN </b>' : '<b>Worked Year </b>';
        var totalExp = jsonOutput.work_experience[work]['total_exp'] === "currently" ? '<i>tll now</i>' : jsonOutput.work_experience[work]['total_exp'];


        getCompOutput = `
        <div class="avatar">
            <img src=${jsonOutput.work_experience[work]['image']} alt=${jsonOutput.work_experience[work]['year']}>
        </div>
        <div class="notification-card">
            <div class="notification-header">
                <i class='${jsonOutput.work_experience[work]['class']}'></i>

                <div class="notification-title">${jsonOutput.work_experience[work]['type']}</div>
                <div class="group-right">Profile</div>
            </div>

            <div class="notification-content edu-content">
                <p><b>Organization </b>${beautifyWord(jsonOutput.work_experience[work]['organization'], '"')}</p>
                <p><b>${status} </b>${jsonOutput.work_experience[work]['year']}</p>
                <p><b>Technology </b>${jsonOutput.work_experience[work]['technology']}</p>
                <p><b>Total Experience: </b>${totalExp}</p>
            </div>
        </div>`;

        document.querySelector("#work_experience").insertAdjacentHTML("beforeend", getCompOutput);
    }
}

// PROJECT EXPERIENCE
function projectExperience(jsonOutput) {
    let projectExpeOutput = "";
    projectExpeOutput += `

        <section class="notification-section tab-section">
            <div class="group-header">
                <div class="group-title">${sentencedCase("Project Experience", seprater = " ")}</div>
            </div>


            <div class="notification-grid small-hide" id="project_experience"></div>
        </section>`;
    document.querySelector("#pro_experience").innerHTML = projectExpeOutput;

    let getProOutput = "";
    for (let project of jsonOutput.project_experience) {
        getProOutput = `
        <div></div>
        <div class="notification-card">
            <p style="color: var(--grey-1);">${project}</p>
        </div>`;
        document.querySelector("#project_experience").insertAdjacentHTML("beforeend", getProOutput);
    }
}

// HOBBIES
function hobbies(jsonOutput) {
    let hobbiesOutput = "";
    hobbiesOutput += `
        <section class="tab-section mt">
            <div class="group-header">
                <div class="group-title">${sentencedCase("Hobbies", seprater = " ")} </div>
            </div>

            <div style="padding: 5px;" id="hobbies-tab"></div>
        </section>    

    `;
    document.querySelector("#hobbies").innerHTML = hobbiesOutput;

    let getHobbieOutput = "";
    for (let hobbies of jsonOutput.hobbies) {
        getHobbieOutput = `
            <div class="inline-block">
                <div class="tab-card inline-tab">
                    <div class="tab-content">
                        <i class='fas fa-puzzle-piece'></i>
                        ${hobbies}
                    </div>
                </div>
            </div> 
        `;
        document.querySelector("#hobbies-tab").insertAdjacentHTML("beforeend", getHobbieOutput);
    }
}

// STRENGTH
function strength(jsonOutput) {
    let strengthOutput = "";
    strengthOutput += `
        <section class="tab-section mt">
            <div class="group-header">
                <div class="group-title">${sentencedCase("strength", seprater = " ")} </div>
            </div>

            <div style="padding: 5px;" id="strength-tab"></div>
        </section>    

    `;
    document.querySelector("#strength").innerHTML = strengthOutput;

    let getStrenOutput = "";
    for (let strength of jsonOutput.personal_strength) {
        getStrenOutput = `
            <div class="inline-block">
                <div class="tab-card inline-tab">
                    <div class="tab-content">
                        <i class='fas fa-dumbbell'></i>
                        ${strength}
                    </div>
                </div>
            </div> 
        `;
        document.querySelector("#strength-tab").insertAdjacentHTML("beforeend", getStrenOutput);
    }
}

// COMMUNITY ACTIVITYES
function communitActivities(jsonOutput) {
    let actiOutput = "";
    actiOutput += `
        <section class="notification-section tab-section mt">
            <div class="group-header">
                <div class="group-title">${sentencedCase("Community Activities", seprater = " ")}</div>
            </div>


            <div class="notification-grid small-hide" id="community-tab"></div>
        </section>`;
    document.querySelector("#commun-activities").innerHTML = actiOutput;

    let getActivityOutput = "";


    for (let i = 0; i < Object.keys(jsonOutput.community_activities[0]).length; i++) {
        var acti = String(Object.keys(jsonOutput.community_activities[0])[i]);

        getActivityOutput = `
            <div></div>
            <div class="notification-card">
                <p style="color: var(--grey-1);">${jsonOutput.community_activities[0][acti]}</p>
            </div>`;
        document.querySelector("#community-tab").insertAdjacentHTML("beforeend", getActivityOutput);
    }
}

// Operating System
function operatingSystem(jsonOutput) {
    let osOutput = "";
    osOutput += `
        <section class="tab-section mt">
            <div class="group-header">
                <div class="group-title">${sentencedCase("OS / GIT", seprater = " ")} </div>
            </div>

            <div style="padding: 5px;" id="os-tab"></div>
        </section>    

    `;
    document.querySelector("#o-system").innerHTML = osOutput;

    let getOsOutput = "";
    for (let operating of jsonOutput.os) {
        getOsOutput = `
            <div class="inline-block">
                <div class="tab-card inline-tab">
                    <div class="tab-content">
                        <i class='${operating['class']}'></i>
                        ${operating['os_type']}
                    </div>
                </div>
            </div> 
        `;
        document.querySelector("#os-tab").insertAdjacentHTML("beforeend", getOsOutput);
    }
}

// Functional Skills
function functionalSkills(jsonOutput) {
    let osOutput = "";
    osOutput += `
        <section class="tab-section mt">
            <div class="group-header">
                <div class="group-title">${sentencedCase("functional skills", seprater = " ")} </div>
            </div>

            <div style="padding: 5px;" id="func-skill"></div>
        </section>    

    `;
    document.querySelector("#functional-skills").innerHTML = osOutput;

    let geSkillOutput = "";
    for (let skill of jsonOutput.functional_skills) {
        if(skill.show === 'Y') {
            geSkillOutput = `
                <div class="inline-block">
                    <div class="tab-card inline-tab">
                        <div class="tab-content">
                            <i class='${skill['class']}'></i>
                            ${sentencedCase(skill['tech-name'], seprater = " ")}
                        </div>
                    </div>
                </div> 
            `;
        }
        document.querySelector("#func-skill").insertAdjacentHTML("beforeend", geSkillOutput);
    }
}

// PERSONAL DETAILS
function personalDetails(jsonOutput) {
    let detailOutput = "";
    detailOutput += `
        <section class="tab-section mt">
            <div class="group-header">
                <div class="group-title">${sentencedCase("Personal Details", seprater = " ")}</div>
            </div>


            <div class="notification-grid small-hide" id="detail-tab"></div>
        </section>`;
    document.querySelector("#personal-detail").innerHTML = detailOutput;

    let getPersonalOutput = "";


    for (let details of jsonOutput.personal_detail) {

        getPersonalOutput = `
            <div></div>
            <div class="notification-card" style="background-color: var(--white-bg);">

                <table>
                    <tbody>
                        <tr>
                            <td>Father's Name</td>
                            <td><i>${details['father_name']}</i></td>
                        </tr>    
                        <tr>
                            <td>Mother's Name</td>
                            <td><i>${details['mother_name']}</i></td>
                        </tr>    
                        <tr>
                            <td>Siblings</td>
                            <td><i>${details['sibling']}</i></td>
                        </tr>    
                        <tr>
                            <td>Sister</td>
                            <td><i>${details['sister_2']} (${details['siter_2_martial_status']})</i></td>
                        </tr>    
                        <tr>
                            <td>Sister</td>
                            <td><i>${details['sister_1']} (${details['siter_1_martial_status']})</i></td>
                        </tr>    
                    </tbody>
                </table>            
            </div>`;
        document.querySelector("#detail-tab").insertAdjacentHTML("beforeend", getPersonalOutput);
    }
}



// PRINT PDF
// var doc = new jsPDF();
// var specialElementHandlers = {
//     '#editor': function (element, renderer) {
//         return true;
//     }
// };


// $('#generatePDF').click(function () {
//     doc.fromHTML($('#htmlContent').html(), 15, 15, {
//         'width': 700,
//         'elementHandlers': specialElementHandlers
//     });
//     doc.save('sample_file.pdf');
// });  