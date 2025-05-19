
import { Package, Home, Sparkles, Wrench } from "lucide-react";

export type Service = {
  id: string;
  icon: any;
  title: string;
  description: string;
  fullDescription: string;
  price: string;
  features: string[];
  faq: { question: string; answer: string }[];
  image: string;
  gallery: string[];
};

export const services: Service[] = [
  {
    id: "transport",
    icon: Package,
    title: "Transport de colis",
    description: "Livraison rapide et sécurisée de vos colis dans toute la ville",
    fullDescription: "Notre service de transport de colis vous garantit une livraison rapide et sécurisée partout en ville. Que ce soit pour un document urgent, un petit paquet ou un colis plus volumineux, notre équipe de professionnels prendra en charge votre livraison avec le plus grand soin. Nous proposons différentes options de livraison pour répondre à vos besoins spécifiques, y compris des livraisons express dans l'heure.",
    price: "À partir de 15€",
    features: [
      "Livraison express dans l'heure",
      "Suivi en temps réel",
      "Assurance incluse jusqu'à 500€",
      "Emballage sécurisé disponible",
      "Notification de livraison"
    ],
    faq: [
      {
        question: "Quelle est la zone de livraison ?",
        answer: "Nous livrons dans toute la ville et sa périphérie dans un rayon de 30km."
      },
      {
        question: "Comment suivre ma livraison ?",
        answer: "Vous recevrez un lien de suivi par SMS et email pour suivre votre colis en temps réel."
      },
      {
        question: "Quels types de colis acceptez-vous ?",
        answer: "Nous acceptons tous types de colis jusqu'à 30kg, sauf produits dangereux ou illégaux."
      }
    ],
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1621618956330-06b45a255e7d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1080&q=80",
      "https://images.unsplash.com/photo-1568334334763-6a6b53122191?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1080&q=80",
      "https://images.unsplash.com/photo-1616401784845-180882ba9ba8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1080&q=80"
    ]
  },
  {
    id: "demenagement",
    icon: Home,
    title: "Déménagement",
    description: "Service complet de déménagement avec des professionnels qualifiés",
    fullDescription: "Déménager n'a jamais été aussi simple avec notre service complet de déménagement. Nos équipes professionnelles prennent en charge l'ensemble du processus, de l'emballage au déballage, en passant par le transport sécurisé de vos biens. Nous disposons d'une flotte de véhicules adaptés à tous les types de déménagements, du studio à la grande maison familiale. Profitez d'un déménagement sans stress avec QuickServe.",
    price: "À partir de 80€",
    features: [
      "Emballage et déballage de vos affaires",
      "Démontage et remontage des meubles",
      "Transport sécurisé",
      "Protection des objets fragiles",
      "Service de stockage temporaire disponible"
    ],
    faq: [
      {
        question: "Combien de temps à l'avance dois-je réserver ?",
        answer: "Nous recommandons de réserver au moins 2 semaines à l'avance, mais nous pouvons parfois accommoder des demandes urgentes."
      },
      {
        question: "Proposez-vous des cartons de déménagement ?",
        answer: "Oui, nous fournissons des cartons et matériaux d'emballage de qualité professionnelle sur demande."
      },
      {
        question: "Comment est calculé le tarif ?",
        answer: "Le tarif dépend du volume à déménager, de la distance, de l'accessibilité des lieux et des services additionnels demandés."
      }
    ],
    image: "https://images.unsplash.com/photo-1530546171585-cc042ea5d7ab?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1610529026851-da7da1405664?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1080&q=80",
      "https://images.unsplash.com/photo-1595581296913-f2fb25b5fc9e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1080&q=80",
      "https://images.unsplash.com/photo-1600518464192-407df62a24a1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1080&q=80"
    ]
  },
  {
    id: "nettoyage",
    icon: Sparkles,
    title: "Nettoyage",
    description: "Services de nettoyage professionnel pour particuliers et entreprises",
    fullDescription: "Nos services de nettoyage professionnel transforment les espaces sales en environnements impeccables. Que vous soyez un particulier ou une entreprise, nos équipes utilisent des équipements et produits de qualité professionnelle pour assurer un nettoyage en profondeur. Du nettoyage régulier au grand ménage saisonnier, en passant par le nettoyage de fin de bail, nous adaptons nos services à vos besoins spécifiques.",
    price: "À partir de 25€",
    features: [
      "Personnel formé et qualifié",
      "Produits écologiques disponibles",
      "Équipements professionnels",
      "Interventions planifiées ou ponctuelles",
      "Devis personnalisé gratuit"
    ],
    faq: [
      {
        question: "Fournissez-vous les produits de nettoyage ?",
        answer: "Oui, nous apportons tous les produits et équipements nécessaires, y compris des options écologiques sur demande."
      },
      {
        question: "Puis-je demander un service récurrent ?",
        answer: "Absolument, nous proposons des forfaits hebdomadaires, bimensuels ou mensuels avec des tarifs préférentiels."
      },
      {
        question: "Vos équipes sont-elles assurées ?",
        answer: "Oui, tous nos employés sont pleinement assurés et formés aux techniques professionnelles de nettoyage."
      }
    ],
    image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1563453392212-326f5e854473?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1080&q=80",
      "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1080&q=80",
      "https://images.unsplash.com/photo-1556911220-bff31c812dba?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1080&q=80"
    ]
  },
  {
    id: "depannage",
    icon: Wrench,
    title: "Dépannage",
    description: "Intervention rapide pour tous vos besoins de dépannage",
    fullDescription: "Notre service de dépannage assure une intervention rapide pour résoudre vos problèmes urgents. Nos techniciens qualifiés sont disponibles pour tous types d'interventions : plomberie, électricité, serrurerie, chauffage ou climatisation. Avec une disponibilité 7j/7 et des délais d'intervention courts, nous vous garantissons une solution rapide et durable à vos problèmes techniques du quotidien.",
    price: "À partir de 45€",
    features: [
      "Intervention en urgence possible",
      "Techniciens certifiés",
      "Disponibilité 7j/7",
      "Garantie sur les travaux effectués",
      "Transparence des tarifs"
    ],
    faq: [
      {
        question: "Quel est le délai d'intervention ?",
        answer: "En cas d'urgence, nous intervenons généralement dans l'heure. Pour les demandes standard, un rendez-vous est fixé dans les 24-48h."
      },
      {
        question: "Quels types de dépannages proposez-vous ?",
        answer: "Nous couvrons la plomberie, l'électricité, la serrurerie, le chauffage, la climatisation et les petits travaux de bricolage."
      },
      {
        question: "Y a-t-il une garantie sur les réparations ?",
        answer: "Oui, nous offrons une garantie de 3 mois sur toutes nos interventions et les pièces remplacées."
      }
    ],
    image: "https://images.unsplash.com/photo-1504148455328-c376907d081c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1581244277943-fe4a9c777189?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1080&q=80",
      "https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1080&q=80",
      "https://images.unsplash.com/photo-1580901368919-7738efb0f87e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1080&q=80"
    ]
  }
];

export const getServiceById = (id: string): Service | undefined => {
  return services.find(service => service.id === id);
};
