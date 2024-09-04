import { Link, useParams } from "react-router-dom";
import { Sidebar, Rutas } from "../../components";
import { useClienteStore } from "../../../hooks";
import { useState } from "react";
import Swal from "sweetalert2";
import NotFountCliente from "../../components/NotFountCliente";

export default function InfoCliente() {
  const { id: id_cliente } = useParams();
  const { clientes } = useClienteStore();

  // Convertir id_cliente a número para asegurar la comparación correcta
  const clienteId = parseInt(id_cliente, 10);
  const clienteData = clientes.find((cliente) => cliente.id === clienteId);

  // FORM
  const [inputNombre, setInputNombre] = useState(clienteData.nombre);
  const [inputEmail, setInputEmail] = useState(clienteData.email);
  const [inputCiudad, setInputCiudad] = useState(clienteData.ciudad);
  const [inputTelefono, setInputTelefono] = useState(clienteData.telefono);
  const [inputEstado, setInputEstado] = useState(clienteData.estado);
  const [inputCodigoPostal, setInputCodigoPostal] = useState(clienteData.codigoPostal);



  if (!clienteData) {
    // Aquí puedes manejar el caso en el que no se encuentra el cliente
    return <NotFountCliente />;
  }

  const handleAdminPermission = () => {
    Swal.fire({
      icon: "error",
      title: "Permiso Denegado",
      text: "Recurra al administrador!",
    });
  };
  return (
    <>
      <Sidebar />

      <div className="p-4 sm:ml-64">
        {/* Rutas */}
        <Rutas clientes={true} ruta={`${clienteData.nombre}`} />

        <form>
          <div className="space-y-12 mt-0 sm:mt-6">
            <div className="border-b border-gray-900/10 pb-12">
              <h2 className="text-base font-semibold leading-7 text-sky-600">
                Personal Information
              </h2>
              <p className="mt-1 text-sm leading-6 text-gray-600">
                Use a permanent address where you can receive mail.
              </p>

              <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                <div className="sm:col-span-3">
                  <label className="block text-sm font-medium leading-6 text-gray-900">
                    Nombre
                  </label>
                  <div className="mt-2">
                    <input
                      type="text"
                      name="first-name"
                      id="first-name"
                      value={inputNombre}
                      onChange={(e) => setInputNombre(e.target.value)}
                      autoComplete="given-name"
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                
                <div className="sm:col-span-4">
                  <label className="block text-sm font-medium leading-6 text-gray-900">
                    Email
                  </label>
                  <div className="mt-2">
                    <input
                      id="email"
                      name="email"
                      type="email"
                      value={inputEmail}
                      onChange={(e) => setInputEmail(e.target.value)}
                      autoComplete="email"
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                <div className="sm:col-span-3">
                  <label className="block text-sm font-medium leading-6 text-gray-900">
                    Telefono
                  </label>
                  <div className="mt-2">
                    <input
                      type="text"
                      name="first-name"
                      id="first-name"
                      value={inputTelefono}
                      onChange={(e) => setInputTelefono(e.target.value)}
                      autoComplete="given-name"
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                <div className="sm:col-span-3">
                  <label className="block text-sm font-medium leading-6 text-gray-900">
                    País
                  </label>
                  <div className="mt-2">
                    <select
                      id="country"
                      name="country"
                      autoComplete="country-name"
                      className="pl-1.5 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                    >
                      <option>United States</option>
                      <option>Canada</option>
                      <option selected>Mexico</option>
                    </select>
                  </div>
                </div>



                <div className="sm:col-span-2 sm:col-start-1">
                  <label className="block text-sm font-medium leading-6 text-gray-900">
                    Ciudad
                  </label>
                  <div className="mt-2">
                    <input
                      type="text"
                      name="city"
                      id="city"
                      value={inputCiudad}
                      onChange={(e) => setInputCiudad(e.target.value)}
                      autoComplete="address-level2"
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                <div className="sm:col-span-2">
                  <label className="block text-sm font-medium leading-6 text-gray-900">
                    Estado / Provincia
                  </label>
                  <div className="mt-2">
                    <input
                      type="text"
                      name="region"
                      id="region"
                      value={inputEstado}
                      onChange={(e) => setInputEstado(e.target.value)}
                      autoComplete="address-level1"
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                <div className="sm:col-span-2">
                  <label className="block text-sm font-medium leading-6 text-gray-900">
                    Codigo Postal
                  </label>
                  <div className="mt-2">
                    <input
                      type="text"
                      name="postal-code"
                      id="postal-code"
                      value={inputCodigoPostal}
                      onChange={(e) => setInputCodigoPostal(e.target.value)}
                      autoComplete="postal-code"
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6 flex items-center justify-end gap-x-6">
            <Link
              to={"/clientes"}
              className="text-sm font-semibold leading-6 text-gray-900"
            >
              Cancel
            </Link>
            <button
          onClick={handleAdminPermission}

              type="button"
              className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Guardar
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
