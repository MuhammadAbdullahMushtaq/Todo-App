var noteList = document.getElementById("noteList");

function addNote() {
  var input = document.getElementById("input");

  if(input.value.length >= 5){
    var li = document.createElement("li");
    li.innerHTML = input.value;
    li.style.color = "royalblue";

  ///// Creating Edit Button /////
  var edtBtn = document.createElement("button");
  edtBtn.innerHTML = "EDIT";
  edtBtn.setAttribute("onclick", "editNote(this)");
  edtBtn.classList = ("button");
  edtBtn.style.color = "#Aa8F01";



  ///// Creating Delete Button /////
  var delBtn = document.createElement("button");
  delBtn.innerHTML = "DELETE";
  delBtn.setAttribute("onclick", "delNote(this)");
  delBtn.classList = ("button");
  delBtn.style.color = "#ea2e00";

  /////Creating Hr //////
  var hr = document.createElement("hr");
  hr.classList = ("hr");

  /////Creating Update Button/////
  var updBtn = document.createElement("button");
  updBtn.innerHTML = "UPDATE";
  updBtn.setAttribute("onclick", "updNote(this)");
  updBtn.classList = ("button");
  updBtn.style.color = "#Aa8F01";
  updBtn.style.display = "none";


  li.appendChild(edtBtn);
  li.appendChild(updBtn)
  li.appendChild(delBtn);
  li.appendChild(hr);
  
  noteList.appendChild(li);
  input.value = "";
}
  else{
    alert("Enter A List Note Of Atleast 5 Characters........")
    input.value = "";
  }
}


function delNotes() {
  noteList.innerHTML = "";
  var input = document.getElementById("input");
  input.value = "";
  input.nextElementSibling.disabled = false;
}


function editNote(e){
  var input = document.getElementById("input");
  input.nextElementSibling.disabled = true;
  var ab = e.parentNode;
  input.value = ab.firstChild.nodeValue;
  ab.firstChild.nextSibling.style.display = "none";  //editbtn
  ab.firstChild.nextSibling.nextSibling.style.display = "inline-block" //update btn
  var parentol = ab.parentNode; //ol
  var olchilds = parentol.children; //li's in array
  for (var i = 0; i < olchilds.length; i++){
    olchilds[i].firstElementChild.disabled = true; //editBtn disabled
    olchilds[i].firstElementChild.nextElementSibling.nextElementSibling.disabled = true; //delbtn disabled
    }
}


function updNote(g){
  var parent = g.parentNode;

  //////Input Value In li//////
  var input = document.getElementById("input");
  if(input.value.length >= 5){
  input.nextElementSibling.disabled = false; //add btn
  parent.firstChild.nodeValue = input.value;
  input.value = "";
  parent.firstChild.nextElementSibling.nextElementSibling.nextElementSibling.disabled = false;  ///deletebtn
  parent.firstChild.nextSibling.style.display = "inline-block";  ///editbtn
  parent.firstChild.nextSibling.nextSibling.style.display = "none"; //update btn
  var parentol = parent.parentNode; //ol
  var olchilds = parentol.children; //li's in array
  for (var i = 0; i < olchilds.length; i++){
    olchilds[i].firstElementChild.disabled = false; //editBtn disabled
    olchilds[i].firstElementChild.nextElementSibling.nextElementSibling.disabled = false; //delbtn disabled
    }
  }
  else{
    alert("Enter A List Note Of Atleast 5 Characters........")
    input.value = parent.firstChild.nodeValue;
  }
}


function delNote(e) {
  e.parentNode.remove();
  var input = document.getElementById("input");
  input.value = "";
  input.nextElementSibling.disabled = false;
}