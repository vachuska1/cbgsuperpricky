"use client"

import { useState } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

interface ImageSliderProps {
  images: string[]
  alt: string
}

export function ImageSlider({ images, alt }: ImageSliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0)

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0
    const newIndex = isFirstSlide ? images.length - 1 : currentIndex - 1
    setCurrentIndex(newIndex)
  }

  const goToNext = () => {
    const isLastSlide = currentIndex === images.length - 1
    const newIndex = isLastSlide ? 0 : currentIndex + 1
    setCurrentIndex(newIndex)
  }

  if (images.length === 0) {
    return <div className="h-64 bg-gray-200 rounded-lg flex items-center justify-center">Žádné obrázky</div>
  }

  return (
    <div className="relative h-full">
      <div className="h-full w-full relative overflow-hidden rounded-lg">
        <div className="h-full flex items-center justify-center bg-gray-100 rounded-lg">
          <Image
            src={images[currentIndex] || "/placeholder.svg"}
            alt={`${alt} ${currentIndex + 1}`}
            width={600}
            height={400}
            className="max-h-full object-contain"
          />
        </div>
      </div>

      <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-4">
        <Button
          onClick={goToPrevious}
          variant="outline"
          size="icon"
          className="bg-white/80 hover:bg-white"
          aria-label="Předchozí obrázek"
        >
          <ChevronLeft className="h-6 w-6" />
        </Button>
        <Button
          onClick={goToNext}
          variant="outline"
          size="icon"
          className="bg-white/80 hover:bg-white"
          aria-label="Další obrázek"
        >
          <ChevronRight className="h-6 w-6" />
        </Button>
      </div>

      <div className="absolute bottom-4 right-4 bg-black/50 text-white px-2 py-1 rounded text-sm">
        {currentIndex + 1} / {images.length}
      </div>
    </div>
  )
}
