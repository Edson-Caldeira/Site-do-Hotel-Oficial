import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import Footer from "./components/Footer";

function Router() {
  return (
    <Switch>
      <Route path={"/"} component={Home} />
      <Route path={"/404"} component={NotFound} />
      <Route component={NotFound} />
    </Switch>
  );
}

export default function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="light">
        <TooltipProvider>
          <Toaster />

          {/* Fundo vermelho atrás apenas do conteúdo */}
          <div className="min-h-screen bg-[#722F37] flex justify-center">
            {/* Caixa branca centralizada */}
            <div className="w-full max-w-7xl bg-white shadow-xl">
              <Router />
            </div>
          </div>

          {/* Footer FORA DA CAIXA -> agora ocupa 100% da tela */}
          <Footer />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}
