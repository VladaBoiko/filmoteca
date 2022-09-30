const changeMarker = document.querySelector('#theme-marker')
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
   
    
    
 }

 function lightTheme(){
    document.body.classList.remove('dark-theme');
    localStorage.removeItem('theme', 'dark-theme');
    
 
 }

 if (localStorage.getItem('theme') === 'dark-theme') {
    darkTheme();
  }