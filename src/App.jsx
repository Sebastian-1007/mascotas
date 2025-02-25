import React, { useState, useEffect } from "react";
import './App.css';

const App = () => {
  const [mascotas, setMascotas] = useState([]);
  const [busqueda, setBusqueda] = useState("");

  useEffect(() => {
    fetch("http://3.87.219.162/mascotas")
    
      .then((response) => response.json())
      .then((data) => setMascotas(data))
      .catch((error) => console.error("Error al obtener datos: ", error));
  }, []);

  const handleBusqueda = (event) => {
    setBusqueda(event.target.value.toLowerCase());
  };

  const mascotasFiltradas = mascotas.filter(
    (mascota) =>
      mascota.nombre.toLowerCase().includes(busqueda) ||
      mascota.raza.toLowerCase().includes(busqueda) ||
      mascota.edad.toString().includes(busqueda)
  );

  return (
    <div style={{ padding: "20px" }}>
      <h1>Lista de Mascotas</h1>
      <input
        type="text"
        placeholder="Buscar por nombre, raza o edad"
        value={busqueda}
        onChange={handleBusqueda}
        style={{ marginBottom: "10px", padding: "5px", width: "100%" }}
      />
      <table border="1" width="100%">
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Raza</th>
            <th>Edad</th>
          </tr>
        </thead>
        <tbody>
          {mascotasFiltradas.map((mascota, index) => (
            <tr key={index}>
              <td>{mascota.nombre}</td>
              <td>{mascota.raza}</td>
              <td>{mascota.edad}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default App;
