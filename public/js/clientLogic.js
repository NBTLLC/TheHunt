
$(document).ready(function () {
    // allows materialize form select dropdown and modal to work
    
    // initializes materialize functionality
    $('select').formSelect();
    $('.modal').modal();

    // modal triggers
    $('#inputModalTrigger').on("click", function() {
        
        $('#companyInputModal').modal('open');
    });

    $('#deleteButtonConfirmation').on("click", function() {
        console.log(1);
        
        $('#confirmDelete').modal('open');

    });




    var url = window.location.search;
    var companyId;
    var currentCompany;
    // Sets a flag for whether or not we're updating a company to be false initially
    var updating = false;
    // ============================
    // If we have this section in our url, we pull out the company id from the url
    // In localhost:8080/?company_id=1, companyId is 1
    // this comes from the logic below from the blog.js in blog file
    
    $("div[data-group='company'").on("click", handleCompanyEdit); // needs to be on click of company box
        //------------------
    
        
    function handleCompanyEdit() {
        // console.log(this);
        
        // $('#companyInputModal').modal('open');
        currentCompany = $(this).attr("id");
        // console.log(currentCompany);
        getCompanyData(currentCompany);
        // window.location.href = "/?company_id=" + currentCompany;
        $('#companyInputModal').modal('open');
        console.log(updating);
    }
    


    /*
    function deleteCompany(id) {
        $.ajax({
            method: "DELETE",
            url: "/api/companiess/" + id
        })
            .then(function () {
                getCompanies();
            });
    }
    */
    // ============================


    // if (url.indexOf("?company_id=") !== -1) {
    //     //trigger modal popup
    //     companyId = url.split("=")[1];
    //     getCompanyData(companyId);
    // }

    // Getting jQuery references to the company inputs on input form
    var companyNameInput = $("#companyName");
    var positionTitleInput = $("#positionTitle");
    var dateAddedInput = $("#dateAdded");
    var websiteURLInput = $("#websiteURL");
    var websiteURLInput = $("#websiteURL");
    var hiringManagerNameInput = $("#hiringManagerName");
    var hiringManagerPhoneInput = $("#hiringManagerPhone");
    var hiringManagerEmailInput = $("#hiringManagerEmail");
    var companyNotesInput = $("#companyNotes");
    var boardPositionInput = $("#boardPosition");
    // selects the form to create a new company
    var newCompanyForm = $("#newCompanyForm");


    // Adding an event listener for when the form is submitted
    $(newCompanyForm).on("submit", function handleFormSubmit(event) {
        event.preventDefault();
        // Wont submit the company if we are missing a body or a title
        if (!companyNameInput.val().trim() || !positionTitleInput.val().trim() || !dateAddedInput.val().trim()) {
            alert("Please fill out the required fields.")
            return;
        }
    // Constructing a newCompany object to hand to the database
    var newCompany = {
        company_name: companyNameInput.val().trim(),
        position_title: positionTitleInput.val().trim(),
        date_added: dateAddedInput.val().trim(),
        website_url: websiteURLInput.val().trim(),
        hiring_manager_name: hiringManagerNameInput.val().trim(),
        hiring_manager_phone: hiringManagerPhoneInput.val().trim(),
        hiring_manager_email: hiringManagerEmailInput.val().trim(),
        company_notes: companyNotesInput.val().trim(),
        board_position: boardPositionInput.val()
        // add in selection of drop down
    };

    console.log(111111,boardPositionInput.val());

    // If we're updating a company run updateCompany to update a company
    // Otherwise run submitCompany to create a whole new company
    
    
    if (updating) {
        newCompany.id = currentCompany;        
        updateCompany(newCompany, newCompany.id);
    }
    else {
        submitCompany(newCompany);
    }
});
    // Getting the initial list of companies for board
    getCompanies();
    //================FUNCTIONS====================

    // This function grabs companys from the database and updates the view
    function getCompanies(category) {
        $.get("/api/companies", function (data) {
            console.log("Companies", data);
             
            if (!data || !data.length) {
                // displayEmpty(); //function that has a preset message showing no companies yet added
            }
            else {
                // initializeRows(); // uses db data for companies to generate rows
                // handlebars.js helper alterations
            }
        });
    }

    // Submits a new company and brings user to blog page upon completion
    function submitCompany(Company) {
        $.post("/api/companies/", Company, function () {
            // returns to the main page, with the added company now added
            window.location.href = "/"; // page loads home handlebars file showcasing all db data
        });
    }

    // Gets company data for a company if we're editing
    function getCompanyData(id) {
        $.get("/api/companies/" + id, function (data) {
            console.log(data);
            
            if (data) {

                // If we have a company with this id, set a flag for us to know to update the company
                // when we hit submit
                updating = true;
                console.log(updating);
                
                var returnedData = checkIfDataNull(data);
                console.log(22222,returnedData);
                
                // If this company has existing information, prefill our company form with its data
                companyNameInput.val(returnedData.companyName);
                positionTitleInput.val(returnedData.positionTitle);
                dateAddedInput.val(returnedData.dateAdded);
                websiteURLInput.val(returnedData.websiteURL);
                hiringManagerNameInput.val(returnedData.hiringManagerName);
                hiringManagerPhoneInput.val(returnedData.hiringManagerPhone);
                hiringManagerEmailInput.val(returnedData.hiringManagerEmail);
                companyNotesInput.val(returnedData.companyNotes);
                boardPositionInput.val(returnedData.boardPosition);
        
                
            }
        });
    }
    // check if the input object has any null sections and replace them
    function checkIfDataNull(data) {
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

    // Update a given company, bring user to the blog page when done
    function updateCompany(company, id) {
        console.log(id);
        
        var idConv = id.toString();
        console.log(idConv);
        var url = "/api/companies/"+idConv;
        console.log(url);
        
        
        $.ajax({
            method: "PUT",
            url: url,
            data: company
        })
            .then(function () {
                window.location.href = "/";
            });
    }

});
