import { Word } from '@/types'
import Image from 'next/image'
import Link from 'next/link'

interface CategoryItemsProps {
  words: Word[]
}

export function CategoryItems({ words }: CategoryItemsProps) {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl bg-transparent py-16 px-4 dark:bg-zinc-900 sm:py-6 sm:px-6 lg:max-w-7xl lg:px-8">
        <div className="grid grid-cols-1 gap-x-8 gap-y-8 sm:grid-cols-2 sm:gap-y-10 lg:grid-cols-4">
          {words.map((word) => (
            <div key={word.uid} className="group relative">
              <Link href={`category/${word.category}/${word.uid}`}>
                <div className="aspect-w-4 aspect-h-3 overflow-hidden rounded-lg bg-gray-100">
                  <img
                    src={word.thumbnail}
                    alt={word.english}
                    className="object-cover object-center"
                  />
                  <div
                    className="flex items-end p-4 opacity-0 group-hover:opacity-100"
                    aria-hidden="true"
                  >
                    <div className="w-full rounded-md bg-white bg-opacity-75 py-2 px-4 text-center text-sm font-medium text-gray-900 backdrop-blur backdrop-filter">
                      Quick views
                    </div>
                  </div>
                </div>
                <div className="mt-4 flex items-center justify-between space-x-8 text-base font-medium text-gray-900 dark:text-zinc-100">
                  <h3>
                    <a href="#">
                      <span aria-hidden="true" className="absolute inset-0" />
                      {word.english}
                    </a>
                  </h3>
                </div>
                <p className="mt-1 text-sm text-gray-500">{word.mongolian}</p>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
