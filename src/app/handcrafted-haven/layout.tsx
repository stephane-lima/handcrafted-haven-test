import Nav from '@/app/ui/nav/nav';
import Footer from '@/app/ui/footer/footer';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <div>
        <Nav />
      </div>
      <div>
        {children}
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}
