/** @jsxImportSource preact */
import { h } from "preact";
import { Head } from "$fresh/runtime.ts";

export default function About() {
  return (
    <>
      <Head>
        <title>About Us | HeadlessPro</title>
        <meta
          name="description"
          content="Learn about HeadlessPro's mission, culture, and journey. We help companies scale without the tech headaches."
        />
      </Head>

      {/* Hero Section */}
      <section class="relative pt-24 pb-16 lg:pt-32 lg:pb-24 bg-gradient-to-br from-primary-600 to-primary-700 text-white overflow-hidden">
        <div class="absolute inset-0 bg-abstract opacity-10"></div>
        <div class="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 class="text-4xl sm:text-5xl lg:text-6xl font-display font-bold mb-6 leading-tight tracking-tight">
            We decouple problems so you can scale—today and tomorrow.
          </h1>
          <p class="max-w-3xl mx-auto text-lg sm:text-xl lg:text-2xl opacity-90 leading-relaxed font-light">
            Shipping today is good; shipping better tomorrow is mandatory.
          </p>
        </div>
      </section>

      {/* Our Culture Section */}
      <section class="py-16 lg:py-24 bg-white">
        <div class="container mx-auto px-4 sm:px-6 lg:px-8">
          <div class="max-w-4xl mx-auto text-center space-y-8">
            <h2 class="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-neutral-900">
              Our Culture
            </h2>
            <div class="space-y-6 text-lg text-neutral-600 leading-relaxed font-light">
              <p>
                At HeadlessPro, we decouple problems, decouple thinking—so that our
                clients can stay laser‑focused on growing their businesses instead of
                wrestling with tech.
              </p>
              <p>
                We know talent has no ZIP code, responsibility has no borders:
                whether you are pair‑programming from Dhaka, reviewing pull requests
                in Beijing, or pushing a hot‑fix in New York, ownership follows the
                work, not the office.
              </p>
              <p>
                To keep our ideas and our people fresh, we partner with leading
                universities, diving deep into design, marketing, psychology, and AI
                research that sharpens our products and broadens our perspective. And
                because our customers scale in real time, so do we.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section class="py-16 lg:py-24 bg-neutral-50">
        <div class="container mx-auto px-4 sm:px-6 lg:px-8">
          <div class="max-w-5xl mx-auto">
            <h2 class="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-center text-neutral-900 mb-16">
              Our Journey
            </h2>
            <div class="space-y-12 lg:space-y-16">
              {[
                {
                  number: "1",
                  title: "The Beginning",
                  description: "HeadlessPro started with a vision: to remove complexity from building and scaling digital commerce so teams could focus on customers, not infrastructure."
                },
                {
                  number: "2", 
                  title: "Scaling with Clients",
                  description: "As our customers grew, so did we—expanding into multi‑locale commerce, real‑time analytics, and complex enterprise integrations."
                },
                {
                  number: "3",
                  title: "What's Next",
                  description: "We're continuing to build faster, smarter headless commerce products—powered by research and a global team of builders who never stop iterating."
                }
              ].map((item, index) => (
                <div key={index} class="flex flex-col lg:flex-row items-start gap-8 lg:gap-12">
                  <div class="flex-shrink-0">
                    <div class="w-16 h-16 lg:w-20 lg:h-20 rounded-full bg-primary-600 text-white flex items-center justify-center font-bold text-xl lg:text-2xl shadow-lg">
                      {item.number}
                    </div>
                  </div>
                  <div class="flex-1">
                    <h3 class="text-2xl lg:text-3xl font-display font-semibold text-neutral-900 mb-4">
                      {item.title}
                    </h3>
                    <p class="text-lg text-neutral-600 leading-relaxed font-light">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section class="py-16 lg:py-24 bg-white">
        <div class="container mx-auto px-4 sm:px-6 lg:px-8">
          <div class="max-w-6xl mx-auto">
            <h2 class="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-center text-neutral-900 mb-16">
              Our Values
            </h2>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
              {[
                {
                  title: "Innovation First",
                  description: "We push boundaries and embrace new technologies to deliver cutting-edge solutions."
                },
                {
                  title: "Customer Success",
                  description: "Your growth is our success. We're committed to your long-term prosperity."
                },
                {
                  title: "Global Perspective",
                  description: "Diverse teams bring diverse solutions. We think globally, act locally."
                },
                {
                  title: "Transparency",
                  description: "Open communication, clear processes, and honest feedback drive everything we do."
                },
                {
                  title: "Continuous Learning",
                  description: "We never stop learning, adapting, and improving our craft and capabilities."
                },
                {
                  title: "Quality Over Quantity",
                  description: "We deliver excellence in every line of code, every design decision, every interaction."
                }
              ].map((value, index) => (
                <div key={index} class="p-8 bg-neutral-50 rounded-2xl hover:shadow-lg transition-all duration-300">
                  <h3 class="text-xl lg:text-2xl font-display font-semibold text-neutral-900 mb-4">
                    {value.title}
                  </h3>
                  <p class="text-neutral-600 leading-relaxed font-light">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
