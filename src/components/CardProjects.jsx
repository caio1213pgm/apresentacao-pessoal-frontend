import { useRef } from "react";

/* eslint-disable react/prop-types */
function CardProject(props) {
  function DialogContent() {
    return (
      <div className="m-auto bg-amber-700 text-white ">
        <div className="flex flex-col items-center justify-center p-5">
          <img src={props.image} alt="" className="" />
          <h1 className="text-3xl font-medium text-gray-300 text-center">{props.title}</h1>
          <p className=" text-xl">{props.description}</p>
          <h3 className="text-2xl font-medium text-gray-300">Tecnologias utilizadas:</h3>
          <p className="text-xl">{props.techs}</p>
          <h3 className="text-2xl font-medium text-gray-300">Deploy ou repositório:</h3>
          <p className="text-xl">
            <a href={props.deploy} className="underline text-blue-400 text-xl" target="_blank">
              Clique aqui
            </a>
           {" "}para ir ao deploy do projeto ou repositório
          </p>
        </div>
      </div>
    );
  }

  const dialog = useRef(null);
  function toggleDialog() {
    if (!dialog.current) {
      return;
    }

    dialog.current.hasAttribute("open")
      ? dialog.current.close()
      : dialog.current.showModal();
  }
  return (
    <div >
      <div
        className="bg-amber-700 p-2 py-5 md:py-8 rounded-xl text-white transition-all duration-200 hover:scale-105"
        onClick={toggleDialog}
      >
        <dialog
          ref={dialog}
          className="m-auto outline-0 rounded-2xl border-0 md:w-[70%]"
        >
          <DialogContent />
        </dialog>
        <img src={props.image} alt="" className="m-auto rounded-xl w-[100%]" />
        <h1 className="text-2xl font-medium">{props.title}</h1>
        <p className="text-xl">{props.description}</p>
      </div>
    </div>
  );
}

export default CardProject;
