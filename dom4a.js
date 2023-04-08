var ADDFORM=document.getElementById("addForm")
var ITEM=document.getElementById("item")
var ITEMS=document.getElementById("items")
var description=document.createElement("input")
var submit=document.getElementById("Submit")
var filter=document.getElementById("filter")
// const filter=document.getElementById("filter")
description.setAttribute("type","text")
description.setAttribute("class","form-control mr-2")
description.setAttribute("id", "description")
ADDFORM.insertBefore(description,submit)
var descriptionValue=document.getElementById("description")
ITEMS.addEventListener("click", deleteitem)
ADDFORM.addEventListener("submit", addItem)
filter.addEventListener("keyup", filterItems)

function addItem(e){
    e.preventDefault()
    const lithium=document.createElement("li")
    lithium.setAttribute("class", "list-group-item")
    lithium.append(document.createTextNode(ITEM.value+" "+descriptionValue.value))
    const BUTTON=document.createElement("button")
    BUTTON.setAttribute("class", "btn btn-danger btn-sm float-right delete")
    BUTTON.append(document.createTextNode("X"))
    
    const EDIT=document.createElement("button")
    EDIT.setAttribute("class", "btn btn-warning btn-sm float-right edit")
    EDIT.append(document.createTextNode("Edit"))
    lithium.appendChild(EDIT)
    lithium.appendChild(BUTTON)
    ITEMS.appendChild(lithium)
    console.log(lithium)
}

function deleteitem(e){
    e.preventDefault()
    if(e.target.classList.contains("btn-danger")){
        if(confirm("Are you sure?")){
        const lithium2=e.target.parentElement
        ITEMS.removeChild(lithium2)
        // console.log(e.target.parentElement);
        }
    }
}

function filterItems(e){
    var text = e.target.value.toLowerCase();
    var items = ITEMS.getElementsByTagName('li');
    Array.from(items).forEach(function(item){
      var itemName = item.textContent;
      if(itemName.toLowerCase().indexOf(text) != -1){
        item.style.display = 'block';
      } else {
        item.style.display = 'none';
      }
    });
  }


// console.log(description)