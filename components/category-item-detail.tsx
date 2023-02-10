import { Slider } from '@/components/slider'

interface CategoryItemDetailProps {
  images: string[]
}

export function CategoryItemDetail({ images }: CategoryItemDetailProps) {
  return (
    <div className="bg-transparent">
      <div className="lg:grid lg:grid-cols-8 lg:items-start lg:gap-x-8">
        <div className="... col-span-4 col-start-3">
          <Slider images={images} />
        </div>
      </div>
    </div>
  )
}
