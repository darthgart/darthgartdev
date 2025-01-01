import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
} from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@radix-ui/react-label";
import React from "react";
import { useForm } from "react-hook-form";

export default function Contact() {
  // const { register, handleSubmit } = useForm();
  return (
    <main className="min-h-screen flex flex-col mt-28 sm:mt-24 xl:mt-0">
      <section className="flex-grow flex flex-col items-center xl:py-24 xl:pt-28">
        <div className="grid justify-between grid-cols-1 mx-5 lg:grid-cols-2 gap-10 p-4 max-w-screen-lg md:mx-10 lg:mx-auto">
          <div className="grid gap-4 py-4">
            <h2 className="text-2xl font-bold">¿Hablamos?</h2>
            <p>
              Puedes rellenar el siguiente formulario, en cuanto lea el mensaje
              me pondre en contacto!
            </p>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="name" className="text-left">
                Nombre
              </Label>
              <Input id="name" className="col-span-3" />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="email" className="text-left">
                Email
              </Label>
              <Input id="email" className="col-span-3" />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="message" className="text-left">
                Mensaje
              </Label>
              <Textarea id="mesage" className="col-span-3" />
            </div>
            <Button type="submit">Enviar</Button>
          </div>
        </div>

        <div className="grid justify-between grid-cols-1 mx-5 lg:grid-cols-2 gap-10 p-4 max-w-screen-lg md:mx-10 lg:mx-auto">
          <div className="flex flex-col justify-normal items-start space-y-4">
            {/* form */}
          </div>
        </div>
      </section>
    </main>
  );
}
