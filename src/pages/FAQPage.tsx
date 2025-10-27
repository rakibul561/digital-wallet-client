import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const FAQPage = () => {

   useEffect(() => {
    AOS.init({
      duration: 1000, 
      once: true, 
    });
  }, []);
  return (
    <div data-aos="zoom-out-down"  className="border shadow-xl mt-20 mb-10 rounded-t-xl">
      <section className="">
        <div className="container flex flex-col justify-center px-4 py-8 mx-auto md:p-8">
          <h2 className="mb-12 text-4xl font-bold leading-none text-center sm:text-5xl">
            Frequently Asked Questions
          </h2>
          <div className="divide-y dark:divide-gray-300">
            {/* Q1 */}
            <div className="py-6 space-y-2 md:grid md:grid-cols-12 md:gap-8 md:space-y-0">
              <h3 className="font-semibold md:col-span-5">
                What is a Digital Wallet?
              </h3>
              <p className="md:pl-0 md:col-span-7">
                A Digital Wallet is an electronic application that allows you to
                securely store, send, and receive money using your phone or
                computer.
              </p>
            </div>
            {/* Q2 */}
            <div className="py-6 space-y-2 md:grid md:grid-cols-12 md:gap-8 md:space-y-0">
              <h3 className="font-semibold md:col-span-5">
                How do I deposit money into my wallet?
              </h3>
              <p className="md:pl-0 md:col-span-7">
                You can deposit money via agents (cash-in), bank transfers, or
                other supported payment methods. Once deposited, the balance is
                instantly available in your wallet.
              </p>
            </div>
            {/* Q3 */}
            <div className="py-6 space-y-2 md:grid md:grid-cols-12 md:gap-8 md:space-y-0">
              <h3 className="font-semibold md:col-span-5">
                Can I send money to another user?
              </h3>
              <p className="md:pl-0 md:col-span-7">
                Yes. Simply enter the recipient’s phone number or registered
                email, specify the amount, and confirm the transaction. The
                money will be transferred instantly.
              </p>
            </div>
            {/* Q4 */}
            <div className="py-6 space-y-2 md:grid md:grid-cols-12 md:gap-8 md:space-y-0">
              <h3 className="font-semibold md:col-span-5">
                Is my money safe in the wallet?
              </h3>
              <p className="md:pl-0 md:col-span-7">
                Absolutely. Our wallet uses advanced encryption, secure
                authentication, and real-time fraud monitoring to ensure your
                money and data are always protected.
              </p>
            </div>
            {/* Q5 */}
            <div className="py-6 space-y-2 md:grid md:grid-cols-12 md:gap-8 md:space-y-0">
              <h3 className="font-semibold md:col-span-5">
                Can I track my transaction history?
              </h3>
              <p className="md:pl-0 md:col-span-7">
                Yes. You can view all your deposits, withdrawals, and money
                transfers in the transaction history section, with filters for
                date and type.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FAQPage;
