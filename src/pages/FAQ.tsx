
import Layout from "@/components/Layout";
import { useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Comment fonctionne QuickServe ?",
    answer: "QuickServe est une plateforme qui met en relation des clients avec des prestataires de services qualifiés. Il suffit de sélectionner le service souhaité, de choisir une date et un créneau horaire, et nous nous occupons du reste !"
  },
  {
    question: "Quels types de services proposez-vous ?",
    answer: "Nous proposons une large gamme de services incluant le transport de colis, le déménagement, le nettoyage, et le dépannage. Chaque service est assuré par des professionnels qualifiés."
  },
  {
    question: "Comment sont sélectionnés les prestataires ?",
    answer: "Nos prestataires sont rigoureusement sélectionnés selon plusieurs critères : expérience, qualifications, références et avis clients. Nous vérifions également leurs antécédents pour garantir votre sécurité."
  },
  {
    question: "Comment puis-je payer ?",
    answer: "Nous acceptons plusieurs moyens de paiement : carte bancaire, PayPal, et virement bancaire. Tous les paiements sont sécurisés et vous ne payez qu'une fois le service effectué."
  },
  {
    question: "Que faire en cas de problème ?",
    answer: "Notre service client est disponible 7j/7 pour répondre à vos questions. Vous pouvez nous contacter par téléphone, email ou via le chat en ligne. Nous nous engageons à résoudre rapidement tout problème."
  }
];

const FAQPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  
  const filteredFaqs = faqs.filter(faq => 
    faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
    faq.answer.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4">Foire Aux Questions</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
            Trouvez rapidement les réponses à vos questions.
          </p>
          
          <div className="max-w-xl mx-auto">
            <input
              type="text"
              placeholder="Rechercher une question..."
              className="w-full px-4 py-2 border rounded-md mb-8"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {filteredFaqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger>{faq.question}</AccordionTrigger>
                <AccordionContent>{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </Layout>
  );
};

export default FAQPage;
