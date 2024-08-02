import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faX } from '@fortawesome/free-solid-svg-icons';
import { Button } from './ui/button';
import Link from 'next/link';

interface IMembershipSliderProps {
}

const prices = [
    {
        name: 'standard',
        gains: {
            "Includes membership": true,
            "Access to all gym facilities": false,
            "Personal nutritionist": false,
            "Personal trainer": false,
            "Access on monday and friday": false,
        },
        price: 30,
    },
    {
        name: 'ultimate',
        gains: {
            "Includes membership": true,
            "Access to all gym facilities": true,
            "Personal nutritionist": false,
            "Personal trainer": false,
            "Access on monday and friday": true,
        },
        price: 45,
    },
    {
        name: 'standard',
        gains: {
            "Includes membership": true,
            "Access to all gym facilities": true,
            "Personal nutritionist": true,
            "Personal trainer": true,
            "Access on monday and friday": true,
        },
        price: 60,
    },
]

const MembershipSlider: React.FunctionComponent<IMembershipSliderProps> = (props) => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-12'>
        {
            prices.map((price, index) => {
                return(
                    <div key={index} className='flex flex-col gap-4 justify-center items-center border-4 border-[#B31942] text-center p-4 my-3'>
                        <h3 className='text-3xl font-roboto-slab text-[#B31942] uppercase font-extrabold border-b-2 w-full border-[#B31942]'>{price.name}</h3>
                        {Object.entries(price.gains).map(([gain, value], index) => (
                            <p key={index} className='text-md font-oswald text-[#B31942] flex items-center font-extrabold'>
                            {value ? (
                                <FontAwesomeIcon icon={faCheck} className='text-green-500 mr-2' />
                            ) : (
                                <FontAwesomeIcon icon={faX} className='text-red-500 mr-2' />
                            )}
                            {gain}
                            </p>
                        ))}
                        <p className='text-3xl font-roboto-slab text-[#B31942] font-extrabold'>$ <span className='text-5xl'>{price.price}</span>/month</p>
                        <Button
                            variant={'default'}
                            className={`
                                mt-8 w-40 text-center bg-[#B31942] text-[#F2F2F2] rounded-none
                                relative overflow-hidden 
                                before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-[#0A3161] 
                                before:transition-transform before:duration-500 before:origin-bottom-center
                                hover:before:scale-x-100 before:scale-x-0
                            `}
                        >
                            <Link href={''}>
                                <span className="relative z-10 text-white uppercase">Buy now</span>
                            </Link>
                        </Button>
                    </div>
                )
            })
        }    
    </div>
  );
};

export default MembershipSlider;
