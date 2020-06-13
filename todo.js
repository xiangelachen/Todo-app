let newTodo=document.getElementById('newTodo');
let wholeList=document.getElementById('wholeList');
let addIcon=document.querySelector('.addIcon');
let resetIcon=document.querySelector('.resetIcon');
let newLi;


//click reset button to clear all todo items:
resetIcon.addEventListener('click', function(){
	wholeList.innerHTML=null;
})


function addNewli(){
	newLi=document.createElement('li');
	newLi.setAttribute('class', 'newLi');
	wholeList.appendChild(newLi);
	newLi.innerHTML=`<input type="checkbox"> <input type="text" value="${newTodo.value}"> <span class="editIcon"><i class="far fa-edit"></i> <span class="ddE">Edit</span></span> <span class="deleteIcon"><i class="far fa-trash-alt"></i> <span class="ddD">Delete</span></span>`;
	newTodo.value="";
}

//Adding new todo with hitting enter key:
newTodo.addEventListener('keydown', function(event){
	if(event.key==='Enter'&& !newTodo.value==''){
		addNewli();
	}
} )

//Adding new todo with a click:
addIcon.addEventListener('click', function(){
	if(!newTodo.value==''){
		addNewli();	
	}
} )

//line-thru on todo item when checkbox is checked:
wholeList.addEventListener('click', function(e){
	if(e.target.matches('input[type="checkbox"]')){
		e.target.nextElementSibling.classList.toggle('itemCompleted')
	};
})

//click on edit icon to edit todo item:
wholeList.addEventListener('click', function(e){
	if(e.target.matches('i[class="far fa-edit"]')){
		let editableInput=e.target.parentElement.previousElementSibling;
		editableInput.setAttribute('contenteditable', 'true');
		editableInput.focus();
		let val=editableInput.value;
		editableInput.value='';
		editableInput.value=val;
		editableInput.addEventListener('keydown', function(event){
			if(event.key==='Enter'){
				editableInput.blur();
				editableInput.setAttribute('contenteditable', 'false');
			}
		})
	};
})

//click on delete icon to delete todo item:
wholeList.addEventListener('click', function(e){
	if(e.target.matches('i[class="far fa-trash-alt"]')){
		e.target.parentElement.parentElement.remove();
	}
})




































  





