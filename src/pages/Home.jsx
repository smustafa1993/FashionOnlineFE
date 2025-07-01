import { useNavigate } from 'react-router-dom'

const Home = () => {
  let navigate = useNavigate()

  return (
    <div className="col home">
      <section className="welcome-shop">
        <img src="/images/home_banner.png" alt="banner" id="banner"/>
        <div className='overlay'>
          <button onClick={() => navigate('/products')}>
            Start Shopping
          </button>
        </div>

      </section>
    </div>
  )
}

export default Home
