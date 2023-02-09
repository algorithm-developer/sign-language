'use client'
import { usePathname, useRouter } from 'next/navigation'
import { ChevronLeftIcon } from '@heroicons/react/24/solid'
import Link from 'next/link'
import Image from 'next/image'
import clx from 'clsx'

interface WordHeadingProps {
  english?: string
  mongolian?: string
  imageUrl: string
}

export function WordHeading({
  english,
  mongolian,
  imageUrl,
}: WordHeadingProps) {
  const route = useRouter()
  return (
    <>
      <div className="py-6 px-4 sm:py-6 sm:px-6 md:flex md:items-center md:justify-between lg:max-w-7xl lg:px-8">
        <div className="flex items-start space-x-5">
          <div className="flex-shrink-0">
            <div className="relative">
              <Image
                className="h-16 w-16 rounded-full"
                src={imageUrl}
                width={64}
                height={64}
                alt=""
              />
            </div>
          </div>
          <div className="pt-1.5">
            <h1 className="text-2xl font-bold text-zinc-900 dark:text-zinc-100">
              {english}
            </h1>
            <p className="text-sm font-medium text-zinc-900 dark:text-zinc-100">
              {mongolian}
            </p>
          </div>
        </div>
        <div className="justify-stretch mt-6 flex flex-col-reverse space-y-4 space-y-reverse sm:flex-row-reverse sm:justify-end sm:space-y-0 sm:space-x-3 sm:space-x-reverse md:mt-0 md:flex-row md:space-x-3">
          <button
            type="button"
            onClick={() => route.back()}
            className="inline-flex items-center justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-zinc-900 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-100 dark:border-zinc-700/40 dark:bg-zinc-700 dark:text-zinc-100 dark:hover:bg-zinc-500"
          >
            <ChevronLeftIcon
              className="-ml-1 mr-2 h-4 w-4"
              aria-hidden="true"
            />
            Back
          </button>
        </div>
      </div>
    </>
  )
}
