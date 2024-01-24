import React from 'react'

interface CardProps {
    item: {
        img: string;
        name: string;
        city: string;
        problem: string;
        quotation: string;
    };
}


export default function Card(props: CardProps) {
    const { item } = props;
    return (
        <div className='relative h-[50vh] bg-[#5C8374] w-[240px] rounded-md select-none'>
            <div className='h-[70%] w-[240px]'>
                <h2 className='absolute right-0 px-4 py-2 text-xs text-white border border-[#5C8374] rounded-md bg-[#1B4242] w-fit'>{item.problem}</h2>
                <img src={item.img} alt="testimonialImage" className='object-contain w-full h-full' />
            </div>
            <div className='h-[30%] pt-2'>
                <div className='flex justify-center w-full pb-2 text-sm text-white'>
                    <h2>{item.name} from {item.city} says</h2>
                </div>
                <div className='relative text-white h-fit'>
                    <img src="/assets/img/quote.png" alt="" className='absolute bottom-0 right-0 w-8' />
                    <img src="/assets/img/quote2.png" alt="" className='absolute top-0 left-0 w-8' />
                    <div className='flex justify-center w-full h-full '>
                        <p className='h-full text-sm text-center'>
                            {item.quotation}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
