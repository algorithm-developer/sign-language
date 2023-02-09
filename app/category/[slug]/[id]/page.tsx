import { getWordByUid, getWordsByCategory } from '@/db/db'
import { Slider } from '@/components/slider'
import { Heading } from '@/components/category-heading'

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
        <Heading />
        <div className="mx-auto max-w-4xl">
          <dl className="mt-10 sm:grid sm:grid-cols-3 sm:gap-4">
            <div className="border-gray-10 flex flex-col rounded-lg border p-6 text-center dark:border-zinc-700/40">
              <div className="order-1 mx-auto flex-auto items-center justify-center text-center align-middle">
                <div className="h-full text-xl font-bold leading-6 text-zinc-900 dark:text-zinc-100">
                  {word.english}
                </div>
              </div>
              <div className="order-2 flex-auto align-middle text-xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100">
                {word.mongolian}
              </div>
            </div>
            <div className="col-span-2 flex flex-col rounded-md border border-t border-gray-100 text-center dark:border-zinc-700/40">
              <Slider images={word.images} />
            </div>
          </dl>
        </div>
      </div>
    </>
  )
}
