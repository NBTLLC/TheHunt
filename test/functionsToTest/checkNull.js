// This file is used to test functions in their most basic form
//  they are modularized here so that it is confirmed they function without any other external code

// check if the input object has any null sections and replace them
var checkIfDataNull = function(data) {

    var companyData = {
        companyName: "",
        positionTitle: "",
        dateAdded: "",
        websiteURL: "",
        hiringManagerName: "",
        hiringManagerPhone: "",
        hiringManagerEmail: "",
        companyNotes: "",
        boardPosition: "",
    }

    if (data.company_name !== null) {
        companyData.companyName = data.company_name;
    }
    if (data.position_title !== null) {
        companyData.positionTitle = data.position_title
    }
    if (data.date_added !== null) {
        companyData.dateAdded = data.date_added;
    }
    if (data.website_url !== null) {
        companyData.websiteURL = data.website_url;
    }
    if (data.hiring_manager_name !== null) {
        companyData.hiringManagerName = data.hiring_manager_name;
    }
    if (data.hiring_manager_phone !== null) {
        companyData.hiringManagerPhone = data.hiring_manager_phone;
    }
    if (data.hiring_manager_email !== null) {
        companyData.hiringManagerEmail = data.hiring_manager_email;
    }
    if (data.company_notes !== null) {
        companyData.companyNotes = data.company_notes;
    }
    if (data.board_position !== null) {
        companyData.boardPosition = data.board_position;
    }
    
    return companyData;
}

 

module.exports = checkIfDataNull;