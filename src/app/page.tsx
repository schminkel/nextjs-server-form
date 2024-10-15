import Image from 'next/image'

export default function Home() {
  return (
    <div className="container mx-auto max-w-2xl px-4 py-8 sm:ml-2">
      <header className="mb-8">
        <Image
          className="dark:invert"
          src="https://nextjs.org/icons/next.svg"
          alt="Next.js logo - Official logo of the Next.js framework"
          width={180}
          height={38}
          priority
        />
      </header>
      <main className="flex flex-col gap-8">
        <section>
          <h2 className="sr-only">Project Information</h2>
          <ol className="list-item list-inside space-y-4 font-mono text-sm">
            <span className="text-sm">
              This is an example of how to use forms in Next.js together with
              server actions. That means, that the form data is validated on the
              client and server side, the data is submitted to the server using
              a function call (no REST API or fetch) and also server side errors
              are pushed to the client if necessary.
            </span>
            <li>
              We are using shadcn/ui for the UI with TailwindCSS and the
              following components:
              <ul className="ml-6 mt-2 list-disc space-y-1 text-xs sm:text-sm">
                <li>Alert</li>
                <li>Button</li>
                <li>Input</li>
                <li>Label</li>
                <li>LoaderButton</li>
                <li>Form</li>
                <li>Sonner</li>
              </ul>
            </li>
            <li>
              The form and the server action use the following dependencies:
              <ul className="ml-6 mt-2 list-disc space-y-1 text-xs sm:text-sm">
                <li>Zod (Type-safe schema validation in React)</li>
                <li>React Hook Form (Form management in React)</li>
                <li>ZSA-React (Type-safe server actions in Next.js)</li>
              </ul>
            </li>
            <li>
              The project is following a clean structure with clear separation
              of concern. Having server-components, client-components,
              server-actions, ui-components, lib, utils, use-cases, styles and
              so on.
            </li>
          </ol>
        </section>

        <nav className="flex justify-center sm:justify-start">
          <a
            className="inline-flex items-center justify-center rounded-full bg-foreground px-6 py-3 text-sm text-background transition-colors hover:bg-opacity-90 sm:text-base"
            href="/task"
            rel="noopener noreferrer"
          >
            Create Task Form
          </a>
        </nav>
      </main>
    </div>
  )
}
