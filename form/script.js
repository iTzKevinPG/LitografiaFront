
document.getElementById('registerButton').innerHTML = '<span></span><span></span><span></span><span></span>Enviar';

function register() {
    let textRegiter = document.getElementById('registerButton').innerHTML;
    if (textRegiter.includes('Enviar')) {
        console.log('Registrar');
    }else{
        console.log('Actualizar');
    }
}

function find() {
    console.log('Buscar usuario');
    document.getElementById('registerButton').innerHTML = '<span></span><span></span><span></span><span></span>Actualizar';
}

function clearForm() {
    console.log('Limpiar');
    let textRegiter = document.getElementById('registerButton').innerHTML;

    if (textRegiter.includes('Actualizar')) {
        document.getElementById('registerButton').innerHTML = '<span></span><span></span><span></span><span></span>Enviar';
    }
}