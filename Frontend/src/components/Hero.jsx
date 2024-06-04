import './Hero.css'
import userImage from '../assets/user.png';


const Hero = () => {
  return (
    <section className="hero-container">
        <div className="hero-content ">
        <h2 className='font-montserrat'>Hi, I'm <span className='title-heading'>Piyush Jha</span> from India</h2>
            <p className='font-madimi pt-5 text-3xl'>Passionate <span className='text-cyan-400 font-bold'>Fullstack Developer</span>  | Transforming ideas into Visually Stunning Web Solutions</p>
        </div>

        <div className="hero-img">
            <div>
                <div className="tech-icon">
                <img src={userImage} alt="User"></img>
                </div>
            </div>
        </div>

    </section>
  )
}

export default Hero