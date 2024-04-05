var fs = require('fs');
var pdf = require('html-pdf');
const moment = require('moment');
// var wpage = require('webpage').create(); 
var data = require("./templateData/fpdata");
var Handlebars = require('handlebars');
var options = {
        "format": "A4",
        "footer": {
          "height": "0mm"
        },
        "type": "pdf",
        // "zoomFactor": "2.0",
        // "quality": "3000",
        "header": {
            "height": "0mm"
        },
    };

Handlebars.registerHelper('toJSON', function(object){
  return new Handlebars.SafeString(JSON.stringify(object));
});
Handlebars.registerHelper('assign', function (varName, varValue, options) {
  if (!options.data.root) {
      options.data.root = {};
  }
  options.data.root[varName] = varValue;
});
Handlebars.registerHelper('ifEquals', function(arg1, arg2, options) {
return (arg1 == arg2) ? options.fn(this) : options.inverse(this);
});
Handlebars.registerHelper('ifNotEquals', function(arg1, arg2, options) {
return (arg1 != arg2) ? options.fn(this) : options.inverse(this);
});
Handlebars.registerHelper('exists', function(arg1, options) {
return (arg1 != null && arg1 != "" ) ? options.fn(this) : options.inverse(this);
});
Handlebars.registerHelper('notExists', function(arg1, options) {
return (arg1 == null || arg1 == "" ) ? options.fn(this) : options.inverse(this);
});

Handlebars.registerHelper('arr', function() {
// Convert arguments to array, ommiting the last item, which is the options obect
return Array.prototype.slice.call(arguments,0,-1);
})

Handlebars.registerHelper('includes', function(variable, list, options) {
return (list.indexOf(variable) > -1) ? options.fn(this) : options.inverse(this);
});
Handlebars.registerHelper('ifEqualsIgnoreCase', function(arg1, arg2, options) {
// return arg1.localeCompare(arg2, undefined, {sensitivity:'base'}) === 0 ? options.fn(this) : options.inverse(this);
return (arg1.toUpperCase() == arg2.toUpperCase()) ? options.fn(this) : options.inverse(this);
});

Handlebars.registerHelper('isNotEmpty', function(arg1, options) {
return (arg1 && Object.keys(arg1).length !== 0) ? options.fn(this) : options.inverse(this);
});

Handlebars.registerHelper('isEmpty', function(arg1, options) {
return (arg1 && Object.keys(arg1).length === 0) ? options.fn(this) : options.inverse(this);
});

Handlebars.registerHelper("incrementByOne", function(value, options) {
return parseInt(value) + 1;
});

Handlebars.registerHelper("formatDate", function(datetime, format) {
if (moment) {
  return moment(datetime).format(format);
} else {
  return datetime;
}
});

Handlebars.registerHelper("formatNumber", function(number = 0, format) {
if (format) {
  // pass format as en-IN for indian lakh style formatting
  return Intl.NumberFormat(format).format(number);
}
return Intl.NumberFormat().format(number);
});

Handlebars.registerHelper("length", function(json) {
return Object.keys(json).length;
});

Handlebars.registerHelper("equals", function(arg1,arg2) {
return arg1==arg2;
});
/**
* Executes a block if modulo operation returns 0.
*
* @param  {mixed}  num    The dividend
* @param  {mixed}  mod    The divisor
* @param  {html}   block  html block to evaluate if true
*/
Handlebars.registerHelper('moduloIf', function(num, mod, block) {
if (parseInt(num) % parseInt(mod) === 0) {
  return block.fn(this);
}
});

/**
* return arg1 < arg2
*/
Handlebars.registerHelper('ifLessThan', function(arg1, arg2, options) {
return (arg1 < arg2) ? options.fn(this) : options.inverse(this)
});

/**
* return arg1 > arg2
*/
Handlebars.registerHelper('ifGreaterThan', function(arg1, arg2, options) {
return (arg1 > arg2) ? options.fn(this) : options.inverse(this)
});

/**
* return num as currency => 10000 = 10k
*/
Handlebars.registerHelper('currency', function(number, options) {
var num;
if (number < 1000) {
  num = number;
} else if (number < 100000) {
  num = parseFloat(number / 1000).toFixed(2) + ' k';
} else if (number < 10000000) {
  num = parseFloat(number / 100000).toFixed(2) + ' Lakhs';
} else if (number >= 10000000) {
  num =  parseFloat(number / 10000000).toFixed(2) + ' Crs';
} else {
  num =  number;
}
return num
});

/**
* Math Operations
*/
Handlebars.registerHelper("math", function(lvalue, operator, rvalue, options) {
lvalue = parseFloat(lvalue);
rvalue = parseFloat(rvalue);
    
return {
    "+": lvalue + rvalue,
    "-": lvalue - rvalue,
    "*": lvalue * rvalue,
    "/": lvalue / rvalue,
    "%": lvalue % rvalue
}[operator];
});

Handlebars.registerHelper('checkNull', function(value) {
return (!value) ? "630hwfhdv894b" : value;
})

Handlebars.registerHelper('roundOff', function(number) {
return Math.round(number);
})

Handlebars.registerHelper('dateToString', function(timestamp) {
const date = new Date(timestamp);
mnth = ("0" + (date.getMonth() + 1)).slice(-2),
day = ("0" + date.getDate()).slice(-2);
return [day,mnth,date.getFullYear()].join("/");
});

Handlebars.registerHelper('splitText', function(text) {
return text.replace(/;/g, ' <br /> <hr>');
});

Handlebars.registerHelper('convertToJSON', function(stringifiedObject) {
if(!stringifiedObject)
  return {};
return JSON.parse(stringifiedObject);
});

Handlebars.registerHelper('matchSubStrInArr', function(strItem, list, options) {
    return (list.join().includes(strItem)) ? options.fn(this) : options.inverse(this);
});

Handlebars.registerHelper('fixStringLength', function(oldString, maxlength, options) {
return (oldString.length <= maxlength)? oldString : oldString.substring(0, maxlength) + "...";
});


function generatePdf(){
  // var category = "term";
  // var category = "retirement";
  // var category = "child";
  // var category = "investment";
  // var category = "formConfig";
  // var category = "fp5"
  var category = "life-compare";

    var html = fs.readFileSync(`./templates/${category}.html`, 'utf8');

    // console.log("HTML ", createEl html);

    var template = Handlebars.compile(html, options);

    var renderedHtml = template(data.data);
    
    // var dom = renderedHtml

    console.log("renderedHtml",renderedHtml);
    

    pdf.create(renderedHtml, options).toFile(`./generatedPdf/${category}.pdf`, function(err, res) {
      if (err) return console.log(err);
      console.log(res); 
    });
}

generatePdf();
