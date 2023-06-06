function process_form_data() {

    let name = document.getElementById("nameID");
    let mail = document.getElementById("mailID");
    let experience = document.getElementById("experienceID");

    console.log("Name is: "+ name.value);
    console.log("Mail is: "+ mail.value);
    console.log("Experience is: "+ experience.value);

    let nameText = "<br/> Name is: "+ name.value;
    let mailText = "<br/> Mail is: "+ mail.value;
    let experienceText = "<br/> Experience is: "+ experience.value;

    document.getElementById("data_view").style.fontsize = "15px";
    document.getElementById("data_view").style.fontFamily = "Bell MT, sans-serif";
    document.getElementById("data_view").style.color = "#a009b8"
    document.getElementById("data_view").innerHTML += nameText + mailText + experienceText;
}