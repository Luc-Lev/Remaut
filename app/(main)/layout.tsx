import { ActionButtons } from "./_components/action_buttons";
import { Footer } from "./_components/footer";
import { Navbar } from "./_components/navbar";
import { Navbar2 } from "./_components/navbar2";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <Navbar/>
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default MainLayout;
