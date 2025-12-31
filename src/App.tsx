import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import EP760 from "./pages/EP760";
import EP2000 from "./pages/EP2000";
import PortablePower from "./pages/PortablePower";
import Customers from "./pages/Customers";
import Installers from "./pages/Installers";
import Blog from "./pages/Blog";
import AboutUs from "./pages/AboutUs";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/ep760" element={<EP760 />} />
          <Route path="/ep2000" element={<EP2000 />} />
          <Route path="/portable-power" element={<PortablePower />} />
          <Route path="/customers" element={<Customers />} />
          <Route path="/installers" element={<Installers />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
