"use client"

import React from "react"

export default function Footer() {
  const date = new Date().getFullYear()
  return (
    <footer className="mt-auto w-full flex flex-col items-center justify-center">
      <div className="bg-popover hadow-xl rounded-none w-full mx-8 mt-8">
        <p className="font-light text-xs text-center my-2 bold">
          © {date} <a href="https://www.darthgart.dev">DARTHGART</a>
        </p>
      </div>
    </footer>
  )
}
