var fs = require('fs');
var pdf = require('html-pdf');
var options = {
        "format": "A4",
        "base": "file:///usr/src/app/templates/",
        "orientation": "Potrait",
        "margin": "0",
        "paginationOffset": "1",
        "footer": {
            "height": "0mm",
            "contents": {
                "default": "<table width='100%' bgcolor='' cellspacing='10' style='font-size:10px;font-weight:bold'> <tr style='padding: 12px 22px;background-color: rgba(161, 166, 167, 0.64);'> <td style='color: #fff; font-weight: lighter;padding-left:18px'><img src='https://custom-static.turtlemint.com/images/turtlemint-logo-7df8cb52bc.svg' style='max-width:100px;margin:10px 0'></td> <td align='right' style='color: #6c7375;padding-right:16px;vertical-align: middle !important'><span style='font-weight: 500;font-size: 10px'>Page {{page}} of {{pages}} </span></td> </tr></table>"
            }
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

Handlebars.registerHelper('ifLessThan', function(v1, v2, options) {
  return (v1 < v2) ? options.fn(this) : options.inverse(this)
});

Handlebars.registerHelper('ifGreaterThan', function(v1, v2, options) {
  return (v1 > v2) ? options.fn(this) : options.inverse(this)
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

var data = {
  "partnerDetails":{
      "partnerName":"pratham",
      "partnerMobile":"99474764664"
  },
"customerName": "vipin",
"sumAssured": "1 Cr",
"premiumWithTax": "16,552",
"premium": "11,027",
"tax": "1,984",
"paymentFrequency": "Yearly",
"lifePremiumRequest": {
  "_id": "AGPXJ2OE71Z",
  "uniqueId": "6d483b10-983f-463f-8e5a-d8cba7a64c60",
  "clientId": "5c90df45e4b0f2135296ddd7",
  "tenant": "turtlemint",
  "isAsync": true,
  "userEmail": "hhjj@yyuu.com",
  "userMobile": "9988776666",
  "timestamp": "2022-07-20T11:04:33.923+0000",
  "utmParams": {
      "utmSource": "https://www.turtlemint.com/",
      "utmMedium": "referral",
      "utmContent": null,
      "utmTerm": null,
      "utmCampaign": null,
      "gclid": null,
      "fbclid": null,
      "utmAdgroup": null,
      "utmDevice": null,
      "utmLocation": null,
      "utmMatchtype": null,
      "utmNetwork": null,
      "utmPromotion": null,
      "utmSitelink": null,
      "utmAudience": null,
      "utmPrice": null,
      "utmAdposition": null,
      "utmPlacement": null,
      "utmUrl": "https://app.turtlemint.com/life-insurance/profile/term/about-insured"
  },
  "customerName": "vipin",
  "requestType": "INITIAL",
  "initialReqFlag": false,
  "policyType": "ULIP",
  "vertical": "LIFE",
  "pospUserName": "5c90df45e4b0f2135296ddd7",
  "membersCovered": 0,
  "eldestMemberAge": 0,
  "resultURL": "https://app.turtlemint.com/life-insurance/results/AGPXJ2OE71Z",
  "resultPageVisited": true,
  "createdByCustomer": false,
  "redirectionData": "",
  "newProfileFlow": false,
  "newCheckoutFlow": false,
  "entryAge": 11,
  "maturityAge": 23,
  "gender": "M",
  "premium": 1234,
  "policyTerm": 12,
  "premiumPaymentTerm": 12,
  "investmentTermCode": "medium",
  "paymentFrequency": 1,
  "minIncome": 1400000,
  "maxIncome": 1400000,
  "incomeBracketCode": "",
  "benifitCalculationRate": 8,
  "categories": [
      "investment"
  ],
  "insurers": [],
  "investmentRisk": "high",
  "currency": "INR"
},
"lifePremiumResponse":  {
  "resultId": "5e4b461c6b59015dbf383cc93f3950c9",
  "policyType": "TRADITIONAL",
  "stayInvestedValue": "3 years",
  "insurerCode": "HDFCLI",
  "productCode": "P25",
  "productName": "Sanchay",
  "option": "",
  "optionCode": 1,
  "productUIN": "101N097V12",
  "tmPlanId": "271",
  "policyTerm": 19,
  "paymentFrequency": 12,
  "premiumPaymentTerm": 10,
  "score": 9,
  "category": "investment",
  "premium": 400000,
  "premiumAnnual": 400000,
  "tax": 18000,
  "taxRate": 4.5,
  "premiumWithTax": 418000,
  "sumAssured": 3325573,
  "deathBenefitTotal": 4266045,
  "deathBenefitGuaranteed": 4266045,
  "deathBenefitNonGuaranteed": 0,
  "survivalBenefitTotal": 8380443,
  "survivalBenefitGuaranteed": 8380443,
  "survivalBenefitNonGuaranteed": 0,
  "taxSavingAmount": 45000,
  "status": "SUCCESS",
  "companyDetails": {
      "insurerId": "HDFCLI",
      "insurerName": "HDFC Life",
      "logo": "HDFCLI.png",
      "companyDetails": "'HDFC Life' is a joint venture between HDFC Ltd., India's leading housing finance institution and Standard Life, a global long term investment savings player. It is a leading long-term life insurance company with its headquarters in Mumbai.",
      "speedOfClaimSettlement": {
          "OneMonth": "96.3",
          "OneToThreeMonths": "2.9",
          "ThreeMonthsPlus": "0.8"
      },
      "speedOfClaimSettlementSummary": "96.3",
      "insurerCode": "HDFCLI",
      "contactDetails": {
          "Telephone": "1860 267 9999"
      },
      "lifeCompanyDetails": {
          "claimRatios": {
              "Claims paid in < 3 months": "",
              "Claims paid < 1 year": "",
              "Claims settled ratio (2016-17)": "97.62%",
              "Claims paid < 6 months": "",
              "Claims paid > 3 months": "",
              "Claims rejected (2016-17)": "1.92%",
              "Claims paid in < 30 days": ""
          },
          "urlClaimForm": "",
          "solvencyRatio": "188%",
          "claimSettlementRatio": "98.01%"
      }
  },
  "tags": [
      "Online"
  ],
  "maturityBenefits": [
      "Sum Assured + Accrued Guaranteed additions"
  ],
  "planType": "Non-participating",
  "showRider": false,
  "showRiderPremium": true,
  "biProvider": ""
},
"whyBuyPlan": "Life is short and one can never foretell what the future holds. To make sure that your family is financially secure even after you are gone, opt for a term insurance. A term plan helps you prepare for such uncertainties. Usually one should purchase a term plan with a life cover of approximately 20 times the annual income.",
"addOns": [
  {
    "attributeCode": "R3",
    "attributeName": "Accident Cover"
  },
  {
    "attributeCode": "R4",
    "attributeName": "Critical Illness - 22 Illness"
  },
  {
    "attributeCode": "R5",
    "attributeName": "Critical Illness - 64 Illness"
  },
  {
    "attributeCode": "R6",
    "attributeName": "Waiver of Premium"
  }
],
"keyFeatures": [
  {
    "title": "Free coverage against diagnosis of Terminal Illness and accelerated payout of up to Rs. 1 Cr"
  },
  {
    "title": "Option to receive all premiums paid back, at a specified point in the term of the policy (free of cost)"
  },
  {
    "title": "Option to skip premium for a year (2 times during policy period)"
  },
  {
    "title": "Option to skip premium for a year"
  },
  {
    "title": "Free coverage against diagnosis of Terminal Illness and accelerated payout of up to Rs. 1 Cr"
  },
],
"otherFeatures": [
  {
    "title": "Multiple claim payout modes (lumpsum, monthly income, part lumpsum part monthly income)"
  },
  {
    "title": "Tax benefits as per applicable laws"
  }
],
"exclusions": [
  "In case of death due to suicide within 12 months from the risk start date or revival, all benefits under the policy will cease and nominee will receive sum of total premiums paid plus underwriting extra premium paid plus loading for modal premiums paid exclusive of taxes, cesses & levies"
],
"brochureUrl": "https://catalog.mintpro.in/LIFE/P84/Max-life-Smart-Secure_Plus_Plan.pdf"
}

function generatePdf(){
    var category = "term";
    // var category = "retirement";
    // var category = "child";
    // var category = "investment";

    var html = fs.readFileSync(`./templates/${category}.html`, 'utf8');
    var template = Handlebars.compile(html, options);

    var renderedHtml = template(data);
    
    pdf.create(renderedHtml, options).toFile(`./generatedPdf/${category}.pdf`, function(err, res) {
      if (err) return console.log(err);
      console.log(res); 
    });
}

generatePdf();