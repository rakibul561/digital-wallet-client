// src/pages/About.tsx
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Hero } from "./Hero";

const teamMembers = [
  {
    name: "Rakibul Hasan",
    role: "Frontend Developer",
    image: "https://i.pravatar.cc/150?img=1",
  },
  {
    name: "Ayesha Khan",
    role: "Backend Developer",
    image: "https://i.pravatar.cc/150?img=2",
  },
  {
    name: "Samiul Islam",
    role: "UI/UX Designer",
    image: "https://i.pravatar.cc/150?img=3",
  },
];

export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-white dark:from-zinc-900 dark:to-zinc-950 text-zinc-800 dark:text-zinc-100">
      
      <Hero/>
      <section className="text-center py-16 px-4">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-bold mb-4 text-[#F54A00]"
        >
          About Our Digital Wallet
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="max-w-2xl mx-auto text-lg text-gray-600 dark:text-gray-300"
        >
          We are building a secure, fast, and user-friendly wallet system to make
          transactions as simple as sending a text message.
        </motion.p>
      </section>

      
      <section className="py-12 px-6 max-w-5xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        <motion.div
          initial={{ x: -40, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl font-semibold mb-3 text-[#F54A00]">Our Mission</h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            Our mission is to provide financial freedom by making cashless transactions
            accessible to everyone. Whether you’re in the city or a remote village,
            our platform empowers you to manage your money anytime, anywhere.
          </p>
        </motion.div>
        <motion.img
          initial={{ scale: 0.9, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6 }}
          src="https://cdn-icons-png.flaticon.com/512/2331/2331948.png"
          alt="mission illustration"
          className="w-64 mx-auto"
        />
      </section>

      {/* Story Section */}
      <section className="py-12 px-6 max-w-5xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-2xl font-semibold mb-4 text-[#F54A00]"
        >
          Our Story
        </motion.h2>
        <p className="text-gray-700 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
          Started by a passionate group of developers and designers, we wanted to
          solve the everyday hassle of sending and receiving money. Today, our
          platform is trusted by thousands of users, agents, and businesses across
          the country.
        </p>
      </section>

      {/* Team Section */}
      <section className="py-12 px-6 max-w-6xl mx-auto">
        <h2 className="text-2xl font-semibold mb-8 text-center text-[#F54A00]">
          Meet the Team
        </h2>
        <div className="grid gap-6 md:grid-cols-3">
          {teamMembers.map((member, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.2 }}
            >
              <Card className="shadow-lg hover:shadow-xl transition rounded-2xl overflow-hidden">
                <CardHeader className="flex flex-col items-center">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-24 h-24 rounded-full border-4 border-[#F54A00] mb-4"
                  />
                  <CardTitle>{member.name}</CardTitle>
                </CardHeader>
                <CardContent className="text-center text-gray-600 dark:text-gray-300">
                  {member.role}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
