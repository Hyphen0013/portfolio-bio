// Sentence case
function sentencedCase(stringName, seprater) {
    var stringOutput = "";
    switch (seprater) {
        case " ":
            // stringOutput = stringName.split(" ").map((element) => {
            //     stringOutput =  element.charAt(0).toUpperCase() + element.slice(1).toLowerCase();
            // })
            var splitStr = stringName.toLowerCase().split(" ");
            for(let i = 0; i < splitStr.length; i++) {
                splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1)
            }
            return splitStr.join(" ");
            
        default:
            stringOutput = "undefined"
    }
    
    return stringOutput;
}

// Make Word BOLD
function beautifyWord(word, seprater) {
    if(seprater === '"') {
        return `${word.replace(/"/g,'')}`;
    }
}

/***
 * Filter words
 * FORMATE WITH MODIFICATIONS
 */
function filterWordsAndModify(wordMatch, paragraph) {
    var convertArr = new Array();
    convertArr[0] = paragraph;
    const matchEl = convertArr.map((place) => {
        const regX = new RegExp(wordMatch, "gi");
        const word = place.replace(regX, `<code style="font-weight: 600; word-spacing: -4px;">${wordMatch}</code>`);

        return `<p class="class="main_sub-header font-p">${word}</p>`;
    }).join("");
    return matchEl;
}

// Total Years and Months
function monthDiff(dateFrom, dateTo) {
    var totalMonths = dateTo.getMonth() - dateFrom.getMonth() + (12 * (dateTo.getFullYear() - dateFrom.getFullYear()))

    var years = Math.floor(totalMonths / 365);
    var months = Math.floor(totalMonths % 365 / 30);
    var days = Math.floor(totalMonths % 365 % 30);

    var fullDate;

    if(years == 1 ) {
        years = years + " Year ";
    }

    if(years > 1) {
        years = years + " Year ";
    }

    if(months == 1) {
        months = months + " Month ";
    }
    
    if(months > 1) {
        months = months + " Months ";
    }

    if(days == 1) {
        days = days + " Day ";
    }

    if(days > 1) {
        days = days + " Days ";
    }
    
      return years + months + days;
}
   
   
   //examples
//    console.log(monthDiff(new Date(2000, 01), new Date(2000, 02))) // 1
//    console.log(monthDiff(new Date(1998, 02), new Date(2000, 05))) // 12 full year
//    console.log(monthDiff(new Date(2009, 11), new Date(2010, 12))) // 1

var date = new Date();
var getdate = date.getDate();
var getday = date.getDay();
var getmonth = date.getMonth() + 1;
var getyear = date.getFullYear();

function getMonth(val) {
    let arrMonth = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];
    var month;
    for (let i = 0; i <= arrMonth.length; i++) {
        switch (val) {
            case '1':
                month = arrMonth[0];
                break;
            case '2':
                month = arrMonth[1];
                break;
            case '3':
                month = arrMonth[2];
                break;
            case '4':
                month = arrMonth[3];
                break;
            case '5':
                month = arrMonth[4];
                break;
            case '6':
                month = arrMonth[5];
                break;
            case '7':
                month = arrMonth[6];
                break;
            case '8':
                month = arrMonth[7];
                break;
            case '9':
                month = arrMonth[8];
                break;
            case '10':
                month = arrMonth[9];
                break;
            case '11':
                month = arrMonth[10];
                break;
            case '12':
                month = arrMonth[11];
                break;

            default:
                month = 'None';
                break;
        }
    }
    var arrangeDate = `${getdate} ${month} ${getyear}`
}
getMonth(getmonth.toString());

var modal = document.getElementById("myModal");
/* var frameId = [
    'myBtn'
];

frameId.forEach(function (id) {
    $('#' + id).on('click', function (e) {
        $('#myModal').show();

        // var parent = $(e.relatedTarget);
        var height = $(this).attr('data-height');
        var url = $(this).attr('data-url');
        var width = $(this).attr('data-width');
    });
    $('.close').on('click', function () {
        $('#myModal').hide();
    });
}); */

// When the user clicks anywhere outside of the modal, close it
// window.onclick = function (event) {
//     if (event.target == modal) {
//         modal.style.display = "none";
//     }
// }

// category slider END
$(document).ready(function () {
    /*             $('#autoWidth').lightSlider({
                    autoWidth: true,
                    adaptiveHeight:true,
                    auto: true,
                    loop: true,
                    pauseOnHover: true,
                    // rtl: true,
                    onSliderLoad: function () {
                        // $('#autoWidth').removeClass('cS-hidden');
                    }
                }); */
    // $('#rtl').lightSlider({
    //     rtl: true,
    //     autoWidth:true,
    // });      

    let width;
    let height;
    let item;
    window.addEventListener('resize', detectScreenSize);
    function detectScreenSize(e) {
        width = window.innerWidth;
        height = window.innerHeight;

        if(width <= '767') {
            item = 1;
        } else {
            item = 2;
        }        
    } 

    width = window.innerWidth;
    height = window.innerHeight;
    
    if(width <= '767') {
        item = 1;
        console.log(width)
    } else {
        item = 2;
    }

    $('#adaptive').lightSlider({
        // adaptiveHeight:true,
        // auto: true,
        loop: true,
        pauseOnHover: true,
        item: item,
        slideMargin: 15,
        loop: true
    });
    
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
    
    $(".copyright").html('©' + getyear);
}); 


/**
 * FORMATED PARAGRAPH
 */
function returnFormattedPara(paragraph) {
    if(paragraph != "") {
        var formtPara = paragraph.split(" ").map((value, index) => {
            return `<span class="style_para style_para-bg">${value}</span>`;
        });
        return formtPara.join(" ");
    } else {
        return "";
    }

} 

/***
 * FUNCTIONALITY HANDLE BY THE PROTYPE CHAINING METHOD
 * */
function SliderShow(id) { // Constructor
    this.slide = document.querySelector(`[data-slide="${id}"]`)
    this.active = 0;
    this.init();
};

SliderShow.prototype.activeSlide = function (index) {
    this.active = index;
    this.items.forEach((item) => item.classList.remove("active"));
    this.items[index].classList.add('active');
    this.thumbItems.forEach((item) => item.classList.remove("active"));
    this.thumbItems[index].classList.add('active');
    this.autoSlide();
}

SliderShow.prototype.prev = function () {
    if (this.active > 0) {
        this.activeSlide(this.active - 1);
    } else {
        this.activeSlide(this.items.length - 1);
    }
}

SliderShow.prototype.next = function () {
    if (this.active < this.items.length - 1) {
        this.activeSlide(this.active + 1);
    } else {
        this.activeSlide(0);
    }
}

SliderShow.prototype.addNavigation = function () {
    const nextBtn = document.querySelector(".slide_next");
    const prevBtn = document.querySelector(".slide_prev");
    nextBtn.addEventListener('click', this.next)
    prevBtn.addEventListener('click', this.prev)
}

SliderShow.prototype.addThumbItems = function () {
    this.items.forEach(() => (this.thumb.innerHTML += "<span></span>"));
    this.thumbItems = Array.from(this.thumb.children);
}

SliderShow.prototype.autoSlide = function () {
    clearTimeout(this.timeout);
    this.timeout = setTimeout(this.next, 5000);
}

SliderShow.prototype.mouseMove = function() {
    const nextBtn = document.querySelector(".slide_next");
    const prevBtn = document.querySelector(".slide_prev");
    nextBtn.addEventListener('mousemove', function() {
        console.log('chek');
        clearTimeout(this.timeout);
        this.timeout = setTimeout(this.next, 5000);        
    });
}

SliderShow.prototype.init = function () {
    this.next = this.next.bind(this);
    this.prev = this.prev.bind(this);
    this.items = document.querySelectorAll(".status_slide-items > *");
    this.thumb = document.querySelector(".status_slide-thumb");
    this.addThumbItems();
    this.activeSlide(0);
    this.addNavigation();
}

// new SliderShow('status_slide');