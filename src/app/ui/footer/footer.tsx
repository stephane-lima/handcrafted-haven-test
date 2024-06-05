import FooterLinks from '@/app/ui/footer/footer-links';
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
                    <Link href="/handcrafted-haven">Have questions?</Link>
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

{/* <footer>
    <div class="bg-mainTitles text-background px-6 py-6">
        <h2 class="text-center text-3xl pb-3">About Handcrafted Haven</h2>
        <p class="text-center text-lg">Welcome to Handcrafted Haven, where creativity meets craftsmanship! We are passionate artisans dedicated to curating and showcasing the finest handcrafted goods from around the world. At Handcrafted Haven, we believe that every piece tells a story. Each creation is infused with the love, dedication, and unique vision of the talented artisans behind it. From intricately designed jewelry to exquisitely crafted home decor, our platform is a celebration of artisanal mastery and creativity.</p>
        
        <div class="text-right text-lg my-5 pr-3">
            <a href="/handcrafted-haven">Have questions?</a>
            <a class="ml-3 bg-golden p-2" href="/handcrafted-haven">Contact Us</a>
        </div>
    </div>
    <div>
        <div style="
            display: flex;
            justify-content: flex-end;
            padding-top: 1rem;
            padding-right: 1rem;"
        >
            <a href="https://www.facebook.com">
                <img alt="Facebook Logo" loading="lazy" width="40" height="40" decoding="async" data-nimg="1" style="color:transparent" srcset="/_next/image?url=%2Ffacebook-logo.jpg&amp;w=48&amp;q=75 1x, /_next/image?url=%2Ffacebook-logo.jpg&amp;w=96&amp;q=75 2x" src="/_next/image?url=%2Ffacebook-logo.jpg&amp;w=96&amp;q=75">
            </a>

            <a href="https://www.instagram.com">
                <img alt="Instagram Logo" loading="lazy" width="40" height="40" decoding="async" data-nimg="1" class="" style="color:transparent" srcset="/_next/image?url=%2Finstagram-logo.jpg&amp;w=48&amp;q=75 1x, /_next/image?url=%2Finstagram-logo.jpg&amp;w=96&amp;q=75 2x" src="/_next/image?url=%2Finstagram-logo.jpg&amp;w=96&amp;q=75">
            </a>

            <a href="https://www.pinterest.com">
                <img alt="Pinterest Logo" loading="lazy" width="40" height="40" decoding="async" data-nimg="1" class="" style="color:transparent" srcset="/_next/image?url=%2Fpinterest-logo.png&amp;w=48&amp;q=75 1x, /_next/image?url=%2Fpinterest-logo.png&amp;w=96&amp;q=75 2x" src="/_next/image?url=%2Fpinterest-logo.png&amp;w=96&amp;q=75">
            </a>
        </div>
        
        <p class="text-right text-lg py-3">2024 Handcrafted Haven Inc.</p>
    </div>
</footer> */}
