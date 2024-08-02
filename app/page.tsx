import { Textarea } from "@nextui-org/input";

import { title } from "@/components/primitives";

export default function Home() {
  return (
    <section className="flex flex-col items-center justify-between h-full max-w-2xl mx-auto gap-4 py-8 md:py-10">
      <div className="inline-block text-center justify-center">
        <h1 className={title()}>
          Welcome to <span className="text-primary">Knowledge Baise</span>
        </h1>
      </div>
      <Textarea label="Ask a question" />
    </section>
  );
}
