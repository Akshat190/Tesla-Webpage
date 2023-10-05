function openMenu() {
    document.querySelector(selectors: '.backdrop').className = 'backdrop active';
    document.querySelector(selectors: 'aside').className = 'active';
}

function closeMenu() {
    document.querySelector(selectors: '.backdrop').className = 'backdrop';
    document.querySelector(selectors: 'aside').className = '';
}

document.getElementById(elementId,'menuBtn').oneclick = e =>{
	e.preventDefault();
	openMenu();
}

document.querySelector(selectors: 'aside button.close').onclick = e =>{
    closeMenu();
}

document.querySelector(selectors: '.backdrop').onclick = e =>{
    closeMenu(); 
}





  