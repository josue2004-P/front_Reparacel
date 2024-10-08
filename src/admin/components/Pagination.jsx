export default function Pagination() {
  return (
    <nav
      className="flex items-center flex-column flex-wrap md:flex-row justify-between pt-4"
      aria-label="Table navigation"
    >
      <span className="text-sm font-normal text-gray-500 ">
        Showing
        <span className="font-semibold text-gray-900 ">
          1-1
        </span>
        of
        <span className="font-semibold text-gray-900 ">
          1
        </span>
      </span>
      <ul className="inline-flex -space-x-px rtl:space-x-reverse text-sm h-8">
        <li>
          <a className="flex items-center justify-center px-3 h-8 ms-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 ">
            Previous
          </a>
        </li>
        <li>
          <a className="flex items-center justify-center px-3 h-8 text-blue-600 border border-gray-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700 ">
            1
          </a>
        </li>
        <li>
          <a className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 ">
            Next
          </a>
        </li>
      </ul>
    </nav>
  );
}
