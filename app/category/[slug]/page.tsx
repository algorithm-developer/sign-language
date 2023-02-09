import { getWordsByCategory } from '@/db/db'
import { getCategories } from '@/db/categories'
import Image from 'next/image'
import Link from 'next/link'
import { Heading } from '@/components/category-heading'

interface CategoryPageProps {
  params: {
    slug: string
  }
}

export async function generateStaticParams() {
  const words = await getWordsByCategory()

  return words.map((word) => ({
    slug: word.category,
  }))
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const slug = params?.slug
  const words = await getWordsByCategory(slug)
  const [category] = await getCategories(slug)

  return (
    <>
      <div>
        <div className="mx-auto max-w-2xl py-12 px-4 sm:px-6 lg:max-w-7xl lg:px-8">
          <Heading english={category?.title} mongolian={category?.subTitle} />
          <div className="mt-8 grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8">
            {words.map((w) => (
              <Link href={`category/${w.category}/${w.uid}`}>
                <div key={w.uid}>
                  <div className="relative shadow-lg">
                    <div className="relative h-72 w-full overflow-hidden rounded-t-lg">
                      <Image
                        src={w.thumbnail}
                        alt={w.english}
                        fill={true}
                        className="h-full w-full object-cover object-center"
                        priority
                      />
                    </div>

                    <div className="relative rounded-b-lg border border-zinc-300 dark:border-zinc-700/40">
                      <h3 className="border-b border-zinc-300 py-2 text-center text-xl font-medium text-zinc-900 dark:border-zinc-700/40 dark:text-zinc-100">
                        {w.english}
                      </h3>
                      <p className="py-2 text-center text-xl font-medium text-zinc-500 dark:text-zinc-500">
                        {w.mongolian}
                      </p>
                    </div>
                    <div className="absolute inset-x-0 top-0 flex h-72 items-end justify-end overflow-hidden p-4">
                      <div
                        aria-hidden="true"
                        className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-black opacity-50"
                      />
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
