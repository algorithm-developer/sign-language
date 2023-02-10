'use client'
import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import clx from 'clsx'
import { categories } from '@/db/categories'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Logo } from '@/components/logo'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import { Toggle } from '@/components/toggle'
import Icon from '@/components/icon'

export function Header() {
  const pathName = usePathname()
  const root = pathName === '/' ? true : false
  const path =
    root == false && pathName && pathName?.split('/').length > 3
      ? pathName?.split('/').slice(0, 3).join('/')
      : pathName
  return (
    <>
      <Popover
        as="nav"
        className="border-zinc-20 bg-grid-slate-900/[0.04] dark:bg-grid-slate-400/[0.05] supports-backdrop-blur:bg-white/60 sticky top-0 z-40 w-full flex-none 
      border border-b 
      border-slate-900/10 bg-opacity-40 pb-3 opacity-100 
      backdrop-blur-xl
      backdrop-filter 
      transition-colors 
      duration-500 dark:border-b dark:border-slate-700/40"
      >
        <div className="flex items-center justify-between p-6 px-6 py-1 sm:py-6 md:justify-start md:space-x-10">
          <div>
            <Link href="/" className="flex">
              <span className="sr-only">Logo </span>
              <Logo />
            </Link>
          </div>
          <div className="-my-2 -mr-2 md:hidden">
            <Popover.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-900 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/10 hover:text-zinc-900 focus:outline-none focus:ring-2 focus:ring-inset dark:bg-zinc-700 dark:text-zinc-400 dark:ring-zinc-600">
              <span className="sr-only">Open menu</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </Popover.Button>
          </div>
          <div className="hidden md:flex md:flex-1 md:items-center md:justify-between">
            <Popover.Group as="nav" className="flex space-x-10">
              <Link
                href="/"
                className="text-base font-semibold text-gray-900 transition duration-500 ease-in-out hover:text-gray-500 dark:text-zinc-100 dark:hover:text-orange-500"
              >
                Home
              </Link>
              <Popover className="relative">
                {({ open }) => (
                  <>
                    <Popover.Button className="dark:text-zinc focus:ring-grey-500 group inline-flex items-center rounded-md px-2 text-base font-semibold text-gray-900 transition duration-500 ease-in-out hover:text-gray-500 focus:outline-none focus:ring-1 dark:text-zinc-100 dark:hover:text-orange-500 dark:focus:ring-orange-500">
                      <span>Categories</span>
                      <ChevronDownIcon
                        className={clx(
                          open
                            ? 'text-gray-500 dark:text-orange-500'
                            : 'text-gray-900 dark:text-zinc-100',
                          'ml-2 h-5 w-5 group-hover:text-gray-500 dark:group-hover:text-orange-500'
                        )}
                        aria-hidden="true"
                      />
                    </Popover.Button>

                    <Transition
                      as={Fragment}
                      enter="transition ease-out duration-200"
                      enterFrom="opacity-0 translate-y-1"
                      enterTo="opacity-100 translate-y-0"
                      leave="transition ease-in duration-150"
                      leaveFrom="opacity-100 translate-y-0"
                      leaveTo="opacity-0 translate-y-1"
                    >
                      <Popover.Panel className="absolute z-10 -ml-4 mt-3 w-screen max-w-md transform lg:max-w-3xl">
                        <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                          <div className="relative grid gap-6 border-b border-zinc-200 bg-zinc-100 px-5 py-6 dark:border-zinc-700/40 dark:bg-zinc-800 sm:gap-8 sm:p-8 lg:grid-cols-2">
                            {categories.map((item) => (
                              <Link
                                key={item.id}
                                href={item.href}
                                className="-m-3 flex items-start rounded-lg border border-zinc-200 p-3 transition ease-out hover:bg-white dark:border-zinc-700/40 dark:hover:bg-zinc-900"
                              >
                                <div
                                  className={clx(
                                    item.bgColor,
                                    'flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-md bg-indigo-500 text-white sm:h-12 sm:w-12'
                                  )}
                                >
                                  <Icon slug={item.slug} />
                                </div>
                                <div className="ml-4">
                                  <p className="text-base font-semibold text-gray-900 transition duration-500 ease-in-out  dark:text-zinc-100 ">
                                    {item.title}
                                  </p>
                                  <p className="text-sm font-medium text-gray-900 transition duration-500 ease-in-out  dark:text-zinc-100 ">
                                    {item.subTitle}
                                  </p>
                                </div>
                              </Link>
                            ))}
                          </div>
                        </div>
                      </Popover.Panel>
                    </Transition>
                  </>
                )}
              </Popover>
              <a
                href="contact"
                className="text-base font-semibold text-gray-900 transition duration-500 ease-in-out hover:text-gray-500 dark:text-zinc-100 dark:hover:text-orange-500"
              >
                Contact
              </a>
            </Popover.Group>
            <div className="flex items-center md:ml-12">
              <Toggle></Toggle>
            </div>
          </div>
        </div>

        <Transition
          as={Fragment}
          enter="duration-200 ease-out"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="duration-100 ease-in"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          <Popover.Panel
            focus
            className="absolute inset-x-0 top-0 origin-top-right transform p-2 transition md:hidden"
          >
            <div className="divide-y-2 divide-gray-50 rounded-lg border-b border-zinc-200 bg-zinc-100 shadow-lg ring-1 ring-black ring-opacity-5 dark:border-zinc-700/40 dark:bg-zinc-800">
              <div className="px-5 pt-5 pb-6">
                <div className="flex items-center justify-between">
                  <Logo />
                  <div className="-mr-2">
                    <Popover.Button className="focus:ring-insetdark:bg-zinc-700 inline-flex items-center justify-center rounded-md p-2 text-gray-900 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/10 hover:text-zinc-900 focus:outline-none focus:ring-2 dark:text-zinc-400 dark:ring-zinc-600">
                      <span className="sr-only">Close menu</span>
                      <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                    </Popover.Button>
                  </div>
                </div>
                <div className="mt-6">
                  <nav className="grid gap-2">
                    <Link
                      key="category"
                      href="/"
                      className="flex items-center rounded-lg border border-zinc-200 p-3 hover:bg-zinc-200 dark:border-zinc-700/40 dark:hover:bg-zinc-500"
                    >
                      <div className="ml-4 text-base font-semibold text-gray-900 transition duration-500 ease-in-out hover:text-gray-500 dark:text-zinc-100 dark:hover:text-orange-500">
                        Categories
                      </div>
                    </Link>
                    <Link
                      key="contact"
                      href="/contact"
                      className="flex items-center rounded-lg border border-zinc-200 p-3 hover:bg-zinc-200 dark:border-zinc-700/40 dark:hover:bg-zinc-500"
                    >
                      <div className="ml-4 text-base font-semibold text-gray-900 transition duration-500 ease-in-out hover:text-gray-500 dark:text-zinc-100 dark:hover:text-orange-500">
                        Contact
                      </div>
                    </Link>
                  </nav>
                </div>
              </div>
            </div>
          </Popover.Panel>
        </Transition>
      </Popover>
    </>
  )
}
