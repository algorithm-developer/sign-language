import { getWordByUid, getWordsByCategory } from '@/db/db'
import { CategoryHeading } from '@/components/category-heading'
import { CategoryItemDetail } from '@/components/category-item-detail'

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
      <div className="mx-auto max-w-2xl py-12 px-4 sm:px-6 lg:max-w-7xl lg:px-8">
        <CategoryHeading title={word.english + ' / ' + word.mongolian} />
        <CategoryItemDetail images={word.images} />
      </div>
    </>
  )
}
