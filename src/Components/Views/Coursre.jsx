import { useMemo, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faChevronLeft,
  faChevronRight,
  faClock,
  faMagnifyingGlass,
  faStar,
} from '@fortawesome/free-solid-svg-icons'

const courses = [
  {
    title: 'Mastering Advanced React Patterns',
    instructor: 'Dr. Sarah Chen',
    category: 'Development',
    difficulty: 'Advanced',
    paid: 'Paid',
    badgeClass: 'bg-[#4137e8] text-white',
    rating: '4.9',
    students: '12,450',
    duration: '24h 15m',
    price: '$89.99',
    image:
      'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=900&q=85',
  },
  {
    title: 'The Ultimate UI/UX Design Boot Camp',
    instructor: 'Marcus Thorne',
    category: 'Design',
    difficulty: 'Intermediate',
    paid: 'Paid',
    badgeClass: 'bg-[#5eddf0] text-slate-900',
    rating: '4.8',
    students: '8,920',
    duration: '42h 30m',
    price: '$124.00',
    image:
      'https://images.unsplash.com/photo-1518005020951-eccb494ad742?auto=format&fit=crop&w=900&q=85',
  },
  {
    title: 'Data Science for Business Leaders',
    instructor: 'Elena Rodriguez',
    category: 'Business',
    difficulty: 'Advanced',
    paid: 'Paid',
    badgeClass: 'bg-[#d8c0ff] text-[#2114c7]',
    rating: '4.7',
    students: '5,300',
    duration: '18h 00m',
    price: '$199.99',
    image:
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=900&q=85',
  },
  {
    title: 'Python Foundations: From Zero to Hero',
    instructor: 'James Wilson',
    category: 'Development',
    difficulty: 'Beginner',
    paid: 'Paid',
    badgeClass: 'bg-[#4137e8] text-white',
    rating: '4.9',
    students: '25,600',
    duration: '56h 45m',
    price: '$49.99',
    image:
      'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=900&q=85',
  },
  {
    title: 'Digital Marketing Strategy 2024',
    instructor: 'Sophia Anderson',
    category: 'Marketing',
    difficulty: 'Intermediate',
    paid: 'Paid',
    badgeClass: 'bg-[#e6d4ff] text-[#2114c7]',
    rating: '4.6',
    students: '15,200',
    duration: '30h 20m',
    price: '$79.00',
    image:
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=900&q=85',
  },
  {
    title: 'Leadership & Team Management',
    instructor: 'Dr. Robert Vance',
    category: 'Soft Skills',
    difficulty: 'Beginner',
    paid: 'Paid',
    badgeClass: 'bg-[#5eddf0] text-slate-900',
    rating: '4.8',
    students: '9,400',
    duration: '12h 45m',
    price: '$95.00',
    image:
      'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=900&q=85',
  },
  {
    title: 'Computer Science Fundamentals',
    instructor: 'Avery Brooks',
    category: 'Computer Science',
    difficulty: 'Beginner',
    paid: 'Free',
    badgeClass: 'bg-[#4137e8] text-white',
    rating: '4.7',
    students: '18,300',
    duration: '16h 10m',
    price: 'Free',
    image:
      'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=900&q=85',
  },
  {
    title: 'Creative Brand Identity Design',
    instructor: 'Nina Patel',
    category: 'Design',
    difficulty: 'Beginner',
    paid: 'Paid',
    badgeClass: 'bg-[#5eddf0] text-slate-900',
    rating: '4.5',
    students: '7,810',
    duration: '20h 25m',
    price: '$59.00',
    image:
      'https://images.unsplash.com/photo-1542744095-291d1f67b221?auto=format&fit=crop&w=900&q=85',
  },
  {
    title: 'Business Management Essentials',
    instructor: 'Victor Lane',
    category: 'Business',
    difficulty: 'Intermediate',
    paid: 'Free',
    badgeClass: 'bg-[#d8c0ff] text-[#2114c7]',
    rating: '4.4',
    students: '10,120',
    duration: '14h 40m',
    price: 'Free',
    image:
      'https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=900&q=85',
  },
  {
    title: 'Full Stack JavaScript Developer',
    instructor: 'Maya Kingston',
    category: 'Development',
    difficulty: 'Intermediate',
    paid: 'Paid',
    badgeClass: 'bg-[#4137e8] text-white',
    rating: '4.8',
    students: '21,760',
    duration: '48h 35m',
    price: '$109.99',
    image:
      'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=900&q=85',
  },
  {
    title: 'Machine Learning With Python',
    instructor: 'Dr. Kenji Mori',
    category: 'Data Science',
    difficulty: 'Advanced',
    paid: 'Paid',
    badgeClass: 'bg-[#d8c0ff] text-[#2114c7]',
    rating: '4.9',
    students: '19,430',
    duration: '52h 00m',
    price: '$149.00',
    image:
      'https://images.unsplash.com/photo-1555949963-aa79dcee981c?auto=format&fit=crop&w=900&q=85',
  },
  {
    title: 'SQL Analytics for Beginners',
    instructor: 'Priya Nair',
    category: 'Data Science',
    difficulty: 'Beginner',
    paid: 'Free',
    badgeClass: 'bg-[#d8c0ff] text-[#2114c7]',
    rating: '4.6',
    students: '13,980',
    duration: '11h 30m',
    price: 'Free',
    image:
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=900&q=85',
  },
  {
    title: 'Cloud Computing Essentials',
    instructor: 'Owen Carter',
    category: 'Computer Science',
    difficulty: 'Intermediate',
    paid: 'Paid',
    badgeClass: 'bg-[#4137e8] text-white',
    rating: '4.5',
    students: '11,260',
    duration: '28h 50m',
    price: '$74.99',
    image:
      'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=900&q=85',
  },
  {
    title: 'Cybersecurity Practical Lab',
    instructor: 'Lena Brooks',
    category: 'Computer Science',
    difficulty: 'Advanced',
    paid: 'Paid',
    badgeClass: 'bg-[#4137e8] text-white',
    rating: '4.8',
    students: '8,640',
    duration: '34h 15m',
    price: '$119.00',
    image:
      'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=900&q=85',
  },
  {
    title: 'Mobile App Design in Figma',
    instructor: 'Camila Reyes',
    category: 'Design',
    difficulty: 'Intermediate',
    paid: 'Paid',
    badgeClass: 'bg-[#5eddf0] text-slate-900',
    rating: '4.7',
    students: '16,820',
    duration: '22h 10m',
    price: '$69.99',
    image:
      'https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&w=900&q=85',
  },
  {
    title: 'Product Management Sprint',
    instructor: 'Daniel Foster',
    category: 'Business',
    difficulty: 'Intermediate',
    paid: 'Paid',
    badgeClass: 'bg-[#d8c0ff] text-[#2114c7]',
    rating: '4.6',
    students: '12,760',
    duration: '19h 20m',
    price: '$84.00',
    image:
      'https://images.unsplash.com/photo-1552664688-cf412ec27db2?auto=format&fit=crop&w=900&q=85',
  },
  {
    title: 'Finance for Startup Founders',
    instructor: 'Grace Morgan',
    category: 'Business',
    difficulty: 'Beginner',
    paid: 'Free',
    badgeClass: 'bg-[#d8c0ff] text-[#2114c7]',
    rating: '4.4',
    students: '6,950',
    duration: '9h 45m',
    price: 'Free',
    image:
      'https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=900&q=85',
  },
  {
    title: 'Social Media Content Systems',
    instructor: 'Hannah Pierce',
    category: 'Marketing',
    difficulty: 'Beginner',
    paid: 'Paid',
    badgeClass: 'bg-[#e6d4ff] text-[#2114c7]',
    rating: '4.5',
    students: '14,440',
    duration: '15h 05m',
    price: '$39.99',
    image:
      'https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&w=900&q=85',
  },
  {
    title: 'SEO Strategy Masterclass',
    instructor: 'Noah Ellis',
    category: 'Marketing',
    difficulty: 'Advanced',
    paid: 'Paid',
    badgeClass: 'bg-[#e6d4ff] text-[#2114c7]',
    rating: '4.7',
    students: '9,710',
    duration: '26h 30m',
    price: '$89.00',
    image:
      'https://images.unsplash.com/photo-1432888622747-4eb9a8f2c293?auto=format&fit=crop&w=900&q=85',
  },
  {
    title: 'Public Speaking for Professionals',
    instructor: 'Isabel Grant',
    category: 'Soft Skills',
    difficulty: 'Beginner',
    paid: 'Free',
    badgeClass: 'bg-[#5eddf0] text-slate-900',
    rating: '4.6',
    students: '17,220',
    duration: '8h 55m',
    price: 'Free',
    image:
      'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&w=900&q=85',
  },
  {
    title: 'Agile Team Collaboration',
    instructor: 'Ethan Moore',
    category: 'Soft Skills',
    difficulty: 'Intermediate',
    paid: 'Paid',
    badgeClass: 'bg-[#5eddf0] text-slate-900',
    rating: '4.5',
    students: '10,680',
    duration: '13h 25m',
    price: '$54.99',
    image:
      'https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&w=900&q=85',
  },
]

const filters = {
  Categories: [
    'Computer Science',
    'Design & Creative',
    'Business Management',
    'Data Science',
    'Development',
    'Marketing',
    'Soft Skills',
  ],
  'Difficulty Level': ['Beginner', 'Intermediate', 'Advanced'],
  'Price Range': ['Free', 'Paid'],
}

const Coursre = () => {
  const [search, setSearch] = useState('')
  const [category, setCategory] = useState('')
  const [difficulty, setDifficulty] = useState('')
  const [priceRange, setPriceRange] = useState('')
  const [sortBy, setSortBy] = useState('Most Popular')
  const [page, setPage] = useState(1)
  const coursesPerPage = 6

  const categoryMap = {
    'Design & Creative': 'Design',
    'Business Management': 'Business',
    'Data Science': 'Data Science',
  }

  const filteredCourses = useMemo(() => {
    const query = search.trim().toLowerCase()
    const selectedCategory = categoryMap[category] || category

    return courses
      .filter((course) => {
        const matchesSearch =
          !query ||
          course.title.toLowerCase().includes(query) ||
          course.instructor.toLowerCase().includes(query) ||
          course.category.toLowerCase().includes(query)
        const matchesCategory = !category || course.category === selectedCategory
        const matchesDifficulty = !difficulty || course.difficulty === difficulty
        const matchesPrice = !priceRange || course.paid === priceRange

        return matchesSearch && matchesCategory && matchesDifficulty && matchesPrice
      })
      .sort((a, b) => {
        if (sortBy === 'Highest Rated') return Number(b.rating) - Number(a.rating)
        if (sortBy === 'Lowest Price') {
          const priceA = a.price === 'Free' ? 0 : Number(a.price.replace('$', ''))
          const priceB = b.price === 'Free' ? 0 : Number(b.price.replace('$', ''))
          return priceA - priceB
        }
        if (sortBy === 'Newest') return b.title.localeCompare(a.title)
        return Number(b.students.replace(',', '')) - Number(a.students.replace(',', ''))
      })
  }, [category, difficulty, priceRange, search, sortBy])

  const totalPages = Math.max(1, Math.ceil(filteredCourses.length / coursesPerPage))
  const visibleCourses = filteredCourses.slice((page - 1) * coursesPerPage, page * coursesPerPage)

  const updateFilter = (setter, value) => {
    setter(value)
    setPage(1)
  }

  const changePage = (nextPage) => {
    setPage(Math.min(Math.max(nextPage, 1), totalPages))
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <main className="bg-[#f6f7ff] text-slate-950">
      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 md:py-16 lg:px-8">
        <div className="max-w-3xl">
          <h1 className="text-4xl font-black tracking-tight sm:text-5xl">Explore Our Courses</h1>
          <p className="mt-4 max-w-2xl text-base leading-7 text-slate-700 sm:text-lg">
            Elevate your skills with professional-led courses designed for real-world
            application and academic excellence.
          </p>
        </div>

        <div className="mt-10 grid gap-5 border-b border-slate-300 pb-5 lg:grid-cols-[260px_1fr_auto] lg:items-center">
          <label className="relative block">
            <FontAwesomeIcon
              className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500"
              icon={faMagnifyingGlass}
            />
            <input
              className="h-12 w-full rounded-lg border border-slate-300 bg-white pl-12 pr-4 text-sm outline-none transition placeholder:text-slate-500 focus:border-[#302be2] focus:ring-4 focus:ring-indigo-100"
              onChange={(event) => updateFilter(setSearch, event.target.value)}
              placeholder="Search courses..."
              type="search"
              value={search}
            />
          </label>
          <p className="text-sm text-slate-700">
            Showing <span className="font-black text-slate-950">{filteredCourses.length}</span> courses
          </p>
          <div className="flex items-center gap-5 text-sm">
            <span className="text-slate-950">Sort by:</span>
            <select
              className="min-w-44 rounded-md bg-transparent px-2 py-2 font-medium text-[#2114e8] outline-none transition hover:bg-white"
              onChange={(event) => updateFilter(setSortBy, event.target.value)}
              value={sortBy}
            >
              <option>Most Popular</option>
              <option>Highest Rated</option>
              <option>Lowest Price</option>
              <option>Newest</option>
            </select>
          </div>
        </div>

        <div className="mt-7 grid gap-8 lg:grid-cols-[260px_1fr]">
          <aside className="space-y-9">
            {Object.entries(filters).map(([title, items]) => (
              <div key={title}>
                <h2 className="text-sm font-semibold text-slate-950">{title}</h2>
                <div className="mt-5 grid gap-4">
                  {items.map((item) => {
                    const type = title === 'Difficulty Level' ? 'radio' : 'checkbox'
                    const isCategory = title === 'Categories'
                    const isDifficulty = title === 'Difficulty Level'
                    const checked =
                      (isCategory && category === item) ||
                      (isDifficulty && difficulty === item) ||
                      (title === 'Price Range' && priceRange === item)

                    const onChange = () => {
                      if (isCategory) updateFilter(setCategory, checked ? '' : item)
                      if (isDifficulty) updateFilter(setDifficulty, checked ? '' : item)
                      if (title === 'Price Range') updateFilter(setPriceRange, checked ? '' : item)
                    }

                    return (
                      <label key={item} className="flex items-center gap-3 text-sm text-slate-700">
                        <input
                          className="h-5 w-5 accent-[#332fe0]"
                          checked={checked}
                          name={title}
                          onChange={onChange}
                          type={type}
                        />
                        <span>{item}</span>
                      </label>
                    )
                  })}
                </div>
              </div>
            ))}
          </aside>

          <div>
            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {visibleCourses.map((course) => (
                <article
                  key={course.title}
                  className="overflow-hidden rounded-lg border border-slate-300 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-200"
                >
                  <div className="relative">
                    <img className="h-48 w-full object-cover" src={course.image} alt={course.title} />
                    <span
                      className={`absolute left-4 top-4 rounded-full px-4 py-1.5 text-xs font-bold ${course.badgeClass}`}
                    >
                      {course.category}
                    </span>
                  </div>
                  <div className="p-6">
                    <h2 className="min-h-16 text-[1.35rem] font-extrabold leading-snug tracking-normal text-slate-950">
                      {course.title}
                    </h2>
                    <p className="mt-4 text-sm text-slate-700">{course.instructor}</p>
                    <div className="mt-5 flex flex-wrap items-center gap-2 text-sm">
                      <FontAwesomeIcon className="text-amber-500" icon={faStar} />
                      <span className="font-semibold">{course.rating}</span>
                      <span className="text-xs font-semibold text-slate-500">
                        ({course.students} students)
                      </span>
                    </div>
                    <div className="mt-5 border-t border-slate-300 pt-5">
                      <div className="flex items-center justify-between gap-4">
                        <span className="flex items-center gap-2 text-sm font-semibold text-[#064f60]">
                          <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#086e80] text-[10px] text-white">
                            <FontAwesomeIcon icon={faClock} />
                          </span>
                          {course.duration}
                        </span>
                        <span className="text-2xl font-black text-[#2114e8]">{course.price}</span>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            {visibleCourses.length === 0 && (
              <div className="rounded-lg border border-slate-300 bg-white p-10 text-center">
                <h2 className="text-xl font-black">No courses found</h2>
                <p className="mt-3 text-sm text-slate-600">
                  Try another search word or choose fewer options.
                </p>
              </div>
            )}

            <div className="mt-16 flex justify-center gap-2">
              {['prev', ...Array.from({ length: totalPages }, (_, index) => String(index + 1)), 'next'].map((item) => (
                <button
                  key={item}
                  onClick={() => {
                    if (item === 'prev') changePage(page - 1)
                    else if (item === 'next') changePage(page + 1)
                    else changePage(Number(item))
                  }}
                  className={`flex h-10 w-10 items-center justify-center rounded-lg border border-slate-300 text-sm font-medium transition ${
                    item === String(page)
                      ? 'bg-[#403be5] text-white'
                      : 'bg-white text-slate-950 hover:border-[#403be5] hover:text-[#2114e8]'
                  }`}
                  disabled={(item === 'prev' && page === 1) || (item === 'next' && page === totalPages)}
                >
                  {item === 'prev' && <FontAwesomeIcon icon={faChevronLeft} />}
                  {item === 'next' && <FontAwesomeIcon icon={faChevronRight} />}
                  {item !== 'prev' && item !== 'next' && item}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Coursre
