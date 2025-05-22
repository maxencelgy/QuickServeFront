import { Queries } from "@/lib/fetch.ts";

export type ServiceCategory = {
	id: number;
	slug: string;
	// biome-ignore lint/suspicious/noExplicitAny: <explanation>
	icon?: any;
	name: string;
	description: string;
	full_description: string;
	base_price: number;
	features: string[];
	faq: { question: string; answer: string }[];
	image_url: string;
};

export type ReservationType = {
	id: number;
	client_id: number;
	provider_id: number | null;
	category_id: number;
	title: string;
	description: string | null;
	address: string;
	latitude: number | null;
	longitude: number | null;
	status: "pending" | "completed" | "cancelled" | "failed";
	payment_status: "pending" | "completed" | "failed" | string;
	payment_amount: number | null;
	scheduled_at: string; // ISO 8601 date string
	completed_at: string | null; // ISO 8601 date string or null
	created_at: string; // ISO 8601 date string
	updated_at: string; // ISO 8601 date string
	category_name: string;
};

export const fetchServiceBySlug = async (
	slug: string,
): Promise<ServiceCategory | undefined> => {
	const response = await Queries.GET(`categories/${slug}`);
	return response;
};

export const fetchServices = async (): Promise<
	ServiceCategory[] | undefined
> => {
	const response = await Queries.GET("categories");
	return response.categories;
};
