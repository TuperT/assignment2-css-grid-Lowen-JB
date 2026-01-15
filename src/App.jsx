import { useEffect } from 'react'
import './App.css'
import Aos from 'aos'
import "aos/dist/aos.css";

function App() {
  useEffect(() => {
    Aos.init({
      duration: 500,
      once: false,
      offset: 100,
    });
  }, [])

  return (
    <>
      <main>
        <div id='grid-container'>
          <div className="grid-item item1" data-aos="fade-up">
              <img src="https://d3o31au25zfcly.cloudfront.net/newfileadmin/usp/xp06/sec2/pc/grid-1-v1.webp" 
              alt="gambar-mAh" />
              <div className='text'>
                <p>Wireless MagPower</p>
              </div>
          </div>

          <div className="grid-item item2" data-aos="fade-up">
            <img src="https://d3o31au25zfcly.cloudfront.net/newfileadmin/usp/xp06/sec2/pc/grid-2-v1.webp" 
            alt="gambar-casan" />
            <div className='text'>
              <div className='title'>
                <p>AI Charging</p>
              </div>
              <div className='subtitle'>
                <p>Power</p>
                <p>Management</p>
              </div>
            </div>
          </div>

          <div className="grid-item item3" data-aos="fade-up">
            <img src="https://d3o31au25zfcly.cloudfront.net/newfileadmin/usp/xp06/sec2/pc/grid-3-v1.webp" 
            alt="gambar-hp" />
            <div className='text'>
              <p>Wireless Charge Max</p>
              <h1>20W</h1>
            </div>
          </div>

          <div className="grid-item item4" data-aos="fade-up">
            <img src="https://d3o31au25zfcly.cloudfront.net/newfileadmin/usp/xp06/sec2/pc/grid-4-v1.webp" 
            alt="gambar-slim" />
            <div className="text">
              <p>Ultra Slim Crafted from<br />Alumunium Alloy</p>
            </div>
          </div>
          <div className="grid-item item5" data-aos="fade-up">
            <img src="https://d3o31au25zfcly.cloudfront.net/newfileadmin/usp/xp06/sec2/pc/grid-5-v1.webp" 
            alt="gambar-time" />
            <div className="title">
              <span>600+</span>
              <p>Times</p>
            </div>
            <div className="subtitle">
              <p>Charge Cycles</p>
            </div>
          </div>

          <div className="grid-item item6" data-aos="fade-up">
            <img src="https://d3o31au25zfcly.cloudfront.net/newfileadmin/usp/xp06/sec2/pc/grid-6-v2.webp" 
            alt="gambar-dualmode" />
            <div className="text">
              <p>Dual Mode for<br />Wireless % Cable</p>
            </div>
          </div>

          <div className="grid-item item7" data-aos="fade-up">
            <img src="https://d3o31au25zfcly.cloudfront.net/newfileadmin/usp/xp06/sec2/pc/grid-7-v1.webp" 
            alt="gambar-safe" />
            <div className="text">
              <p>Safe & Secure<br /><span>Certification</span></p>
            </div>
            <div className="subtitle">
              <p>Overvoltage<br />Protection</p>
              <p>Electrostatic<br />Protection</p>
              <p>Short-circuit<br />Protection</p>
              <p>Temperature<br />Protection</p>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}

export default App
