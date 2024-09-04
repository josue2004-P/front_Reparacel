import { Link } from "react-router-dom"

export default function CardCliente({ items }) {

    const {id,nombre,telefono} = items

  return (
    <div className="shadow-md rounded-md">
      <div className="px-6 py-3 font-semibold ">
        <h2 className="text-sky-600">{nombre}</h2>
        <span className="text-xs text-gray-500">{telefono}</span>
      </div>
      <div className="border-t grid grid-cols-2 font-semibold">
        <Link 
        to={`/clientes/info-cliente/${id}`}
        className="text-center px-4 py-2 border-r flex justify-center items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={20}
            height={20}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
            className="icon icon-tabler icons-tabler-outline icon-tabler-info-circle"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0" />
            <path d="M12 9h.01" />
            <path d="M11 12h1v4h1" />
          </svg>
          <span>Info</span>
        </Link>

        <div className="text-center px-4 py-2 flex justify-center items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={24}
            height={24}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
            className="icon icon-tabler icons-tabler-outline icon-tabler-phone"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2" />
          </svg>
          <span>Call</span>
        </div>
      </div>
    </div>
  );
}
