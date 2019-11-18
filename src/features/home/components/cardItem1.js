import React from 'react'
import { withMedia } from 'react-media-query-hoc'
import { Link } from 'react-router-dom'
import Slider from 'react-slick'

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import bg1 from '../../../Images/bg.jpg'
import bg3 from '../../../Images/bg2.jpg'
import '../../../assets/css/burgerTypehover.css'
import * as route from '../../../config/route.config'
import './slider.css'


const CardItem = props => {
    const { media } = props

    const settings = {
        dots: false,
        slidesToScroll: 1,
        infinite: true,
        speed: 800,
        focusOnSelect: true,
        rows: 1,
        autoplay: true,
        slidesToShow: 1,
        slidesPerRow: (media.desktop || media.tablet) ? 3 : 2,
        //  centerMode: true,
        className: 'slides h-100',
        arrows: (media.desktop || media.tablet) ? true : false
    }

    return (
        <div className="  container-fluid " style={{ position: 'relative', zIndex: 5, backgroundColor: 'white' }}>
            <div className="container">
                <div className=" text-center text-muted py-4 px-2 " style={{ fontFamily: 'Volkhov',lineHeight:1.5, fontSize: media.desktop ? 20 : media.tablet ? 17 : 15}}>
                    <span className="font-weight-bold" style={{fontSize:25}}>Choose your passion!</span>
                    <p >Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam. Lorem ipsum dolor sit amet,</p>
                </div>

                <div id="box" style={{ overflow: 'hidden', scrollBehavior: 'smooth' }}>

                    {/* <div className="d-flex " > */}
                    <Slider {...settings}>
                        <div className="px-1">
                            <BurgerType img={bg1} title={"vegetables"} media={media} />
                        </div>
                        <div className="px-1">
                            <BurgerType img={bg1} title={"barbeque"} media={media} />
                        </div>
                        <div className="px-1">
                            <BurgerType img={bg3} title={"double chesse"} media={media} />
                        </div>
                        <div className="px-1">
                            <BurgerType img={bg3} title={"standard"} media={media} />
                        </div>
                        <div className="px-1">
                            <BurgerType img={bg3} title={"burger set"} media={media} />
                        </div>
                        <div className="px-1">
                            <BurgerType img={bg3} title={"cheesy burger"} media={media} />
                        </div>
                    </Slider>
                    {/* </div> */}
                </div>
            </div>


        </div>
    )
}

const BurgerType = ({ img, title, media }) => {

    return (
        // ,height:  media.desktop ? '89%' :'90%'

        <div className="hovereffect "
            style={{ cursor: 'pointer', objectFit: 'cover', height: media.desktop ? '89%' : '90%', }} >
            <img className="img-fluid " src={img} alt="burger-category" />
            <div className="overlay" >
                <Link to={route.burger}
                    style={{ textDecoration: 'none',fontFamily: 'Volkhov', fontSize: media.desktop ? 20 : media.tablet ? 16 : 11 }}><span>{title}</span></Link>
            </div>
        </div>

    )
}

export default withMedia(CardItem)