const changeMarker = document.querySelector('.theme-switch__toggle')
const changeBox = document.querySelector('#theme-switch-toggle');
const hasDarkTheme = localStorage.getItem('theme');
changeMarker.checked =!!hasDarkTheme;
changeBox.addEventListener('change', ()=>{
    if (changeBox.checked) {
       darkTheme();
            	}
        	else {
            lightTheme()

        	}
})
 function darkTheme(){
    document.body.classList.add('dark-theme');
    localStorage.setItem('theme', 'dark-theme');
   
 }

 function lightTheme(){
    document.body.classList.remove('dark-theme');
    localStorage.removeItem('theme', 'dark-theme');
  }

 if (localStorage.getItem('theme') === 'dark-theme') {
    darkTheme();
  }