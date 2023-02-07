'use client'
import { usePathname, useRouter } from 'next/navigation'
import { ArrowLeftIcon } from '@heroicons/react/24/solid'
import Link from 'next/link'
interface HeadingProps {
  subTitle?: string
}

export function Heading({ subTitle }: HeadingProps) {
  const pathName = usePathname()
  const route = useRouter()
  const root = pathName && pathName === '/' ? true : false
  return (
    <>
      <div className="text-center sm:text-left">
        <h1 className="mb-5 text-3xl font-semibold capitalize text-zinc-900 dark:text-zinc-100">
          {root ? 'Mongolian Sign Language Dictionary' : subTitle}
        </h1>
        {root ? (
          <h2 className="text-xl font-semibold text-zinc-400">
            Choose a category
          </h2>
        ) : (
          <button
            type="button"
            onClick={() => route.back()}
            className="inline-flex items-center rounded-md border border-zinc-700/40 bg-white px-4 py-2 text-sm font-semibold text-zinc-900 shadow-sm shadow-zinc-700/40 hover:bg-zinc-200 focus:outline-none focus:ring-2 focus:ring-zinc-900 focus:ring-offset-2 dark:bg-zinc-900 dark:text-zinc-100 dark:hover:bg-zinc-700 dark:focus:ring-orange-700"
          >
            <ArrowLeftIcon className="-ml-1 mr-2 h-5 w-5" aria-hidden="true" />
            Back
          </button>
        )}
      </div>
    </>
  )
}
