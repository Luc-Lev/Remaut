import { Footer } from "./_components/footer";
import { Navbar } from "./_components/navbar";
import { Navbar2 } from "./_components/navbar2";
import { Navigation } from "./_components/navigation";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <Navbar2/>
      {/*<NavMenu />*/}
      <main className="mt-8 md:mt-0">{children}</main>
      <Footer />
    </div>
  );
};

export default MainLayout;
