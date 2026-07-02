import { lazy, Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { Toaster } from "@/components/ui/toaster";

const Home = lazy(() => import("./pages/Home").then(module => ({ default: module.Home })));
const NotFound = lazy(() => import("./pages/NotFound").then(module => ({ default: module.NotFound })));

function App() {
  return (
    <HelmetProvider>
      <Toaster />
      <BrowserRouter>
        <Suspense fallback={
          <div className="min-h-screen bg-black text-emerald-500 flex items-center justify-center font-mono">
            <div className="text-xl animate-pulse tracking-widest uppercase">
              SYS_CONNECTING::ESTABLISHING TERMINAL NODE...
            </div>
          </div>
        }>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
