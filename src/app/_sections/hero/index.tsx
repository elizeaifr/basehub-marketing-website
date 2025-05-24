import { useState } from "react";
import { TrackedButtonLink } from "@/app/_components/tracked_button";
import { GeneralEvents } from ".basehub/schema";

export function Hero(hero: Hero & { eventsKey: GeneralEvents["ingestKey"] }) {
  const [message, setMessage] = useState("");

  const handleSendMessage = () => {
    if (!message.trim()) return;
    const chatURL = `https://core.elizeai.com/chat?msg=${encodeURIComponent(message)}`;
    window.location.href = chatURL;
  };

  return (
    <section className="relative flex flex-col items-center justify-center min-h-screen px-6 py-16 text-center bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      
      {/* --- Titre et sous-titre --- */}
      <div className="max-w-4xl">
        <h1 className="text-4xl font-bold leading-tight sm:text-6xl">
          🚀 **ElizeAI : L’IA qui booste votre productivité**  
        </h1>
        <p className="mt-4 text-lg text-gray-300 sm:text-xl">
          Gagnez du temps, automatisez vos tâches et optimisez vos projets avec notre IA avancée.
        </p>
      </div>

      {/* --- Champ de message + redirection vers chatbot --- */}
      <div className="mt-6 flex flex-col items-center gap-4 bg-gray-900 p-6 rounded-lg shadow-lg text-white max-w-md">
        <h2 className="text-2xl font-semibold">💬 Discutez avec ElizeAI</h2>
        <textarea
          className="w-full p-3 text-black rounded-md"
          placeholder="Écrivez votre message..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button
          onClick={handleSendMessage}
          className="px-6 py-3 font-semibold bg-blue-600 rounded-lg hover:bg-blue-700 transition-all"
        >
          Envoyer à ElizeAI
        </button>
      </div>

      {/* --- Boutons CTA --- */}
      <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row">
        <TrackedButtonLink
          analyticsKey={hero.eventsKey}
          className="px-6 py-3 font-semibold bg-blue-600 rounded-lg hover:bg-blue-700 transition-all"
          href="https://core.elizeai.com"
        >
          Accéder à ElizeAI
        </TrackedButtonLink>
        <TrackedButtonLink
          analyticsKey={hero.eventsKey}
          className="px-6 py-3 font-semibold border border-gray-400 rounded-lg hover:bg-gray-700 transition-all"
          href="/features"
        >
          Voir les fonctionnalités
        </TrackedButtonLink>
      </div>
      
    </section>
  );
}
