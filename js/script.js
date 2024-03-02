function addNewWEField()
{
    let newNode = document.createElement("textarea");
    newNode.classList.add("form-control");
    newNode.classList.add("weField");
    newNode.classList.add("mt-2");
    newNode.setAttribute("rows",3);
    newNode.setAttribute("placeholder","Enter Here");

    let weOb = document.getElementById("we");
    let weAddButtonOb = document.getElementById("weAddButton");

    weOb.insertBefore(newNode,weAddButtonOb);

}

function addNewAQField()
{
    let newNode2 = document.createElement("textarea");
    newNode2.classList.add("form-control");
    newNode2.classList.add("aqField");
    newNode2.classList.add("mt-2");
    newNode2.setAttribute("rows",3);
    newNode2.setAttribute("placeholder","Enter Here");

    let aqOb = document.getElementById("aq");
    let aqAddButtonOb = document.getElementById("aqAddButton");

    aqOb.insertBefore(newNode2,aqAddButtonOb);
}

// Generating CV
function generateCV()
{
    // console.log("generating CV");
    let nameField = document.getElementById("nameField").value;
    let nameT1 = document.getElementById("nameT1");
    nameT1.innerHTML = nameField;
    // direct
    document.getElementById("nameT2").innerHTML = nameField;
    // contact
    document.getElementById("contactT").innerHTML = document.getElementById("contactField").value;
    // address
    document.getElementById("addressT").innerHTML = document.getElementById("addressField").value;
    document.getElementById("fbT").innerHTML = document.getElementById("fbField").value;
    document.getElementById("gitT").innerHTML = document.getElementById("gitField").value;
    document.getElementById("linkedT").innerHTML = document.getElementById("linkedField").value;
    // Objective
    document.getElementById("objectiveT").innerHTML = document.getElementById("objectiveField").value;
    // we
    let wes = document.getElementsByClassName("weField");
    let str = "";
    for(let e of wes)
    {
        str = str + `<li>${e.value}</li>`;
    }
    document.getElementById("weT").innerHTML = str;
    // aq
    let aqs = document.getElementsByClassName("aqField");
    let str1 = "";
    for(let e of aqs)
    {
        str1 = str1 + `<li>${e.value}</li>`;
    }
    document.getElementById("aqT").innerHTML = str1;

    // for uploading resume file in desired company
    let file2 = document.getElementById("resField").files[0];
    console.log(file2);
    let reader2 = new FileReader();
    reader2.readAsDataURL(file2);
    console.log(reader2.result);

    // Code for setting Image

    let file = document.getElementById("imgField").files[0];
    console.log(file);
    let reader = new FileReader();
    reader.readAsDataURL(file);
    console.log(reader.result);

    // Set the image to Template
    reader.onloadend = function()
    {
        document.getElementById("imgTemplate").src = reader.result;
    };

    document.getElementById("cv-form").style.display = "none";
    document.getElementById("cv-template").style.display = "block";
}

// Print CV
function printCV()
{
    window.print();
}

