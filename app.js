function getInput()
{
    var val = document.getElementById("input1");

    if(val.value === '')
    {
        alert("Must enter task!");
        return;
    }

    var li = document.createElement("li");
    var text = document.createTextNode(val.value);

    var checkBox = document.createElement("input");
    checkBox.type = "checkbox";
    checkBox.setAttribute("id","input2");
    checkBox.setAttribute("onClick","checkFunction(this)");

    li.appendChild(checkBox);

    var label = document.createElement("label");

    label.appendChild(text);

    label.setAttribute("class","text");

    li.appendChild(label);
    label.appendChild(text);

    var textInput = document.createElement("input");
    textInput.type = "text";
    textInput.setAttribute("value",val.value);
    li.appendChild(textInput);
    textInput.setAttribute("class","input3");


    val.value = "";

    var delBtn = document.createElement("button");
    var detText = document.createTextNode("DELETE");
    delBtn.appendChild(detText);

    var editBtn = document.createElement("button");
    var editText = document.createTextNode("EDIT");
    editBtn.appendChild(editText);

    editBtn.setAttribute("onClick","editItem(this)");
    delBtn.setAttribute("onClick","delItem(this)");

    li.appendChild(editBtn);
    li.appendChild(delBtn);
    
    editBtn.setAttribute("class","editBtn");
    delBtn.setAttribute("class","delBtn");

    var list = document.getElementById("list");
    list.appendChild(li);

    //li.setAttribute("class","editMode");

    console.log(list);

}

function delItem(e)
{   
    e.parentNode.remove();
}

function editItem(e)
{
    var listItem=e.parentNode;
    // listItem.setAttribute("class","editMode");

    var editInput = listItem.querySelector("input[type=text]");
    var label = listItem.querySelector("label");
   
    if(listItem.hasAttribute("class","editMode"))
    {
        label.innerText = editInput.value;
    }
    else{
        editInput.value = label.innerText;
    }
    listItem.classList.toggle("editMode");
}

function allDel(e)
{
    var val = document.getElementById("list");
    val.innerHTML = ""
}

function checkFunction(e)
{
    var a = document.getElementById("input2");
    var val = e.parentNode.querySelector("label").innerText;
    e.parentNode.remove();

    var val2 = document.getElementById("completed-tasks");
    var li = document.createElement("li");
    var checkInput = document.createElement("input");
    checkInput.type = "checkbox";
    checkInput.value = "checked";

    li.appendChild(checkInput);

    var label = document.createElement("label");
    var text = document.createTextNode(val);
    label.appendChild(text);
    li.appendChild(label);

    label.setAttribute("class","label2");

    var input4 = document.createTextNode("input");
    input4.type = "text";
    li.appendChild(input4);

    var btn = document.createElement("button");
    var text2 = document.createTextNode("Delete");
    btn.appendChild(text2);
    btn.setAttribute("onClick","delItem(this)");
    li.appendChild(btn);

    val2.appendChild(li);


    console.log(checkInput)
}
