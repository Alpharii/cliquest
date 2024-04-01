import './App.css'
import cliquestlLogo from './assets/logo.png'
import downloadButton from './assets/downloadButton.png'

function Nav(){
    return(
    <nav className='flex -mt-3'>
        <img src={cliquestlLogo} alt="Cliquest Logo" className='h-10' />
        <ul className='flex mt-2 text-base'>
            <li className='ml-56 px-7'><a href="">About us</a></li>
            <li className='px-7'><a href="">Contact</a></li>
            <li className='px-7'><a href="">Support</a></li>
            <li className='px-7'><a href="">Partnership</a></li>
            <a href=""><img src={downloadButton} alt='Download' className='h-9 -mt-1 ml-40' /></a>
        </ul>
    </nav>
    )
}

export default Nav