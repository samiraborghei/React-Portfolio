import { link } from 'react-router-dom';
import LogoTitle from '../../assets/images/samira-logo.png';
import './index.scss'


const Home = () => {



return (
    <div className="container home-page">
        <div className="text-zone">
            <h1>Hi, <br /> I'm
            <img src={LogoTitle} alt="developer" />
            samira
            <br />
            full stack
            </h1>
            <h2>Frontend Web Developer</h2>
            <link to="/contact" className='flat-button'>CONTACT ME</link>
        </div>
    </div>
);
}
export default Home 
