import React from 'react'
import coffeemug2 from '../../images/coffeemug2.jpg'

const Hero = () => {
  return (
    <main className="bg-amber-50" pt-24 id="home">
        <div className="flex flex-col md:flex-row justify-center items-center gap-6 py-12">
            <p className="font-bold text-xl">Make the UI/UX appealing like the warm latte you sip!</p>  
            <img src={coffeemug2} alt="coffee image" className="max-w-[600px] max-h-[600px]"/>
        </div>
    </main>
     
  )
}

export default Hero

 