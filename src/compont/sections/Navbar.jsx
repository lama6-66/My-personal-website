import person from "../../assets/person.gif"

function Navbar(){

    const NavLink=[
        {
            name:"Projects",
            link:"#project"

        },
         {
            name:"Skilles",
            link:"#skills"

        }
    ]

    return (
        <header className="navbar">
            <div className="inner">
                <a className="logo" href="#hero">
                    <img className="rounded-full w-8" src={person}/>
                    
                </a>

                <nav className="desktop">
                    <ul>
                       {NavLink.map(({link,name})=>(
                        <li key={name} className="group">
                            <a href={link}>
                                <span>{name}</span>
                                <span className="underline" />
                            </a>
                        </li>
                       ))}
                    </ul>
                </nav>

                <a href="mailto:lamaaljuaid511@gmail.com"
                  className=" bg-white hover:shadow-[0px_0px_30px_14px] shadow-[0px_0px_30px_7px] hover:shadow-white/50 shadow-white/50 text-black px-4 py-2 rounded-[5px] text-sm font-medium hover:bg-slate-100 transition duration-300">
                    <div className="inner">
                        
                        <span>Contact me</span>
                    
                    </div>

                </a>
            </div>
        </header>
    )
}
export default Navbar