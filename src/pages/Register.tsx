import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import { Queries } from "@/lib/fetch.ts";
import { getIsLoggedIn } from "@/lib/utils";
import { Check, Lock, Mail, Phone, User } from "lucide-react";
import type React from "react";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Register = () => {
	const navigate = useNavigate();
	const [formData, setFormData] = useState({
		firstname: "",
		lastname: "",
		email: "",
		password: "",
		phone: "",
		confirmPassword: "",
		role: "client",
	});
	const [error, setError] = useState("");
	const [isLoading, setIsLoading] = useState(false);

	useEffect(() => {
		if (getIsLoggedIn()) navigate("/dashboard");
	}, []);

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		if (formData.password !== formData.confirmPassword) {
			setError("Les mots de passe ne correspondent pas.");
			return;
		}
		setIsLoading(true);
		setError("");
		try {
			await Queries.POST("users/register", formData);
			navigate("/login");
		} catch (e) {
			setError(e.message);
			console.log("err", e);
		} finally {
			setIsLoading(false);
		}
	};
	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target;
		setFormData((prev) => ({
			...prev,
			[name]: value,
		}));
	};

	useEffect(() => {
		if ([2, 5, 8, 11].includes(formData.phone.length)) {
			setFormData({ ...formData, phone: (formData.phone += " ") });
		}
		if (formData.phone.length > 14) {
			setFormData({
				...formData,
				phone: formData.phone.substring(0, formData.phone.length - 1),
			});
		}
	}, [formData.phone]);

	const handlePhoneKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
		const key = e.key;
		const lastCharacter = formData.phone[formData.phone.length - 1];
		if (key === "Backspace" && lastCharacter === " ") {
			const trimmedPhone = formData.phone.substring(
				0,
				formData.phone.length - 1,
			);
			setFormData({ ...formData, phone: trimmedPhone });
		}
	};

	return (
		<Layout>
			<div className="flex items-center justify-center min-h-[calc(100vh-16rem)]">
				<div className="w-full max-w-md space-y-8 p-8">
					<div className="text-center">
						<h2 className="text-2xl font-bold">Créer un compte</h2>
						<p className="text-muted-foreground mt-2">
							Rejoignez QuickServe et accédez à tous nos services
						</p>
					</div>

					<form onSubmit={handleSubmit} className="mt-8 space-y-6">
						<div className="space-y-4">
							<div className="grid grid-cols-2 gap-4">
								<div className="relative">
									<User className="absolute left-3 top-2.5 h-5 w-5 text-muted-foreground" />
									<Input
										type="text"
										name="firstname"
										placeholder="Prénom"
										value={formData.firstname}
										onChange={handleChange}
										className="pl-10"
										required
									/>
								</div>
								<div className="relative">
									<User className="absolute left-3 top-2.5 h-5 w-5 text-muted-foreground" />
									<Input
										type="text"
										name="lastname"
										placeholder="Nom"
										value={formData.lastname}
										onInput={handleChange}
										className="pl-10"
										required
									/>
								</div>
							</div>

							<div className="relative">
								<Mail className="absolute left-3 top-2.5 h-5 w-5 text-muted-foreground" />
								<Input
									type="email"
									name="email"
									placeholder="Email"
									value={formData.email}
									onChange={handleChange}
									className="pl-10"
									required
								/>
							</div>

							<div className="relative">
								<Lock className="absolute left-3 top-2.5 h-5 w-5 text-muted-foreground" />
								<Input
									type="password"
									name="password"
									placeholder="Mot de passe"
									value={formData.password}
									onChange={handleChange}
									className="pl-10"
									required
								/>
							</div>

							<div className="relative">
								<Check className="absolute left-3 top-2.5 h-5 w-5 text-muted-foreground" />
								<Input
									type="password"
									name="confirmPassword"
									placeholder="Confirmer le mot de passe"
									value={formData.confirmPassword}
									onChange={handleChange}
									className="pl-10"
									required
								/>
							</div>

							<div className="relative">
								<Phone className="absolute left-3 top-2.5 h-5 w-5 text-muted-foreground" />
								<Input
									type="tel"
									name="phone"
									pattern="[0]{1}[0-9]{1} [0-9]{2} [0-9]{2} [0-9]{2} [0-9]{2}"
									placeholder="Numéro de téléphone (format : 0X XX XX XX XX)"
									value={formData.phone}
									onKeyDown={handlePhoneKeyDown}
									onChange={(e) => {
										e.target.value = e.target.value.trim();
										handleChange(e);
									}}
									className="pl-10"
									required
								/>
							</div>

							<div className="mt-5">
								<label className="mt-5" htmlFor="role">
									Votre rôle :
								</label>
								<Select
									name="role"
									value={formData.role}
									onValueChange={(e) => {
										setFormData({ ...formData, role: e });
									}}
								>
									<SelectTrigger>
										<SelectValue />
									</SelectTrigger>
									<SelectContent>
										<SelectItem value="client">Client</SelectItem>
										<SelectItem value="prestataire">Prestataire</SelectItem>
									</SelectContent>
								</Select>
							</div>
						</div>

						<p className="text-destructive">{error}</p>

						<Button disabled={isLoading} type="submit" className="w-full">
							S'inscrire
						</Button>

						<div className="text-center">
							<p className="text-sm text-muted-foreground">
								Déjà inscrit ?{" "}
								<Link to="/login" className="text-primary hover:underline">
									Se connecter
								</Link>
							</p>
						</div>
					</form>
				</div>
			</div>
		</Layout>
	);
};

export default Register;
