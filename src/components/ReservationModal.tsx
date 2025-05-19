
import { useState } from "react";
import { format } from "date-fns";
import { fr } from "date-fns/locale";
import { Calendar } from "@/components/ui/calendar";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { CheckCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { Service } from "@/data/services";

type ReservationModalProps = {
  service: Service;
  isOpen: boolean;
  onClose: () => void;
};

const ReservationModal = ({ service, isOpen, onClose }: ReservationModalProps) => {
  const [date, setDate] = useState<Date | undefined>(undefined);
  const [timeSlot, setTimeSlot] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simuler l'envoi des données
    setTimeout(() => {
      setSubmitted(true);
      toast({
        title: "Réservation confirmée !",
        description: `Nous vous avons envoyé un email de confirmation à ${email}.`,
      });
    }, 1000);
  };

  const resetForm = () => {
    setDate(undefined);
    setTimeSlot("");
    setName("");
    setEmail("");
    setPhone("");
    setSubmitted(false);
    onClose();
  };

  // Générer les créneaux horaires disponibles
  const timeSlots = [
    "08:00", "09:00", "10:00", "11:00", 
    "13:00", "14:00", "15:00", "16:00", "17:00"
  ];

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[500px] max-h-[90vh] overflow-y-auto">
        {!submitted ? (
          <>
            <DialogHeader>
              <DialogTitle className="text-xl font-bold">
                Réserver : {service.title}
              </DialogTitle>
              <DialogDescription>
                {service.price} • Complétez le formulaire pour réserver votre créneau
              </DialogDescription>
            </DialogHeader>
            <form onSubmit={handleSubmit} className="space-y-4 py-4">
              <div className="space-y-2">
                <Label htmlFor="date" className="font-medium">
                  Date souhaitée
                </Label>
                <Calendar
                  mode="single"
                  selected={date}
                  onSelect={setDate}
                  locale={fr}
                  className="rounded-md border p-3 mx-auto bg-white"
                  disabled={(date) => {
                    // Désactiver les dates passées et les dimanches
                    const today = new Date();
                    today.setHours(0, 0, 0, 0);
                    const sunday = date.getDay() === 0;
                    return date < today || sunday;
                  }}
                  initialFocus
                />
              </div>

              {date && (
                <div className="space-y-2">
                  <Label htmlFor="timeSlot" className="font-medium">
                    Créneau horaire
                  </Label>
                  <Select value={timeSlot} onValueChange={setTimeSlot}>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Sélectionnez un horaire" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectLabel>Matin</SelectLabel>
                        {timeSlots.slice(0, 4).map((slot) => (
                          <SelectItem key={slot} value={slot}>
                            {slot}
                          </SelectItem>
                        ))}
                      </SelectGroup>
                      <SelectGroup>
                        <SelectLabel>Après-midi</SelectLabel>
                        {timeSlots.slice(4).map((slot) => (
                          <SelectItem key={slot} value={slot}>
                            {slot}
                          </SelectItem>
                        ))}
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </div>
              )}

              <div className="grid gap-4 py-4">
                <div className="grid grid-cols-1 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="font-medium">
                      Nom complet
                    </Label>
                    <Input
                      id="name"
                      placeholder="Entrez votre nom"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email" className="font-medium">
                      Email
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="votre@email.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone" className="font-medium">
                      Téléphone
                    </Label>
                    <Input
                      id="phone"
                      placeholder="06 01 02 03 04"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      required
                    />
                  </div>
                </div>
              </div>
              <DialogFooter>
                <Button variant="outline" type="button" onClick={onClose}>
                  Annuler
                </Button>
                <Button 
                  type="submit" 
                  disabled={!date || !timeSlot || !name || !email || !phone}
                >
                  Confirmer la réservation
                </Button>
              </DialogFooter>
            </form>
          </>
        ) : (
          <div className="flex flex-col items-center py-12 text-center">
            <div className="rounded-full bg-green-100 p-4 mb-6">
              <CheckCircle className="h-12 w-12 text-green-600" />
            </div>
            <h2 className="text-2xl font-bold mb-2">Réservation confirmée !</h2>
            <p className="text-muted-foreground mb-6">
              {service.title} - {date && format(date, "EEEE d MMMM yyyy", { locale: fr })} à {timeSlot}
            </p>
            <p className="mb-8">
              Un email de confirmation a été envoyé à <span className="font-medium">{email}</span>
            </p>
            <Button onClick={resetForm} className="w-full max-w-xs">
              Fermer
            </Button>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default ReservationModal;
