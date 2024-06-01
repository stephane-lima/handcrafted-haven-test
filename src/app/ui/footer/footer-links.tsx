'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';

const links = [
    {
        name: 'Have questions?',
        href: '/handcrafted-haven'
    },
    {
        name: 'Contact Us',
        href: '/handcrafted-haven'
    }
];

export default function FooterLinks() {
    const pathname = usePathname();

    return (
        <>
            {links.map((link) => {
                return (
                    <Link key={link.name} href={link.href}>
                        {<p className={clsx('text-lg p-2 m-1 rounded hover:bg-golden', {'bg-golden': pathname === link.href})}>{link.name}</p>}
                    </Link>
                );
            })}
        </>
    )
}