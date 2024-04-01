import '../App.css'
import cardBg from '../assets/card_bg.png'
import downloadButtonWhite from '../assets/downloadButtonWhite.png'

function Card_1() {
    return (
        <div className='flex justify-center mt-20 h-screen'>
            <div style={{backgroundImage: `url(${cardBg})`}} className='bg-cover bg-center h-3/4 w-3/4 rounded-2xl shadow-lg'>
                <ul className='text-white flex mt-10 text-sm'>
                    <li className='ml-14 text-left'>Connecting <br />passionate minds</li>
                    <li className='ml-80'>CLIQUEST.ME</li>
                </ul>
                <h1 className='text-left ml-14 mt-24 text-white text-4xl'>Stuck in Solo Land?<br />
                Find your dream crew<br />in Cliquest</h1>
                <ul className='flex mt-14 ml-12'>
                    <li><a href=""><img src={downloadButtonWhite} alt="" className='h-10'/></a></li>
                    <li style={{fontSize:'0.6rem'}} className='text-white mt-4 ml-96 pl-16'>*The app is still on the development process</li>
                </ul>
                
            </div>
        </div>
    );
}

export default Card_1