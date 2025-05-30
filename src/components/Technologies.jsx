import CardTech from "./CardTech";

function Technologies() {
  return (
    <div>
      <h1 className="text-white text-3xl text-center mb-2">Tecnologias</h1>
      <div className="flex flex-wrap p-3 justify-center gap-5 w-[100%] md:justify-center">
        <CardTech
          image="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg"
          name="JavaScript"
        />
        <CardTech
          image="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg"
          name="Typescript"
        />
        <CardTech
          image="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original-wordmark.svg"
          name="React"
        />
        <CardTech
          image="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/angularjs/angularjs-plain.svg"
          name="Angular"
        />
        <CardTech
          image="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/ionic/ionic-original.svg"
          name="Ionic"
        />
        <CardTech
          image="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg"
          name="HTML"
        />
        <CardTech
          image="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg"
          name="GIT"
        />
        <CardTech
          image="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg"
          name="GitHub"
        />
        <CardTech
          image="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg"
          name="CSS"
        />
        <CardTech
          image="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg"
          name="TailwindCSS"
        />
        <CardTech
          image="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg"
          name="Node.Js"
        />
        <CardTech
          image="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg"
          name="Java"
        />
        <CardTech
          image="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg"
          name="Postman"
        />
        <CardTech
          image="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg"
          name="Mysql"
        />
      </div>
    </div>
  );
}

export default Technologies;
