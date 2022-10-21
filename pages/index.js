import Head from "next/head";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLaptopCode,
  faTools,
  faRoute,
  faDharmachakra,
  faEnvelopeOpen,
  faUserShield,
  faCubes
} from "@fortawesome/free-solid-svg-icons";
import Hero from "../components/shared/Hero";
import Footer from "../components/shared/Footer";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Landing</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;900&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Hero />



      <div className="flex flex-wrap-reverse bg-neutral-900 pb-10 text-white">
        <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-10 lg:px-8 xl:mt-20 lg:w-100">
          <div className="text-center py-8">
            <h2 className="text-5xl">Features.</h2>
          </div>

          <div className="mt-10">
            <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
              <div className="relative">
                <dt>
                  <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-emerald-500 text-white text-4xl">
                    <FontAwesomeIcon icon={faDharmachakra} />
                  </div>
                  <p className="ml-16 text-lg leading-6 font-medium text-white">
                    Frank Borman - One World
                  </p>
                </dt>
                <dd className="mt-2 ml-16 text-base text-gray-500">
                  The view of the earth from the moon fascinated me - a small
                  disk, 240,000 miles away. It was hard to think that that
                  little thing held so many problems, so many frustrations.
                  Raging nationalistic interests, famines, wars, pestilence
                  don't show from that distance. I'm convinced that some wayward
                  stranger in a space-craft, coming from some other part of the
                  heavens, could look at earth and never know that it was
                  inhabited at all. But the samw wayward stranger would
                  certainly know instinctively that if the earth were inhabited,
                  then the destinies of all who lived on it must inevitably be
                  interwoven and joined. We are one hunk of ground, water, air,
                  clouds, floating around in space. From out there it really is
                  'one world'.
                </dd>
              </div>

              <div className="relative">
                <dt>
                  <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-emerald-500 text-white text-3xl">
                    <FontAwesomeIcon icon={faTools} />
                  </div>
                  <p className="ml-16 text-lg leading-6 font-medium text-white">
                    John F. Kennedy - We Choose to go to the Moon
                  </p>
                </dt>
                <dd className="mt-2 ml-16 text-base text-gray-500">
                  I believe that space travel will one day become as common as
                  airline travel is today. I’m convinced, however, that the true
                  future of space travel does not lie with government agencies —
                  NASA is still obsessed with the idea that the primary purpose
                  of the space program is science — but real progress will come
                  from private companies competing to provide the ultimate
                  adventure ride, and NASA will receive the trickle-down
                  benefits.
                </dd>
              </div>

              <div className="relative">
                <dt>
                  <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-emerald-500 text-white text-3xl">
                    <FontAwesomeIcon icon={faLaptopCode} />
                  </div>
                  <p className="ml-16 text-lg leading-6 font-medium text-white">
                    Gene Kranz - Tough and Competent
                  </p>
                </dt>
                <dd className="mt-2 ml-16 text-base text-gray-500">
                  It has been said that astronomy is a humbling and
                  character-building experience. There is perhaps no better
                  demonstration of the folly of human conceits than this distant
                  image of our tiny world. To me, it underscores our
                  responsibility to deal more kindly with one another, and to
                  preserve and cherish the pale blue dot, the only home we've
                  ever known.
                </dd>
              </div>

              <div className="relative">
                <dt>
                  <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-emerald-500 text-white text-3xl">
                    <FontAwesomeIcon icon={faCubes} />
                  </div>
                  <p className="ml-16 text-lg leading-6 font-medium text-white">
                    Gene Cernan - Symbol of Apollo
                  </p>
                </dt>
                <dd className="mt-2 ml-16 text-base text-gray-500">
                  “From this day forward, Flight Control will be known by two
                  words: ‘Tough’ and ‘Competent.’ Tough means we are forever
                  accountable for what we do or what we fail to do. We will
                  never again compromise our responsibilities. Every time we
                  walk into Mission Control we will know what we stand for.
                  Competent means we will never take anything for granted. We
                  will never be found short in our knowledge and in our skills.
                  Mission Control will be perfect.
                </dd>
              </div>

              <div className="relative">
                <dt>
                  <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-emerald-500 text-white text-3xl">
                    {" "}
                    <FontAwesomeIcon icon={faRoute} />
                  </div>
                  <p className="ml-16 text-lg leading-6 font-medium text-white">
                    Buzz Aldrin - Magnificent Desolation
                  </p>
                </dt>
                <dd className="mt-2 ml-16 text-base text-gray-500">
                  Spaceflight will never tolerate carelessness, incapacity, and
                  neglect. Somewhere, somehow, we screwed up. It could have been
                  in design, build, or test. Whatever it was, we should have
                  caught it. We were too gung ho about the schedule and we
                  locked out all of the problems we saw each day in our work.
                </dd>
              </div>
              <div className="relative">
                <dt>
                  <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-emerald-500 text-white text-3xl">
                    {" "}
                    <FontAwesomeIcon icon={faUserShield} />
                  </div>
                  <p className="ml-16 text-lg leading-6 font-medium text-white">
                    Carl Sagan - Pale Blue Dot
                  </p>
                </dt>
                <dd className="mt-2 ml-16 text-base text-gray-500">
                  There is no strife, no prejudice, no national conflict in
                  outer space as yet. Its hazards are hostile to us all. Its
                  conquest deserves the best of all mankind, and its opportunity
                  for peaceful cooperation many never come again. But why, some
                  say, the moon? Why choose this as our goal? And they may well
                  ask why climb the highest mountain? Why, 35 years ago, fly the
                  Atlantic? Why does Rice play Texas?
                </dd>
              </div>
            </dl>
          </div>
        </main>
      </div>
      <Footer/>
    </div>
  );
}
