import './App.css'
import AboutMe from './components/AboutMe';
import Links from './components/Links';
import Perfil from './components/Perfil';
import Projects from './components/Projects';
import Technologies from './components/Technologies';
import DownloadCv from './components/DownloadCv';

function Home() {

  return (
    <>
      <main className='bg-gray-800'>
        <Perfil/>
        <AboutMe/>
        <Links/>
        <Projects/>
        <Technologies/>
        <DownloadCv/>
      </main>
    </>
  );
}

export default Home
