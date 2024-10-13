import ReactInfiniteScroll from "@/comps/ReactInfiniteScroll";
import Image from "next/image";

export default function Home() {
  console.log("first");
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <section>
          <div>
            <h1>This is the main section</h1>
            <p className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
              Welcome to React-Infinite-Scroll
            </p>
            <p>
              <small>
                with{" "}
                <strong>
                  <a
                    href="https://tanstack.com/query/latest/docs/framework/react/installation"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline underline-offset-4"
                  >
                    react-tanstack-query
                  </a>
                </strong>{" "}
                ;{" "}
                <strong>
                  <a
                    href="https://www.npmjs.com/package/react-intersection-observer"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline underline-offset-4"
                  >
                    insertion-observer
                  </a>
                </strong>{" "}
                ;{" "}
              </small>
            </p>
            <p>
              <small>
                yt:{" "}
                <a
                  target="_blank"
                  href="https://www.youtube.com/watch?v=DOKp4KiVIb4&ab_channel=CandDev"
                  className="underline underline-offset-4"
                >
                  How to Create Infinite Scroll in React | TanStack React Query
                </a>
              </small>
            </p>
          </div>
          <ReactInfiniteScroll />
        </section>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="https://nextjs.org/icons/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          Learn
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="https://nextjs.org/icons/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          Examples
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="https://nextjs.org/icons/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Go to nextjs.org →
        </a>
      </footer>
    </div>
  );
}
