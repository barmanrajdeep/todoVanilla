function todoList () {
    var item = document.getElementById("todoInput").value
    var text = document.createTextNode(item)
    var newItem = document.createElement("li")
    var checkBox = document.createElement("input")
    checkBox.type ="checkbox";
    newItem.append(text)
    newItem.prepend(checkBox)
    document.getElementById("todoList").appendChild(newItem)
}
function selectedDone () {
    // get all the list item
    //loop over each is it has checked
    //if it's checked then it should be append in doneList
    var doneList = document.getElementById("DoneLIst")
    var items = document.getElementById("todoList").childNodes
    for (i=0 ; i< items.length ;i++) {
     var listedItem =items[i];
     for (var j=0 ; j<listedItem.children.length ; j++){
        if(
            listedItem.children[j].tagName=="INPUT"
        ){
            if(listedItem.children[j].checked){
                //appended to doneList
                doneList.append(listedItem)
            }
            
        }
     }
    }
    

}