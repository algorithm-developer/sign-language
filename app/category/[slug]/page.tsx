import { getWordsByCategory } from '@/db/db'
import { getCategories } from '@/db/categories'
import Image from 'next/image'
import Link from 'next/link'
import { Heading } from '@/components/category-heading'
import { CategoryItems } from '@/components/category-items'

interface CategoryPageProps {
  params: {
    slug: string
  }
}

export async function generateStaticParams() {
  const words = await getWordsByCategory()

  return words.map((word) => ({
    slug: word.category,
  }))
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const slug = params?.slug
  const words = await getWordsByCategory(slug)
  const [category] = await getCategories(slug)

  return (
    <>
      <div>
        <div className="mx-auto max-w-2xl py-12 px-4 sm:px-6 lg:max-w-7xl lg:px-8">
          <Heading
            english={category?.title}
            mongolian={category?.subTitle}
            color={category.bgColor}
            slug={category.slug}
          />

          <CategoryItems words={words} />
        </div>
      </div>
    </>
  )
}
