export default function JournalPost() {
  return (
    <main className="min-h-screen bg-[#f5f1ea] text-black">
      <article className="px-6 md:px-12 lg:px-20 py-10">
        <header className="flex items-center justify-between text-sm tracking-[0.2em] uppercase mb-20">
          <a href="/" className="font-medium text-lg tracking-[0.08em]">
            OUNIQE_
          </a>

          <a href="/" className="text-xs">
            Back
          </a>
        </header>

        <div className="max-w-4xl">
          <p className="text-xs uppercase tracking-[0.25em] mb-5">
            Travel · September 2026
          </p>

          <h1 className="text-5xl md:text-7xl leading-[0.95] mb-8">
            A Weekend Somewhere Different
          </h1>

          <p className="text-lg md:text-xl text-black/60 max-w-2xl leading-relaxed">
            A collection of places, details, food, movement, and moments worth
            remembering.
          </p>
        </div>

<img
  src="/SavannahOlde Pink House.jpeg"
  alt="The Olde Pink House in Savannah"
  className="mt-16 w-full aspect-[16/9] object-cover"
/>

        <div className="max-w-2xl mx-auto py-20 space-y-8 text-lg leading-relaxed">
          <p>
            Savannah has a way of slowing everything down. The streets, the old
  architecture, the live oaks stretching over the road — everything feels
  like it has been there long enough to have a story.
          </p>

          <p>
            This weekend was less about having an itinerary and more about noticing
  the details: walking without a destination, finding somewhere good to eat,
  and taking in a city that feels completely different from home.
          </p>

          <div className="my-16 space-y-6">
  <img
    src="/Savannah Lights.png"
    alt="Savannah streets at night"
    className="w-full max-w-xl mx-auto object-cover"
  />

  <img
    src="/Savannah Love.png"
    alt="A night out in Savannah"
    className="w-full object-cover"
  />
</div>

          <p>
            The places are part of it, but the small moments are usually what stay
  with me. That is what I want this journal to keep.
          </p>
        </div>
      </article>
    </main>
  );
}
