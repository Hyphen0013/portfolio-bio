// TECHNICAL SKIL
/* function technicalSkills(jsonOutput) {
    let techOutput = "";
    techOutput += `
        <section class="tab-section">
            <div class="group-header">
                <div class="group-title">${sentencedCase("technical skills", seprater = " ")} </div>
            </div>

            <div class="tab tab-slider" id="tab"></div>
        </section>    

    `;
    document.querySelector("#technical").innerHTML = techOutput;

    let getProOutput = "";
    for (let programming of jsonOutput.programming) {
        getProOutput = `
            <div class="tab-grid">
                <div class="tab-card">
                    <div class="tab-content">
                        <i class='${programming.class}'></i>
                        ${programming.language}
                    </div>
                </div>
            </div> 
        `;
        document.querySelector("#tab").insertAdjacentHTML("beforeend", getProOutput);
    }  
} */

// MODULE PATTERN
var budgetController = (function() {
    var x = 20;

    var add = function(a) {
        return x + a;
    }

    return {
        publicTest: function(b) {
            // console.log(add(b))
            return add(b)
        },
        y: 6
    }
})();

budgetController.publicTest(4)
budgetController.y;

// FACTORY PATTERN
var Factory = function () {
    this.createEmployee = function (type) {
        var employee;

        if (type === "fulltime") {
            employee = new FullTime();
        }

        employee.type = type;

        employee.say = function () {
            console.log(this.type + ": rate " + this.hourly + "/hour");
        }

        return employee;
    }
}

var FullTime = function () {
    this.hourly = "$12";
};

function run() {

    var employees = [];
    var factory = new Factory();

    employees.push(factory.createEmployee("fulltime"));

    for (var i = 0, len = employees.length; i < len; i++) {
        employees[i].say();
    }
}

run()