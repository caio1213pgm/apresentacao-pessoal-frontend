
/* eslint-disable react/prop-types */
function CardLink(props) {
  return (
    <div>
      <div className="bg-amber-700 p-2 w-[300px] md:w-[500px] md:p-4 rounded-2xl border-amber-900 border-2 hover:bg-amber-600 hover:scale-110 transition-all duration-200">
        <a href={props.link} target="_blank">
          <p className="text-2xl text-center text-white">{props.name}</p>
        </a>
      </div>
    </div>
  );
}
export default CardLink;
