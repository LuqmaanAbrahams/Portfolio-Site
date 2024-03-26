import '../../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js';
let display_btn = document.getElementById('btn_toggle-content');
let hidden_p = document.getElementById('hidden_content');
function display_hidden_content(){
    if(hidden_p.classList.contains('d-none')){
        hidden_p.classList.remove('d-none');
        hidden_p.classList.remove('slide-up');
        hidden_p.classList.add('slide-down');
    }
    else{
        hidden_p.classList.remove('slide-down');
        hidden_p.classList.add('slide-up');
        setTimeout(function() {
            hidden_p.classList.add('d-none');
        }, 200);
    }
   
}

display_btn.addEventListener('click', display_hidden_content);