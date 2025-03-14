function validarCampoRequerido() {
    var campo = document.getElementById("campoTexto").value;
    
    if (campo === "") {
      alert("El campo es obligatorio.");
      return false;
    }
    return true;
  }