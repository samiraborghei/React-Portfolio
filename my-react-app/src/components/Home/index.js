
// import { Link } from 'react-router-dom';
import LogoTitle from '../../assets/images/samira-logo.png';
import './index.scss'
// import Sidebar from '../Sidebar';
import React from "react";
const Home = () => {
return (
    <div className="container home-page">
        <div className="text-zone">
           <h1>Hi,</h1> 
            <br/> I'm <b>Samira Borghei</b>, Full Stack and Frontend Web Developer
            <br/>
            <p> I am a multidimensional designer who passionate about good communication and collaboration with clients to facilitate creative problem solving. 
                    My skills and abilities include web motion, multimedia, photo editing, logo and brand identity design. 
                    I honed my creative skills during my seven years working as a graphic designer for a broad range of companies including Farsana Group LLC and FSN Corp. 
                    I am a multidimensional designer who passionate about good communication and collaboration with clients to facilitate creative problem solving. 
                    My skills and abilities include web motion, multimedia, photo editing, logo, and brand identity design. 
                    I honed my creative skills during my seven years working as a graphic designer for a broad range of companies including Farsana Group LLC and FSN Corp.

                </p>
            <img src={LogoTitle} alt="developer" />
            <br />
        </div>
    </div>
);
}

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<Sidebar />);

 export default Home 
