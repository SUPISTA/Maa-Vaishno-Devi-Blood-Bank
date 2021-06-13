const form2 = document.getElementById("blood-donor");
const successMessage2 = document.querySelector(".sent-message2");
const errorMessage2 = document.querySelector(".error-message2");

form2.addEventListener('submit', (event) => {
    event.preventDefault();

    const name2 = form2.elements['Name2'].value;
    const email2 = form2.elements['Email2'].value;
    const mobile2 = form2.elements['Mobile2'].value;
    const address2 = form2.elements['Address2'].value;
    const bloodGroup2 = form2.elements['Blood-group2'].value;
    const gender2 = form2.elements['Gender2'].value;
    const city2 = form2.elements['City2'].value;
    const state2 = form2.elements['State2'].value;
    const zip2 = form2.elements['Zip2'].value;

    const bloodDonorDetails = {
        data: {
            Name: name2,
            Email: email2,
            Mobile: `+91${mobile2}`,
            Address: address2,
            BloodGroup: bloodGroup2,
            Gender: gender2,
            City: city2,
            State: state2,
            Zip: zip2
        },
        apiID: "BloodBank-BloodDonor-Create-Save-create",
        d3_userLanguage: "undefined"
    }

    const xhttp = new XMLHttpRequest();
    xhttp.open("POST", "https://app.supista.com/api/1/60c48d47268d6d0e6e59b05a", false);
    xhttp.setRequestHeader("Content-Type", "application/json; charset=utf-8");
    xhttp.setRequestHeader("Access-Control-Allow-Origin", "*");
    xhttp.setRequestHeader('Acces-Control-Allow-Methods', 'POST');
    xhttp.send(JSON.stringify(bloodDonorDetails));

    if (xhttp.status === 200) {
        successMessage2.classList.add('d-block');
        setTimeout(() => {
            successMessage2.classList.remove('d-block');
        }, 5000);
        console.log("Success");
    }
    else {
        errorMessage2.classList.add('d-block');
        setTimeout(() => {
            errorMessage2.classList.remove('d-block');
        }, 5000);
        console.log('Error');
    }

    form2.reset();
});