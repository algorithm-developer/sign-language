'use client'
import { usePathname, useRouter } from 'next/navigation'
import { ChevronLeftIcon } from '@heroicons/react/24/solid'
import Link from 'next/link'
import Icon from '@/components/icon'
import clx from 'clsx'

interface HeadingProps {
  english?: string
  mongolian?: string
  color?: string
  slug: string
}

export function Heading({ english, mongolian, color, slug }: HeadingProps) {
  const pathName = usePathname()
  const route = useRouter()
  const root = pathName && pathName === '/' ? true : false
  return (
    <>
      <div className="py-6 px-4 sm:py-6 sm:px-6 md:flex md:items-center md:justify-between lg:max-w-7xl lg:px-8">
        <div className="flex items-start space-x-5">
          <div className="flex-shrink-0">
            <div className="relative">
              <div
                className={clx(
                  color,
                  'flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-full p-3 text-sm font-bold text-white'
                )}
              >
                <Icon slug={slug} />
              </div>
            </div>
          </div>
          {/*
          Use vertical padding to simulate center alignment when both lines of text are one line,
          but preserve the same layout if the text wraps without making the image jump around.
        */}
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
