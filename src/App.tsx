import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Features from "./pages/Features";
import Subjects from "./pages/Subjects";
import Tutor from "./pages/Tutor";
import TutorAI from "./pages/TutorAI";
import TutorPython from "./pages/TutorPython";
import TutorChemistry from "./pages/TutorChemistry";
import TutorMechanical from "./pages/TutorMechanical";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import ForgotPassword from "./pages/ForgotPassword";
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
          <Route path="/features" element={<Features />} />
          <Route path="/subjects" element={<Subjects />} />
          <Route path="/tutor" element={<Tutor />} />
          <Route path="/tutor/ai" element={<TutorAI />} />
          <Route path="/tutor/python" element={<TutorPython />} />
          <Route path="/tutor/chemistry" element={<TutorChemistry />} />
          <Route path="/tutor/mechanical" element={<TutorMechanical />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
