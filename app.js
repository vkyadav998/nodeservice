var fs = require('fs');
var pdf = require('html-pdf');
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

Handlebars.registerHelper("formatNumber", function(number, format) {
  if (format) {
    // pass format as en-IN for indian lakh style formatting
    return Intl.NumberFormat(format).format(number);
  }
  return Intl.NumberFormat().format(number);
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

var data = {
  "partnerDetails":{
      "partnerName":"Vipin Yadav",
      "partnerMobile":"+91 9769939005",
      "partnerEmail":"vipin.y@turtlemint.com"
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
  "biProvider": "",
  // "riderList": [
  //   {
  //     "riderName": "Accident Cover",
  //     "riderShortDesc": "If the Life Insured dies due to an accident, 100% of Accident Cover Sum Assured will be payable as lump sum",
  //     "riderCode": "R3",
  //     "riderApiCode": "156",
  //     "riderCategory": "Accidental Death Benefit",
  //     "riderPremium": 3540,
  //     "riderSumAssured": 5000000,
  //     "riderPolicyTerm": 48,
  //     "riderPremiumPaymentTerm": 48,
  //     "inBuilt": false,
  //     "isSelected": true,
  //     "isCoverAmountEditable": true,
  //     "isCoverAmountIncludedInBasePlan": false,
  //     "status": "SUCCESS"
  //   },
  //   {
  //     "riderName": "Accident Cover",
  //     "riderShortDesc": "If the Life Insured dies due to an accident, 100% of Accident Cover Sum Assured will be payable as lump sum",
  //     "riderCode": "R3",
  //     "riderApiCode": "156",
  //     "riderCategory": "Accidental Death Benefit",
  //     "riderPremium": 3540,
  //     "riderSumAssured": 5000000,
  //     "riderPolicyTerm": 48,
  //     "riderPremiumPaymentTerm": 48,
  //     "inBuilt": false,
  //     "isSelected": true,
  //     "isCoverAmountEditable": true,
  //     "isCoverAmountIncludedInBasePlan": false,
  //     "status": "SUCCESS"
  //   }
  // ]
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
"brochureUrl": "https://catalog.mintpro.in/LIFE/P84/Max-life-Smart-Secure_Plus_Plan.pdf",
"variableHtml" : `
<div style="padding:8px;margin:8px 2px;border:1px solid #00a364" data-reactroot="">
<b style="color:#00a364;font-size:18px">1. Contact details</b>
</div>
<div id="contact-details">
<div>
  <div style="padding:10px 16px 0px 16px">
    <div class="sc-cMhqgX fijQJj">
      <div class=''>All important communication will be done on the below mentioned contact details</div>
    </div>
    <div>
      <div class="fieldContainer">
        <div class="fieldLabel">Mobile <span class="required"> *</span>
        </div>
        <div class="field" style="width:50%">
          <input type="tel" id="contact-details.mobile" value="9999999999" placeholder="Enter mobile number" required="" maxLength="10" minLength="10" pattern="^[6-9]{1}[0-9]{9}$" class="ant-input" />
        </div>
      </div>
    </div>
    <div>
      <div class="fieldContainer">
        <div class="fieldLabel">Email <span class="required"> *</span>
        </div>
        <div class="field" style="width:50%">
          <input type="text" id="contact-details.email" value="dad@dasa.com" placeholder="Enter Email Id" required="" class="ant-input" />
        </div>
      </div>
    </div>
    <div>
      <div class="fieldContainer">
        <div class="fieldLabel">Passport photo</div>
        <div class="field" style="width:50%">
          <button type="button" class="ant-btn">
            <span>Upload</span>
          </button>
          <input type="file" style="display:none" />
        </div>
      </div>
    </div>
  </div>
</div>
</div>
<div style="padding:8px;margin:8px 2px;border:1px solid #00a364" data-reactroot="">
<b style="color:#00a364;font-size:18px">2. Insured Details</b>
</div>
<div id="insurer-details">
<div>
  <div style="padding:10px 16px 0px 16px">
    <div class="sc-cMhqgX fijQJj">
      <div class='tm-checkout-section-header text-capitalize'>Proposer : </div>
    </div>
    <div>
      <div class="fieldContainer">
        <div class="fieldLabel">Title <span class="required"> *</span>
        </div>
        <div class="field" style="width:50%">
          <div id="Title" style="width:100%" class="ant-select ant-select-enabled">
            <div class="ant-select-selection             ant-select-selection--single" role="combobox" aria-autocomplete="list" aria-haspopup="true" aria-controls="" aria-expanded="false" tabindex="0">
              <div class="ant-select-selection__rendered">
                <div style="display:none;user-select:none;-webkit-user-select:none" unselectable="on" class="ant-select-selection__placeholder">Title</div>
                <div class="ant-select-selection-selected-value" title="Mr" style="display:block;opacity:1">Mr</div>
              </div>
              <span class="ant-select-arrow" style="user-select:none;-webkit-user-select:none" unselectable="on">
                <i aria-label="icon: down" class="anticon anticon-down ant-select-arrow-icon">
                  <svg viewBox="64 64 896 896" focusable="false" class="" data-icon="down" width="1em" height="1em" fill="currentColor" aria-hidden="true">
                    <path d="M884 256h-75c-5.1 0-9.9 2.5-12.9 6.6L512 654.2 227.9 262.6c-3-4.1-7.8-6.6-12.9-6.6h-75c-6.5 0-10.3 7.4-6.5 12.7l352.6 486.1c12.8 17.6 39 17.6 51.7 0l352.6-486.1c3.9-5.3.1-12.7-6.4-12.7z"></path>
                  </svg>
                </i>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div>
      <div class="fieldContainer">
        <div class="fieldLabel">Name <span class="required"> *</span>
        </div>
        <div class="field" style="width:50%">
          <input type="text" id="proposer.name" value="vipin yadav" placeholder="Enter full name" required="" maxLength="60" minLength="2" pattern="^[a-zA-Z]+(?:\s[a-zA-Z]+)+$" class="ant-input" />
        </div>
      </div>
    </div>
    <div>
      <div class="fieldContainer">
        <div class="fieldLabel">PAN No. (Optional)</div>
        <div class="field" style="width:50%">
          <input type="text" id="proposer.panNo" value="ABCDE1234Z" placeholder="XXXXXDDDDX" minLength="1" pattern="^([a-zA-Z]){5}([0-9]){4}([a-zA-Z]){1}?$" class="ant-input" />
        </div>
      </div>
    </div>
  </div>
</div>
<div>
  <div style="padding:10px 16px 0px 16px">
    <div class="sc-cMhqgX fijQJj">
      <div class="tm-checkout-section-header text-capitalize">self - 28 Years : </div>
    </div>
    <div>
      <div class="fieldContainer">
        <div class="fieldLabel">Title <span class="required"> *</span>
        </div>
        <div class="field" style="width:50%">
          <div id="Type" style="width:100%" class="ant-select ant-select-enabled">
            <div class="ant-select-selection             ant-select-selection--single" role="combobox" aria-autocomplete="list" aria-haspopup="true" aria-controls="" aria-expanded="false" tabindex="0">
              <div class="ant-select-selection__rendered">
                <div style="display:none;user-select:none;-webkit-user-select:none" unselectable="on" class="ant-select-selection__placeholder">Title</div>
                <div class="ant-select-selection-selected-value" title="Mr" style="display:block;opacity:1">Mr</div>
              </div>
              <span class="ant-select-arrow" style="user-select:none;-webkit-user-select:none" unselectable="on">
                <i aria-label="icon: down" class="anticon anticon-down ant-select-arrow-icon">
                  <svg viewBox="64 64 896 896" focusable="false" class="" data-icon="down" width="1em" height="1em" fill="currentColor" aria-hidden="true">
                    <path d="M884 256h-75c-5.1 0-9.9 2.5-12.9 6.6L512 654.2 227.9 262.6c-3-4.1-7.8-6.6-12.9-6.6h-75c-6.5 0-10.3 7.4-6.5 12.7l352.6 486.1c12.8 17.6 39 17.6 51.7 0l352.6-486.1c3.9-5.3.1-12.7-6.4-12.7z"></path>
                  </svg>
                </i>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div>
      <div class="fieldContainer">
        <div class="fieldLabel">Name <span class="required"> *</span>
        </div>
        <div class="field" style="width:50%">
          <input type="text" id="insuredMember.0.name" value="vipin yadav" placeholder="Enter full name" required="" maxLength="60" minLength="2" pattern="^[a-zA-Z]+(?:\s[a-zA-Z]+)+$" class="ant-input" />
        </div>
      </div>
    </div>
    <div>
      <div class="fieldContainer">
        <div class="fieldLabel">Date of Birth <span class="required"> *</span>
        </div>
        <div class="field" style="width:50%">
          <span id="DOB" class="ant-calendar-picker" style="width:100%">
            <div>
              <input readonly="" value="" placeholder="" class="ant-calendar-picker-input ant-input" />
              <i aria-label="icon: calendar" class="anticon anticon-calendar ant-calendar-picker-icon">
                <svg viewBox="64 64 896 896" focusable="false" class="" data-icon="calendar" width="1em" height="1em" fill="currentColor" aria-hidden="true">
                  <path d="M880 184H712v-64c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v64H384v-64c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v64H144c-17.7 0-32 14.3-32 32v664c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V216c0-17.7-14.3-32-32-32zm-40 656H184V460h656v380zM184 392V256h128v48c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-48h256v48c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-48h128v136H184z"></path>
                </svg>
              </i>
            </div>
          </span>
        </div>
      </div>
    </div>
    <div>
      <div class="fieldContainer">
        <div class="fieldLabel">Height <span class="required"> *</span>
        </div>
        <div class="field" style="width:50%">
          <div style="display:flex">
            <span class="">
              <input type="text" id="insuredMember.0.height_feet" value="5" placeholder="" required="" maxLength="1" pattern="^([1-9]{1})$" class="ant-input" />
              <span class="ant-input-suffix">Feet</span>
            </span>
            <span class="">
              <input type="text" id="insuredMember.0.height_inches" value="1" placeholder="" required="" maxLength="2" pattern="^([0-9]|1[01]|0[0-9])$" class="ant-input" />
              <span class="ant-input-suffix">Inches</span>
            </span>
          </div>
        </div>
      </div>
    </div>
    <div>
      <div class="fieldContainer">
        <div class="fieldLabel">Weight <span class="required"> *</span>
        </div>
        <div class="field" style="width:50%">
          <input type="tel" id="insuredMember.0.weight" value="56" placeholder="" required="" maxLength="3" minLength="1" pattern="^[1-9][0-9]*$" class="ant-input" />
        </div>
      </div>
    </div>
    <div>
      <div class="fieldContainer">
        <div class="fieldLabel">Occupation <span class="required"> *</span>
        </div>
        <div class="field" style="width:50%">
          <div id="proposerOccupation" style="width:100%" class="ant-select ant-select-enabled">
            <div class="ant-select-selection             ant-select-selection--single" role="combobox" aria-autocomplete="list" aria-haspopup="true" aria-controls="" aria-expanded="false" tabindex="0">
              <div class="ant-select-selection__rendered">
                <div style="display:none;user-select:none;-webkit-user-select:none" unselectable="on" class="ant-select-selection__placeholder">Select Occupation</div>
                <div class="ant-select-selection-selected-value" title="PROFESSIONAL-DOCTOR" style="display:block;opacity:1">PROFESSIONAL-DOCTOR</div>
              </div>
              <span class="ant-select-arrow" style="user-select:none;-webkit-user-select:none" unselectable="on">
                <i aria-label="icon: down" class="anticon anticon-down ant-select-arrow-icon">
                  <svg viewBox="64 64 896 896" focusable="false" class="" data-icon="down" width="1em" height="1em" fill="currentColor" aria-hidden="true">
                    <path d="M884 256h-75c-5.1 0-9.9 2.5-12.9 6.6L512 654.2 227.9 262.6c-3-4.1-7.8-6.6-12.9-6.6h-75c-6.5 0-10.3 7.4-6.5 12.7l352.6 486.1c12.8 17.6 39 17.6 51.7 0l352.6-486.1c3.9-5.3.1-12.7-6.4-12.7z"></path>
                  </svg>
                </i>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
<div>
  <div style="padding:10px 16px 0px 16px">
    <div class="sc-cMhqgX fijQJj">
      <div class="tm-checkout-section-header text-capitalize">spouse - 23 Years : </div>
    </div>
    <div>
      <div class="fieldContainer">
        <div class="fieldLabel">Title <span class="required"> *</span>
        </div>
        <div class="field" style="width:50%">
          <div id="Type" style="width:100%" class="ant-select ant-select-enabled">
            <div class="ant-select-selection             ant-select-selection--single" role="combobox" aria-autocomplete="list" aria-haspopup="true" aria-controls="" aria-expanded="false" tabindex="0">
              <div class="ant-select-selection__rendered">
                <div style="display:none;user-select:none;-webkit-user-select:none" unselectable="on" class="ant-select-selection__placeholder">Title</div>
                <div class="ant-select-selection-selected-value" title="Mrs" style="display:block;opacity:1">Mrs</div>
              </div>
              <span class="ant-select-arrow" style="user-select:none;-webkit-user-select:none" unselectable="on">
                <i aria-label="icon: down" class="anticon anticon-down ant-select-arrow-icon">
                  <svg viewBox="64 64 896 896" focusable="false" class="" data-icon="down" width="1em" height="1em" fill="currentColor" aria-hidden="true">
                    <path d="M884 256h-75c-5.1 0-9.9 2.5-12.9 6.6L512 654.2 227.9 262.6c-3-4.1-7.8-6.6-12.9-6.6h-75c-6.5 0-10.3 7.4-6.5 12.7l352.6 486.1c12.8 17.6 39 17.6 51.7 0l352.6-486.1c3.9-5.3.1-12.7-6.4-12.7z"></path>
                  </svg>
                </i>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div>
      <div class="fieldContainer">
        <div class="fieldLabel">Name <span class="required"> *</span>
        </div>
        <div class="field" style="width:50%">
          <input type="text" id="insuredMember.1.name" value="abcd xyz" placeholder="Enter full name" required="" maxLength="60" minLength="2" pattern="^[a-zA-Z]+(?:\s[a-zA-Z]+)+$" class="ant-input" />
        </div>
      </div>
    </div>
    <div>
      <div class="fieldContainer">
        <div class="fieldLabel">Date of Birth <span class="required"> *</span>
        </div>
        <div class="field" style="width:50%">
          <span id="DOB" class="ant-calendar-picker" style="width:100%">
            <div>
              <input readonly="" value="" placeholder="" class="ant-calendar-picker-input ant-input" />
              <i aria-label="icon: calendar" class="anticon anticon-calendar ant-calendar-picker-icon">
                <svg viewBox="64 64 896 896" focusable="false" class="" data-icon="calendar" width="1em" height="1em" fill="currentColor" aria-hidden="true">
                  <path d="M880 184H712v-64c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v64H384v-64c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v64H144c-17.7 0-32 14.3-32 32v664c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V216c0-17.7-14.3-32-32-32zm-40 656H184V460h656v380zM184 392V256h128v48c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-48h256v48c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-48h128v136H184z"></path>
                </svg>
              </i>
            </div>
          </span>
        </div>
      </div>
    </div>
    <div>
      <div class="fieldContainer">
        <div class="fieldLabel">Height <span class="required"> *</span>
        </div>
        <div class="field" style="width:50%">
          <div style="display:flex">
            <span class="">
              <input type="text" id="insuredMember.1.height_feet" value="5" placeholder="" required="" maxLength="1" pattern="^([1-9]{1})$" class="ant-input" />
              <span class="ant-input-suffix">Feet</span>
            </span>
            <span class="">
              <input type="text" id="insuredMember.1.height_inches" value="6" placeholder="" required="" maxLength="2" pattern="^([0-9]|1[01]|0[0-9])$" class="ant-input" />
              <span class="ant-input-suffix">Inches</span>
            </span>
          </div>
        </div>
      </div>
    </div>
    <div>
      <div class="fieldContainer">
        <div class="fieldLabel">Weight <span class="required"> *</span>
        </div>
        <div class="field" style="width:50%">
          <input type="tel" id="insuredMember.1.weight" value="65" placeholder="" required="" maxLength="3" minLength="1" pattern="^[1-9][0-9]*$" class="ant-input" />
        </div>
      </div>
    </div>
    <div>
      <div class="fieldContainer">
        <div class="fieldLabel">Occupation <span class="required"> *</span>
        </div>
        <div class="field" style="width:50%">
          <div id="proposerOccupation" style="width:100%" class="ant-select ant-select-enabled">
            <div class="ant-select-selection             ant-select-selection--single" role="combobox" aria-autocomplete="list" aria-haspopup="true" aria-controls="" aria-expanded="false" tabindex="0">
              <div class="ant-select-selection__rendered">
                <div style="display:none;user-select:none;-webkit-user-select:none" unselectable="on" class="ant-select-selection__placeholder">Select Occupation</div>
                <div class="ant-select-selection-selected-value" title="HOUSEWIVES" style="display:block;opacity:1">HOUSEWIVES</div>
              </div>
              <span class="ant-select-arrow" style="user-select:none;-webkit-user-select:none" unselectable="on">
                <i aria-label="icon: down" class="anticon anticon-down ant-select-arrow-icon">
                  <svg viewBox="64 64 896 896" focusable="false" class="" data-icon="down" width="1em" height="1em" fill="currentColor" aria-hidden="true">
                    <path d="M884 256h-75c-5.1 0-9.9 2.5-12.9 6.6L512 654.2 227.9 262.6c-3-4.1-7.8-6.6-12.9-6.6h-75c-6.5 0-10.3 7.4-6.5 12.7l352.6 486.1c12.8 17.6 39 17.6 51.7 0l352.6-486.1c3.9-5.3.1-12.7-6.4-12.7z"></path>
                  </svg>
                </i>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
<div>
  <div style="padding:10px 16px 0px 16px">
    <div class="sc-cMhqgX fijQJj">
      <div class='tm-checkout-section-header text-capitalize'>Nominee : </div>
    </div>
    <div>
      <div class="fieldContainer">
        <div class="fieldLabel">Nominee is my <span class="required"> *</span>
        </div>
        <div class="field" style="width:50%">
          <div id="NomineeRelation" style="width:100%" class="ant-select ant-select-enabled">
            <div class="ant-select-selection             ant-select-selection--single" role="combobox" aria-autocomplete="list" aria-haspopup="true" aria-controls="" aria-expanded="false" tabindex="0">
              <div class="ant-select-selection__rendered">
                <div style="display:block;user-select:none;-webkit-user-select:none" unselectable="on" class="ant-select-selection__placeholder">Relationship</div>
              </div>
              <span class="ant-select-arrow" style="user-select:none;-webkit-user-select:none" unselectable="on">
                <i aria-label="icon: down" class="anticon anticon-down ant-select-arrow-icon">
                  <svg viewBox="64 64 896 896" focusable="false" class="" data-icon="down" width="1em" height="1em" fill="currentColor" aria-hidden="true">
                    <path d="M884 256h-75c-5.1 0-9.9 2.5-12.9 6.6L512 654.2 227.9 262.6c-3-4.1-7.8-6.6-12.9-6.6h-75c-6.5 0-10.3 7.4-6.5 12.7l352.6 486.1c12.8 17.6 39 17.6 51.7 0l352.6-486.1c3.9-5.3.1-12.7-6.4-12.7z"></path>
                  </svg>
                </i>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div>
      <div class="fieldContainer">
        <div class="fieldLabel">Title <span class="required"> *</span>
        </div>
        <div class="field" style="width:50%">
          <div id="NomineeTitle" style="width:100%" class="ant-select ant-select-enabled">
            <div class="ant-select-selection             ant-select-selection--single" role="combobox" aria-autocomplete="list" aria-haspopup="true" aria-controls="" aria-expanded="false" tabindex="0">
              <div class="ant-select-selection__rendered">
                <div style="display:none;user-select:none;-webkit-user-select:none" unselectable="on" class="ant-select-selection__placeholder">Title</div>
                <div class="ant-select-selection-selected-value" title="Mr" style="display:block;opacity:1">Mr</div>
              </div>
              <span class="ant-select-arrow" style="user-select:none;-webkit-user-select:none" unselectable="on">
                <i aria-label="icon: down" class="anticon anticon-down ant-select-arrow-icon">
                  <svg viewBox="64 64 896 896" focusable="false" class="" data-icon="down" width="1em" height="1em" fill="currentColor" aria-hidden="true">
                    <path d="M884 256h-75c-5.1 0-9.9 2.5-12.9 6.6L512 654.2 227.9 262.6c-3-4.1-7.8-6.6-12.9-6.6h-75c-6.5 0-10.3 7.4-6.5 12.7l352.6 486.1c12.8 17.6 39 17.6 51.7 0l352.6-486.1c3.9-5.3.1-12.7-6.4-12.7z"></path>
                  </svg>
                </i>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div>
      <div class="fieldContainer">
        <div class="fieldLabel">Nominee&#x27;s Name <span class="required"> *</span>
        </div>
        <div class="field" style="width:50%">
          <input type="text" id="nomineeDetail.nomineeName" value="ranjan singh" placeholder="Enter Nominee&#x27;s full name" required="" maxLength="60" minLength="2" pattern="^[a-zA-Z]+(?:\s[a-zA-Z]+)+$" class="ant-input" />
        </div>
      </div>
    </div>
  </div>
</div>
</div>
<div style="padding:8px;margin:8px 2px;border:1px solid #00a364" data-reactroot="">
<b style="color:#00a364;font-size:18px">3. Medical details</b>
</div>
<div id="medical-history">
<div>
  <div style="padding:10px 16px 0px 16px">
    <div class="sc-cMhqgX fijQJj">
      <div class='tm-checkout-section-header text-capitalize'>Medical History : </div>
    </div>
    <div>
      <div class="fieldContainer">
        <div class="field" style="width:100%">
          <div class="yesNoQuestion">
            <div class="fieldContainer">
              <div class="fieldLabel">if yes select since how long does the applicant smoke</div>
              <div class="ant-radio-group ant-radio-group-outline" style="min-width:220px" id="medicalHistory.Lvl02_Q805_01.answer">
                <label class="ant-radio-wrapper ant-radio-wrapper-checked">
                  <span class="ant-radio ant-radio-checked">
                    <input type="radio" class="ant-radio-input" checked="" value="Yes" />
                    <span class="ant-radio-inner"></span>
                  </span>
                  <span>Yes</span>
                </label>
                <label class="ant-radio-wrapper">
                  <span class="ant-radio">
                    <input type="radio" class="ant-radio-input" value="No" />
                    <span class="ant-radio-inner"></span>
                  </span>
                  <span>No</span>
                </label>
              </div>
            </div>
            <div>
              <div style="display:flex">
                <div style="margin:0px 10px 10px 0px">Select Member</div>
                <div style="display:flex"></div>
              </div>
              <div style="display:flex">
                <div class="fieldContainer">
                  <div class="field" style="width:fit-content;padding:0px;margin-top:-12px">
                    <label class="flex layout-row chipWrapper">
                      <input type="checkbox" id="medicalHistory.Lvl02_Q805_01.members.SELF.answer" class="check-box-btn" checked="" />
                      <div class="checkboxChip">
                        <span class="">self</span>
                        <span class="pointer close">
                          <i aria-label="icon: close-circle" class="anticon anticon-close-circle">
                            <svg viewBox="64 64 896 896" focusable="false" class="" data-icon="close-circle" width="1em" height="1em" fill="currentColor" aria-hidden="true">
                              <path fill="#1890ff" d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"></path>
                              <path fill="#e6f7ff" d="M512 140c-205.4 0-372 166.6-372 372s166.6 372 372 372 372-166.6 372-372-166.6-372-372-372zm171.8 527.1c1.2 1.5 1.9 3.3 1.9 5.2 0 4.5-3.6 8-8 8l-66-.3-99.3-118.4-99.3 118.5-66.1.3c-4.4 0-8-3.6-8-8 0-1.9.7-3.7 1.9-5.2L471 512.3l-130.1-155a8.32 8.32 0 0 1-1.9-5.2c0-4.5 3.6-8 8-8l66.1.3 99.3 118.4 99.4-118.5 66-.3c4.4 0 8 3.6 8 8 0 1.9-.6 3.8-1.8 5.2l-130.1 155 129.9 154.9z"></path>
                              <path fill="#1890ff" d="M685.8 352c0-4.4-3.6-8-8-8l-66 .3-99.4 118.5-99.3-118.4-66.1-.3c-4.4 0-8 3.5-8 8 0 1.9.7 3.7 1.9 5.2l130.1 155-130.1 154.9a8.32 8.32 0 0 0-1.9 5.2c0 4.4 3.6 8 8 8l66.1-.3 99.3-118.5L611.7 680l66 .3c4.4 0 8-3.5 8-8 0-1.9-.7-3.7-1.9-5.2L553.9 512.2l130.1-155c1.2-1.4 1.8-3.3 1.8-5.2z"></path>
                            </svg>
                          </i>
                        </span>
                      </div>
                    </label>
                  </div>
                </div>
                <div style="width:100%;margin-top:-12px">
                  <div class="fieldContainer">
                    <div class="fieldLabel">Select quantity of smoke <span class="required"> *</span>
                    </div>
                    <div class="field" style="width:50%">
                      <div id="treatmentCd" style="width:100%" class="ant-select ant-select-enabled">
                        <div class="ant-select-selection             ant-select-selection--single" role="combobox" aria-autocomplete="list" aria-haspopup="true" aria-controls="" aria-expanded="false" tabindex="0">
                          <div class="ant-select-selection__rendered">
                            <div style="display:none;user-select:none;-webkit-user-select:none" unselectable="on" class="ant-select-selection__placeholder">Select quantity</div>
                            <div class="ant-select-selection-selected-value" title="Less than or equal to 20 years" style="display:block;opacity:1">Less than or equal to 20 years</div>
                          </div>
                          <span class="ant-select-arrow" style="user-select:none;-webkit-user-select:none" unselectable="on">
                            <i aria-label="icon: down" class="anticon anticon-down ant-select-arrow-icon">
                              <svg viewBox="64 64 896 896" focusable="false" class="" data-icon="down" width="1em" height="1em" fill="currentColor" aria-hidden="true">
                                <path d="M884 256h-75c-5.1 0-9.9 2.5-12.9 6.6L512 654.2 227.9 262.6c-3-4.1-7.8-6.6-12.9-6.6h-75c-6.5 0-10.3 7.4-6.5 12.7l352.6 486.1c12.8 17.6 39 17.6 51.7 0l352.6-486.1c3.9-5.3.1-12.7-6.4-12.7z"></path>
                              </svg>
                            </i>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="fieldContainer">
                    <div class="fieldLabel">Existing since <span class="required"> *</span>
                    </div>
                    <div class="field" style="width:50%">
                      <span class="ant-calendar-picker" style="width:100%">
                        <div>
                          <input readonly="" value="" placeholder="Existing since dd/mm/yyy" class="ant-calendar-picker-input ant-input" />
                          <i aria-label="icon: calendar" class="anticon anticon-calendar ant-calendar-picker-icon">
                            <svg viewBox="64 64 896 896" focusable="false" class="" data-icon="calendar" width="1em" height="1em" fill="currentColor" aria-hidden="true">
                              <path d="M880 184H712v-64c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v64H384v-64c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v64H144c-17.7 0-32 14.3-32 32v664c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V216c0-17.7-14.3-32-32-32zm-40 656H184V460h656v380zM184 392V256h128v48c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-48h256v48c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-48h128v136H184z"></path>
                            </svg>
                          </i>
                        </div>
                      </span>
                    </div>
                  </div>
                  <div class="fieldContainer">
                    <div class="fieldLabel">Existing since <span class="required"> *</span>
                    </div>
                    <div class="field" style="width:50%">
                      <input type="text" id="medicalHistory.Lvl02_Q805_01.members.SELF.subQuestion.hyperTensionExistingSince2.answer" value="" placeholder="Input since" required="" class="ant-input" />
                    </div>
                  </div>
                </div>
              </div>
              <div style="display:flex">
                <div class="fieldContainer">
                  <div class="field" style="width:fit-content;padding:0px;margin-top:-12px">
                    <label class="flex layout-row chipWrapper">
                      <input type="checkbox" id="medicalHistory.Lvl02_Q805_01.members.SPOUSE.answer" class="check-box-btn" checked="" />
                      <div class="checkboxChip">
                        <span class="">spouse</span>
                        <span class="pointer close">
                          <i aria-label="icon: close-circle" class="anticon anticon-close-circle">
                            <svg viewBox="64 64 896 896" focusable="false" class="" data-icon="close-circle" width="1em" height="1em" fill="currentColor" aria-hidden="true">
                              <path fill="#1890ff" d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"></path>
                              <path fill="#e6f7ff" d="M512 140c-205.4 0-372 166.6-372 372s166.6 372 372 372 372-166.6 372-372-166.6-372-372-372zm171.8 527.1c1.2 1.5 1.9 3.3 1.9 5.2 0 4.5-3.6 8-8 8l-66-.3-99.3-118.4-99.3 118.5-66.1.3c-4.4 0-8-3.6-8-8 0-1.9.7-3.7 1.9-5.2L471 512.3l-130.1-155a8.32 8.32 0 0 1-1.9-5.2c0-4.5 3.6-8 8-8l66.1.3 99.3 118.4 99.4-118.5 66-.3c4.4 0 8 3.6 8 8 0 1.9-.6 3.8-1.8 5.2l-130.1 155 129.9 154.9z"></path>
                              <path fill="#1890ff" d="M685.8 352c0-4.4-3.6-8-8-8l-66 .3-99.4 118.5-99.3-118.4-66.1-.3c-4.4 0-8 3.5-8 8 0 1.9.7 3.7 1.9 5.2l130.1 155-130.1 154.9a8.32 8.32 0 0 0-1.9 5.2c0 4.4 3.6 8 8 8l66.1-.3 99.3-118.5L611.7 680l66 .3c4.4 0 8-3.5 8-8 0-1.9-.7-3.7-1.9-5.2L553.9 512.2l130.1-155c1.2-1.4 1.8-3.3 1.8-5.2z"></path>
                            </svg>
                          </i>
                        </span>
                      </div>
                    </label>
                  </div>
                </div>
                <div style="width:100%;margin-top:-12px">
                  <div class="fieldContainer">
                    <div class="fieldLabel">Select quantity of smoke <span class="required"> *</span>
                    </div>
                    <div class="field" style="width:50%">
                      <div id="treatmentCd" style="width:100%" class="ant-select ant-select-enabled">
                        <div class="ant-select-selection             ant-select-selection--single" role="combobox" aria-autocomplete="list" aria-haspopup="true" aria-controls="" aria-expanded="false" tabindex="0">
                          <div class="ant-select-selection__rendered">
                            <div style="display:none;user-select:none;-webkit-user-select:none" unselectable="on" class="ant-select-selection__placeholder">Select quantity</div>
                            <div class="ant-select-selection-selected-value" title="More than 20 years" style="display:block;opacity:1">More than 20 years</div>
                          </div>
                          <span class="ant-select-arrow" style="user-select:none;-webkit-user-select:none" unselectable="on">
                            <i aria-label="icon: down" class="anticon anticon-down ant-select-arrow-icon">
                              <svg viewBox="64 64 896 896" focusable="false" class="" data-icon="down" width="1em" height="1em" fill="currentColor" aria-hidden="true">
                                <path d="M884 256h-75c-5.1 0-9.9 2.5-12.9 6.6L512 654.2 227.9 262.6c-3-4.1-7.8-6.6-12.9-6.6h-75c-6.5 0-10.3 7.4-6.5 12.7l352.6 486.1c12.8 17.6 39 17.6 51.7 0l352.6-486.1c3.9-5.3.1-12.7-6.4-12.7z"></path>
                              </svg>
                            </i>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="fieldContainer">
                    <div class="fieldLabel">Existing since <span class="required"> *</span>
                    </div>
                    <div class="field" style="width:50%">
                      <span class="ant-calendar-picker" style="width:100%">
                        <div>
                          <input readonly="" value="" placeholder="Existing since dd/mm/yyy" class="ant-calendar-picker-input ant-input" />
                          <i aria-label="icon: calendar" class="anticon anticon-calendar ant-calendar-picker-icon">
                            <svg viewBox="64 64 896 896" focusable="false" class="" data-icon="calendar" width="1em" height="1em" fill="currentColor" aria-hidden="true">
                              <path d="M880 184H712v-64c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v64H384v-64c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v64H144c-17.7 0-32 14.3-32 32v664c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V216c0-17.7-14.3-32-32-32zm-40 656H184V460h656v380zM184 392V256h128v48c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-48h256v48c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-48h128v136H184z"></path>
                            </svg>
                          </i>
                        </div>
                      </span>
                    </div>
                  </div>
                  <div class="fieldContainer">
                    <div class="fieldLabel">Existing since <span class="required"> *</span>
                    </div>
                    <div class="field" style="width:50%">
                      <input type="text" id="medicalHistory.Lvl02_Q805_01.members.SPOUSE.subQuestion.hyperTensionExistingSince2.answer" value="" placeholder="Input since" required="" class="ant-input" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div>
      <div class="fieldContainer">
        <div class="field" style="width:100%">
          <div class="yesNoQuestion">
            <div class="fieldContainer">
              <div class="fieldLabel">Hypertension?</div>
              <div class="ant-radio-group ant-radio-group-outline" style="min-width:220px" id="medicalHistory.207.answer">
                <label class="ant-radio-wrapper ant-radio-wrapper-checked">
                  <span class="ant-radio ant-radio-checked">
                    <input type="radio" class="ant-radio-input" checked="" value="Yes" />
                    <span class="ant-radio-inner"></span>
                  </span>
                  <span>Yes</span>
                </label>
                <label class="ant-radio-wrapper">
                  <span class="ant-radio">
                    <input type="radio" class="ant-radio-input" value="No" />
                    <span class="ant-radio-inner"></span>
                  </span>
                  <span>No</span>
                </label>
              </div>
            </div>
            <div>
              <div style="display:flex">
                <div style="margin:0px 10px 10px 0px">Select Member</div>
                <div style="display:flex"></div>
              </div>
              <div style="display:flex">
                <div class="fieldContainer">
                  <div class="field" style="width:fit-content;padding:0px;margin-top:-12px">
                    <label class="flex layout-row chipWrapper">
                      <input type="checkbox" id="medicalHistory.207.members.SELF.answer" class="check-box-btn" checked="" />
                      <div class="checkboxChip">
                        <span class="">self</span>
                        <span class="pointer close">
                          <i aria-label="icon: close-circle" class="anticon anticon-close-circle">
                            <svg viewBox="64 64 896 896" focusable="false" class="" data-icon="close-circle" width="1em" height="1em" fill="currentColor" aria-hidden="true">
                              <path fill="#1890ff" d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"></path>
                              <path fill="#e6f7ff" d="M512 140c-205.4 0-372 166.6-372 372s166.6 372 372 372 372-166.6 372-372-166.6-372-372-372zm171.8 527.1c1.2 1.5 1.9 3.3 1.9 5.2 0 4.5-3.6 8-8 8l-66-.3-99.3-118.4-99.3 118.5-66.1.3c-4.4 0-8-3.6-8-8 0-1.9.7-3.7 1.9-5.2L471 512.3l-130.1-155a8.32 8.32 0 0 1-1.9-5.2c0-4.5 3.6-8 8-8l66.1.3 99.3 118.4 99.4-118.5 66-.3c4.4 0 8 3.6 8 8 0 1.9-.6 3.8-1.8 5.2l-130.1 155 129.9 154.9z"></path>
                              <path fill="#1890ff" d="M685.8 352c0-4.4-3.6-8-8-8l-66 .3-99.4 118.5-99.3-118.4-66.1-.3c-4.4 0-8 3.5-8 8 0 1.9.7 3.7 1.9 5.2l130.1 155-130.1 154.9a8.32 8.32 0 0 0-1.9 5.2c0 4.4 3.6 8 8 8l66.1-.3 99.3-118.5L611.7 680l66 .3c4.4 0 8-3.5 8-8 0-1.9-.7-3.7-1.9-5.2L553.9 512.2l130.1-155c1.2-1.4 1.8-3.3 1.8-5.2z"></path>
                            </svg>
                          </i>
                        </span>
                      </div>
                    </label>
                  </div>
                </div>
                <div style="width:100%;margin-top:-12px">
                  <div class="fieldContainer">
                    <div class="field" style="width:100%">
                      <span class="ant-calendar-picker" style="width:100%">
                        <div>
                          <input readonly="" value="02/08/2022" placeholder="Existing since dd/mm/yyy" class="ant-calendar-picker-input ant-input" />
                          <i aria-label="icon: calendar" class="anticon anticon-calendar ant-calendar-picker-icon">
                            <svg viewBox="64 64 896 896" focusable="false" class="" data-icon="calendar" width="1em" height="1em" fill="currentColor" aria-hidden="true">
                              <path d="M880 184H712v-64c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v64H384v-64c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v64H144c-17.7 0-32 14.3-32 32v664c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V216c0-17.7-14.3-32-32-32zm-40 656H184V460h656v380zM184 392V256h128v48c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-48h256v48c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-48h128v136H184z"></path>
                            </svg>
                          </i>
                        </div>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div style="display:flex">
                <div class="fieldContainer">
                  <div class="field" style="width:fit-content;padding:0px;margin-top:-12px">
                    <label class="flex layout-row chipWrapper">
                      <input type="checkbox" id="medicalHistory.207.members.SPOUSE.answer" class="check-box-btn" checked="" />
                      <div class="checkboxChip">
                        <span class="">spouse</span>
                        <span class="pointer close">
                          <i aria-label="icon: close-circle" class="anticon anticon-close-circle">
                            <svg viewBox="64 64 896 896" focusable="false" class="" data-icon="close-circle" width="1em" height="1em" fill="currentColor" aria-hidden="true">
                              <path fill="#1890ff" d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"></path>
                              <path fill="#e6f7ff" d="M512 140c-205.4 0-372 166.6-372 372s166.6 372 372 372 372-166.6 372-372-166.6-372-372-372zm171.8 527.1c1.2 1.5 1.9 3.3 1.9 5.2 0 4.5-3.6 8-8 8l-66-.3-99.3-118.4-99.3 118.5-66.1.3c-4.4 0-8-3.6-8-8 0-1.9.7-3.7 1.9-5.2L471 512.3l-130.1-155a8.32 8.32 0 0 1-1.9-5.2c0-4.5 3.6-8 8-8l66.1.3 99.3 118.4 99.4-118.5 66-.3c4.4 0 8 3.6 8 8 0 1.9-.6 3.8-1.8 5.2l-130.1 155 129.9 154.9z"></path>
                              <path fill="#1890ff" d="M685.8 352c0-4.4-3.6-8-8-8l-66 .3-99.4 118.5-99.3-118.4-66.1-.3c-4.4 0-8 3.5-8 8 0 1.9.7 3.7 1.9 5.2l130.1 155-130.1 154.9a8.32 8.32 0 0 0-1.9 5.2c0 4.4 3.6 8 8 8l66.1-.3 99.3-118.5L611.7 680l66 .3c4.4 0 8-3.5 8-8 0-1.9-.7-3.7-1.9-5.2L553.9 512.2l130.1-155c1.2-1.4 1.8-3.3 1.8-5.2z"></path>
                            </svg>
                          </i>
                        </span>
                      </div>
                    </label>
                  </div>
                </div>
                <div style="width:100%;margin-top:-12px">
                  <div class="fieldContainer">
                    <div class="field" style="width:100%">
                      <span class="ant-calendar-picker" style="width:100%">
                        <div>
                          <input readonly="" value="11/08/2022" placeholder="Existing since dd/mm/yyy" class="ant-calendar-picker-input ant-input" />
                          <i aria-label="icon: calendar" class="anticon anticon-calendar ant-calendar-picker-icon">
                            <svg viewBox="64 64 896 896" focusable="false" class="" data-icon="calendar" width="1em" height="1em" fill="currentColor" aria-hidden="true">
                              <path d="M880 184H712v-64c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v64H384v-64c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v64H144c-17.7 0-32 14.3-32 32v664c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V216c0-17.7-14.3-32-32-32zm-40 656H184V460h656v380zM184 392V256h128v48c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-48h256v48c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-48h128v136H184z"></path>
                            </svg>
                          </i>
                        </div>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</div>
`
}

function generatePdf(){
    // var category = "term";
    // var category = "retirement";
    // var category = "child";
    // var category = "investment";
    var category = "formConfig";

    var html = fs.readFileSync(`./templates/${category}.html`, 'utf8');
    var template = Handlebars.compile(html, options);

    var renderedHtml = template(data);
    
    pdf.create(renderedHtml, options).toFile(`./generatedPdf/${category}.pdf`, function(err, res) {
      if (err) return console.log(err);
      console.log(res); 
    });
}

generatePdf();