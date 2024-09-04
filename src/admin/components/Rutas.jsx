import { Link } from "react-router-dom";

export default function Rutas({ ruta, clientes,reparaciones }) {
  return (
    <nav className="flex justify-between mb-0 lg:mb-5 " aria-label="Breadcrumb">
      <ol className="inline-flex items-center mb-3 sm:mb-0">
        <li>
          <Link
            to={"/dashboard"}
            className="text-sm sm:text-base text-sky-600 font-medium"
          >
            Dashboard
          </Link>
        </li>
        <span className="mx-2 text-gray-400">/</span>
        {clientes ? (
          <>
            <li>
              <Link
                to={"/clientes"}
                className=" text-sm sm:text-base text-gray-700 font-medium"
              >
                Clientes
              </Link>
            </li>
            <span className="mx-2 text-gray-400">/</span>
          </>
        ) : (
          ""
        )}
                {reparaciones ? (
          <>
            <li>
              <Link
                to={"/reparaciones"}
                className=" text-sm sm:text-base text-gray-700 font-medium"
              >
                Reparaciones
              </Link>
            </li>
            <span className="mx-2 text-gray-400">/</span>
          </>
        ) : (
          ""
        )}
        <li>
          <span className="font-semibold text-sm sm:text-base">{ruta}</span>
        </li>
      </ol>
    </nav>
  );
}
