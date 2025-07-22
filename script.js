function myfun() {
    let userConfirm = alert("Project details are coming soon....");
    return userConfirm;
}

function myfun1() {
    let nam = document.getElementById("userName").value;
    if (nam != "") {
        alert("Thank you " + nam + " we will get back to you soon");
        return true;
    } else {
        return false;
    };
};