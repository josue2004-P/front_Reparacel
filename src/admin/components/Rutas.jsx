export default function Rutas({ruta}) {
  return (
    <nav className="flex justify-between mb-0 lg:mb-5 " aria-label="Breadcrumb">
    <ol className="inline-flex items-center mb-3 sm:mb-0">
      <li>    
        <span>Dashboard</span>
      </li>
      <span className="mx-2 text-gray-400">/</span>
      <li>    
        <span>{ruta}</span>
      </li>
    </ol>
  </nav>
  )
}
