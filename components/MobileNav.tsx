'use client';

import { link } from 'fs';
import React from 'react';
import { Link as ScrollLink } from 'react-scroll';

interface IMobileNavProps {
    containerStyles: string
}

const links = [
    {name: 'home', target: 'home', offset: -100},
    {name: 'about', target: 'about', offset: -80},
    {name: 'classes', target: 'classes', offset: -80},
    {name: 'team', target: 'team', offset: 0},
    {name: 'prices', target: 'prices', offset: -40},
    {name: 'testimonial', target: 'testimonial', offset: 0},
    {name: 'blog', target: 'blog', offset: 0},
    {name: 'contact', target: 'contact', offset: 0},
  ]

const MobileNav: React.FunctionComponent<IMobileNavProps> = (props) => {
  return (
    <nav className={props.containerStyles}>
        {
            links.map((link, index) => { 
                return (
                    <ScrollLink 
                        offset={link.offset} 
                        to={link.target} 
                        smooth
                        spy
                        activeClass="active"
                        className='cursor-pointer text-md hover:text-[#6C2E04] hover:scale-110 transition-all font-playfair-display font-extrabold'
                        key={index}
                    >
                        {link.name}
                    </ScrollLink>
                );
            })
        }
    </nav>
  );
};

export default MobileNav;
