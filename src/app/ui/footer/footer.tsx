import Link from 'next/link';
import Image from 'next/image';

let date: Date = new Date();

export default function Footer() {
    return (
        <footer>
            <div className="bg-mainTitles text-background px-6 py-6">
                <h2 className="text-center text-3xl pb-3">About Handcrafted Haven</h2>
                <p className="text-center text-lg">Welcome to Handcrafted Haven, where creativity meets craftsmanship! We are passionate artisans dedicated to curating and showcasing the finest handcrafted goods from around the world. At Handcrafted Haven, we believe that every piece tells a story. Each creation is infused with the love, dedication, and unique vision of the talented artisans behind it. From intricately designed jewelry to exquisitely crafted home decor, our platform is a celebration of artisanal mastery and creativity.</p>
                
                <div className="text-right text-lg my-5 pr-3">
                    {/* <FooterLinks /> */}
                    <Link className="underline" href="/handcrafted-haven">Have questions?</Link>
                    <Link className="ml-4 bg-golden p-2" href="/handcrafted-haven">Contact Us</Link>
                </div>
            </div>
            <div className="pt-4 pr-4">
                <div className="flex justify-end">
                    <Link href="https://www.facebook.com">
                        <Image
                            width={40}
                            height={40}
                            src="/facebook-logo.jpg"
                            alt="Facebook Logo"
                        />
                    </Link>
                    <Link className="ml-4" href="https://www.instagram.com">
                        <Image
                            width={40}
                            height={40}
                            src="/instagram-logo.jpg"
                            alt="Instagram Logo"
                        />
                    </Link>
                    <Link className="ml-4" href="https://www.pinterest.com">
                        <Image
                            width={40}
                            height={40}
                            src="/pinterest-logo.png"
                            alt="Pinterest Logo"
                        />
                    </Link>
                </div>
                <p className="text-right text-lg py-3">&copy; {`${date.getFullYear()}`} Handcrafted Haven Inc.</p>
            </div>
        </footer>
    )
}