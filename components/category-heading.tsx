'use client'
import { usePathname, useRouter } from 'next/navigation'
import { ArrowLeftIcon } from '@heroicons/react/24/solid'
import Link from 'next/link'
interface HeadingProps {
  english?: string
  mongolian?: string
}

export function Heading({ english, mongolian }: HeadingProps) {
  const pathName = usePathname()
  const route = useRouter()
  const root = pathName && pathName === '/' ? true : false
  return (
    <>
      <div className="flex flex-row text-center sm:text-left">
        <div className="flex flex-auto justify-start">
          <button
            type="button"
            onClick={() => route.back()}
            className="inline-flex items-center rounded-md border border-zinc-700/40 bg-white px-4 py-2 text-sm font-semibold text-zinc-900 shadow-sm shadow-zinc-700/40 hover:bg-zinc-200 focus:outline-none focus:ring-2 focus:ring-zinc-900 focus:ring-offset-2 dark:bg-zinc-900 dark:text-zinc-100 dark:hover:bg-zinc-700 dark:focus:ring-orange-700"
          >
            <ArrowLeftIcon className="-ml-1 mr-2 h-5 w-5" aria-hidden="true" />
            Back
          </button>
        </div>
        <div className="flex flex-auto justify-end">
          <h1 className="text-3xl font-semibold capitalize text-zinc-900 dark:text-zinc-100">
            {english && mongolian ? english + ' | ' + mongolian : ''}
          </h1>
        </div>
      </div>
    </>
  )
}
