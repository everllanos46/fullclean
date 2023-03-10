import axios from "axios";

function Guardar() {
  let servicio = {
    nombre: document.getElementById("nombre").value,
    correo: document.getElementById("email").value,
    hora: document.getElementById("hora").value,
    servicio: "limpieza a vapor",
    ubicacion: document.getElementById("ubicacion").value,
  };
  // await axios.post("http://127.0.0.1:8000/services/create", null, servicio);
}
