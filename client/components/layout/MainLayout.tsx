import { Outlet } from "react-router-dom";

// import Footer from "./Footer";
// import Header from "./Header";
// import MobileCtaBar from "./MobileCtaBar";

const MainLayout = () => {
  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      <main className="flex-1 md:pb-0">
        <Outlet />
      </main>
      {/* <MobileCtaBar /> */}
    </div>
  );
};

export default MainLayout;
