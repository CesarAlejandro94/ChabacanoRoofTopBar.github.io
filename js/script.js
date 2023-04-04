let menuVisible = false;

function mostrarOcultarMenu(){
    if(menuVisible){
        document.getElementById("nav").classList = "";
        menuVisible = false;
    }else{
        document.getElementById("nav").classList = "responsive";
        menuVisible = true;
    }
}
function seleccionar(){
    //Oculto el menu una vez seleccione una opcion
    document.getElementById("nav").classList = "";
    menuVisible = false;
}