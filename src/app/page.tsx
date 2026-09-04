export default function Home() {
  return (
    <main className="min-h-screen bg-[#f5f1ea] text-black">
      <section className="px-6 md:px-12 lg:px-20 py-8">
        <header className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img
              src="/Avatar Silloutte.png"
              alt="OUNIQE silhouette"
              className="w-12 h-12 object-contain"
            />

            <div className="font-medium text-lg tracking-[0.08em]">
              OUNIQE_
            </div>
          </div>

          <nav className="hidden md:flex gap-8">
            <a href="#journal">Journal</a>
            <a href="#gallery">Gallery</a>
            <a href="#objects">Objects</a>
            <a href="#about">About</a>
          </nav>
        </header>

        <div className="max-w-5xl pt-10 md:pt-14">
          <img
            src="/Ouniqe hero.png"
            alt="OUNIQE perspective"
            className="w-full h-[50vh] md:h-[58vh] object-cover object-center"
          />

          <div className="pt-10 md:pt-12">
            <p className="text-xs md:text-sm tracking-[0.3em] uppercase mb-6">
              An ongoing collection
            </p>

            <h1 className="text-5xl md:text-7xl lg:text-8xl leading-[0.95] font-medium max-w-4xl">
              One. Unique.
              <br />
              Perspective.
            </h1>

            <p className="mt-8 max-w-xl text-base md:text-lg leading-relaxed text-black/65">
              A personal journal of places, objects, ideas, experiences, and
              perspectives worth remembering.
            </p>
          </div>
        </div>

        <div className="mt-16 md:mt-20 flex justify-between items-end text-xs uppercase tracking-[0.2em]">
          <span>Est. 2026</span>
          <span>Scroll ↓</span>
        </div>
      </section>

      <section
        id="journal"
        className="px-6 md:px-12 lg:px-20 py-24 border-t border-black/15"
      >
        <div className="flex justify-between items-end mb-12">
          <div>
            <p className="text-xs uppercase tracking-[0.25em] mb-3">
              01 — Journal
            </p>

            <h2 className="text-4xl md:text-6xl">Latest stories.</h2>
          </div>

          <a
            href="/journal"
            className="text-sm underline underline-offset-4"
          >
            View all
          </a>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <a
            href="/journal/weekend-somewhere-different"
            className="block"
          >
            <img
              src="/SavannahOlde Pink House.jpeg"
              alt="Savannah weekend"
              className="w-full aspect-[4/3] object-cover mb-5"
            />

            <p className="text-xs uppercase tracking-[0.2em] mb-2">
              Travel · July 2026
            </p>

            <h3 className="text-2xl">
              A Weekend Somewhere Different
            </h3>
          </a>

          <article>
            <div className="aspect-[4/3] bg-black/10 mb-5" />

            <p className="text-xs uppercase tracking-[0.2em] mb-2">
              Perspective · September 2026
            </p>

            <h3 className="text-2xl">
              Looking at things differently.
            </h3>
          </article>
        </div>
      </section>

      <section
        id="gallery"
        className="px-6 md:px-12 lg:px-20 py-24 border-t border-black/15"
      >
        <p className="text-xs uppercase tracking-[0.25em] mb-3">
          02 — Gallery
        </p>

        <h2 className="text-4xl md:text-6xl mb-12">
          Places. Details. Moments.
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          <div className="aspect-square bg-black/10" />
          <div className="aspect-square bg-black/10" />
          <div className="aspect-square bg-black/10" />
          <div className="aspect-square bg-black/10" />
          <div className="aspect-square bg-black/10" />
          <div className="aspect-square bg-black/10" />
        </div>
      </section>

      <section
        id="objects"
        className="px-6 md:px-12 lg:px-20 py-24 border-t border-black/15"
      >
        <p className="text-xs uppercase tracking-[0.25em] mb-3">
          03 — Objects
        </p>

        <h2 className="text-4xl md:text-6xl max-w-3xl">
          Things I use, appreciate, recommend, and eventually create.
        </h2>

        <p className="mt-8 max-w-xl text-black/60">
          Objects will become the curated shop for Ouniqe_.
        </p>
      </section>

      <section
        id="about"
        className="px-6 md:px-12 lg:px-20 py-24 border-t border-black/15"
      >
        <p className="text-xs uppercase tracking-[0.25em] mb-3">
          04 — About
        </p>

        <div className="grid md:grid-cols-2 gap-12">
          <h2 className="text-4xl md:text-6xl">
            Ouniqe_
          </h2>

          <p className="text-lg leading-relaxed text-black/65 max-w-xl">
            Not a portfolio. Not a feed. A growing collection of perspective,
            experiences, photographs, ideas, and objects.
          </p>
        </div>
      </section>

      <footer className="px-6 md:px-12 lg:px-20 py-10 border-t border-black/15 flex flex-col md:flex-row gap-5 justify-between text-xs uppercase tracking-[0.2em]">
        <span>© 2026 Ouniqe_</span>

        <div className="flex gap-6">
          <a href="#">Instagram</a>
          <a href="#">LinkedIn</a>
          <a href="#">Contact</a>
        </div>
      </footer>
    </main>
  );
}