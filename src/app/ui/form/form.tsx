"use client";

import { z } from "zod";
import Button from "../../components/button/button";
import { SiMinutemailer } from "react-icons/si";
import { useState, useRef } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import { FiMail, FiPhone, FiUser } from "react-icons/fi";

const formSchema = z.object({
  nameSurname: z.string().min(1, { message: "Prénom et Nom obligatoire" }),
  email: z.string().min(1, { message: "Email obligatoire" }).email({
    message: "Email invalide",
  }),
  phone: z
    .string()
    .min(1, { message: "Numéro de teléphone obligatoire" })
    .regex(/^\+33[67]\d{8}$/, {
      message: "Téléphone invalide, le format doit être +33[6 ou 7]xxxxxxxxx",
    }),
  message: z
    .string()
    .min(10, { message: "Message must be at least 10 characters" })
    .max(1000, { message: "Message must be less than 1000 characters" }),
});

type FormData = z.infer<typeof formSchema>;

export default function Form() {
  const [result, setResult] = useState<string>();
  const [resultColor, setResultColor] = useState<string>();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting, isSubmitSuccessful },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      nameSurname: "",
      email: "",
      phone: "+33612345678",
      message: "",
    },
  });

  const processForm = async (data: FormData) => {
    const config = {
      method: "post",
      url: "/api/form",
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    };
    try {
      const response = await axios(config);
      if (response.status === 200) {
        setResult(
          "Your message has been sent. Thank you for contacting us. We will get back to you as soon as possible."
        );
        setResultColor("text-green-500");
        reset();
      }
    } catch (err: any) {
      setResult(err.response.data.message + ": " + err.response.statusText);
      setResultColor("text-red-500");
    }
  };
  return (
    <form
      className="w-full max-w-2xl p-2 bg-blue-100 rounded-md"
      onSubmit={handleSubmit(processForm)}
      noValidate>
      <div className="flex items-center justify-center mb-4 mt-6">
        <SiMinutemailer size={40} className="text-pink-500" />
        <h1 className="ml-4 text-blue-800 text-2xl font-semibold">
          Formulaire de contact
        </h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="relative mb-4">
          {errors.nameSurname?.message ? (
            <FiUser className="w-6 h-6 absolute top-1/2 -translate-y-1/2 left-2 border-r pr-2 text-red-500" />
          ) : (
            <FiUser className="w-6 h-6 absolute top-1/2 -translate-y-1/2 left-2 border-r pr-2" />
          )}
          <input
            className={`shadow appearance-none outline-none border rounded w-full py-2 pl-10 leading-tight duration-300
          ${errors.nameSurname?.message && "shadow-[0_0_0_2px] shadow-red-500"}
          `}
            type="text"
            placeholder="Nom & Prénom"
            {...register("nameSurname")}
          />
        </div>
        {errors.nameSurname?.message && (
          <div className="text-red-500 text-xs mt-1">
            {errors.nameSurname?.message}
          </div>
        )}
      </div>
      <div className="mb-4">
        <div className="relative">
          {errors.email?.message ? (
            <FiMail className="w-6 h-6 absolute top-1/2 -translate-y-1/2 left-2 border-r pr-2 text-red-500" />
          ) : (
            <FiMail className="w-6 h-6 absolute top-1/2 -translate-y-1/2 left-2 border-r pr-2" />
          )}
          <input
            className={`shadow appearance-none outline-none border rounded w-full py-2 pl-10 leading-tight duration-300
          ${errors.email?.message && "shadow-[0_0_0_2px] shadow-red-500"}
          `}
            type="email"
            placeholder="Email"
            {...register("email")}
          />
        </div>
        {errors.email?.message && (
          <div className="text-red-500 text-xs mt-1">
            {errors.email?.message}
          </div>
        )}
      </div>
      <div className="mb-4">
        <div className="relative">
          {errors.phone?.message ? (
            <FiPhone className="w-6 h-6 text-red-500 absolute top-1/2 -translate-y-1/2 left-2 border-r pr-2" />
          ) : (
            <FiPhone className="w-6 h-6 absolute top-1/2 -translate-y-1/2 left-2 border-r pr-2" />
          )}
          <input
            className={`shadow appearance-none outline-none border rounded w-full py-2 pl-10 leading-tight duration-300
          ${errors.phone?.message && "shadow-[0_0_0_2px] shadow-red-500"}
          `}
            type="tel"
            placeholder="Phone"
            {...register("phone")}
          />
        </div>
        {errors.phone?.message && (
          <div className="text-red-500 text-xs mt-1">
            {errors.phone?.message}
          </div>
        )}
      </div>
      <div className="mb-4">
        <textarea
          className={`shadow appearance-none outline-none border rounded w-full py-2 px-3 leading-tight duration-300
          ${errors.message?.message && "shadow-[0_0_0_2px] shadow-red-500"}
          `}
          placeholder="Message"
          rows={5}
          {...register("message")}></textarea>
        {errors.message?.message && (
          <div className="text-red-500 text-xs mt-1">
            {errors.message?.message}
          </div>
        )}
      </div>
      <span className="flex justify-center mt-6 mb-6">
        <Button
          type="submit"
          text="Envoyer"
          disabled={isSubmitting}
          onClick={handleSubmit(processForm)}>
          {isSubmitting ? "En cours d'envoi..." : "Envoyer"}
        </Button>

        {isSubmitSuccessful && (
          <div className={`text-right ${resultColor}`}>{result}</div>
        )}
      </span>
    </form>
  );
}
