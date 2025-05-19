
import { useState } from "react";
import { User, Lock, Mail, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useNavigate, Link } from "react-router-dom";
import Layout from "@/components/Layout";

const LoginPage = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simuler une connexion
    setTimeout(() => {
      setIsLoading(false);
      navigate("/dashboard");
    }, 1000);
  };

  return (
    <Layout>
      <div className="flex items-center justify-center min-h-[calc(100vh-8rem)] bg-gradient-to-b from-secondary/30 to-transparent py-12">
        <div className="w-full max-w-md">
          <div className="bg-white p-8 rounded-2xl shadow-xl">
            <div className="text-center mb-8">
              <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <User className="h-8 w-8 text-primary" />
              </div>
              <h2 className="text-2xl font-bold">Connexion</h2>
              <p className="text-muted-foreground mt-2">
                Accédez à votre compte QuickServe
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-4">
                <div className="relative group">
                  <Mail className="absolute left-3 top-2.5 h-5 w-5 text-muted-foreground group-focus-within:text-primary transition-colors duration-200" />
                  <Input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="pl-10 transition-all focus:border-primary focus:ring-2 focus:ring-primary/30"
                    required
                  />
                </div>

                <div className="relative group">
                  <Lock className="absolute left-3 top-2.5 h-5 w-5 text-muted-foreground group-focus-within:text-primary transition-colors duration-200" />
                  <Input
                    type="password"
                    placeholder="Mot de passe"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="pl-10 transition-all focus:border-primary focus:ring-2 focus:ring-primary/30"
                    required
                  />
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <input
                    id="remember"
                    type="checkbox"
                    className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary/30"
                  />
                  <label htmlFor="remember" className="ml-2 block text-sm text-gray-600">
                    Se souvenir de moi
                  </label>
                </div>
                <a href="#" className="text-sm text-primary hover:underline">
                  Mot de passe oublié ?
                </a>
              </div>

              <Button 
                type="submit" 
                className="w-full group hover:scale-[1.02] transition-transform duration-300"
                disabled={isLoading}
              >
                {isLoading ? "Connexion en cours..." : "Se connecter"}
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>

              <div className="relative my-6">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-200"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-2 bg-white text-muted-foreground">Ou continuez avec</span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <Button variant="outline" className="w-full hover:bg-secondary/30 transition-colors">
                  <svg className="h-5 w-5 mr-2" viewBox="0 0 24 24">
                    <path
                      d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                      fill="#4285F4"
                    />
                    <path
                      d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                      fill="#34A853"
                    />
                    <path
                      d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                      fill="#FBBC05"
                    />
                    <path
                      d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                      fill="#EA4335"
                    />
                  </svg>
                  Google
                </Button>
                <Button variant="outline" className="w-full hover:bg-secondary/30 transition-colors">
                  <svg className="h-5 w-5 mr-2" fill="#1877F2" viewBox="0 0 24 24">
                    <path
                      d="M9.19795 21.5H13.198V13.4901H16.8021L17.198 9.50977H13.198V7.5C13.198 6.94772 13.6457 6.5 14.198 6.5H17.198V2.5H14.198C11.4365 2.5 9.19795 4.73858 9.19795 7.5V9.50977H7.19795L6.80206 13.4901H9.19795V21.5Z"
                    />
                  </svg>
                  Facebook
                </Button>
              </div>

              <div className="text-center mt-6">
                <p className="text-sm text-muted-foreground">
                  Pas encore de compte ?{" "}
                  <Link to="/register" className="text-primary hover:underline font-medium">
                    S'inscrire
                  </Link>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default LoginPage;
