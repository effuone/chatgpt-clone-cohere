import Link from 'next/link';

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_500px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Unlock the Power of Conversational AI
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    Cohere's advanced language model enables natural, open-ended
                    conversations that integrate seamlessly with your
                    applications.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link
                    href="chat"
                    className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                    prefetch={false}
                  >
                    Try the Chatbot
                  </Link>
                </div>
              </div>
              <img
                src="https://static1.anpoimages.com/wordpress/wp-content/uploads/2024/01/cohere-logo-ap-2024.png"
                width="600"
                height="400"
                alt="Cohere Chatbot"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full"
              />
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Unlock the Power of Conversational AI
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Cohere's advanced language model enables natural, open-ended
                  conversations that integrate seamlessly with your
                  applications.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
              <div className="flex flex-col justify-center space-y-4">
                <div className="grid gap-1">
                  <h3 className="text-xl font-bold">
                    Natural Language Understanding
                  </h3>
                  <p className="text-muted-foreground">
                    Cohere's language model understands the nuances of human
                    communication, enabling it to engage in natural, open-ended
                    conversations.
                  </p>
                </div>
                <div className="grid gap-1">
                  <h3 className="text-xl font-bold">
                    Conversational Abilities
                  </h3>
                  <p className="text-muted-foreground">
                    Cohere's chatbot can engage in back-and-forth conversations,
                    understanding context and responding appropriately.
                  </p>
                </div>
                <div className="grid gap-1">
                  <h3 className="text-xl font-bold">Integrations</h3>
                  <p className="text-muted-foreground">
                    Cohere's chatbot can be easily integrated into your existing
                    applications and workflows, enhancing your user experience.
                  </p>
                </div>
              </div>
              <img
                src="https://cohere.com/_ipx/w_640,q_75/https%3A%2F%2Fcohere-ai.ghost.io%2Fcontent%2Fimages%2F2022%2F07%2FLLM-use-cases.png?url=https%3A%2F%2Fcohere-ai.ghost.io%2Fcontent%2Fimages%2F2022%2F07%2FLLM-use-cases.png&w=640&q=75"
                width="750"
                height="510"
                alt="Cohere Features"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full"
              />
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container grid items-center gap-6 px-4 md:px-6 lg:grid-cols-2 lg:gap-10">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                Empower Your Applications with Cohere
              </h2>
              <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Cohere's advanced language model can be easily integrated into
                your applications, enhancing the user experience and unlocking
                new possibilities.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row lg:justify-end">
              <Link
                href="chat"
                className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                prefetch={false}
              >
                Try the Chatbot
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
