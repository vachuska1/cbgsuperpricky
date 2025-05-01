export function ContactBar() {
    return (
      <div className="fixed bottom-4 right-4 z-50 animate-bounce hover:animate-none">
        <div className="relative group">
          {/* Hlavní tlačítko */}
          <a
            href="tel:+420602305209"
            className="flex items-center justify-center bg-gradient-to-r from-blue-600 to-blue-800 text-white font-bold rounded-full p-4 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
            style={{
              width: '60px',
              height: '60px'
            }}
          >
            <span className="text-2xl">📞</span>
          </a>
  
          {/* Textový popisek */}
          <div className="absolute right-full top-1/2 transform -translate-y-1/2 mr-3 hidden group-hover:block bg-white text-blue-800 px-3 py-2 rounded-lg shadow-md whitespace-nowrap">
            <div className="absolute right-0 top-1/2 transform translate-x-1 -translate-y-1/2 w-2 h-2 bg-white rotate-45"></div>
            <span className="font-semibold">Zavolejte nám!</span>
            <div className="text-sm">+420 602 305 209</div>
          </div>
        </div>
  
        {/* Alternativní varianta s kontaktním formulářem */}
<div className="mt-3">
  <a
    href="#kontakty"
    className="flex items-center justify-center bg-gradient-to-r from-green-500 to-green-600 text-white font-bold rounded-full p-4 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
    style={{
      width: '60px',
      height: '60px'
    }}
  >
    <span className="text-2xl">💬</span>
  </a>
</div>
      </div>
    )
  }