// import React, { useState } from 'react';
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import ts1 from "../images/testimonial/15.jpg"
// import ts2 from '../images/testimonial/22.jpg'
// import ts3 from '../images/testimonial/49.jpg'
// import ts4 from '../images/testimonial/50.jpg'
// import ts5 from '../images/testimonial/74.jpg'
// import ts6 from '../images/testimonial/vv.jpg'


// const testimonial = [
//     {
//         id: '01',
//         tImg: ts1,
//         tTitle:'Real Stories, Real People, And Real Outcomes, Discover The Difference With Member Testimonials!',
//         Des: "I've been a Business Booster Club member for the past two years. A number of group members have referred me to new clients. Along with the new relationships I have made with other local business people, I am thankful for this. At each meeting, I look forward to keeping up with them and sharing references.",
//         Title: 'Govind Garg',
//         Sub: "",
//     },
//     {
//         id: '02',
//         tImg: ts2,
//         tTitle:'Real Stories, Real People, And Real Outcomes, Discover The Difference With Member Testimonials!',
//         Des: "I've been a Business Booster Club member for the past two years. A number of group members have referred me to new clients. Along with the new relationships I have made with other local business people, I am thankful for this. At each meeting, I look forward to keeping up with them and sharing references.",
//         Title: 'Narendra Joshi',
//         Sub: "",
//     },
//     {
//         id: '03',
//         tImg: ts3,
//         tTitle:'Real Stories, Real People, And Real Outcomes, Discover The Difference With Member Testimonials!',
//         Des: "I've been a Business Booster Club member for the past two years. A number of group members have referred me to new clients. Along with the new relationships I have made with other local business people, I am thankful for this. At each meeting, I look forward to keeping up with them and sharing references.",
//         Title: 'Srikanth S',
//         Sub: "",
//     },
//     {
//         id: '04',
//         tImg: ts4,
//         tTitle:'Real Stories, Real People, And Real Outcomes, Discover The Difference With Member Testimonials!',
//         Des: "I've been a Business Booster Club member for the past two years. A number of group members have referred me to new clients. Along with the new relationships I have made with other local business people, I am thankful for this. At each meeting, I look forward to keeping up with them and sharing references.",
//         Title: 'Subodh Pandit',
//         Sub: "",
//     },
//     {
//         id: '05',
//         tImg: ts5,
//         tTitle:'Real Stories, Real People, And Real Outcomes, Discover The Difference With Member Testimonials!',
//         Des: "I've been a Business Booster Club member for the past two years. A number of group members have referred me to new clients. Along with the new relationships I have made with other local business people, I am thankful for this. At each meeting, I look forward to keeping up with them and sharing references.",
//         Title: 'Bhanu Prakash Nujella',
//         Sub: "",
//     },
//     {
//         id: '06',
//         tImg: ts6,
//         tTitle:'Real Stories, Real People, And Real Outcomes, Discover The Difference With Member Testimonials!',
//         Des: "I've been a Business Booster Club member for the past two years. A number of group members have referred me to new clients. Along with the new relationships I have made with other local business people, I am thankful for this. At each meeting, I look forward to keeping up with them and sharing references.",
//         Title: 'Sudhakar Jain',
//         Sub: "",
//     },
// ]

// const Testimonial = () => {

//     const [nav1, setNav1] = useState();
//     const [nav2, setNav2] = useState();


//     return (
//         <section className="wpo-testimonial-section section-padding" style={{marginBottom:'350px'}}>
//             <div className="container">
//                 <div className="wpo-testimonial-wrap">
//                     <div className="row align-items-center">
//                         <div className="col-lg-6 col-12">
//                             <div className="testimonial-left">
//                                 <div className="testimonial-left-inner">
//                                     <div className="slider-for">
//                                         <Slider asNavFor={nav2} ref={(slider1) => setNav1(slider1)} dots={false} arrows={false} fade={true}>
//                                             {
//                                                 testimonial.map((tesmnl, tsm) => (
//                                                     <div className="testimonial-img" key={tsm}>
//                                                         <img src={tesmnl.tImg} alt="" />
//                                                     </div>
//                                                 ))
//                                             }
//                                         </Slider>
//                                     </div>
//                                     <div className="side-img-1"><img src={ts2} alt="" /></div>
//                                     <div className="side-img-2"><img src={ts3} alt="" /></div>
//                                     <div className="side-img-3"><img src={ts4} alt="" /></div>
//                                     <div className="side-img-4"><img src={ts5} alt="" /></div>
//                                     <div className="side-img-5"><img src={ts1} alt="" /></div>
//                                     <div className="border-s1"></div>
//                                     <div className="border-s2"></div>
//                                     <div className="border-s3"></div>
//                                 </div>
//                                 <div className="shape-t">
//                                     <svg width="750" height="750" viewBox="0 0 750 750" fill="none">
//                                         <g filter="url(#filter0_f_39_4154)">
//                                             <circle r="125" transform="matrix(-1 0 0 1 375 375)" fillOpacity="0.4" />
//                                         </g>
//                                         <defs>
//                                             <filter id="filter0_f_39_4154" x="0" y="0" width="750" height="750"
//                                                 filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
//                                                 <feFlood floodOpacity="0" result="BackgroundImageFix" />
//                                                 <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix"
//                                                     result="shape" />
//                                                 <feGaussianBlur stdDeviation="125"
//                                                     result="effect1_foregroundBlur_39_4154" />
//                                             </filter>
//                                         </defs>
//                                     </svg>
//                                 </div>
//                             </div>
//                         </div>
//                         <div className="col-lg-6 col-12">
//                             <div className="wpo-testimonial-items">
//                                 <div className="slider-nav">
//                                     <Slider
//                                         asNavFor={nav1}
//                                         ref={(slider2) => setNav2(slider2)}
//                                         slidesToShow={1}
//                                         dots={true}
//                                         swipeToSlide={true}
//                                         focusOnSelect={true}
//                                     >
//                                         {
//                                             testimonial.map((tesmnl, tsm) => (
//                                                 <div className="wpo-testimonial-item" key={tsm}>
//                                                     <div className="wpo-testimonial-text">
//                                                         <h4>{tesmnl.tTitle}</h4>
//                                                         <p>{tesmnl.Des}</p>
//                                                         <div className="wpo-testimonial-text-btm">
//                                                             <h3>{tesmnl.Title} <span>{tesmnl.Sub}</span></h3>
//                                                         </div>
//                                                     </div>
//                                                 </div>
//                                             ))
//                                         }

//                                     </Slider>
//                                 </div>
//                             </div>
//                         </div>

//                     </div>
//                 </div>
//             </div>
//             <div className="left-shape"></div>
//         </section>
//     );
// }

// export default Testimonial;