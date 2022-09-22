// create variables for form


let form = document.getElementById('form');

let modal = document.getElementById('form-modal');

let name = document.getElementById('form-name');

let phone = document.getElementById('form-phone');

let message = document.getElementById('form-message');

let header = document.getElementById('header');

let icon = document.getElementById('icon')


// let navContainer = document.getElementsByClassName('nav-container')[0]

let navList = document.getElementById('nav-list')

icon.addEventListener('click', ()=>{
	navList.classList.toggle('active')
})




// function formSubmit() {
// 	name.value = ''
// 	phone.value = ''
// 	message.value = ''	
// }




// btnClose.addEventListener('click', closeBtn)

// function closeBtn() {
// 	form.style.display = 'block'
// 	modal.style.display = 'none'
// }



// form.style.display = 'none'
// modal.style.display = 'block'