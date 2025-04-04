import { Disclosure } from "@headlessui/react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "Is this therapy?",
    answer: "No — this is not licensed therapy. It's a safe, supportive space to share your thoughts anonymously with someone who listens without judgment."
  },
  {
    question: "Who will I be talking to?",
    answer: "Our listeners are carefully selected and trained for empathy, privacy, and professionalism. They're not therapists — they're here to hear you."
  },
  {
    question: "Is my session confidential?",
    answer: "Yes. 100% confidential. We don’t collect your real name or personal data, and nothing you say will ever be shared."
  },
  {
    question: "Can I talk about anything?",
    answer: "Absolutely. Whether it's stress, relationships, business ideas, or just random venting — it's your 30 minutes."
  },
];

const FaqAccordion = () => {
  return (
    <section className="max-w-3xl mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold text-center mb-8">Frequently Asked Questions</h2>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <Disclosure key={index}>
            {({ open }) => (
              <div className="border border-gray-200 rounded-xl p-4 shadow-sm">
                <Disclosure.Button className="flex justify-between w-full text-left text-lg font-medium text-gray-800 hover:text-primary transition">
                  {faq.question}
                  <ChevronDown
                    className={`w-5 h-5 transform transition-transform ${
                      open ? "rotate-180 text-primary" : "rotate-0"
                    }`}
                  />
                </Disclosure.Button>
                <Disclosure.Panel className="mt-3 text-gray-600 text-base leading-relaxed">
                  {faq.answer}
                </Disclosure.Panel>
              </div>
            )}
          </Disclosure>
        ))}
      </div>
    </section>
  );
};

export default FaqAccordion;