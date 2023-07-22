var form = document.getElementById('addForm');

  var itemlist = document.getElementById('items');
  var filter = document.getElementById('filter');
  filter.addEventListener('keyup', action);

  // for removing the item
  itemlist.addEventListener('click', removeitem);

  

  // form submit event
  form.addEventListener('submit', additem);

  function additem(e) {
    e.preventDefault();

    //get input value
    var newitem = document.getElementById('item').value;
    var newitem1 = document.getElementById('item1').value;

    //craete new li element
    var li = document.createElement('li');
    li.className = 'list-group-item';

    // add text node with input value
li.appendChild(document.createTextNode(newitem));
li.appendChild(document.createTextNode(" " + newitem1));

//create delete button
var button = document.createElement('button');
var editbtn = document.createElement('button');

// add class name in button

button.className = 'btn btn-danger btn-sm float-right delete';
editbtn.className = 'btn btn-danger btn-sm float-right delete';

button.appendChild(document.createTextNode('x'));
editbtn.appendChild(document.createTextNode('Edit'));
editbtn.style.marginRight = '5px';

li.appendChild(button);
li.appendChild(editbtn);

itemlist.appendChild(li);
}

function removeitem(e) {
  if(e.target.classList.contains('delete')) {
    // console.log(1);
  }
}

function action(e) {
  var text = e.target.value.toLowerCase();
  let items = itemlist.getElementsByTagName('li');
  console.log(items);
  // convert to an array
  Array.from(items).forEach(function (item) {
    console.log(item);
    var itemname = item.firstChild.textContent;
    var itemname1 = item.childNodes[1].textContent;   
     console.log(itemname);
    console.log("final ans" + itemname.toLowerCase().indexOf(text) !== -1);
     if (itemname.toLowerCase().indexOf(text) !== -1) 
   {
      item.style.display = 'block';
      console.log(item + "inside if");
    }
    else if (itemname1.toLowerCase().indexOf(text) !== -1) 
   {
      item.style.display = 'block';
      console.log(item + "inside if");
    } else {
      item.style.display = 'none';
      console.log(item + "inside else")
    }
  });
} 