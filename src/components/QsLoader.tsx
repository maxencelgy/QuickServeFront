import { Loader } from "lucide-react";

export const QsLoader = () => (
	<div className="text-center flex mx-auto gap-2">
		<p>Chargement...</p>
		<Loader className="animate-spin" />
	</div>
);
