
function Badge({children}) {
  return (
    <div 
    className="inline-block px-3 py-2 mb-4 text-xs font-semibold tracking-wider uppercase bg-gray-200 text-black rounded-full">
    ✦
    {children}
    </div>
  )
}

export default Badge