import './App.css';
import About from './components/About';
import DownloadSe from './components/DownloadSe';
import FAQ from './components/FAQ';
import Feature from './components/Feature';
import Features2 from './components/Features2';
import Footer from './components/Footer';
import MainSection from './components/MainSection';
import Navbar from './components/Navbar';
import PricingSec from './components/PricingSec';
import Services from './components/Services';
import Video from './components/Video';


function App() {
  return (
    <>
      <div className="container-fluid" id="master-container">
        <Navbar/>
        <main>
          <MainSection/>
          <Services/>
          <About/>
          <Feature/>
          <Video/>
          <Features2/>
          <PricingSec/>
          <FAQ/>
          <DownloadSe/>
          <Footer/>
        </main>
      </div>  
    </>
  );
}

export default App;
