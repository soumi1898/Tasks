var form=document.getElementById('addForm');
var itemsList=document.getElementById('items');
var del=document.querySelectorAll('#deleteBtn')

form.addEventListener('submit',addPerson);
itemsList.addEventListener('click',removePerson);

function addPerson(e)
{
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

    var str=localStorage.getItem('name') +"-" +localStorage.getItem('email');

    //add text node
    li.appendChild(document.createTextNode(str));

        
    //create delete button
   // var deleteBtn=document.createElement('button');
    var input=document.createElement('input');

    //add class name for button
    //deleteBtn.className="btn btn-danger btn-sm float-right delete";
    input.type="button";
    input.className="btn btn-danger btn-sm float-right delete";
    input.id="deleteBtn";
    input.value="Delete";

    //append text node to button
    //deleteBtn.appendChild(document.createTextNode('Delete'));
    //input.appendChild(document.create)


    //deleteBtn.appendChild(document.setAttribute('onclick'));


    //append button to li
    //li.appendChild(deleteBtn);
    li.appendChild(input);


    itemsList.appendChild(li);

    console.log(li);


}

function removePerson(e)
{
    console.log("1");

    if(e.target.classList.contains('delete'))
    {
        console.log(2);
        if(confirm('Are you sure?'))
        {
            var li=e.target.parentElement;
            itemsList.removeChild(li);
        }

    }
}