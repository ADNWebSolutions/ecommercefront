import React from 'react'
import wapIcon from '../../assets/wapIcon.webp'

function WapBtn() {
    return (
        <aside className='group'>
            <div className='fixed bottom-[2vh] right-[10vw] lg:right-[10vw] lg:bottom-[5vh] z-[200] flex items-center gap-2 opacity-90'
                data-tip="Mandar Mensaje por Whatsapp "
            >
                <span className='text-green-400 opacity-80 font-bold text-sm lg:hidden group-hover:flex'> Comunicate por whatsapp </span>
                <a href="" className='h-10 w-10 lg:h-14 lg:w-14 avatar group-hover:scale-110' >
                    <img src={wapIcon} alt="Logo de whatsapp" loading="lazy" />
                </a>
            </div>
        </aside>
    )
}

export default WapBtn