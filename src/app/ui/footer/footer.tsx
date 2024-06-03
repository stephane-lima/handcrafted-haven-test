import FooterLinks from '@/app/ui/footer/footer-links';
import Link from 'next/link';

export default function Footer() {
    return (
        <footer>
            <div className="bg-mainTitles text-background px-36 py-6">
                <h2 className="text-center text-3xl pb-3">About Handcrafted Haven</h2>
                <p className="text-center text-lg">Welcome to Handcrafted Haven, where creativity meets craftsmanship! We are passionate artisans dedicated to curating and showcasing the finest handcrafted goods from around the world. At Handcrafted Haven, we believe that every piece tells a story. Each creation is infused with the love, dedication, and unique vision of the talented artisans behind it. From intricately designed jewelry to exquisitely crafted home decor, our platform is a celebration of artisanal mastery and creativity.</p>
                
                <div className="text-right text-lg my-5 px-3">
                    {/* <FooterLinks /> */}
                    <Link href="/handcrafted-haven">Have questions?</Link>
                    <Link className="ml-6 bg-golden p-2" href="/handcrafted-haven">Contact Us</Link>
                </div>
            </div>
            <div>
                <p className="text-right text-lg py-3">2024 Handcrafted Haven Inc.</p>
            </div>
        </footer>
    )
}
