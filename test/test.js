var expect = require("chai").expect;
// var checkNull = require("../public/js/clientLogic");
var checkNull = require("./functionsToTest/checkNull");

// objects to run through checkNull
var passed = {
  company_name: "test",
  position_title: "test",
  date_added: "05/07/2018",
  website_url: null,
  hiring_manager_name: null,
  hiring_manager_phone: null,
  hiring_manager_email: null,
  company_notes: null,
  board_position: "Applied"
}

// obhjects to be returned on checkNull
var returned = {
  companyName: "test",
  positionTitle: "test",
  dateAdded: "05/07/2018",
  websiteURL: "",
  hiringManagerName: "",
  hiringManagerPhone: "",
  hiringManagerEmail: "",
  companyNotes: "",
  boardPosition: "Applied"
}

describe("checkNull", function() {
  it("Should replace null key-value pairs with empty string", function() {
    expect(checkNull(passed)).to.deep.equal(returned);
  });
});


