"use client";

import Button from "../button/button";
import { SiMinutemailer } from "react-icons/si";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";

type FormProps = {
  className?: string;
};

export default function Form({ className }: FormProps) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [honeypot, setHoneypot] = useState("");

  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (form.current && !form.current.checkValidity()) {
      return alert("Veuillez remplir tous les champs du formulaire."), false;
    }

    if (honeypot !== "") {
      alert("Vous êtes un robot");
      return;
    }

    const regex = /^(06|07)\d{8}$/;
    if (!regex.test(phone)) {
      alert(
        "Veuillez entrer un numéro de téléphone valide exemple 06 XX XX XX XX."
      );
      return;
    }

    const SERVICE_ID = process.env.NEXT_PUBLIC_SERVICE_ID;
    const TEMPLATE_ID = process.env.NEXT_PUBLIC_TEMPLATE_ID;
    const PUBLIC_KEY = process.env.NEXT_PUBLIC_PUBLIC_KEY;

    if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) {
      throw new Error("Environment variables are not defined");
    }

    if (!form.current) {
      throw new Error("Form is not rendered yet");
    }

    emailjs
      .sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY)
      .then(
        (result) => {
          Swal.fire({
            title: "Succès!",
            text: "Votre message a bien été envoyé.",
            icon: "success",
          });
        },
        (error) => {
          Swal.fire({
            title: "Erreur!",
            text: "Une erreur est survenue lors de l'envoi du message. Veillez réessayer plus tard.",
            icon: "error",
          });
        }
      )
      .catch((error) => {
        console.error("Error sending email: ", error);
      });
  };

  return (
    <form
      ref={form}
      className={`p-6 mb-6 gap-4 flex flex-col w-full max-w-2xl p-2 bg-blue-100 rounded-md ${className}`}
      onSubmit={sendEmail}
      noValidate>
      <div className="flex items-center justify-center mb-4">
        <SiMinutemailer size={40} className="text-pink-700" />
        <h1 className="ml-4 text-blue-800 text-2xl font-semibold">
          Formulaire de contact
        </h1>
      </div>

      <label htmlFor="name" className="sr-only">
        Votre nom
      </label>
      <input
        type="text"
        name="user_name"
        placeholder="Votre nom"
        required
        aria-required="true"
        className="mb-4 p-2 border border-gray-300 rounded bg-white text-gray-800"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <label htmlFor="phone" className="sr-only">
        Votre téléphone par exemple: 0612345678 (sans espace)
      </label>
      <input
        type="tel"
        name="user_phone"
        placeholder="Votre téléphone"
        required
        aria-required="true"
        className="mb-4 p-2 border border-gray-300 rounded bg-white text-gray-800"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
      />
      <label htmlFor="email" className="sr-only">
        Votre email
      </label>
      <input
        type="email"
        name="user_email"
        placeholder="Votre email"
        required
        aria-required="true"
        className="mb-4 p-2 border border-gray-300 rounded bg-white text-gray-800"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <label htmlFor="message" className="sr-only">
        Tapez ici votre message
      </label>
      <textarea
        name="message"
        placeholder="Votre message"
        required
        aria-required="true"
        className="mb-4 p-2 border border-gray-300 rounded h-32 bg-white text-gray-800"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <input
        type="text"
        name="honeypot"
        placeholder=""
        style={{ display: "none", visibility: "hidden", position: "absolute" }}
        value={honeypot}
        onChange={(e) => setHoneypot(e.target.value)}
      />
      <Button
        type="submit"
        text="Envoyer mon message"
        ariaLabel={"Cliquez sur le bouton pour envoyer le message"}
      />
    </form>
  );
}
