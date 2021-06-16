const form3 = document.getElementById("contactUs");

form3.addEventListener('submit', (event) => {
    event.preventDefault();

    const name3 = form3.elements['Name3'].value;
    const email3 = form3.elements['Email3'].value;
    const mobile3 = form3.elements['Mobile3'].value;
    const message3 = form3.elements['Message3'].value;

    const contactUsDetails = {
        data: {
            Name: name3,
            Email: email3,
            Mobile: `+91${mobile3}`,
            Message: message3
        },
        apiID: "BloodBank-Contact-Create-Save-create",
        d3_userLanguage: "undefined"
    }

    console.log(contactUsDetails);

    const xhttp = new XMLHttpRequest();
    xhttp.open("POST", "https://app.supista.com/api/1/60c48d47268d6d0e6e59b05a", false);
    xhttp.setRequestHeader("Content-Type", "application/json; charset=utf-8");
    xhttp.setRequestHeader("Access-Control-Allow-Origin", "*");
    xhttp.setRequestHeader('Acces-Control-Allow-Methods', 'POST');
    xhttp.send(JSON.stringify(contactUsDetails));

    //if (xhttp.status === 200) {
    //    successMessage2.classList.add('d-block');
    //    setTimeout(() => {
    //        successMessage2.classList.remove('d-block');
    //    }, 5000);
    //    console.log("Success");
    //}
    //else {
    //    errorMessage2.classList.add('d-block');
    //    setTimeout(() => {
    //        errorMessage2.classList.remove('d-block');
    //    }, 5000);
    //    console.log('Error');
    //}

    form3.reset();
});