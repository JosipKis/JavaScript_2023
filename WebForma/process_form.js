function process_form_data() {

    let name = document.getElementById("nameID");
    let mail = document.getElementById("mailID");
    let experience = document.getElementById("experienceID");
    let programming_in = document.querySelectorAll(".chbx");
    let region = document.querySelectorAll('input[name="rbg1"]');

    console.log("Name is: "+ name.value);
    console.log("Mail is: "+ mail.value);
    console.log("Experience is: "+ experience.value);
    console.log("Programming in - options: "+ programming_in.length);
    console.log("Regions - options: "+ region.length);
    let chBXs = checkBoxVals(programming_in);

    let nameText = "<br/> Name is: "+ name.value;
    let mailText = "<br/> Mail is: "+ mail.value;
    let experienceText = "<br/> Experience is: "+ experience.value;
    let chBXJSONTEXT = "<br/> Programming: "+ JSON.stringify(chBXs);
    let regionVal = getCheckedRadioRegion(region);
    let regionText = "<br/> Region: "+ regionVal;

    document.getElementById("data_view").style.fontsize = "15px";
    document.getElementById("data_view").style.fontFamily = "Bell MT, sans-serif";
    document.getElementById("data_view").style.color = "#a009b8";
    document.getElementById("data_view").innerHTML = nameText + mailText + experienceText + chBXJSONTEXT + regionText;

    localStorage.setItem("nameItem", name.value);
    localStorage.setItem("mailItem", mail.value);
    localStorage.setItem("experienceItem", experience.value);
    localStorage.setItem("regionItem", regionVal);
    localStorage.setItem("programmingItems", JSON.stringify(chBXs));
    document.location = "show_data.html";
}

function checkBoxVals(cbv){
    let cb_kv = {};
    for (let cb_el of cbv){
        if(cb_el.checked){
            cb_kv[cb_el.name] = cb_el.value;
        }
    }
    return cb_kv;
}

function getCheckedRadioRegion(regs){
    let checkedRad;
    for (let rbe of regs){
        if(rbe.checked){
            checkedRad = rbe.value;
        }
    }
    return checkedRad;
}