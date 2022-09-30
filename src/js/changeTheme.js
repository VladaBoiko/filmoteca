const changeMarker = document.querySelector('.theme-switch__marker')
const changeBox = document.querySelector('#theme-switch-toggle');
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
    changeMarker.translateX(0);
 }

 function lightTheme(){
    document.body.classList.remove('dark-theme');
    localStorage.removeItem('theme', 'dark-theme');
    // changeMarker.translateX(0);
 }

 if (localStorage.getItem('theme') === 'dark-theme') {
    darkTheme();
  }