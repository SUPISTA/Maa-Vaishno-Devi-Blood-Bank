const form = document.getElementById("volunteer");
const successMessage = document.querySelector(".sent-message");
const errorMessage = document.querySelector(".error-message");

form.addEventListener('submit', (event) => {
    event.preventDefault();

    const name = form.elements['Name'].value;
    const email = form.elements['Email'].value;
    const mobile = form.elements['Mobile'].value;
    const address = form.elements['Address'].value;
    const bloodGroup = form.elements['Blood-group'].value;
    const gender = form.elements['Gender'].value;
    const city = form.elements['City'].value;
    const state = form.elements['State'].value;
    const zip = form.elements['Zip'].value;

    const volunteerDetails = {
        data: {
            Address: address,
            BloodGroup: bloodGroup,
            City: city,
            Email: email,
            Gender: gender,
            Mobile: mobile,
            Name: name,
            State: state,
            Zip: zip
        },
        apiID: "BloodBank-Volunteers-Create-Save-create",
        d3_userLanguage: "undefined"
    }

    console.log(volunteerDetails);

    const xhttp = new XMLHttpRequest();
    xhttp.open("POST", "https://app.supista.com/api/1/60c37fd6268d6d0e6e59b04c", true);
    xhttp.setRequestHeader("Content-Type", "application/json; charset=utf-8");
    xhttp.setRequestHeader("Access-Control-Allow-Origin", "*");
    xhttp.setRequestHeader('Acces-Control-Allow-Methods', 'POST');
    xhttp.send(JSON.stringify(volunteerDetails));

    fetch(`https://app.supista.com/api/1/60c37fd6268d6d0e6e59b04c`, {
        withCredentials: true
    }).then(function (response) {
        if (response.status === 200) {
            successMessage.classList.add('d-block');
            setTimeout(() => {
                successMessage.classList.remove('d-block');
            }, 5000);
            console.log("Success");
        }
        else {
            errorMessage.classList.add('d-block');
            setTimeout(() => {
                errorMessage.classList.remove('d-block');
            }, 5000);
            console.log('Error');
        }
    });

    form.reset();
});