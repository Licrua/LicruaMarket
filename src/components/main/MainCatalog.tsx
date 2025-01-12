
function MainCatalog() {
  return (
    <div className="flex items-center bg-green-500 rounded-lg p-4 shadow-md">
  <div className="flex items-center justify-center w-10 h-10 bg-green-700 rounded-lg">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="w-10 h-10 text-white"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
       d="M4 6h16M4 12h16M4 18h16"
      />
    </svg>
  </div>
  <span className="ml-4 text-white text-lg font-semibold">Каталог</span>
</div>
  )
}

export default MainCatalog
