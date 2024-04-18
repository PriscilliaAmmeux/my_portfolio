"use client";

import Swal from "sweetalert2";
import FormField from "../components/formfield/formfield";
import Button from "../components/button/button";

export default function Form() {
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("form sent");

    const target = event.target as typeof event.target & {
      "grid-first-name": { value: string };
      "grid-email": { value: string };
      "grid-message": { value: string };
    };

    const response = await fetch("../../../../pages/api/send.js", {
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
      Swal.fire("Message envoyé");
    } else {
      console.error("Message failed to send");
    }
  };

  return (
    <section className="flex justify-center mt-4">
      <form className="w-full max-w-lg" onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-6">
          <div>
            <FormField
              id="grid-first-name"
              label="Votre prénom"
              type="text"
              placeholder="Votre prénom*"
            />
          </div>
          <div>
            <FormField
              id="grid-last-name"
              label="Nom"
              type="text"
              placeholder="Votre nom*"
            />
          </div>
          <div className="md:col-span-full">
            <FormField
              id="grid-email"
              label="Email"
              type="email"
              placeholder="Votre email*"
              large
            />
          </div>
          <div className="md:col-span-full">
            <FormField
              id="grid-message"
              label="Message"
              type="textarea"
              placeholder="Votre message*"
              large
            />
          </div>
        </div>
        <div className="flex justify-center mt-6">
          <Button type="submit" text="Envoyer" />
        </div>
      </form>
    </section>
  );
}
