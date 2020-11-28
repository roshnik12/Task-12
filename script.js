//Random 8-digit Number //

const p0 = document.createElement('h2');
p0.innerHTML="Random 8-digit Number Generator!";  

const div = myCustomFunction('div','wrapper');

const btn = myCustomFunction('input','btn');
btn.value='Generate';
btn.type='button';
btn.onclick = randomEight;

const hl = document.createElement('hr');

document.body.append(p0,div,btn,br(),hl,br());


// DOB Calculator //

const para = document.createElement('h2');
para.innerHTML="Enter Your DOB!";

var inputDate = myCustomFunction('input', 'input-date', 'form-input');
inputDate.type = 'date';
inputDate.value = "2020-11-26";
inputDate.min = "1995-06-01";
inputDate.max = "2020-11-26";

var button = myCustomFunction('button','btn')
button.onclick = getValues;
button.innerHTML = 'Check';

const res = myCustomFunction('p','res');

document.body.append(para, inputDate, br(), button, res);

/////////////////////////////// Functions

function randomEight() {
    document.getElementById('wrapper').innerHTML= Math.floor(10000000 + Math.random() * 90000000);    
}

function myCustomFunction(elem, elemId = "", elemClass = "") {
    var element = document.createElement(elem);
    element.id = elemId;
    element.setAttribute('class', elemClass);
    return element;
    }

function br(){
    return document.createElement('br');
}

function getValues() {
    var inputDate = new Date(document.getElementById('input-date').value)
    var currentDate = new Date()
    var milliseconds = parseInt (currentDate.getTime()) - parseInt(inputDate.getTime())
    var secondDiff = parseInt (milliseconds / 1000)
    var minuteDiff = parseInt(secondDiff / 60)
    var hrDiff = parseInt (minuteDiff / 60) 
    var dayDiff = parseInt(hrDiff / 24)
    var monthDiff = getMonthData(inputDate, currentDate) 
    var yearDiff = getYearData(inputDate, currentDate)
    console.log(milliseconds, secondDiff, minuteDiff, hrDiff, dayDiff, monthDiff, yearDiff);
    document.getElementById('res').innerHTML= `Age in milliseconds: ${milliseconds}, Age in seconds: ${secondDiff}, Age in minutes: ${minuteDiff}, Age in hours: ${hrDiff}, Age in days: ${dayDiff},Age in months: ${monthDiff}, Age in years: ${yearDiff}`;
}

function getYearData(param1, param2) {return param2.getFullYear() - param1.getFullYear()}

function getMonthData(param1, param2){
    var yr = getYearData(param1, param2);
    var mon = (yr*12) + (param2.getMonth() - param1.getMonth());
    return mon; 
}
