'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import Image from 'next/image';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const ImageSlider = () => {
    const slides = [
        {
            id: 1,
            title: "Service A/B",
            content: "Service laves på alle mercedes biler",
            image: "/car.jpg"
        },
        {
            id: 2,
            title: "Reparation",
            content: "Professionel reparation af alle bilmærker",
            image: "/car.jpg"
        },
        {
            id: 3,
            title: "Vedligeholdelse",
            content: "Regelmæssig vedligeholdelse",
            image: "/car.jpg"
        },
        {
            id: 4,
            title: "Diagnose",
            content: "Avanceret computerdiagnose af alle systemer",
            image: "/car.jpg"
        },
        {
            id: 5,
            title: "Dæk & Fælge",
            content: "Stort udvalg af dæk og fælge til alle biler",
            image: "/car.jpg"
        },
        {
            id: 6,
            title: "Klimaanlæg",
            content: "Service og reparation af klimaanlæg",
            image: "/car.jpg"
        },
        {
            id: 7,
            title: "Bremser",
            content: "Udskiftning og reparation af bremser",
            image: "/car.jpg"
        },
        {
            id: 8,
            title: "Motorolie",
            content: "Skift af motorolie og filtre",
            image: "/car.jpg"
        }
    ];

    return (
        <div className="relative w-full max-w-7xl mx-auto px-2 lg:px-2">
            <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                spaceBetween={16}
                slidesPerView={2}
                breakpoints={{
                    0: {
                        slidesPerView: 2,
                        spaceBetween: 10,
                    },
                    640: {
                        slidesPerView: 2,
                        spaceBetween: 16,
                    },
                    // Tablet (md)
                    768: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },
                    // Desktop (lg)
                    1024: {
                        slidesPerView: 4,
                        spaceBetween: 24,
                    },
                }}
                navigation={{
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                }}
                pagination={{
                    clickable: true,
                    bulletClass: 'swiper-pagination-bullet custom-bullet',
                    bulletActiveClass: 'swiper-pagination-bullet-active custom-bullet-active'
                }}
                autoplay={{
                    delay: 4000,
                    disableOnInteraction: false,
                }}
                loop={true}
                className="pb-12"
            >
                {slides.map((slide) => (
                    <SwiperSlide key={slide.id} className="h-auto">
                        <div className='h-70 lg:h-80 bg-secondary rounded-xl overflow-hidden'>
                            <div className="relative h-36 lg:h-44">
                                <Image
                                    src={slide.image}
                                    alt={slide.title}
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <div className='text-center text-white p-2 pt-4'>
                                <h2 className='text-sm font-bold mb-2'>{slide.title}</h2>
                                <p className='text-xs leading-relaxed'>{slide.content}</p>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}

                {/* Custom Navigation Buttons */}
                <div className="swiper-button-prev !hidden sm:!flex"></div>
                <div className="swiper-button-next !hidden sm:!flex"></div>
            </Swiper>

            <style jsx global>{`
                .custom-bullet {
                    background: rgba(37, 66, 48, 0.5);
                    opacity: 1;
                    width: 10px;
                    height: 10px;
                    border-radius: 50%;
                    transition: all 0.3s ease;
                    margin: 0 4px !important;
                }

                .custom-bullet-active {
                    background: #202A44;
                    transform: scale(1.3);
                }

                .swiper-button-next,
                .swiper-button-prev {
                    color: #202A44;
                    background: rgba(255, 255, 255, 0.9);
                    border-radius: 50%;
                    width: 40px;
                    height: 40px;
                    transition: all 0.3s ease;
                    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
                }

                .swiper-button-next:hover,
                .swiper-button-prev:hover {
                    background: white;
                    transform: scale(1.1);
                    box-shadow: 0 6px 16px rgba(0, 0, 0, 0.2);
                }

                .swiper-button-next:after,
                .swiper-button-prev:after {
                    font-size: 16px;
                    font-weight: bold;
                }

                .swiper-pagination {
                    bottom: 0px !important;
                    position: relative !important;
                    margin-top: 20px;
                }

                /* Hide navigation on very small screens */
                @media (max-width: 639px) {
                    .swiper-button-next,
                    .swiper-button-prev {
                        display: none !important;
                    }
                }

                /* Adjust slide height on mobile */
                @media (max-width: 640px) {
                    .swiper-slide {
                        margin-bottom: 8px;
                    }
                }
            `}</style>
        </div>
    );
};

export default ImageSlider;