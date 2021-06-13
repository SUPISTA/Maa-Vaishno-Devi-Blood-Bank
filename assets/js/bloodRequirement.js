const form1 = document.getElementById("blood-requirement");
const successMessage1 = document.querySelector(".sent-message1");
const errorMessage1 = document.querySelector(".error-message1");

form1.addEventListener('submit', (event) => {
    event.preventDefault();

    const name1 = form1.elements['Name1'].value;
    const email1 = form1.elements['Email1'].value;
    const mobile1 = form1.elements['Mobile1'].value;
    const address1 = form1.elements['Address1'].value;
    const bloodGroup1 = form1.elements['Blood-group1'].value;
    const gender1 = form1.elements['Gender1'].value;
    const city1 = form1.elements['City1'].value;
    const state1 = form1.elements['State1'].value;
    const zip1 = form1.elements['Zip1'].value;

    const bloodRequirementDetails = {
        data: {
            Name: name1,
            Email: email1,
            Mobile: `+91${mobile1}`,
            Address: address1,
            BloodGroup: bloodGroup1,
            Gender: gender1,
            City: city1,
            State: state1,
            Zip: zip1
        },
        apiID: "BloodBank-BloodRequirement-Create-Save-create",
        d3_userLanguage: "undefined"
    }

    const xhttp = new XMLHttpRequest();
    xhttp.open("POST", "https://app.supista.com/api/1/60c48d47268d6d0e6e59b05a", false);
    xhttp.setRequestHeader("Content-Type", "application/json; charset=utf-8");
    xhttp.setRequestHeader("Access-Control-Allow-Origin", "*");
    xhttp.setRequestHeader('Acces-Control-Allow-Methods', 'POST');
    xhttp.send(JSON.stringify(bloodRequirementDetails));

    if (xhttp.status === 200) {
        successMessage1.classList.add('d-block');
        setTimeout(() => {
            successMessage1.classList.remove('d-block');
        }, 5000);
        console.log("Success");
    }
    else {
        errorMessage1.classList.add('d-block');
        setTimeout(() => {
            errorMessage1.classList.remove('d-block');
        }, 5000);
        console.log('Error');
    }

    form1.reset();
});