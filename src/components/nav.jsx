import '../App.css'
import cliquestlLogo from '../assets/logo.png'
import downloadButton from '../assets/downloadButton.png'

function Nav(){
    return(
    <nav className='-mt-8 fixed bg-white h-16 w-full flex'>
        <div className='p-2 flex mx-auto'>
        <ul className='flex mt-4 space-x-32 text-base'>
            <img src={cliquestlLogo} alt="Cliquest Logo" className='h-10 -mt-2 -ml-11' />
            <ul className='space-x-14 flex'>
                <li><a href="">About us</a></li>
                <li><a href="">Contact</a></li>
                <li><a href="">Support</a></li>
                <li><a href="">Partnership</a></li>
            </ul>
            
            <a href=""><img src={downloadButton} alt='Download' className='h-9 -mt-1'/></a>
        </ul>
        
        </div>
    </nav>
    )
}

export default Nav