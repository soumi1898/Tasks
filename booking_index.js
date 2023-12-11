var form=document.getElementById('addForm');

form.addEventListener('submit',addPerson);

function addPerson(e)
{
    e.preventDefault();
    let email=document.getElementById('email');
    let name=document.getElementById('username');
   
    localStorage.setItem('name',document.getElementById('username').value);
    localStorage.setItem('email',document.getElementById('email').value);

    console.log(localStorage.getItem('name'));
    console.log(localStorage.getItem('email'));

    var itemsList=document.getElementById('items');
    var li=document.createElement('li');

    //add class
    li.className='list-group-item';

    var str=localStorage.getItem('name') +"-" +localStorage.getItem('email');

    //add text node
    li.appendChild(document.createTextNode(str));

    itemsList.appendChild(li);


}
