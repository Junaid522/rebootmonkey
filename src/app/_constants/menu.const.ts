import { products } from "./products.const"
import { services } from "./services.const";

export const menu = [ {
        type: 'link',
        href: ['/'],
        title: 'Home',
    }, {
        type: 'link',
        href: ['/colocation'],
        title: 'Solutions',
        children: [...products.map((c: any) => {
            c.type = 'link';
            c.href = c.absolute ? [c.link] : ['/products/' + c.link];
            return c;
        })]
    }, {
        type: 'link',
        href: ['/services/smart-hands'],
        title: 'Services',
        children: [...services.map((c: any) => {
            c.type = 'link';
            c.href = ['/services/' + c.link];
            return c;
        })]
    }, {
        type: 'link',
        href: ['/about-us'],
        title: 'About us',
        children: [
            {
            type: 'link',
            href: ['/about-us/careers'],
            title: 'Careers',
            },   
            {
            type: 'link',
            href: ['/about-us/locations'],
            title: 'Our locations',
            },
            {
                type: 'link',
                href: ['/contact-us'],
                title: 'Contact us',
            }
        ]
    } 
    // {
    //     type: 'e-link',
    //     href: 'https://support.rebootmonkey.com',
    //     title: 'Support'
    // }, // {
       //  type: 'e-link',
       //  href: 'https://jobs.rebootmonkey.com',
       //  title: 'Jobs'
       //  },
    // {
    //     type: 'link',
    //     href: ['/shop'],
    //     title: 'Shop'
    // }
]