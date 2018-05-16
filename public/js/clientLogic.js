
$(document).ready(function () {
  
	// initializes materialize functionality for drop down and modals - Do Not Remove
	$('select').formSelect();
	$('.modal').modal();
	$('.dropdown-trigger').dropdown();

	// Add new company modal trigger
	$('#inputModalTrigger').on("click", function () {
		$('#newCompanyForm')[0].reset();
		$('#confirmDelete').modal('close');
		$('#companyInputModal').modal('open');
	});

    //============ Global variables ================
	var url = window.location.search;
	var companyId;
	var currentCompany;
	var idToDelete;
	// Sets a flag for whether or not we're updating a company to be false initially
    var updating = false;
    // ============ DOM variables ================
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

	// ============================
    // Open edit company modal trigger
    $(".edit").on("click", handleCompanyEdit); 
    
    // ============================
    
    // Open delete modal trigger
    $(".clear").on("click", handleCompanyClose); 
    // When Delete button is clicked company is deleted from DB
    $("#deleteConfirm").on("click", function(){
        deleteCompany(idToDelete);
    })
	
    // ============ form submission ================
	// Adding an event listener for when the form is submitted
	$(newCompanyForm).on("submit", function handleFormSubmit(event) {
		event.preventDefault();
		// Wont submit the company if we are missing a company name, position, or input date
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
		};

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

    // ========= ajax calls and other necessary functions ===================

    // opens modal to edit company data and closes delete modal if open
    function handleCompanyEdit() {

        currentCompany = $(this).parent().attr("id");
        getCompanyData(currentCompany);
        $('#confirmDelete').modal('close');
        $('#companyInputModal').modal('open');
    }

    // opens the delete company modal and sets the id variable
    function handleCompanyClose() {
        idToDelete = $(this).parent().attr("id");
        $('#companyInputModal').modal('open');
        $('#confirmDelete').modal('open');
    }

    function deleteCompany(id) {
        $.ajax({
            method: "DELETE",
            url: "/api/companies/" + id
        })
            .then(function () {
                window.location.href = "/";
            });
    }

	// Submits a new company and brings user to blog page upon completion
	function submitCompany(Company) {
		$.post("/api/companies/", Company, function () {
            // returns to the main page, with the added company now added
            // page loads home handlebars file showcasing all db data
			window.location.href = "/";
		});
	}

	// Gets company data for a company if we're editing
	function getCompanyData(id) {
		$.get("/api/companies/" + id, function (data) {
			if (data) {
				// If we have a company with this id, set a flag for us to know to update the company
				// when we hit submit
				updating = true;
				var returnedData = checkIfDataNull(data);
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
    // used when populating the "update form"
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

		var idConv = id.toString();
		var url = "/api/companies/" + idConv;
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


// the block of code below is used for the drag and drop functionality
// only works outside of document ready
function allowDrop(ev) {
    ev.preventDefault();
}

function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
    ev.preventDefault();
    if (ev.target.className === "dragDrop") {


        var data = ev.dataTransfer.getData("text");
        ev.target.prepend(document.getElementById(data));
        ev.target.style.height = "120%";
        var eventBoardPosition = ev.target.dataset.boardPosition;
        console.log('ev.target.dataset', ev.target.dataset.boardPosition);
        console.log(data);

        $.ajax({

            url: '/api/companies/' + eventBoardPosition + "/" + data,
            type: 'PUT',
        })
            .then(function () {
                window.location.href = "/";
            });

    }
}
