"use client";

import Swal from "sweetalert2";
import FormField from "../components/formfield/formfield";
import Button from "../components/button/button";

export default function Form() {
  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    formData.append("access_key", "ACCESS_KEY");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    });
    
    if (response.ok) {
      Swal.fire("Message envoyé");
    } else {
      console.error(
        "Message failed to send. Status:",
        response.status,
        "Status text:",
        response.statusText
      );
    }
  }

  return (
    <form className="w-full max-w-lg" onSubmit={handleSubmit}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-6">
        <div>
          <FormField
            id="grid-first-name"
            label="Prénom"
            type="text"
            placeholder="Votre prénom"
          />
        </div>
        <div>
          <FormField
            id="grid-last-name"
            label="Nom"
            type="text"
            placeholder="Votre nom"
          />
        </div>
        <div className="md:col-span-full">
          <FormField
            id="grid-email"
            label="Email"
            type="email"
            placeholder="Votre email"
            large
          />
        </div>
        <div className="md:col-span-full">
          <FormField
            id="grid-message"
            label="Message"
            type="textarea"
            placeholder="Votre message"
            large
          />
        </div>
      </div>
      <div className="flex justify-center mt-6">
        <Button type="submit" text="Envoyer" />
      </div>
    </form>
  );
}
