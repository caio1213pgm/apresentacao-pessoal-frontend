import { FileText } from "lucide-react";
import cv from '../assets/Curriculo_Caio_Xavier.pdf';
function DownloadCv() {
  return (
    <div className="fixed bottom-8 right-10 group/item ">
      <a href={cv} download="curriculo.pdf">
          <button className="flex items-center px-4 py-3 bg-amber-700 rounded-2xl text-white text- gap-1.5 cursor-pointer">
            <span className="group-hover/item:transition-all group-hover/item:duration-300 group/edit hidden group-hover/item:block group-hover/item:text-2xl ">
              <p className="">Baixar currículo</p>
            </span>
            <FileText className="size-8 group-hover/item:size-10" />
          </button>
      </a>
    </div>
  );
}
export default DownloadCv;
