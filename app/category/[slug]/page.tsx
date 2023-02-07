import { getWordsByCategory } from '@/db/db'
import Image from 'next/image'
import Link from 'next/link'
import { Heading } from '@/components/heading'
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline'

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
  const words = await getWordsByCategory(params?.slug)

  return (
    <>
      <div>
        <div className="mx-auto max-w-2xl py-12 px-4 sm:px-6 lg:max-w-7xl lg:px-8">
          <Heading subTitle={slug} />
          <div className="mt-8 grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8">
            {words.map((w) => (
              <div key={w.uid}>
                <div className="relative">
                  <div className="relative h-72 w-full overflow-hidden rounded-lg">
                    <Image
                      src={w.thumbnail}
                      alt={w.english}
                      fill={true}
                      className="h-full w-full object-cover object-center"
                    />
                  </div>
                  <div className="relative mt-4">
                    <h3 className="text-center text-xl font-semibold text-zinc-900 dark:text-zinc-100">
                      {w.english}
                    </h3>
                    <p className="mt-1 text-center text-xl font-semibold text-zinc-500 dark:text-zinc-500">
                      {w.mongolian}
                    </p>
                  </div>
                  <div className="absolute inset-x-0 top-0 flex h-72 items-end justify-end overflow-hidden rounded-lg p-4">
                    <div
                      aria-hidden="true"
                      className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-black opacity-50"
                    />
                  </div>
                </div>
                <div className="mt-4">
                  <Link
                    href={`category/${w.category}/${w.uid}`}
                    className="relative flex items-center justify-center rounded-md border border-zinc-300 bg-white py-2 px-8 text-sm font-medium text-gray-900 shadow-lg hover:bg-gray-200 hover:font-semibold dark:border-zinc-700/40 dark:bg-zinc-900 dark:text-zinc-100 dark:hover:bg-zinc-700"
                  >
                    <MagnifyingGlassIcon
                      className="-ml-1 mr-2 h-5 w-5"
                      aria-hidden="true"
                    />
                    Quick view<span className="sr-only">, {w.english}</span>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
