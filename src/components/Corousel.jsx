import React from 'react'
import "./corousel.css"

function Corousel() {

    const imagesArray = [
        {
            url: `https://images.pexels.com/photos/9298346/pexels-photo-9298346.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260`
        },
        {
            url: `https://images.pexels.com/photos/3831760/pexels-photo-3831760.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940`
        },
        {
            url: `https://images.pexels.com/photos/10801724/pexels-photo-10801724.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500`
        },
        {
            url: `https://images.pexels.com/photos/9298346/pexels-photo-9298346.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260`
        },
        {
            url: `https://images.pexels.com/photos/3831760/pexels-photo-3831760.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940`
        },
        {
            url: `https://images.pexels.com/photos/10801724/pexels-photo-10801724.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500`
        },
        
    ]

    const [index, setIndex] = React.useState(0)

    const [style, setStyle] = React.useState("")

    console.log(imagesArray[1])

    const nextBtn = () => {
       setStyle("move-right")
    }

    const PrevBtn = () => {
        setStyle("move-left")
    }

    return (
        <>
            <div className='slider-container'>
                <p onClick={PrevBtn}>&#x2190;</p>

                <div className='image-wrapper'>
                    {
                        imagesArray.map((item, index) => (
                            <li key={index}><img src={item.url} alt="img" className={`slider-img ${style}`} /></li>
                        ))
                    }
                </div>
                <p onClick={nextBtn}>&#x2192;</p>
            </div>
            <h1>{index}</h1>
            {/* <img src="https://images.pexels.com/photos/11384150/pexels-photo-11384150.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="img" /> */}
        </>
    )
}

export default Corousel