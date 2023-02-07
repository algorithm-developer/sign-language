interface ContainerProps {
  children: React.ReactNode
}

export function Container({ children }: ContainerProps) {
  return (
    <>
      <main>
        <div className="mx-auto max-w-7xl bg-[url('/bg_light.svg')] bg-top py-6 dark:bg-[url('/bg_dark.svg')] dark:bg-[center_top_-1px] sm:px-6 lg:px-8">
          {/* Replace with your content */}
          <div className="px-4 py-4 sm:px-0">{children}</div>
          {/* /End replace */}
        </div>
      </main>
    </>
  )
}
