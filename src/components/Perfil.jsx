import WriteText from "./WriteText";
import caio from "../assets/caio2.jpg"
function Perfil(){
    return(
        <div className="p-3 flex flex-col items-center gap-1 mb-3 md:flex-row md:justify-center md:gap-20">
            <WriteText text="Hello World!" text2="Meu nome é Caio!" text3="Desenvolvedor front-end"/>

            <div className="border-6 rounded-4xl border-amber-700 w-[300px] ">
                <img src={caio} className="rounded-3xl"/>
            </div>
        </div>
    )
}

export default Perfil;