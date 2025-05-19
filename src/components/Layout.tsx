
import Header from "./Header";
import Footer from "./Footer";
import { useIsMobile } from "@/hooks/use-mobile";

const Layout = ({ children }: { children: React.ReactNode }) => {
  const isMobile = useIsMobile();
  
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className={`flex-grow ${isMobile ? "pt-20" : "pt-24"}`}>
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
