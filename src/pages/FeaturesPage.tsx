import {
  FaMoneyBillWave,
  FaWallet,
  FaHistory,
  FaShieldAlt,
  FaMobileAlt,
  FaBolt,
} from "react-icons/fa";

export default function Features() {
  const features = [
    {
      icon: <FaMoneyBillWave className="size-4 text-indigo-600" />,
      title: "Send Money",
      description:
        "Transfer funds instantly to friends and family using phone/email.",
    },
    {
      icon: <FaWallet className="size-4 text-indigo-600" />,
      title: "Deposit / Withdraw",
      description: "Add or withdraw money via agents seamlessly.",
    },
    {
      icon: <FaHistory className="size-4 text-indigo-600" />,
      title: "Transaction History",
      description: "Track all transactions with detailed history and filters.",
    },
    {
      icon: <FaShieldAlt className="size-4 text-indigo-600" />,
      title: "Secure & Private",
      description: "Advanced encryption ensures your money is safe.",
    },
    {
      icon: <FaMobileAlt className="size-4 text-indigo-600" />,
      title: "Mobile Friendly",
      description: "Access your wallet anytime, anywhere.",
    },
    {
      icon: <FaBolt className="size-4 text-indigo-600" />,
      title: "Fast Payments",
      description: "Enjoy instant payments without delays.",
    },
  ];

  return (
    <section className="py-12 md:py-20 mt-20">
      <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-16">
        <div className="relative z-10 mx-auto max-w-xl space-y-6 text-center md:space-y-12">
          <h2 className="text-balance text-4xl font-medium lg:text-5xl">
            Smart & Secure Digital Wallet for Everyone
          </h2>
          <p>
            Experience a seamless way to send, receive, and manage your money.
            Enjoy fast, secure, and convenient transactions—all in one simple
            platform.
          </p>
        </div>

        <div className="relative mx-auto grid max-w-4xl divide-x divide-y border *:p-12 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <div key={index} className="space-y-3">
              <div className="flex items-center gap-2">
                {feature.icon}
                <h3 className="text-sm font-medium">{feature.title}</h3>
              </div>
              <p className="text-sm">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
