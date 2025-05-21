import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { getIsLoggedIn } from "@/lib/utils.ts";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Dashboard from "./pages/Dashboard";
import FAQ from "./pages/FAQ";
import Index from "./pages/Index";
import Login from "./pages/Login";
import Logout from "./pages/Logout";
import NotFound from "./pages/NotFound";
import Register from "./pages/Register";
import ServiceDetail from "./pages/ServiceDetail";
import Services from "./pages/Services";

const queryClient = new QueryClient();

const App = () => (
	<QueryClientProvider client={queryClient}>
		<TooltipProvider>
			<Toaster />
			<Sonner />
			<BrowserRouter>
				<ScrollToTop />
				<Routes>
					<Route path="/login" element={<Login />} />
					{getIsLoggedIn() && <Route path="/logout" element={<Logout />} />}
					<Route path="/register" element={<Register />} />
					{getIsLoggedIn() && (
						<Route path="/dashboard" element={<Dashboard />} />
					)}
					<Route path="/" element={<Index />} />
					<Route path="/services" element={<Services />} />
					<Route path="/services/:serviceSlug" element={<ServiceDetail />} />
					<Route path="/about" element={<About />} />
					<Route path="/faq" element={<FAQ />} />
					<Route path="/contact" element={<Contact />} />
					<Route path="*" element={<NotFound />} />
				</Routes>
			</BrowserRouter>
		</TooltipProvider>
	</QueryClientProvider>
);

export default App;
