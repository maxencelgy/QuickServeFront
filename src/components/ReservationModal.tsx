import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogFooter,
	DialogHeader,
	DialogTitle,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import {
	Select,
	SelectContent,
	SelectGroup,
	SelectItem,
	SelectLabel,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import type { ServiceCategory } from "@/data/serviceCategories.ts";
import { useToast } from "@/hooks/use-toast";
import { Queries } from "@/lib/fetch.ts";
import { format } from "date-fns";
import { fr } from "date-fns/locale";
import { CheckCircle } from "lucide-react";
import type React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

type ReservationModalProps = {
	service: ServiceCategory;
	isOpen: boolean;
	onClose: () => void;
};

const ReservationModal = ({
	service,
	isOpen,
	onClose,
}: ReservationModalProps) => {
	const [date, setDate] = useState<Date | undefined>(undefined);
	const [timeSlot, setTimeSlot] = useState("");
	const [submitted, setSubmitted] = useState(false);
	const [isLoading, setIsLoading] = useState(false);
	const { toast } = useToast();
	const navigate = useNavigate();

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		setIsLoading(true);
		const reservationDate = date;
		reservationDate.setHours(
			Number.parseInt(timeSlot.split(":")[0]),
			Number.parseInt(timeSlot.split(":")[1]),
		);

		try {
			const postData = {
				scheduled_at: reservationDate,
				category_id: service.id,
				payment_status: "completed",
			};
			await Queries.POST("services", postData);
			setSubmitted(true);
			setTimeout(() => navigate("/dashboard"), 3500);
		} catch (e) {
			console.log("err", e);
		} finally {
			setIsLoading(false);
		}

		// Simuler l'envoi des données
		setTimeout(() => {
			setSubmitted(true);
			toast({
				title: "Réservation confirmée !",
				description:
					"Votre réservation a été acceptée. Retrouvez la sur votre tableau de bord.",
			});
		}, 1000);
	};

	// Générer les créneaux horaires disponibles
	const timeSlots = [
		"08:00",
		"09:00",
		"10:00",
		"11:00",
		"13:00",
		"14:00",
		"15:00",
		"16:00",
		"17:00",
	];

	return (
		<Dialog open={isOpen} onOpenChange={onClose}>
			<DialogContent className="sm:max-w-[500px] max-h-[90vh] overflow-y-auto">
				{!submitted ? (
					<>
						<DialogHeader>
							<DialogTitle className="text-xl font-bold">
								Réserver : {service.name}
							</DialogTitle>
							<DialogDescription>
								{Math.trunc(service.base_price)}€ • Complétez le formulaire pour réserver
								votre créneau
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
							<DialogFooter>
								<Button variant="outline" type="button" onClick={onClose}>
									Annuler
								</Button>
								<Button
									type="submit"
									disabled={!date || !timeSlot || isLoading}
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
							{service.name} -{" "}
							{date && format(date, "EEEE d MMMM yyyy", { locale: fr })} à{" "}
							{timeSlot}
						</p>
						<p className="mb-8">
							Vous serez redirigé vers votre tableau de bord.
						</p>
						<Button
							onClick={() => navigate("/dashboard")}
							className="w-full max-w-xs"
						>
							Fermer
						</Button>
					</div>
				)}
			</DialogContent>
		</Dialog>
	);
};

export default ReservationModal;
