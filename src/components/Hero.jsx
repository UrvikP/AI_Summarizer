import { logo } from '../assets'

const Hero = () => {
  return (
    <header className="w-full flex justify-center items-center flex-col">
      <nav className="flex justify-between items-center flex-col">
        <img src={logo} alt='sumz_logo' className='w-28 object-contain' />

        <button type='button' onClick={() => window.open('your github link to the project')}
         className='black_btn'>
          Github
        </button>
      </nav>
    </header>
  )
}

export default Hero