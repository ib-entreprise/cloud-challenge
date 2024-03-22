import React from "react"

export default function challengeDetail() {
  return (
    <>
      <section className="flex">
        <div className="md:w-1/3">
          <h2 className="text-2xl">Challengeurs a succes</h2>
        </div>
        <div className="md:w-2/3">
          <h2 className="text-2xl">Challenge Nom</h2>
          <p className="text-lg">Challenge detail</p>
          <a href="#">Lien Repository</a>
        </div>
      </section>
    </>
  )
}
