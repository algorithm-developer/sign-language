'use client'
import { useRouter } from 'next/navigation'
import { ArrowLeftIcon } from '@heroicons/react/24/solid'

interface CategoryHeadingProps {
  title?: string
}

export function CategoryHeading({ title }: CategoryHeadingProps) {
  const route = useRouter()
  return (
    <>
      <div className="flex items-center justify-between border-b border-gray-200 px-6 pb-5">
        <button
          type="button"
          onClick={() => route.back()}
          className="relative -ml-px inline-flex items-center rounded-md border border-gray-300 bg-gray-50 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
        >
          <ArrowLeftIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
          <span className="ml-2">Back</span>
        </button>

        <div className="mt-3 sm:mt-0 sm:ml-4">
          <div className="flex rounded-md shadow-sm">
            <h3 className="text-lg font-medium capitalize leading-6 text-gray-900">
              {title}
            </h3>
          </div>
        </div>
      </div>
    </>
  )
}
