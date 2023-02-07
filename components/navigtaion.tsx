import Link from 'next/link'
import { categories } from '@/db/categories'
import clx from 'clsx'
import { EllipsisVerticalIcon } from '@heroicons/react/20/solid'
import { Category } from '../types'
interface NavigationProps {
  categories: Category[]
}

export function Navigation({ categories }: NavigationProps) {
  return (
    <div>
      
      <div className="mt-3 grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-4">
        {categories.map((item) => (
          <Link
            key={item.id}
            href={item.href}
            className="group col-span-1 flex rounded-md border border-zinc-200 bg-zinc-100 shadow-md shadow-zinc-400/40 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 dark:border-zinc-700/40 dark:bg-zinc-900 dark:shadow-zinc-800/40"
          >
            <div
              className={clx(
                item.bgColor,
                'flex w-16 flex-shrink-0 items-center justify-center rounded-l-md text-sm font-bold text-white'
              )}
            >
              {item.initials}
            </div>
            <div className="flex flex-1 items-center justify-between truncate rounded-r-md bg-white group-hover:bg-zinc-200 dark:bg-zinc-900 dark:group-hover:bg-zinc-700">
              <div className="flex-1 truncate px-4 py-2 text-sm">
                <span className="font-semibold text-gray-900 dark:text-zinc-100">
                  {item.title}
                </span>
                <p className="font-semibold text-gray-500 dark:text-zinc-400">
                  {item.subTitle}
                </p>
              </div>
              <div className="flex-shrink-0 pr-2">
                <button
                  type="button"
                  className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-transparent text-sm font-medium text-zinc-900 shadow-md shadow-zinc-400/40 ring-1 ring-zinc-200 group-hover:ring-zinc-100 dark:text-zinc-100 dark:shadow-zinc-800/40 dark:ring-zinc-700/40 dark:group-hover:ring-zinc-800"
                >
                  {item.members}
                </button>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
