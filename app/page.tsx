'use client'
import { categories } from '@/db/categories'
import { Navigation } from '@/components/navigtaion'
import { Container } from '@/components/container'
import { Heading } from '@/components/heading'

export default function Home() {
  return (
    <>
      <Container>
        <Heading />
        <Navigation categories={categories} />
      </Container>
    </>
  )
}
