"use client";

import { lusitana } from "@/app/ui/fonts";

export default function Form() {
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const target = event.target as typeof event.target & {
      "grid-first-name": { value: string };
      "grid-email": { value: string };
      "grid-message": { value: string };
    };

    const response = await fetch("/api/send", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: target["grid-first-name"].value,
        email: target["grid-email"].value,
        message: target["grid-message"].value,
      }),
    });

    if (response.ok) {
      console.log("Message sent successfully");
    } else {
      console.log("Message failed to send");
    }
  };

  return (
    <section className="flex justify-center mt-4">
      <form className=" w-full max-w-lg" onSubmit={handleSubmit}>
        <h1 className={`${lusitana.className} text-2xl font-bold mb-4`}>
          Contact
        </h1>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-white text-xs font-bold mb-2"
              htmlFor="grid-first-name">
              Prénom
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-800 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              id="grid-first-name"
              type="text"
              placeholder="Votre prénom"
            />
          </div>
          <div className="w-full md:w-1/2 px-3">
            <label
              className="block uppercase tracking-wide text-white text-xs font-bold mb-2"
              htmlFor="grid-last-name">
              Nom
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-800 border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
              id="grid-last-name"
              type="text"
              placeholder="Votre nom"
            />
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full px-3">
            <label
              className="block uppercase tracking-wide text-white text-xs font-bold mb-2"
              htmlFor="grid-email">
              Email
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-800 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              id="grid-email"
              type="email"
              placeholder="Votre email"
            />
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full px-3">
            <label
              className="block uppercase tracking-wide text-white text-xs font-bold mb-2"
              htmlFor="grid-message">
              Message
            </label>
            <textarea
              className="no-resize appearance-none block w-full bg-gray-200 text-gray-800 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white h-48 resize-none"
              id="grid-message"
              placeholder="Votre message"></textarea>
          </div>
        </div>
        <div className="md:flex md:items-center">
          <button
            style={{ backgroundColor: "rgba(240, 50, 148, 0.8)" }}
            className={`shadow hover:bg-white focus:shadow-outline focus:outline-none font-bold py-2 px-4 rounded`}
            type="button">
            Envoyer
          </button>
        </div>
      </form>
    </section>
  );
}
