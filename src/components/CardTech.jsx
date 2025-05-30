/* eslint-disable react/prop-types */
function CardTech(props){
    return(
        <div>
            <div className="bg-gray-700 p-1.5 rounded hover:scale-105 transition duration-300">
                <img src={props.image} alt="" className="rounded-xl w-[100%]"/>
                <h1 className="text-xl text-white font-medium">{props.name}</h1>
            </div>
        </div>
    )
}
export default CardTech