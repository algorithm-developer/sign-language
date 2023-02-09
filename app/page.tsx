'use client'
import { categories } from '@/db/categories'
import { Navigation } from '@/components/navigtaion'
import { Container } from '@/components/container'
import { Heading } from '@/components/heading'

export default function Home() {
  return (
    <>
      <div className="relative">
        <div className="absolute inset-x-0 top-0 h-[10.5rem] bg-[url('/bg_light.svg')] bg-top [mask-image:linear-gradient(0deg,transparent,black)] dark:bg-[url('/bg_dark.svg')] dark:bg-[center_top_-1px]"></div>
        <Container>
          <Heading />
          <Navigation categories={categories} />
        </Container>
      </div>
    </>
  )
}
