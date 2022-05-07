import './index.scss';
import { Link } from 'react-router-dom';
import LogoTitle from '../../assets/images/logo-c.png'


const Home = () => {
    return (
    <div className="container home-page">
        <h1>Hi, <br/> I'm
        <img src={LogoTitle} alt='developer'></img>
        orey
        <br/>
        Full-Stack Software Engineer
        </h1>
        <h2>Full Stack developer/ Agile enthusiast/ Life-long learner</h2>
        <Link to='/contact' className='flat-button'>CONTACT ME</Link>
    </div>
    )
}

export default Home