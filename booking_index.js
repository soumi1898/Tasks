var form=document.getElementById('addForm');
var itemsList=document.getElementById('items');
var del=document.querySelectorAll('#deleteBtn')
var countID=0;
form.addEventListener('submit',addPerson);
itemsList.addEventListener('click',editPerson);

itemsList.addEventListener('click',removePerson);

function addPerson(e)
{
    countID++;
    e.preventDefault();
    let email=document.getElementById('email');
    let name=document.getElementById('username');
   
    localStorage.setItem('name',document.getElementById('username').value);
    localStorage.setItem('email',document.getElementById('email').value);

    console.log(localStorage.getItem('name'));
    console.log(localStorage.getItem('email'));

    //create new person
    var li=document.createElement('li');

    //add class
    li.className='list-group-item';
    li.id='item'+countID;

    var str=localStorage.getItem('name') +"-" +localStorage.getItem('email');
    li.textContent=str;
   // li.
    //add text node
    //li.appendChild(document.createTextNode(str));

        
    //create delete button
   // var deleteBtn=document.createElement('button');
    var input=document.createElement('input');

    //add class name for button
    //deleteBtn.className="btn btn-danger btn-sm float-right delete";
    input.type="button";
    input.className="btn btn-danger btn-sm float-right delete";
    input.id="deleteBtn";
    input.value="DELETE";

    //CREATE EDIT BUTTON
    var edit=document.createElement('input');
    edit.type="button";
    edit.className="btn btn-danger btn-sm float-right edit";
    edit.id="editBtn";
    edit.value="EDIT";

    //append text node to button
    //deleteBtn.appendChild(document.createTextNode('Delete'));
    //input.appendChild(document.create)


    //deleteBtn.appendChild(document.setAttribute('onclick'));


    //append button to li
    //li.appendChild(deleteBtn);
    li.appendChild(input);
    li.appendChild(edit);


    itemsList.appendChild(li);

    console.log(li);


}

function editPerson(e)
{
    console.log("in edit");
    if(e.target.classList.contains('edit'))
    {
        console.log("in edit2");

        //get the target li
        var li=e.target.parentElement;
        var itemID=e.target.parentElement.id;
        console.log(document.getElementById(itemID).textContent);
        console.log("id is "+e.target.parentElement.id);

        //store the text in a string array
        var s=new Array();
        s=document.getElementById(itemID).textContent.split('-');
        console.log(s);

        //populate the input boxes
        document.getElementById('username').value=s[0];
        document.getElementById('email').value=s[1];

        //delete the list
        itemsList.removeChild(li);

    }
    
}

function removePerson(e)
{
    console.log("1");

    if(e.target.classList.contains('delete'))
    {
        //console.log(2);
        if(confirm('Are you sure?'))
        {
            var li=e.target.parentElement;
            itemsList.removeChild(li);
        }

    }

}