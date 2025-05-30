import CardProject from "./CardProjects";
import shopHope from "../assets/shopHope2.png";
import harmonia from "../assets/Harmonia2.png";
import linkTree from "../assets/link-tree2.png";
import instituto from "../assets/instituto2.png";
import theo from "../assets/theoflight.png";
import DaTech from "../assets/Datech.png";

function Projects() {
  return (
    <div>
      <h1 className="text-white text-3xl text-center mb-2">Projetos</h1>
      <div className="flex flex-wrap p-3 justify-center gap-5 w-[100%] md:grid md:px-10 md:grid-cols-2 ">
        <CardProject
          image={shopHope}
          title="Shop-Hope"
          description="Loja online de Celulares, com funções de login, cadastro e compra de produtos."
          techs="React, TypeScript, TailwindCss, Local Storage, React-Router, React-hook-form"
          deploy="https://shop-hope.vercel.app/"
        />
        <CardProject
          image={harmonia}
          title="Harmonia Musical Academy"
          description="Página de uma escola de música fictícia, que mostra todos os cursos ministrados."
          techs="React, TypeScript, TailwindCss, React-Router, Material UI, Swiper "
          deploy="https://harmonia-page.vercel.app/"
        />
        <CardProject
          image={DaTech}
          title="DaTech-Bar"
          description="Biblioteca de bebidas com 5 filtros diferentes para você escolher sua bebida."
          techs="Angular/Ionic TypeScript e Scss"
          deploy="https://github.com/caio1213pgm/datech-bar"
        />

        <CardProject
          image={instituto}
          title="Instituto Alerta"
          description="Página de um instituto social que ajuda a população com aulas de música."
          techs="HTML, CSS e JavaScript"
          deploy="https://instituto-alerta.vercel.app/"
        />
        <CardProject
          image={theo}
          title="Theoflight"
          description="Link-tree de uma banda de rock, que mostra suas redes sociais e músicas."
          techs="HTML, CSS e JavaScript"
          deploy="https://theoflight.vercel.app/"
        />

        <CardProject
          image={linkTree}
          title="Link-tree"
          description="Arvore de links, que mostra todos os meus contatos e redes sociais."
          techs="HTML, CSS e JavaScript"
          deploy="https://caiofcfx.vercel.app/"
        />
      </div>
    </div>
  );
}
export default Projects;
