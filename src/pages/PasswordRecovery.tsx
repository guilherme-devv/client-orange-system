
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from 'sonner';

const PasswordRecovery: React.FC = () => {
  const [email, setEmail] = useState('');

  const handlePasswordRecovery = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate password recovery request
    toast.success('Link de redefinição enviado', {
      description: 'Verifique seu e-mail para redefinir a senha.',
    });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-brand-gray-light">
      <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-xl shadow-lg">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-brand-blue-dark">Recuperação de Senha</h1>
          <p className="text-brand-gray-medium mt-2">
            Digite seu e-mail para receber o link de redefinição
          </p>
        </div>
        <form onSubmit={handlePasswordRecovery} className="space-y-4">
          <div>
            <Label htmlFor="recovery-email" className="text-brand-gray-dark">E-mail</Label>
            <Input 
              type="email" 
              id="recovery-email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="mt-2 border-brand-gray-medium focus:ring-brand-blue-medium"
            />
          </div>
          <Button 
            type="submit" 
            className="w-full bg-brand-blue-medium hover:bg-brand-blue-dark text-white"
          >
            Enviar Link de Recuperação
          </Button>
        </form>
      </div>
    </div>
  );
};

export default PasswordRecovery;
