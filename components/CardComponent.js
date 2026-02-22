"use client"

import Link from "next/link"
import Image from "next/image"

const CardComponent = ({ item }) => {
  // Ändra nedan beroende på vad variabel namnen är i data.json
  const name = item["title"] || "Missing name"

  // Angående image. Generellt kan jag inte skrapa bilder direkt på grund av gdpr.
  // Jag kan lägga in svg, nedladdbara figurer istället
  // Jag kan importera figurer här men jag måste tänka på GDPR så det är nog enklast att ha standard bilder.
  const imageUrl = "/icon lorem ipsum.jpg" // addera item["photo"] för att få genererade bilder

  const address = item["adress"] || item["address"] || "Missing address"
  const street = item["street"] || "Missing street"
  const category = item["category"] || "Missing category"

  return (
    <div className="card bg-base-100 w-96 shadow-sm group overflow-hidden items-center">
      {imageUrl && (
        <figure className="relative w-full h-48 overflow-hidden">
          <Image
            src={imageUrl}
            alt={name}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </figure>
      )}
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        {category && <p className="text-sm text-base-content/60">{category}</p>}
        <div className="card-actions justify-end">
          <Link
            href={`/pages/b/${encodeURIComponent(street)}`}
            className="text-blue-600 hover:underline"
          >
            {address}
          </Link>
        </div>
      </div>
    </div>
  )
}

export default CardComponent
