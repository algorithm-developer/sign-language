'use client'
import { categories } from '@/db/categories'
import { Navigation } from '@/components/navigtaion'
import { Container } from '@/components/container'

export default function Home() {
  return (
    <>
      <Container>
        <Navigation categories={categories} />
      </Container>
    </>
  )
}
