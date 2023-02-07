import { getWordByUid, getWordsByCategory } from '@/db/db'
import { Slider } from '@/components/slider'
import Image from 'next/image'

interface HomeProps {
  params: {
    id: string
    slug: string
  }
}

export async function generateStaticParams() {
  const words = await getWordsByCategory()

  return words.map((word) => ({
    id: word.uid,
    slug: word.category,
  }))
}

export default async function Home({ params }: HomeProps) {
  const [word] = await getWordByUid(params?.id)
  return (
    <>
      <div className="flex flex-col items-center justify-center py-6 sm:flex-row">
        <div className="basis-4/12 items-center text-center align-middle text-5xl font-bold">
          {word.english}
        </div>
        <div className="basis-4/12">
          <Slider
            images={word.images}
            english={word.english}
            mongolian={word.mongolian}
          />
        </div>
        <div className="item-center basis-4/12 text-center align-middle text-5xl font-bold">
          {word.mongolian}
        </div>
      </div>
    </>
  )
}
