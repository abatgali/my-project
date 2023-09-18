'use client'

import { useEffect, useId, useState } from 'react'
import Image from 'next/image'
import { Tab } from '@headlessui/react'
import clsx from 'clsx'

import { Container } from '@/app/components/Container'
import { DiamondIcon } from '@/app/components/DiamondIcon'
import soccer from '@/app/images/avatars/soccer_iamge.jpg'
import tennis from '@/app/images/avatars/tennis.jpg'
import chinidol from '@/app/images/avatars/chinidol.jpg'
import pingpong from '@/app/images/avatars/pingpong.jpg'
import mrphysique from '@/app/images/avatars/physiquecomprev.png'
import pageant from '@/app/images/avatars/beautypageant.jpeg'
import wrestle from '@/app/images/avatars/wrestle.jpg'
import track from "@/app/images/avatars/trackrace.jpg"


const days = [
  {
    name: 'Opening Day',
    date: 'Jan 1',
    dateTime: '2023-01-01',
    clubs: [
      {
        name: 'Soccer',
        role: 'Score goals and make new friends on the pitch.',
        image: soccer,
      },
      {
        name: 'Tennis',
        role: 'Ace your way to becoming a court champion.',
        image: tennis,
      },
      {
        name: 'Ping Pong',
        role: 'Paddle up for a thrilling table tennis action.',
        image: pingpong,
      },
      {
        name: 'Chin Idol',
        role: 'Showcase your singing talent to a captivated audience.',
        image: chinidol,
      },
      {
        name: 'Mr. Physique',
        role: 'Flex those muscles and become a fitness icon.',
        image: mrphysique,
      },
      {
        name: 'Beauty Pageant',
        role: 'Strut your stuff and shine on stage in a battle of charm and charisma.',
        image: pageant,
      },
      {
        name: 'Wrestling',
        role: 'Mat or ring, it\'s where strength meets strategy.',
        image: wrestle,
      },
      {
        name: 'Track & Field',
        role: 'On the track, every second counts.',
        image: track,
      },
    ],
  },
  {
    name: 'Events & Workshops',
    date: 'Jan 25',
    dateTime: '2023-01-25',
    clubs: [
    ],
  },
  {
    name: 'Compete',
    date: 'Feb 20',
    dateTime: '2022-04-06',
    clubs: [
      
    ],
  },
]

function ImageClipPaths({ id, ...props }) {
  return (
    <svg aria-hidden="true" width={0} height={0} {...props}>
      <defs>
        <clipPath id={`${id}-0`} clipPathUnits="objectBoundingBox">
          <path d="M0,0 h0.729 v0.129 h0.121 l-0.016,0.032 C0.815,0.198,0.843,0.243,0.885,0.243 H1 v0.757 H0.271 v-0.086 l-0.121,0.057 v-0.214 c0,-0.032,-0.026,-0.057,-0.057,-0.057 H0 V0" />
        </clipPath>
        <clipPath id={`${id}-1`} clipPathUnits="objectBoundingBox">
          <path d="M1,1 H0.271 v-0.129 H0.15 l0.016,-0.032 C0.185,0.802,0.157,0.757,0.115,0.757 H0 V0 h0.729 v0.086 l0.121,-0.057 v0.214 c0,0.032,0.026,0.057,0.057,0.057 h0.093 v0.7" />
        </clipPath>
        <clipPath id={`${id}-2`} clipPathUnits="objectBoundingBox">
          <path d="M1,0 H0.271 v0.129 H0.15 l0.016,0.032 C0.185,0.198,0.157,0.243,0.115,0.243 H0 v0.757 h0.729 v-0.086 l0.121,0.057 v-0.214 c0,-0.032,0.026,-0.057,0.057,-0.057 h0.093 V0" />
        </clipPath>
      </defs>
    </svg>
  )
}

export default function Clubs() {
  let id = useId()
  let [tabOrientation, setTabOrientation] = useState('horizontal')

  useEffect(() => {
    let lgMediaQuery = window.matchMedia('(min-width: 1024px)')

    function onMediaQueryChange({ matches }) {
      setTabOrientation(matches ? 'vertical' : 'horizontal')
    }

    onMediaQueryChange(lgMediaQuery)
    lgMediaQuery.addEventListener('change', onMediaQueryChange)

    return () => {
      lgMediaQuery.removeEventListener('change', onMediaQueryChange)
    }
  }, [])

  return (
    <section
      id="clubs"
      aria-labelledby="clubs-title"
      className="py-20 sm:py-32"
    >
      <ImageClipPaths id={id} />
      <Container>
        <div className="mx-auto max-w-5xl lg:mx-0">
          <h3
            id="clubs-title"
            className="font-display text-3xl font-small tracking-tighter text-orange-600 sm:text-3xl"
          >
            Unearth Your Passion
          </h3>
          <h1
           className='font-display font-bold tracking-tight text-orange-950 lg:text-5xl mt-1'>Clubs for Everyone!</h1>
          <p className="mt-4 font-display text-2xl tracking-tighter text-blue-900">
              Unlock a universe of excitement, camaraderie, and competition with ClubConnect, your all-access pass to clubs, events, and contests. 
              Say hello to limitless opportunities.
          </p>
        </div>
        <Tab.Group
          as="div"
          className="mt-14 grid grid-cols-1 items-start gap-x-8 gap-y-8 sm:mt-16 sm:gap-y-16 lg:mt-24 lg:grid-cols-4"
          vertical={tabOrientation === 'vertical'}
        >
          <div className="relative -mx-4 flex overflow-x-auto pb-4 sm:mx-0 sm:block sm:overflow-visible sm:pb-0">
            <div className="absolute bottom-0 left-0.5 top-2 hidden w-px bg-slate-200 lg:block" />
            <Tab.List className="grid auto-cols-auto grid-flow-col justify-start gap-x-8 gap-y-10 whitespace-nowrap px-4 sm:mx-auto sm:max-w-2xl sm:grid-cols-3 sm:px-0 sm:text-center lg:grid-flow-row lg:grid-cols-1 lg:text-left">
              {({ selectedIndex }) => (
                <>
                  {days.map((day, dayIndex) => (
                    <div key={day.dateTime} className="relative lg:pl-8">
                      <DiamondIcon
                        className={clsx(
                          'absolute left-[-0.5px] top-[0.5625rem] hidden h-1.5 w-1.5 overflow-visible lg:block',
                          dayIndex === selectedIndex
                            ? 'fill-blue-600 stroke-blue-600'
                            : 'fill-transparent stroke-slate-400',
                        )}
                      />
                      <div className="relative">
                        <div
                          className={clsx(
                            'font-mono text-sm',
                            dayIndex === selectedIndex
                              ? 'text-blue-600'
                              : 'text-slate-500',
                          )}
                        >
                          <Tab className="ui-not-focus-visible:outline-none">
                            <span className="absolute inset-0" />
                            {day.name}
                          </Tab>
                        </div>
                        <time
                          dateTime={day.dateTime}
                          className="mt-1.5 block text-2xl font-semibold tracking-tight text-blue-900"
                        >
                          {day.date}
                        </time>
                      </div>
                    </div>
                  ))}
                </>
              )}
            </Tab.List>
          </div>
          <Tab.Panels className="lg:col-span-3">
            {days.map((day) => (
              <Tab.Panel
                key={day.dateTime}
                className="grid grid-cols-1 gap-x-8 gap-y-10 ui-not-focus-visible:outline-none sm:grid-cols-2 sm:gap-y-16 md:grid-cols-3"
                unmount={false}
              >
                {day.clubs.map((club, clubIndex) => (
                  <div key={clubIndex}>
                    <div className="group relative h-[17.5rem] transform overflow-hidden rounded-4xl">
                      <div
                        className={clsx(
                          'absolute bottom-6 left-0 right-4 top-0 rounded-4xl border transition duration-300 group-hover:scale-95 xl:right-6',
                          [
                            'border-blue-300',
                            'border-indigo-300',
                            'border-sky-300',
                          ][clubIndex % 3],
                        )}
                      />
                      <div
                        className="absolute inset-0 bg-indigo-50"
                        style={{ clipPath: `url(#${id}-${clubIndex % 3})` }}
                      >
                        <Image
                          className= {clsx("absolute inset-0 h-full w-full object-cover transition duration-300 group-hover:scale-110 ",
                            {"bg-top": club.image === pageant}
                          )}
                          src={club.image}
                          alt=""
                          priority
                          sizes="(min-width: 1280px) 17.5rem, (min-width: 1024px) 25vw, (min-width: 768px) 33vw, (min-width: 640px) 50vw, 100vw"
                        />
                      </div>
                    </div>
                    <h3 className="mt-8 font-display text-xl font-bold tracking-tight text-orange-600">
                      {club.name}
                    </h3>
                    <p className="mt-1 text-base tracking-tight text-slate-500">
                      {club.role}
                    </p>
                  </div>
                ))}
              </Tab.Panel>
            ))}
          </Tab.Panels>
        </Tab.Group>
      </Container>
    </section>
  )
}
