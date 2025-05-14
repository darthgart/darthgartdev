"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@radix-ui/react-label"
import React, { useState } from "react"
import { useForm } from "react-hook-form"
import { motion } from "framer-motion"

export default function Contact() {
  const { register, handleSubmit, reset } = useForm()
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle")

  const onSubmit = async (data: any) => {
    const { name, email, message } = data
    try {
      // const response = await fetch("/api/contact", {
      //   method: "POST",
      //   headers: {
      //     "Content-Type": "application/json",
      //   },
      //   body: JSON.stringify({ name, email, message }),
      // })
      
      // const result = await response.json()
      if (true) { // Replace with result.success
        setStatus("success")
        reset()
      } else {
        setStatus("error")
      }
    } catch (error) {
      setStatus("error")
    }
  }
  return (
    <main className="min-h-screen mt-28 sm:mt-32 xl:mt-0">
      <motion.section
        className="bg-muted/30 backdrop-blur-md shadow-2xl rounded-3xl overflow-hidden border border-border"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="w-full max-w-4xl rounded-xl shadow-xl bg-background/80 backdrop-blur-sm border border-border p-8 sm:p-10">
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-foreground mb-4">
            ¿Hablamos?
          </h2>
          <p className="text-muted-foreground mb-8">
            Puedes rellenar el siguiente formulario. En cuanto lea el mensaje, me pondré en contacto contigo.
          </p>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div>
              <Label htmlFor="name" className="block text-sm font-medium mb-1">
                Nombre
              </Label>
              <Input id="name" {...register("name", { required: true })} />
            </div>
            <div>
              <Label htmlFor="email" className="block text-sm font-medium mb-1">
                Email
              </Label>
              <Input id="email" type="email" {...register("email", { required: true })} />
            </div>
            <div>
              <Label htmlFor="message" className="block text-sm font-medium mb-1">
                Mensaje
              </Label>
              <Textarea id="message" className="min-h-[120px]" {...register("message", { required: true })} />
            </div>
            <div className="flex justify-end">
              <Button type="submit" className="w-full sm:w-auto">
                Enviar mensaje
              </Button>
            </div>
            {status !== "idle" && (
              <div
                className={`relative mt-4 p-4 rounded-lg border ${
                  status === "success"
                    ? "bg-green-100 border-green-300 text-green-800"
                    : "bg-red-100 border-red-300 text-red-800"
                }`}
              >
                <p className="text-sm">
                  {status === "success"
                    ? "Mensaje enviado con éxito. ¡Gracias!"
                    : "Hubo un error al enviar el mensaje."}
                </p>
                <button
                  onClick={() => setStatus("idle")}
                  className="absolute top-2 right-2 text-lg leading-none hover:opacity-70"
                  aria-label="Cerrar alerta"
                >
                  ×
                </button>
              </div>
            )}
          </form>
        </div>
      </motion.section>
      <div className="mt-12 text-center">
        <p className="text-primary italic text-md sm:text-lg">
          ~ Construye soluciones, no sólo código ~
        </p>
      </div>
    </main>
  )
}
