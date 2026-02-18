import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-gray-100 p-4">
      <article className="w-full max-w-sm bg-white rounded-2xl border-4 border-red-500 shadow-lg overflow-hidden">
        {/* Imagen */}
        <figure className="relative w-full h-48 sm:h-56 m-0">
          <Image
            src="https://static.vecteezy.com/system/resources/previews/001/882/528/non_2x/beautiful-landscape-pine-forest-with-mesmerizing-mountain-views-free-vector.jpg"
            alt="Red Heaven"
            layout="fill"
            objectFit="cover"
          />
        </figure>

        {/* Contenido */}
        <section className="p-6 sm:p-8">
          {/* Título */}
          <h1 className="text-2xl sm:text-3xl font-bold text-black mb-4">
            Red Heaven
          </h1>

          {/* Párrafo */}
          <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-6">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! 
            Maiores et perferendis eaque, exercitationem praesentium nihil.
          </p>

          {/* Tags */}
          <footer className="flex flex-wrap gap-3">
            <span className="bg-red-500 text-white px-4 py-2 rounded-full text-sm font-medium">
              #tailwind
            </span>
            <span className="bg-red-500 text-white px-4 py-2 rounded-full text-sm font-medium">
              #frontendeverything
            </span>
          </footer>
        </section>
      </article>
    </main>
  );
}
