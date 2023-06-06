import NodeJs from '../../assets/nodejs.png'
import express from '../../assets/express.png'
import jwt from '../../assets/jwt.png'
import insomnia from '../../assets/insomnia.png'
import java from '../../assets/java.png'

const BackEndIcons = () => {
    return(
        <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <img className='w-10 mx-auto' src={NodeJs} alt="HTML icon"/>
                <p className='my-4'>NodeJs</p>
            </div>
            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <img className='w-10 mx-auto' src={express} alt="HTML icon"/>
                <p className='my-4'>Express</p>
            </div>
            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <img className='w-10 mx-auto' src={jwt} alt="HTML icon" alt="HTML icon"/>
                <p className='my-4'>JWT Token</p>
            </div>
            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <img className='w-10 mx-auto' src={insomnia} alt="HTML icon" />
                <p className='my-4'>Insomnia</p>
            </div>
            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <img className='w-10 mx-auto' src={java} alt="HTML icon" />
                <p className='my-4'>Java</p>
            </div>
        </div>
    )
}

export default BackEndIcons;