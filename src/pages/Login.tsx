
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Link } from 'react-router-dom';

const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement login logic
    console.log('Login attempt:', { email, password });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-brand-gray-light">
      <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-xl shadow-lg">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-brand-orange-intense">Login</h1>
        </div>
        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <Label htmlFor="email" className="text-brand-gray-dark">E-mail</Label>
            <Input 
              type="email" 
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="mt-2 border-brand-gray-medium focus:ring-brand-orange-light"
            />
          </div>
          <div>
            <Label htmlFor="password" className="text-brand-gray-dark">Senha</Label>
            <Input 
              type="password" 
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="mt-2 border-brand-gray-medium focus:ring-brand-orange-light"
            />
          </div>
          <Button 
            type="submit" 
            className="w-full bg-brand-orange-intense hover:bg-brand-orange-dark text-white"
          >
            Entrar
          </Button>
          <div className="text-center">
            <Link 
              to="/password-recovery" 
              className="text-brand-blue-medium hover:underline"
            >
              Esqueci minha senha
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
