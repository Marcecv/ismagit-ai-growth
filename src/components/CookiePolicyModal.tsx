import React from 'react';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import { CookiePolicy } from './CookiePolicy';

interface CookiePolicyModalProps {
  children: React.ReactNode;
}

export const CookiePolicyModal: React.FC<CookiePolicyModalProps> = ({ children }) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
        <CookiePolicy />
      </DialogContent>
    </Dialog>
  );
};