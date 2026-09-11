export default function About() {
  return (
    <main className="min-h-screen bg-[#f5f1ea] text-black">

      {/* HEADER */}
      <header className="flex items-center justify-between px-6 md:px-12 lg:px-20 py-8">

        <a href="/" className="flex items-center gap-3">
          <img
            src="/Avatar Silloutte.png"
            alt="OUNIQE"
            className="w-12 h-12 object-contain"
          />

          <div>
            <div className="text-xl tracking-[0.18em] font-medium">
              OUNIQE_
            </div>

            <div className="text-[10px] tracking-[0.22em] uppercase opacity-60">
              One. Unique. Perspective.
            </div>
          </div>
        </a>

        <nav className="hidden md:flex gap-8 text-sm">
          <a href="/">Home</a>
          <a href="/journal">Journal</a>
          <a href="/gallery">Gallery</a>
          <a href="/objects">Objects</a>
          <a href="/about" className="border-b border-black">
            About
          </a>
        </nav>

      </header>


      {/* TITLE */}
      <section className="px-6 md:px-12 lg:px-20 pt-20 pb-20">

        <p className="text-xs uppercase tracking-[0.3em] opacity-50 mb-5">
          About
        </p>

        <h1 className="text-5xl md:text-7xl lg:text-8xl font-light tracking-tight leading-[0.95]">
          A life shaped by
          <br />
          curiosity.
        </h1>

      </section>


      {/* PHOTO + BIO */}
      <section className="px-6 md:px-12 lg:px-20 pb-32">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">

          {/* PHOTO */}
          {/* PHOTO */}
<div>
  <img
    src="/Coffee.png"
    alt="OUNIQE lifestyle"
    className="w-full h-auto object-cover"
  />

  <p className="mt-4 text-xs uppercase tracking-[0.2em] opacity-40">
    Everyday details / OUNIQE_
  </p>
</div>


          {/* BIO */}
          <div className="lg:pt-8 max-w-xl">

            <p className="text-xs uppercase tracking-[0.25em] opacity-50 mb-8">
              The perspective behind OUNIQE_
            </p>

            <div className="space-y-7 text-lg md:text-xl leading-relaxed font-light">

              <p>
                I&apos;m Ray, the perspective behind OUNIQE_.
              </p>

              <p>
                I&apos;ve always been drawn to the details that make an
                experience memorable — the restaurant you discover in a new
                city, a beautifully designed space, a pair of sneakers with
                a story behind them, or an object that simply feels different.
              </p>

              <p>
                Food and travel are a big part of how I experience the world.
                I&apos;m always searching for places worth remembering —
                from destination restaurants and neighborhood favorites to
                the small moments that end up defining a trip.
              </p>

              <p>
                I&apos;m equally inspired by culture and design — sneakers,
                streetwear, contemporary art, architecture, interiors,
                automobiles and the objects that live somewhere between
                function and expression.
              </p>

              <p>
                OUNIQE_ is where those interests come together.
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* CLOSING STATEMENT */}
      <section className="border-t border-black/15 px-6 md:px-12 lg:px-20 py-28">

        <p className="text-xs uppercase tracking-[0.3em] opacity-50 mb-10">
          The idea
        </p>

        <h2 className="text-4xl md:text-6xl font-light leading-tight max-w-5xl">
          OUNIQE_ isn&apos;t about having one interest.
          <span className="block opacity-50 mt-2">
            It&apos;s about seeing everything through your own lens.
          </span>
        </h2>

      </section>


      {/* SIGNATURE */}
      <section className="px-6 md:px-12 lg:px-20 pb-32">

        <p className="text-xs uppercase tracking-[0.3em] opacity-40 mb-5">
          OUNIQE_
        </p>

        <h2 className="text-5xl md:text-7xl font-light leading-[0.95]">
          One.
          <br />
          Unique.
          <br />
          Perspective.
        </h2>

      </section>

    </main>
  );
}