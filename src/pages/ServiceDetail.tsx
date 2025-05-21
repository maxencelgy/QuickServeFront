import Layout from "@/components/Layout";
import { QsLoader } from "@/components/QsLoader.tsx";
import ReservationModal from "@/components/ReservationModal";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from "@/components/ui/carousel";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
	type ServiceCategory,
	fetchServiceBySlug,
	serviceCategories,
} from "@/data/serviceCategories.ts";
import { getIsLoggedIn } from "@/lib/utils.ts";
import {
	Calendar,
	Check,
	ChevronLeft,
	Clock,
	CreditCard,
	MessageCircle,
	Phone,
	Star,
} from "lucide-react";
import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

const ServiceDetail = () => {
	const { serviceSlug } = useParams<{ serviceSlug: string }>();
	const [service, setService] = useState<ServiceCategory | null>(null);
	const [isReservationOpen, setIsReservationOpen] = useState(false);
	const navigate = useNavigate();

	const getService = async (slug: string) => {
		const foundService = await fetchServiceBySlug(slug);
		console.log("found", foundService);
		if (foundService) {
			setService(foundService);
		} else {
			navigate("/services");
		}
	};

	useEffect(() => {
		console.log("test", serviceSlug);
		if (serviceSlug) {
			getService(serviceSlug);
		}
	}, [serviceSlug, navigate]);

	if (!service) {
		return (
			<Layout>
				<div className="container mx-auto px-4 py-16 flex">
					<QsLoader />
				</div>
			</Layout>
		);
	}
	return (
		<Layout>
			<div className="relative bg-gradient-to-b from-primary/5 to-transparent py-12">
				<div className="container mx-auto px-4">
					<div className="flex flex-col md:flex-row items-start gap-6">
						<Button
							variant="ghost"
							className="mb-4 group"
							onClick={() => navigate(-1)}
						>
							<ChevronLeft className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" />
							Retour
						</Button>
					</div>

					<div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
						<div className="lg:col-span-2">
							<div className="bg-white rounded-2xl overflow-hidden shadow-lg mb-6">
								<div className="relative h-72 overflow-hidden">
									<img
										src={service.image_url}
										alt={service.name}
										className="w-full h-full object-cover"
									/>
									<div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
										<div className="w-full p-6">
											<div className="flex items-center mb-2">
												<h1 className="text-3xl font-bold text-white">
													{service.name}
												</h1>
											</div>
											<p className="text-white/90 max-w-2xl">
												{service.description}
											</p>
										</div>
									</div>
								</div>

								<Tabs defaultValue="description" className="p-6">
									<TabsList className="grid grid-cols-3  mb-6">
										<TabsTrigger value="description">Description</TabsTrigger>
										<TabsTrigger value="features">Caractéristiques</TabsTrigger>
										<TabsTrigger value="faq">FAQ</TabsTrigger>
									</TabsList>

									<TabsContent value="description" className="space-y-6">
										<div>
											<p className="text-muted-foreground leading-relaxed">
												{service.full_description}
											</p>
										</div>
									</TabsContent>

									<TabsContent value="features" className="space-y-6">
										<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
											{service.features.map((feature, index) => (
												<div
													key={index}
													className="flex items-start p-3 bg-secondary/20 rounded-lg"
												>
													<div className="p-1.5 bg-primary/10 rounded-full mr-3">
														<Check className="h-4 w-4 text-primary" />
													</div>
													<p>{feature}</p>
												</div>
											))}
										</div>
									</TabsContent>

									<TabsContent value="faq" className="space-y-6">
										<div className="space-y-4">
											{service.faq.map((item, index) => (
												<Card key={index} className="border-0 shadow-sm">
													<CardContent className="p-4">
														<h3 className="font-medium mb-2">
															{item.question}
														</h3>
														<p className="text-muted-foreground text-sm">
															{item.answer}
														</p>
													</CardContent>
												</Card>
											))}
										</div>
									</TabsContent>
								</Tabs>
							</div>
						</div>

						<div className="space-y-6">
							<Card className="border-0 shadow-lg overflow-hidden">
								<div className="bg-primary p-4 text-white">
									<h3 className="font-bold">Réserver ce service</h3>
									<p className="text-white/80 text-sm">
										Simple, rapide, sans engagement
									</p>
								</div>
								<CardContent className="p-6">
									<div className="mb-6">
										<p className="text-2xl font-bold text-primary mb-1">
											{service.base_price}
										</p>
										<p className="text-muted-foreground text-sm">
											TTC, sans frais cachés
										</p>
									</div>

									<div className="space-y-6">
										<div className="flex items-center">
											<div className="p-2 bg-primary/10 rounded-full mr-3">
												<Clock className="h-4 w-4 text-primary" />
											</div>
											<div>
												<p className="text-sm">
													Intervention rapide disponible
												</p>
												<p className="text-xs text-muted-foreground">
													Sous 24h selon disponibilité
												</p>
											</div>
										</div>

										<div className="flex items-center">
											<div className="p-2 bg-primary/10 rounded-full mr-3">
												<CreditCard className="h-4 w-4 text-primary" />
											</div>
											<div>
												<p className="text-sm">Paiement sécurisé</p>
												<p className="text-xs text-muted-foreground">
													CB, PayPal, virement
												</p>
											</div>
										</div>

										<div className="flex items-center">
											<div className="p-2 bg-primary/10 rounded-full mr-3">
												<Star className="h-4 w-4 text-primary" />
											</div>
											<div>
												<p className="text-sm">Satisfaction garantie</p>
												<p className="text-xs text-muted-foreground">
													ou remboursement
												</p>
											</div>
										</div>
									</div>

									<div className="mt-8 space-y-3">
										<Button
											className="w-full group hover:scale-[1.02] transition-transform duration-200"
											onClick={() =>
												getIsLoggedIn()
													? setIsReservationOpen(true)
													: navigate("/login")
											}
										>
											{getIsLoggedIn() && (
												<Calendar className="mr-2 h-4 w-4 group-hover:animate-pulse" />
											)}
											{getIsLoggedIn() ? "Réserver maintenant" : "Me connecter"}
										</Button>
										<Button variant="outline" className="w-full">
											<MessageCircle className="mr-2 h-4 w-4" />
											Demander un devis
										</Button>
									</div>
								</CardContent>
							</Card>

							<Card className="border-0 shadow-md">
								<CardContent className="p-6">
									<h3 className="font-medium mb-4">Besoin d'informations ?</h3>
									<div className="flex items-center mb-4">
										<Phone className="h-5 w-5 text-primary mr-3" />
										<p>+33 1 23 45 67 89</p>
									</div>
									<p className="text-sm text-muted-foreground">
										Notre équipe est disponible du lundi au vendredi de 9h à 18h
										pour répondre à toutes vos questions.
									</p>
								</CardContent>
							</Card>

							<div className="p-6 bg-gradient-to-br from-primary/10 to-transparent rounded-2xl">
								<h3 className="font-medium mb-2">Services similaires</h3>
								<ul className="space-y-2">
									{serviceCategories
										.filter((s) => s.id !== service.id)
										.map((s) => (
											<li key={s.id}>
												<Link
													to={`/services/${s.id}`}
													className="flex items-center p-3 bg-white/80 rounded-lg hover:bg-white transition-colors group"
												>
													<span>{s.name}</span>
												</Link>
											</li>
										))}
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>

			{service && (
				<ReservationModal
					service={service}
					isOpen={isReservationOpen}
					onClose={() => setIsReservationOpen(false)}
				/>
			)}
		</Layout>
	);
};

export default ServiceDetail;
