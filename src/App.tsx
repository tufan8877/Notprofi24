import { Switch, Route, Router as WouterRouter } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { ScrollToTop } from "@/components/ScrollToTop";
import { CookieBanner } from "@/components/CookieBanner";
import NotFound from "@/pages/not-found";

// Import pages
import Home from "@/pages/Home";
import Leistungen from "@/pages/Leistungen";
import Privatkunden from "@/pages/Privatkunden";
import Hausverwaltungen from "@/pages/Hausverwaltungen";
import UeberUns from "@/pages/UeberUns";
import Kontakt from "@/pages/Kontakt";
import Impressum from "@/pages/Impressum";
import Datenschutz from "@/pages/Datenschutz";

const queryClient = new QueryClient();

function Router() {
  return (
    <div className="flex flex-col min-h-screen">
      <ScrollToTop />
      <Navbar />
      <main className="flex-1 pt-[72px]">
        <Switch>
          <Route path="/" component={Home} />
          <Route path="/leistungen" component={Leistungen} />
          <Route path="/privatkunden" component={Privatkunden} />
          <Route path="/hausverwaltungen" component={Hausverwaltungen} />
          <Route path="/ueber-uns" component={UeberUns} />
          <Route path="/kontakt" component={Kontakt} />
          <Route path="/impressum" component={Impressum} />
          <Route path="/datenschutz" component={Datenschutz} />
          <Route component={NotFound} />
        </Switch>
      </main>
      <Footer />
      <WhatsAppButton />
      <CookieBanner />
    </div>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
          <Router />
        </WouterRouter>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
