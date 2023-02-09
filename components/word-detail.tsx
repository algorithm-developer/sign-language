import { Slider } from '@/components/slider'

interface WordDetailProps {
  images: string[]
}

export function WordDetail({ images }: WordDetailProps) {
  return (
    <div className="bg-transparent">
      <div className="lg:grid lg:grid-cols-6 lg:items-start lg:gap-x-8">
        <div className="... col-span-4 col-start-2">
          <Slider images={images} />
        </div>
      </div>
    </div>
  )
}
