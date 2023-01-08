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

