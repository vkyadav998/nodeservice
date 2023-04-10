var fs = require('fs');
var pdf = require('html-pdf');
const moment = require('moment');
var options = {
        "format": "A4",
        "base": "file:///usr/src/app/templates/",
        "orientation": "Potrait",
        "margin": "0",
        "paginationOffset": "1",
        "footer": {
          "height": "0mm"
        },
        "header": {
            "height": "0mm"
        },
        "filename": "documents/LIFE_PLAN_DETAILS_TERM-bac9e360-280c-4d74-b7f9-43adc67be76d.pdf"
    };
var Handlebars = require('handlebars');

Handlebars.registerHelper('ifEquals', function(arg1, arg2, options) {
  return (arg1 == arg2) ? options.fn(this) : options.inverse(this);
});

Handlebars.registerHelper('ifNotEquals', function(arg1, arg2, options) {
  return (arg1 != arg2) ? options.fn(this) : options.inverse(this);
});

Handlebars.registerHelper('ifLessThan', function(v1, v2, options) {
  return (v1 < v2) ? options.fn(this) : options.inverse(this)
});

Handlebars.registerHelper('ifGreaterThan', function(v1, v2, options) {
  return (v1 > v2) ? options.fn(this) : options.inverse(this)
});

Handlebars.registerHelper("length", function(json) {
  return Object.keys(json).length;
});

Handlebars.registerHelper('includes', function(variable, list, options) {
  return (list.indexOf(variable) > -1) ? options.fn(this) : options.inverse(this);
});

Handlebars.registerHelper('matchSubStrInArr', function(variable, list, options) {
  return (list.join().includes(variable)) ? options.fn(this) : options.inverse(this);
});



Handlebars.registerHelper('currency', function(number, options) {
  var num;
  if (number < 1000) {
    num = number;
  } else if (number < 100000) {
    num = parseFloat(number / 1000).toFixed(2) + ' k';
  } else if (number < 10000000) {
    num = parseFloat(number / 100000) + ' Lakhs';
  } else if (number >= 10000000) {
    num =  parseFloat(number / 10000000) + ' Crs';
  } else {
    num =  number;
  }
  return num
});

Handlebars.registerHelper("formatNumber", function(number, format) {
  if (format) {
    // pass format as en-IN for indian lakh style formatting
    return Intl.NumberFormat(format).format(number);
  }
  return Intl.NumberFormat().format(number);
});

Handlebars.registerHelper("formatDate", function(datetime, format) {
  if (moment) {
    return moment(datetime).format(format);
  } else {
    return datetime;
  }
});

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

// var data = {
//   "cover": 40,
//   "notcover" : 90,
//   "riskProfile": {
//       "questions": {
//           "q1": true,
//           "q2": true,
//           "q10": true,
//           "q3": false,
//           "q4": true,
//           "q5": true,
//           "q6": true,
//           "q7": false,
//           "q8": true,
//           "q9": false
//       },
//       "frcScore": "6",
//       "frcOutput": "moderate",
//       "emergencyFundLevel": "High",
//       "insuranceFundLevel": "Low",
//       "futureNeedsFundLevel": "Low"
//   },
//   "gapDetails": {
//       "data": [
//           {
//               "childDob": "2018-09-05T00:00:00.000Z",
//               "marriageAmountRequiredTodayForGoal": 560000,
//               "marriageYearsForAmount": 15,
//               "marriageExistingSavings": 56000,
//               "marriageRegularMonthlySavings": 200,
//               "output": {
//                   "monthlySavingsRequired": 3000,
//                   "inflationAdjustedAmount": 1164000,
//                   "fvOfSavings": 196000,
//                   "gapPercentage": 83.2,
//                   "gapInSumAssured": 969000
//               },
//               "goalName": "Child's Marriage",
//               "goalId": "MGVCVQT569S",
//               "description": "Enjoy your child’s wedding without the burden of any financial worries",
//               "iconName": "YinYang",
//               "dpDetails": {
//                   "name": "test",
//                   "mobile": "6999912345",
//                   "email": "t@t.com"
//               }
//           },
//           {
//               "childDob": "2018-09-03T00:00:00.000Z",
//               "amountRequiredTodayForGoal": 4500000,
//               "yearsForAmount": 16,
//               "existingSavings": 45000,
//               "childRegularMonthlySavings": 5600,
//               "output": {
//                   "gapInSumAssured": 7908000,
//                   "inflationAdjustedAmount": 9823000,
//                   "fvOfSavings": 1915000,
//                   "gapPercentage": 80.5,
//                   "monthlySavingsRequired": 25000
//               },
//               "goalName": "Child’s Higher Education",
//               "goalId": "MGSA67WEGOW",
//               "description": "Help your children meet their career goals with the right financial plan",
//               "iconName": "GraduationCap",
//               "dpDetails": {
//                   "name": "test",
//                   "mobile": "6999912345",
//                   "email": "t@t.com"
//               }
//           },
//           {
//               "carAmountRequiredTodayToFulfilTheGoal": 560000,
//               "carNoOfYearsAfterWhichTheAmountIsRequired": 22,
//               "carExistingAmountOfSavings": 0,
//               "carRegularMonthlySavings": 340,
//               "output": {
//                   "inflationAdjustedAmount": 1638000,
//                   "monthlySavingsRequired": 3000,
//                   "gapPercentage": 88.7,
//                   "gapInSumAssured": 1452000,
//                   "fvOfSavings": 186000
//               },
//               "goalName": "Buy Dream Car",
//               "goalId": "MGVKLOF5C74",
//               "description": "Get ready for many happy journeys in your dream car",
//               "iconName": "CarFront",
//               "dpDetails": {
//                   "name": "test",
//                   "mobile": "6999912345",
//                   "email": "t@t.com"
//               }
//           },
//           {
//               "currentMonthlyHouseholdExpenses": 34900,
//               "retirementAge": 65,
//               "percentageOfHouseholdExpensesSecuredPostRetirement": 24,
//               "yearsPostRetirementToSecureFamilySOL": 40,
//               "retirementExistingAmountOfSavings": 780,
//               "retirementRegularMonthlySavings": 678,
//               "inflationChoice": "Yes",
//               "output": {
//                   "pvOfCashFlowPostRetirement": 20144000,
//                   "gapPercentage": 94.8,
//                   "gapInSumAssured": 19103000,
//                   "inflationAdjustedMonthlyIncomePostRetirement": 50000,
//                   "monthlySavingsRequired": 13000,
//                   "fvOfSavings": 1041000
//               },
//               "goalName": "Retirement Planning",
//               "goalId": "MGSJCKFUO02",
//               "description": "Ensure your golden years are filled with happiness and good health",
//               "iconName": "Lotus",
//               "dpDetails": {
//                   "name": "test",
//                   "mobile": "6999912345",
//                   "email": "t@t.com"
//               }
//           },
//           {
//               "amountRequiredTodayToFulfilTheGoal": 564000,
//               "noOfYearsAfterWhichTheAmountIsRequired": 23,
//               "wealthExistingAmountOfSavings": 450,
//               "wealthRegularMonthlySavings": 450,
//               "output": {
//                   "inflationAdjustedAmount": 1732000,
//                   "monthlySavingsRequired": 2000,
//                   "fvOfSavings": 268000,
//                   "gapPercentage": 84.5,
//                   "gapInSumAssured": 1464000
//               },
//               "goalName": "Wealth Creation",
//               "goalId": "MGSJCI6HA80",
//               "description": "Make way for priceless surprises like diamond jewellery or home renovation",
//               "iconName": "Coin",
//               "dpDetails": {
//                   "name": "test",
//                   "mobile": "6999912345",
//                   "email": "t@t.com"
//               }
//           },
//           {
//               "houseAmountRequiredTodayToFulfilTheGoal": 789000,
//               "houseNoOfYearsAfterWhichTheAmountIsRequired": 36,
//               "houseExistingAmountOfSavings": 567,
//               "houseRegularMonthlySavings": 500,
//               "output": {
//                   "monthlySavingsRequired": 2000,
//                   "gapInSumAssured": 3802000,
//                   "fvOfSavings": 767000,
//                   "gapPercentage": 83.2,
//                   "inflationAdjustedAmount": 4570000
//               },
//               "goalName": "Buy Dream House",
//               "goalId": "MGVKLOOR6YP",
//               "description": "Find the keys to your own home with the right plan",
//               "iconName": "House",
//               "dpDetails": {
//                   "name": "test",
//                   "mobile": "6999912345",
//                   "email": "t@t.com"
//               }
//           },
//           {
//               "travelAmountRequiredTodayToFulfilTheGoal": 459000,
//               "travelNoOfYearsAfterWhichTheAmountIsRequired": 17,
//               "travelExistingAmountOfSavings": 450,
//               "travelRegularMonthlySavings": 100,
//               "output": {
//                   "fvOfSavings": 37000,
//                   "monthlySavingsRequired": 3000,
//                   "inflationAdjustedAmount": 1052000,
//                   "gapPercentage": 96.5,
//                   "gapInSumAssured": 1015000
//               },
//               "goalName": "Travel Abroad",
//               "goalId": "MGVKLOZ80LE",
//               "description": "Create memories with your family at dream destinations around the world",
//               "iconName": "Parachute",
//               "dpDetails": {
//                   "name": "test",
//                   "mobile": "6999912345",
//                   "email": "t@t.com"
//               }
//           },
//           {
//               "monthlyExpense": 4500,
//               "secureFamilyRetirementAge": 66,
//               "percentageHouseholdExpensesToBeSecuredTillRetirement": 29,
//               "percentageHouseholdExpensesSecuredPostRetirement": 54,
//               "yearsPostRetirementSOL": 11,
//               "takenLoans": "Yes",
//               "takenLifeInsurance": "Yes",
//               "inflationChoice": "Yes",
//               "output": {
//                   "gapPercentage": 88.6,
//                   "pvCashFlowPreRetirememnt": 531000,
//                   "gapInInsuranceCover": 778000,
//                   "currentInsuranceCover": 10000000,
//                   "pvCashFlowPostRetirememnt": 312000,
//                   "goalDateAmount": 778000,
//                   "insuranceCoverNeeded": 878000
//               },
//               "currentInsuranceCover": 1000000,
//               "currentOutstandingLiabilities": 34567,
//               "goalName": "Secure Family’s Future",
//               "goalId": "MGSDG4Z5K3P",
//               "description": "Let your family have a financial support system even in your absence",
//               "iconName": "GroupUser",
//               "dpDetails": {
//                   "name": "test",
//                   "mobile": "6999912345",
//                   "email": "t@t.com"
//               }
//           }
//       ]
//   },
//   "goalDetails": [
//       {
//           "goalId": "MGSA67WEGOW",
//           "name": "Child’s Higher Education",
//           "planned": true,
//           "data": {
//               "imgurl": "/fp/img/icons-goals-study.svg",
//               "iconName": "GraduationCap",
//               "description": "Help your children meet their career goals with the right financial plan",
//               "order": "2"
//           }
//       },
//       {
//           "goalId": "MGSDG4Z5K3P",
//           "name": "Secure Family’s Future",
//           "planned": true,
//           "data": {
//               "imgurl": "/fp/img/icons-goals-protection.svg",
//               "iconName": "GroupUser",
//               "description": "Let your family have a financial support system even in your absence",
//               "order": "0"
//           }
//       },
//       {
//           "goalId": "MGSJCI6HA80",
//           "name": "Wealth Creation",
//           "planned": true,
//           "data": {
//               "imgurl": "/fp/img/icons-goals-wealth.svg",
//               "iconName": "Coin",
//               "description": "Make way for priceless surprises like diamond jewellery or home renovation",
//               "order": "1"
//           }
//       },
//       {
//           "goalId": "MGSJCKFUO02",
//           "name": "Retirement Planning",
//           "planned": true,
//           "data": {
//               "imgurl": "/fp/img/icons-goals-retirement.svg",
//               "iconName": "Lotus",
//               "description": "Ensure your golden years are filled with happiness and good health",
//               "order": "3"
//           }
//       },
//       {
//           "goalId": "MGVCVQT569S",
//           "name": "Child's Marriage",
//           "data": {
//               "iconName": "YinYang",
//               "description": "Enjoy your child’s wedding without the burden of any financial worries",
//               "order": "4"
//           }
//       },
//       {
//           "goalId": "MGVKLOF5C74",
//           "name": "Buy Dream Car",
//           "planned": true,
//           "data": {
//               "iconName": "CarFront",
//               "description": "Get ready for many happy journeys in your dream car",
//               "order": "5"
//           }
//       },
//       {
//           "goalId": "MGVKLOOR6YP",
//           "name": "Buy Dream House",
//           "planned": true,
//           "data": {
//               "iconName": "House",
//               "description": "Find the keys to your own home with the right plan",
//               "order": "6"
//           }
//       },
//       {
//           "goalId": "MGVKLOZ80LE",
//           "name": "Travel Abroad",
//           "selected": true,
//           "data": {
//               "iconName": "Parachute",
//               "description": "Create memories with your family at dream destinations around the world",
//               "order": "7"
//           }
//       }
//   ],
//   "dpDetails": {
//       "name": "test",
//       "mobile": "6999912345",
//       "email": "t@t.com"
//   },
//   "customerDetails": {
//       "name": "Vipin Yadav",
//       "gender": "M",
//       "dob": "03 March 1994",
//       "mobile": "9769939005",
//       "lifeStage": "Single",
//       "members": [
//           "Self",
//           "Mother",
//           "Daughter 1", 
//           "Daughter 2",
//           "Son"
//       ],
//       "dependents": 4,
//       "monthlyIncome": 590000,
//       "monthlyExpense": 70000,
//       "monthlySavings": 320000,
//       "savingsPercent": "54%",
//       "expensePercent": "46%"
//   }
// }
// {
//   goallist : [
//     {
//       "goalId": "MGSA67WEGOW",
//       "name": "Child’s Higher Education",
//       "data": {
//         "imgurl": "/fp/img/icons-goals-study.svg",
//         "iconName": "GraduationCap",
//         "description": "Help your children meet their career goals with the right financial plan",
//         "order": "2"
//       },
//       "planned" : true
//     },
//     {
//       "goalId": "MGSDG4Z5K3P",
//       "name": "Secure Family’s Future",
//       "data": {
//         "imgurl": "/fp/img/icons-goals-protection.svg",
//         "iconName": "GroupUser",
//         "description": "Let your family have a financial support system even in your absence",
//         "order": "0"
//       },
      
//     },
//     {
//       "goalId": "MGSJCI6HA80",
//       "name": "Wealth Creation",
//       "data": {
//         "imgurl": "/fp/img/icons-goals-wealth.svg",
//         "iconName": "Coin",
//         "description": "Make way for priceless surprises like diamond jewellery or home renovation",
//         "order": "1"
//       },
//       "selected" : true
//     },
//     {
//       "goalId": "MGSJCKFUO02",
//       "name": "Retirement Planning",
//       "data": {
//         "imgurl": "/fp/img/icons-goals-retirement.svg",
//         "iconName": "Lotus",
//         "description": "Ensure your golden years are filled with happiness and good health",
//         "order": "3"
//       },
      
//     },
//     {
//       "goalId": "MGVCVQT569S",
//       "name": "Child's Marriage",
//       "data": {
//         "iconName": "YinYang",
//         "description": "Enjoy your child’s wedding without the burden of any financial worries",
//         "order": "4"
//       },
      
//     },
//     {
//       "goalId": "MGVKLOF5C74",
//       "name": "Buy Dream Car",
//       "data": {
//         "iconName": "CarFront",
//         "description": "Get ready for many happy journeys in your dream car",
//         "order": "5"
//       },
      
//     },
//     {
//       "goalId": "MGVKLOOR6YP",
//       "name": "Buy Dream House",
//       "data": {
//         "iconName": "House",
//         "description": "Find the keys to your own home with the right plan",
//         "order": "6"
//       },
      
//     },
//     {
//       "goalId": "MGVKLOZ80LE",
//       "name": "Travel Abroad",
//       "data": {
//         "iconName": "Parachute",
//         "description": "Create memories with your family at dream destinations around the world",
//         "order": "7"
//       },
      
//     }
//   ],
//   questionlist : [
//     {
//       question : "Your child’s age today is",
//       answer : "9 years"
//     },
//     {
//       question : "Today your Child’s higher education costs",
//       answer : "₹ 30,00,000"
//     },
//     {
//       question : "Your child will start higher education in",
//       answer : "10 years"
//     },
//     {
//       question : "Amount you have already saved for child’s education is",
//       answer : "₹ 2,00,000"
//     },
//     {
//       question : "Amount you am saving per month for child’s education is",
//       answer : "₹ 0"
//     },
//   ]
// }

var data = {
  "riskProfile": {
      "questions": {
          "q1": true,
          "q2": false,
          "q10": false,
          "q3": false,
          "q4": false,
          "q5": false,
          "q6": false,
          "q7": false,
          "q8": false,
          "q9": false
      },
      "frcScore": "1",
      "frcOutput": "very low",
      "emergencyFundLevel": "Low",
      "insuranceFundLevel": "Low",
      "futureNeedsFundLevel": "Low"
  },
  "gapDetails": {
      "data": [
          {
              "monthlyExpense": 878778,
              "secureFamilyRetirementAge": 56,
              "percentageHouseholdExpensesToBeSecuredTillRetirement": 38,
              "percentageHouseholdExpensesSecuredPostRetirement": 51,
              "yearsPostRetirementSOL": 19,
              "takenLoans": "No",
              "takenLifeInsurance": "Yes",
              "currentInsuranceCover": 98898999,
              "inflationChoice": "Yes",
              "output": {
                  "goalDateAmount": 121130000,
                  "pvCashFlowPostRetirememnt": 97679000,
                  "pvCashFlowPreRetirememnt": 122349000,
                  "gapInInsuranceCover": 121130000,
                  "insuranceCoverNeeded": 220029000,
                  "currentInsuranceCover": 98899000,
                  "gapPercentage": 55.1
              },
              "goalName": "Secure Family’s Future",
              "goalId": "MGSDG4Z5K3P",
              "description": "Let your family have a financial support system even in your absence",
              "iconName": "GroupUser",
              "dpDetails": {
                  "name": "test",
                  "mobile": "6999912345",
                  "email": "t@t.com"
              }
          }
      ]
  },
  "goalDetails": [
      {
          "goalId": "MGSA67WEGOW",
          "name": "Child’s Higher Education",
          "selected": true,
          "data": {
              "imgurl": "/fp/img/icons-goals-study.svg",
              "iconName": "GraduationCap",
              "description": "Help your children meet their career goals with the right financial plan",
              "order": "2"
          }
      },
      {
          "goalId": "MGSDG4Z5K3P",
          "name": "Secure Family’s Future",
          "planned": true,
          "data": {
              "imgurl": "/fp/img/icons-goals-protection.svg",
              "iconName": "GroupUser",
              "description": "Let your family have a financial support system even in your absence",
              "order": "0"
          }
      },
      {
          "goalId": "MGSJCI6HA80",
          "name": "Wealth Creation",
          "selected": true,
          "data": {
              "imgurl": "/fp/img/icons-goals-wealth.svg",
              "iconName": "Coin",
              "description": "Make way for priceless surprises like diamond jewellery or home renovation",
              "order": "1"
          }
      },
      {
          "goalId": "MGSJCKFUO02",
          "name": "Retirement Planning",
          "data": {
              "imgurl": "/fp/img/icons-goals-retirement.svg",
              "iconName": "Lotus",
              "description": "Ensure your golden years are filled with happiness and good health",
              "order": "3"
          }
      },
      {
          "goalId": "MGVCVQT569S",
          "name": "Child's Marriage",
          "data": {
              "iconName": "YinYang",
              "description": "Enjoy your child’s wedding without the burden of any financial worries",
              "order": "4"
          }
      },
      {
          "goalId": "MGVKLOF5C74",
          "name": "Buy Dream Car",
          "data": {
              "iconName": "CarFront",
              "description": "Get ready for many happy journeys in your dream car",
              "order": "5"
          }
      },
      {
          "goalId": "MGVKLOOR6YP",
          "name": "Buy Dream House",
          "data": {
              "iconName": "House",
              "description": "Find the keys to your own home with the right plan",
              "order": "6"
          }
      },
      {
          "goalId": "MGVKLOZ80LE",
          "name": "Travel Abroad",
          "data": {
              "iconName": "Parachute",
              "description": "Create memories with your family at dream destinations around the world",
              "order": "7"
          }
      }
  ],
  "dpDetails": {
      "name": "test",
      "mobile": "6999912345",
      "email": "t@t.com"
  },
  "customerDetails": {
      "name": "vipin kumar yadav",
      "gender": "M",
      "dob": "01 April 2000",
      "mobile": "9876543210",
      "lifeStage": "Married with kids",
      "members": [
          "Self",
          "Mother",
          "Father",
          "Wife",
          "Son",
          "Daughter 1",
          "Daughter 2"
      ],
      "memberList": "Self, Mother, Father, Wife, 2 Daughters & Son",
      "dependents": 6,
      "createdDate": "Apr 2023",
      "monthlyIncome": 480000,
      "monthlyExpense": 250000,
      "monthlySavings": 230000,
      "savingsPercent": "48%",
      "expensePercent": "52%"
  }
};

function generatePdf(){
  // var category = "term";
  // var category = "retirement";
  // var category = "child";
  // var category = "investment";
  // var category = "formConfig";
  var category = "fp5"

    var html = fs.readFileSync(`./templates/${category}.html`, 'utf8');
    var template = Handlebars.compile(html, options);

    var renderedHtml = template(data);
    
    pdf.create(renderedHtml, options).toFile(`./generatedPdf/${category}.pdf`, function(err, res) {
      if (err) return console.log(err);
      console.log(res); 
    });
}

generatePdf();
