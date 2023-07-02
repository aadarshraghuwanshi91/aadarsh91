var menuIcon = document.querySelector(".menu-icon");
var Sidebar = document.querySelector(".sidebar");
var container = document.querySelector(".container");
var chips = document.querySelector(".chips");


menuIcon.onclick = function(){
    Sidebar.classList.toggle("small-sidebar")
    container.classList.toggle("large-container")
    chips.classList.toggle("lagre-chips")

}




// JavaScript code
function search_animal() {
    let input = document.getElementById('searchbar').value
    input=input.toLowerCase();
    let x = document.getElementsByClassName('animals');
      
    for (i = 0; i < x.length; i++) { 
        if (!x[i].innerHTML.toLowerCase().includes(input)) {
            x[i].style.display="none";
        }
        else {
            x[i].style.display="list-item";                 
        }
    }
}




$('#audio-control').click(function(){
    if( $("#myVideo").prop('muted') ) {
          $("#myVideo").prop('muted', false);
          $(this).text('Mute');
      // or toggle class, style it with a volume icon sprite, change background-position
    } else {
      $("#myVideo").prop('muted', true);
      $(this).text('Unmute');
    }
});


















