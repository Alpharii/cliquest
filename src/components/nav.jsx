import '../App.css'
import cliquestlLogo from '../assets/logo.png'
import downloadButton from '../assets/downloadButton.png'

function Nav(){
    return(
    <nav className='-mt-8 fixed bg-white h-14 w-full'>
        <div className='p-2 justify-center flex -ml-5'>
        <img src={cliquestlLogo} alt="Cliquest Logo" className='h-10' />
        <ul className='flex mt-2 text-base'>
            <li className='ml-52 px-7'><a href="">About us</a></li>
            <li className='px-7'><a href="">Contact</a></li>
            <li className='px-7'><a href="">Support</a></li>
            <li className='mr-20 px-7'><a href="">Partnership</a></li>
            <a href=""><img src={downloadButton} alt='Download' className='h-9 -mt-1'/></a>
        </ul>
        </div>
    </nav>
    )
}

export default Nav