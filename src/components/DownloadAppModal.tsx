import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Smartphone } from "lucide-react";
import { AppStoreButton, GooglePlayButton } from "@/components/ui/app-store-button";

interface DownloadAppModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const DownloadAppModal = ({ open, onOpenChange }: DownloadAppModalProps) => {
  const appStoreUrl = "https://apps.apple.com/br/app/barbearia-paradise/id6756071953";
  const playStoreUrl = "https://play.google.com/store/apps/details?id=barbeariaparadise.bestbarbers.app";

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader className="text-center">
          <div className="mx-auto mb-4 w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
            <Smartphone className="w-8 h-8 text-primary" />
          </div>
          <DialogTitle className="text-2xl font-bold text-center">
            Baixe o App Paradise
          </DialogTitle>
          <DialogDescription className="text-center text-muted-foreground">
            Para assinar o Clube Paradise, baixe nosso aplicativo e faça sua assinatura diretamente por lá.
          </DialogDescription>
        </DialogHeader>

        <div className="flex flex-col gap-4 mt-6 items-center">
          <a href={appStoreUrl} target="_blank" rel="noopener noreferrer">
            <AppStoreButton className="pointer-events-none" tabIndex={-1} />
          </a>
          <a href={playStoreUrl} target="_blank" rel="noopener noreferrer">
            <GooglePlayButton className="pointer-events-none" tabIndex={-1} />
          </a>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default DownloadAppModal;
