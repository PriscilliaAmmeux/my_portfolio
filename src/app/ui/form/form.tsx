"use client";

import Button from "../../components/button/button";
import { SiMinutemailer } from "react-icons/si";
import { useRef } from "react";
import { FiMail, FiPhone, FiUser, FiFileText } from "react-icons/fi";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";

export default function Form() {
  const form = useRef<HTMLFormElement>(null);
  
  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const SERVICE_ID = process.env.NEXT_PUBLIC_SERVICE_ID;
    const TEMPLATE_ID = process.env.NEXT_PUBLIC_TEMPLATE_ID;
    const PUBLIC_KEY = process.env.NEXT_PUBLIC_PUBLIC_KEY;
    if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) {
      throw new Error("Environment variables are not defined");
    }

    if (!form.current) {
      throw new Error("Form is not rendered yet");
    }

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY).then(
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
          text: "Veuillez vérifier le CAPTCHA.",
          icon: "error",
        });
      }
    );
    (e.target as HTMLFormElement).reset();
  };

  return (
    <form
      ref={form}
      className="w-full max-w-2xl p-2 bg-blue-100 rounded-md"
      onSubmit={sendEmail}
      noValidate>
      <SiMinutemailer size={40} className="text-pink-500" />
      <h1 className="ml-4 text-blue-800 text-2xl font-semibold">
        Formulaire de contact
      </h1>
      <label htmlFor="name" className="sr-only">
        Votre nom
      </label>
      <input
        type="text"
        name="user_name"
        placeholder="Votre nom"
        required
        aria-required="true"
        className="mb-4 p-2 border border-gray-300 rounded"
      />
      <label htmlFor="phone" className="sr-only">
        Votre téléphone
      </label>
      <input
        type="tel"
        name="user_phone"
        placeholder="Votre téléphone"
        required
        aria-required="true"
        className="mb-4 p-2 border border-gray-300 rounded"
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
        className="mb-4 p-2 border border-gray-300 rounded"
      />
      <label htmlFor="message" className="sr-only">
        Tapez ici votre message
      </label>
      <textarea
        name="message"
        placeholder="Votre message"
        required
        aria-required="true"
        className="mb-4 p-2 border border-gray-300 rounded h-32"
      />

      <Button type="submit" text="Envoyer mon message" />
    </form>
  );
}
