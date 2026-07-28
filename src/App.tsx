import { useState, useEffect } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@/components/theme-provider";
import { BootScreen } from "@/components/BootScreen";
import { Analytics } from "@vercel/analytics/react";
import Index from "./pages/Index";
import ProjectDetail from "./pages/ProjectDetail";
import Resume from "./pages/Resume";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();
const BOOT_KEY = "boot_shown";

const App = () => {
  // Show boot only on first load per browser session
  const [booting, setBooting] = useState(
    () => typeof window !== "undefined" && !sessionStorage.getItem(BOOT_KEY)
  );

  useEffect(() => {
    // Prevent scroll while boot is on screen
    if (booting) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [booting]);

  const handleBootDone = () => {
    sessionStorage.setItem(BOOT_KEY, "1");
    setBooting(false);
  };

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider defaultTheme="dark" storageKey="portfolio-theme">
        <TooltipProvider>
          <Toaster />
          <Sonner />
          {booting && <BootScreen onDone={handleBootDone} />}
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/projects/:slug" element={<ProjectDetail />} />
              <Route path="/resume" element={<Resume />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
          <Analytics />
        </TooltipProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
};

export default App;
