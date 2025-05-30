import CardLink from "./CardLink"


function Links(){
    return (
        <div>
            <h1 className="text-center text-white text-3xl">Links Importantes</h1>
            <div className="flex flex-col items-center gap-3">
                <CardLink link="https://github.com/caio1213pgm" name="Github"/>
                <CardLink link="https://www.linkedin.com/in/caiofcfx00/" name="Linkedin"/>
                <CardLink link="https://caiofcfx.vercel.app/" name="Link-tree"/>
                
            </div>
        </div>
        
    )
}
export default Links