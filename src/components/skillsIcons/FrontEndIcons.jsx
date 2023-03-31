import HTML from '../../assets/html.png';
import CSS from '../../assets/css.png';
import JavaScript from '../../assets/javascript.png';
import ReactImg from '../../assets/react.png';
import Bootstrap from '../../assets/bootstrap.png';
import Tailwind from '../../assets/tailwind.png';
import TypeScript from '../../assets/typescript.png'
import JQuery from '../../assets/jquery.png'


const FrontEndIcons = () => {

    return (
        <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <img className='w-10 mx-auto' src={HTML} alt="HTML icon"/>
                <p className='my-4'>HTML</p>
            </div>
            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <img className='w-10 mx-auto' src={CSS} alt="HTML icon"/>
                <p className='my-4'>CSS</p>
            </div>
            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <img className='w-10 mx-auto' src={JavaScript} alt="HTML icon" />
                <p className='my-4'>JavaScript</p>
            </div>
            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <img className='w-10 mx-auto' src={ReactImg} alt="HTML icon" />
                <p className='my-4'>React</p>
            </div>
            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <img className='w-10 mx-auto' src={Tailwind} alt="HTML icon" />
                <p className='my-4'>Tailwind</p>
            </div>
            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <img className='w-10 mx-auto' src={Bootstrap} alt="HTML icon" />
                <p className='my-4'>Bootstrap</p>
            </div>
            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <img className='w-10 mx-auto' src={TypeScript} alt="HTML icon" />
                <p className='my-4'>TypeScript</p>
            </div>
            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <img className='w-10 mx-auto' src={JQuery} alt="HTML icon" />
                <p className='my-4'>JQuery</p>
            </div>
        </div>
    );
}

export default FrontEndIcons;