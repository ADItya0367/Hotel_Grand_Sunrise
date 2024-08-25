import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import img1 from '../img1.jpg';
import img2 from '../img2.jpg';
import img3 from '../img3.jpg';
import Select from 'react-select'
import { Link } from 'react-router-dom';

const Body = ()=>{

    const options = [
        { value: 'Ac Rooms', label: 'Ac Rooms' },
        { value: 'Non Ac Rooms', label: 'Non Ac Rooms' },
     
      ]
     


    return (
        <div className='body'>
            <div>
                <Carousel>
                    <div>
                        <img src={img1} />
                    
                        </div>
                    <div>
                        <img src={img2} />
                       
                    </div>
                    <div>
                        <img src={img3} />
                        
                    </div>
                        </Carousel>
                        <h1 className='name'>Hotel Grand Sunrise, Jaipur</h1>
            </div>
        
            <div className='book'>
                <div className='sections'>
                    <div className='input-book'>
                    <h3 >Check-In</h3>
                    <input className='input-date' type='date' aria-label='Date'/>
                </div>
                </div>
                <div className='sections'>
                    <div className='input-book'>
                <h3 >Check-Out</h3>
                <input className='input-date' type='date' aria-label='Date'/>
                </div>
                </div>
                <div className='sections'>
                <div className='input-book'>
                <h3>Rooms</h3>
                <Select options={options} />
                </div>
                </div>
                <div className='sections'>
                <div className='input-book'>
                <h3 >Adults</h3>
                <input className='input-date' type='number' placeholder='number'/>
                </div>
                </div>
                <div className='sections'>
                <div className='input-book'>
                <h3 >Children</h3>
                <input className='input-date' type='number' placeholder='number'/>
                </div>
                </div>
                <div className='sections'>
                <button className='btn' >Submit Now</button>
                </div>
            </div>
            <div className='body-head'>
            <h3 >Available Rooms in Jaipur </h3>
            </div>
           <div className='card'>
            <div >
                <img className='imagecard' src="https://tse1.mm.bing.net/th?id=OIP.LK5bQ6uY3EYCUEKusi9YjAHaE8&pid=Api&P=0&h=180" alt='img'/>
            </div>
            <div>
               <h1>Deluxe Room with Bathtub</h1>
                <p>An interesting play of wood and concrete, this category of rooms,<br/> offers a vibrant contrast of bright walls and pastel interiors. <br/> They feature amenities such as twin <br/>  or queen-size beds and a workstation over an area of 337 Sq. Ft. (31 Sq. Mt.). (31 Sq. Mt.).</p>
                <p>Facilities: Ac, Tv, Wifi</p>
                <div className='buttons'>
                <button className='btn'>Book Now</button>
                <p className='para'><Link to="/">View Now {"->"}</Link></p>
                </div>
            </div>
           </div>
           <div className='card'>
            <div >
                <img className='imagecard' src="https://www.usnews.com/dims4/USNEWS/3f9f985/2147483647/resize/1200x%3E/quality/85/?url=http:%2F%2Fmedia.beam.usnews.com%2Fe6%2F31%2Ff8db233046ef905348b35f3e335f%2F160829-evenhotels-submitted.jpg" alt='img'/>
            </div>
            <div>
               <h1>Deluxe Room with Bathtub</h1>
                <p>An interesting play of wood and concrete, this category of rooms,<br/> offers a vibrant contrast of bright walls and pastel interiors. <br/> They feature amenities such as twin <br/>  or queen-size beds and a workstation over an area of 337 Sq. Ft. (31 Sq. Mt.). (31 Sq. Mt.).</p>
                <p>Facilities: Ac, Tv, Wifi</p>
                <div className='buttons'>
                <button className='btn'>Book Now</button>
                <p className='para'><Link to="/">View Now {"->"}</Link></p>
                </div>
            </div>
           </div>
           <div className='card'>
            <div >
                <img className='imagecard' src="https://cache.marriott.com/marriottassets/marriott/NYCWH/nycwh-view-1204-hor-clsc.jpg?interpolation=progressive-bilinear&" alt='img'/>
            </div>
            <div>
               <h1>Deluxe Room with Bathtub</h1>
                <p>An interesting play of wood and concrete, this category of rooms,<br/> offers a vibrant contrast of bright walls and pastel interiors. <br/> They feature amenities such as twin <br/>  or queen-size beds and a workstation over an area of 337 Sq. Ft. (31 Sq. Mt.). (31 Sq. Mt.).</p>
                <p>Facilities: Ac, Tv, Wifi</p>
                <div className='buttons'>
                <button className='btn'>Book Now</button>
                <p className='para'><Link to="/">View Now {"->"}</Link></p>
                </div>
            </div>
           </div>
           <div className='card'>
            <div >
                <img className='imagecard' src="https://tse1.mm.bing.net/th?id=OIP.LK5bQ6uY3EYCUEKusi9YjAHaE8&pid=Api&P=0&h=180" alt='img'/>
            </div>
            <div>
               <h1>Deluxe Room with Bathtub</h1>
                <p>An interesting play of wood and concrete, this category of rooms,<br/> offers a vibrant contrast of bright walls and pastel interiors. <br/> They feature amenities such as twin <br/>  or queen-size beds and a workstation over an area of 337 Sq. Ft. (31 Sq. Mt.). (31 Sq. Mt.).</p>
                <p>Facilities: Ac, Tv, Wifi</p>
                <div className='buttons'>
                <button className='btn'>Book Now</button>
                <p className='para'><Link to="/">View Now {"->"}</Link></p>
                </div>
            </div>
           </div>
           <div className='card'>
            <div >
                <img className='imagecard' src="https://tse3.mm.bing.net/th?id=OIP.G2ySmVVj9Y4UqOZP62u-zgHaE8&pid=Api&P=0&h=180" alt='img'/>
            </div>
            <div>
               <h1>Deluxe Room with Bathtub</h1>
                <p>An interesting play of wood and concrete, this category of rooms,<br/> offers a vibrant contrast of bright walls and pastel interiors. <br/> They feature amenities such as twin <br/>  or queen-size beds and a workstation over an area of 337 Sq. Ft. (31 Sq. Mt.). (31 Sq. Mt.).</p>
                <p>Facilities: Ac, Tv, Wifi</p>
                <div className='buttons'>
                <button className='btn'>Book Now</button>
                <p className='para'><Link to="/">View Now {"->"}</Link></p>
                </div>
            </div>
           </div>
           <div className='card'>
            <div >
                <img className='imagecard' src="https://tse1.mm.bing.net/th?id=OIP.LK5bQ6uY3EYCUEKusi9YjAHaE8&pid=Api&P=0&h=180" alt='img'/>
            </div>
            <div>
               <h1>Deluxe Room with Bathtub</h1>
                <p>An interesting play of wood and concrete, this category of rooms,<br/> offers a vibrant contrast of bright walls and pastel interiors. <br/> They feature amenities such as twin <br/>  or queen-size beds and a workstation over an area of 337 Sq. Ft. (31 Sq. Mt.). (31 Sq. Mt.).</p>
                <p>Facilities: Ac, Tv, Wifi</p>
                <div className='buttons'>
                <button className='btn'>Book Now</button>
                <p className='para'><Link to="/">View Now {"->"}</Link></p>
                </div>
            </div>
           </div>
           <div className='card'>
            <div >
                <img className='imagecard' src="https://cache.marriott.com/marriottassets/marriott/MCOSW/mcosw-suite-0067-hor-clsc.jpg?interpolation=progressive-bilinear&" alt='img'/>
            </div>
            <div>
               <h1>Deluxe Room with Bathtub</h1>
                <p>An interesting play of wood and concrete, this category of rooms,<br/> offers a vibrant contrast of bright walls and pastel interiors. <br/> They feature amenities such as twin <br/>  or queen-size beds and a workstation over an area of 337 Sq. Ft. (31 Sq. Mt.). (31 Sq. Mt.).</p>
                <p>Facilities: Ac, Tv, Wifi</p>
                <div className='buttons'>
                <button className='btn'>Book Now</button>
                <p className='para'><Link to="/">View Now {"->"}</Link></p>
                </div>
              
            </div>
           </div>
           <div className='card'>
            <div >
                <img className='imagecard' src="https://i.pinimg.com/originals/77/80/8a/77808a4a8f5d28e9ed6dd67ff28fb909.jpg" alt='img'/>
            </div>
            <div>
               <h1>Deluxe Room with Bathtub</h1>
                <p>An interesting play of wood and concrete, this category of rooms,<br/> offers a vibrant contrast of bright walls and pastel interiors. <br/> They feature amenities such as twin <br/>  or queen-size beds and a workstation over an area of 337 Sq. Ft. (31 Sq. Mt.). (31 Sq. Mt.).</p>
                <p>Facilities: Ac, Tv, Wifi</p>
                <button className='btn'>Book Now</button>
            </div>
           </div>
        </div>
    )
}

export default Body;