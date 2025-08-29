
export interface FaqItem {
  question: string;
  answer: string;
}

export interface Faq5Props {
  badge?: string;
  heading?: string;
  description?: string;
  faqs?: FaqItem[];
}

const defaultFaqs: FaqItem[] = [
  {
    question: "What is a Digital Wallet?",
    answer:
      "A Digital Wallet is an electronic application that allows you to store, send, and receive money securely using your phone or computer.",
  },
  {
    question: "How do I deposit money into my wallet?",
    answer:
      "You can deposit money via agents (cash-in), bank transfer, or other supported payment methods. Once deposited, the balance is instantly available in your wallet.",
  },
  {
    question: "How can I send money to another user?",
    answer:
      "Simply enter the recipient's phone number or registered email, specify the amount, and confirm the transaction. The money will be transferred instantly.",
  },
  {
    question: "Is my money safe in the wallet?",
    answer:
      "Yes, your wallet uses advanced encryption, secure authentication, and transaction monitoring to ensure your money is safe at all times.",
  },
  {
    question: "Can I track my transaction history?",
    answer:
      "Absolutely! You can view all your deposits, withdrawals, and money transfers in the transaction history section with filters for date and type.",
  },
];

export const FAQPage = ({
  heading = "Frequently Asked Questions",
  description = "Find answers to common questions about our Digital Wallet platform.",
  faqs = defaultFaqs,
}: Faq5Props) => {
  return (
    <section className="py-32">
      <div className="container">
        <div className="text-center">
          <h1 className="mt-4 text-4xl font-semibold">{heading}</h1>
          <p className="mt-6 font-medium text-muted-foreground">
            {description}
          </p>
        </div>
        <div className="mx-auto mt-14 max-w-xl">
          {faqs.map((faq, index) => (
            <div key={index} className="mb-8 flex gap-4">
              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-sm bg-secondary font-mono text-xs text-primary">
                {index + 1}
              </span>
              <div>
                <div className="mb-2 flex items-center justify-between">
                  <h3 className="font-medium">{faq.question}</h3>
                </div>
                <p className="text-sm text-muted-foreground">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};



