import { Category } from '@/types'

export const categories: Category[] =
    [
        {
            id: 1,
            title: 'Alphabets',
            subTitle: 'Цагаан толгой',
            slug: 'alphabets',
            initials: 'AB',
            href: '/category/alphabets',
            bgColor: 'bg-orange-600',
            members: 35,
        },
        {
            id: 2,
            title: 'Numbers',
            subTitle: 'Тоо',
            slug: 'numbers',
            initials: "NB",
            href: "/category/numbers",
            bgColor: "bg-fuchsia-600",
            members: 10
        },
        {
            id: 3,
            title: 'Animals',
            subTitle: 'Амьтад',
            slug: 'animals',
            initials: "AN",
            href: "/category/animals",
            bgColor: "bg-slate-600",
            members: 31
        },
        {
            id: 4,
            title: 'Clothes',
            subTitle: 'Хувцас',
            slug: 'clothes',
            initials: "CL",
            href: "/category/clothes",
            bgColor: "bg-green-600",
            members: 14
        },
        {
            id: 5,
            title: 'Colors',
            subTitle: 'Өнгө',
            slug: 'colors',
            initials: "CL",
            href: "/category/colors",
            bgColor: "bg-sky-600",
            members: 10
        },
        {
            id: 6,
            title: 'Emotions',
            subTitle: 'Өнгө',
            slug: 'emotions',
            initials: "EM",
            href: "/category/emotions",
            bgColor: "bg-purple-600",
            members: 18
        },
        {
            id: 7,
            title: 'Family',
            subTitle: 'Гэр бүл',
            slug: 'family',
            initials: "FM",
            href: "/category/family",
            bgColor: "bg-pink-600",
            members: 17
        },
        {
            id: 8,
            title: 'Fruits',
            subTitle: 'Жимс',
            slug: 'fruits',
            initials: "FR",
            href: "/category/fruits",
            bgColor: "bg-blue-600",
            members: 8
        },
        {
            id: 9,
            title: 'Greetings',
            subTitle: 'Мэндчилгээ',
            slug: 'greetings',
            initials: "GT",
            href: "/category/greetings",
            bgColor: "bg-teal-600",
            members: 16
        },
        {
            id: 10,
            title: 'Nature',
            subTitle: 'Байгаль',
            slug: 'nature',
            initials: "NT",
            href: "/category/nature",
            bgColor: "bg-slate-600",
            members: 14
        },
        {
            id: 11,
            title: 'Profession',
            subTitle: 'Мэргэжил',
            slug: 'profession',
            initials: "PR",
            href: "/category/profession",
            bgColor: "bg-indigo-600",
            members: 20
        },
        {
            id: 12,
            title: 'Pronouns',
            subTitle: 'Үйл үг',
            slug: 'pronouns',
            initials: "PS",
            href: "/category/pronouns",
            bgColor: "bg-emerald-600",
            members: 20
        },

    ]

export async function getCategories(slug?: string): Promise<Array<Category>> {
    console.log("This is params")
    console.log(slug)
    return new Promise((resolve) => {
        if (slug) {
            const category = categories.filter(c => c.slug === slug);
            resolve(category);
        } else {
            resolve(categories)
        }
    })
}