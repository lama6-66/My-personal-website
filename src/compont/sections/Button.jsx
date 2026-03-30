function Button(){
    return(
        <a 
        style={{pointerEvents:'all',position:'relative',zIndex:2147483647 }}
      href="/Lama_Aljuaid_CV.pdf"
      target="_blank"
          className="fixed z-[2147483647] group relative flex items-center justify-center gap-5  w-[200px] h-[50px] mt-4 bg-white hover:shadow-[0px_0px_30px_14px] shadow-[0px_0px_30px_7px] hover:shadow-white/50 shadow-white/50 text-black px-4 py-2 rounded-[5px] text-sm font-medium hover:bg-slate-100 transition duration-300"
        >
          View CV
        </a>
    )
}

export default Button