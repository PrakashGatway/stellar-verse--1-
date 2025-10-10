import "./global.css";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { createRoot } from "react-dom/client";
import Index from "./pages/Index";
import MainLayout from "@/components/layout/MainLayout";
import NotFound from "./pages/NotFound";
import ThankYouPage from "./pages/Thankyou";
import WhatsAppIcon from "./components/layout/Whatsapp";
import CompactCallbackDrawer from "./components/layout/CtaPopup";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    {/* <Toaster /> */}
    {/* <Sonner /> */}
    <WhatsAppIcon />
    <CompactCallbackDrawer />
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/sat-preparation" element={<Index type='form' />} />
          <Route path="/sat-prep" element={<Index type="whatsapp" />} />
          <Route path="/sat-preparation/wm" element={<Index type="whatsappOpen" />} />

          <Route path="/" element={<Index type='form' />} />
          <Route path="/thankyou" element={<ThankYouPage />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
    {/* </TooltipProvider> */}
  </QueryClientProvider>
);

createRoot(document.getElementById("root")!).render(<App />);
