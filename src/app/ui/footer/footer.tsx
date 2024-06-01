import FooterLinks from '@/app/ui/footer/footer-links';

export default function Footer() {
    return (
        <footer>
            <div className="bg-golden">
                <p className="text-center">About Handcrafted</p>
                <p className="text-center">Welcome to Handcrafted Haven, where creativity meets craftsmanship! We are passionate artisans dedicated to curating and showcasing the finest handcrafted goods from around the world. At Handcrafted Haven, we believe that every piece tells a story. Each creation is infused with the love, dedication, and unique vision of the talented artisans behind it. From intricately designed jewelry to exquisitely crafted home decor, our platform is a celebration of artisanal mastery and creativity.</p>
                <FooterLinks />
            </div>
            <div>
                <p>2024 Handcrafted Haven Inc.</p>
            </div>
        </footer>
    )
}