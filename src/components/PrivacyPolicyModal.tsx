import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { PrivacyPolicy } from "./PrivacyPolicy";

interface PrivacyPolicyModalProps {
  children: React.ReactNode;
}

export const PrivacyPolicyModal = ({ children }: PrivacyPolicyModalProps) => {
  const [open, setOpen] = useState(false);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto" style={{ backgroundColor: '#171717', borderColor: '#333' }}>
        <DialogHeader>
          <DialogTitle>Privacy Policy</DialogTitle>
          <DialogDescription>
            Informativa sulla protezione dei dati personali secondo il GDPR
          </DialogDescription>
        </DialogHeader>
        <PrivacyPolicy />
      </DialogContent>
    </Dialog>
  );
};