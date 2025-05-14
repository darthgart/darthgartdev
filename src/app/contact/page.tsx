import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@radix-ui/react-label";
import React from "react";
import { useForm } from "react-hook-form";

export default function Contact() {
  // const { register, handleSubmit } = useForm();
  return (
    <main className="min-h-screen mt-28 sm:mt-24 xl:mt-0">
      {/* <img src="./map.png" alt="map" width={"90%"} height={800}></img> */}
      <section className="flex-grow flex flex-col items-center xl:py-24 xl:pt-28">
        <div className="bg-map grid grid-cols-1 mx-5 lg:grid-cols-2 gap-10 p-4 rounded-xl max-w-screen-xl sm:max-w-screen-lg mt-8 md:mx-10 lg:mx-auto">
          <div className="grid gap-4 my-4 py-4 p-5 rounded-lg bg-background shadow-xl shadow-black/50">
            <h2 className="text-2xl font-bold">¿Hablamos?</h2>
            <p>
              Puedes rellenar el siguiente formulario, ¡En cuanto lea el mensaje
              me pondre en contacto contigo!
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-4 items-center gap-4">
              <Label htmlFor="name" className="text-left">
                Nombre
              </Label>
              <Input id="name" className="col-span-3 border-primary" />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-4 items-center gap-4">
              <Label htmlFor="email" className="text-left">
                Email
              </Label>
              <Input id="email" className="col-span-3 border-primary" />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-4 items-top gap-4">
              <Label htmlFor="message" className="text-left mt-2">
                Mensaje
              </Label>
              <Textarea id="mesage" className="col-span-3 min-h-[100px] border-primary" />
            </div>
            <Button type="submit">Enviar</Button>
          </div>
          <div>
            
          </div>
        </div>

        <div className="grid justify-between grid-cols-1 mx-5 lg:grid-cols-2 gap-10 p-4 max-w-screen-lg md:mx-10 lg:mx-auto">
          <div className="flex flex-col justify-normal items-start space-y-4">
            form
            <div className="font-light italic text-center my-2 text-primary text-md sm:text-md">
            ~ Construye soluciones, no sólo código ~
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
