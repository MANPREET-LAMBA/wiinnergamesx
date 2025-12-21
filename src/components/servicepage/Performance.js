export default function Performance({image,onClose}){
    // return(
    //     <div className=" bg-zinc-600 bg-opacity-75">
    //         <img src=""></img>
            
    //     </div>
    // )
    return (
    <div
      className="fixed inset-0 bg-black/70 flex items-center justify-center z-50"
      onClick={onClose}
    >
      <div
        className="relative max-w-[90vw] max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={image}
          alt=""
          className="rounded-xl max-w-full max-h-[90vh]"
        />

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute -top-3 -right-3 bg-white text-black w-8 h-8 rounded-full flex items-center justify-center shadow-lg hover:bg-gray-200"
        >
          ✕
        </button>
      </div>
    </div>
  );
}