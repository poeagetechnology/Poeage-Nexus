import React from "react";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { ArrowRight, Quote, Star } from "lucide-react";

export default function Clients() {
  const clients = [
    {
      name: "TATA Motors",
      logo: "https://1000logos.net/wp-content/uploads/2020/04/Tata-Logo-1988.png",
      industry: "Automotive",
      workers: "500+",
      testimonial: "Poeage Nexus delivered exceptional results under tight deadlines."
    },
    {
      name: "MRF Tyres",
      logo: "https://i.pinimg.com/736x/81/8d/6e/818d6e280da3c9660adfdcf8ec8ec2d2.jpg",
      industry: "Manufacturing",
      workers: "200+",
      testimonial: "The combination of recruitment and training services was excellent."
    },
    {
      name: "Mahindra & Mahindra",
      logo: "https://download.logo.wine/logo/Mahindra_%26_Mahindra/Mahindra_%26_Mahindra-Logo.wine.png",
      industry: "Automotive",
      workers: "800+",
      testimonial: "Their flexible staffing model allows us to scale efficiently."
    },
    {
      name: "TVS Electronics",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/TVS_logo.svg/1200px-TVS_logo.svg.png",
      industry: "Electronics",
      workers: "150+",
      testimonial: "Quality of workers has significantly improved our production efficiency."
    },
    {
      name: "L&T Construction",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Larsen_%26_Toubro_logo.svg/2560px-Larsen_%26_Toubro_logo.svg.png",
      industry: "Construction",
      workers: "1000+",
      testimonial: "Poeage Nexus simplified our workforce management across multiple sites."
    },
    {
      name: "Ashok Leyland",
      logo: "https://upload.wikimedia.org/wikipedia/en/thumb/1/1e/Ashok_Leyland_logo.svg/1200px-Ashok_Leyland_logo.svg.png",
      industry: "Automotive",
      workers: "300+",
      testimonial: "Reliable partner for all our contract staffing needs."
    }
  ];

  const stats = [
    { num: "30+", text: "Happy Clients" },
    { num: "2+", text: "Years Experience" },
    { num: "24/7", text: "Active Support" },
    { num: "20K+", text: "Workers Deployed" }
  ];

  const industries = ["All", "Automotive", "Manufacturing", "Electronics", "Construction"];
  const [selectedIndustry, setSelectedIndustry] = React.useState("All");

  const filteredClients = selectedIndustry === "All" 
    ? clients 
    : clients.filter(client => client.industry === selectedIndustry);

  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <>
      <Helmet>
        <title>Our Clients - Poeage Nexus | Trusted by Industry Leaders</title>
        <meta name="description" content="Poeage Nexus is trusted by leading companies like TATA Motors, MRF, Mahindra, and L&T. See our client success stories and testimonials." />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 py-24 px-6 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute top-40 left-20 w-72 h-72 bg-blue-200/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-72 h-72 bg-cyan-200/30 rounded-full blur-3xl"></div>

        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium mb-4">
            Our Clients
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4 tracking-tight">
            Trusted By Industry Leaders
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            We collaborate with India's top-performing brands, delivering excellence and reliability 
            in workforce management.
          </p>
        </motion.div>

        {/* Stats Section */}
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-8 bg-white shadow-lg rounded-2xl border border-gray-200 hover:shadow-2xl transition-all duration-300 text-center"
            >
              <p className="text-4xl font-extrabold text-gray-900">{stat.num}</p>
              <p className="text-gray-600 mt-2 text-lg">{stat.text}</p>
            </motion.div>
          ))}
        </div>

        {/* Industry Filter */}
        <div className="max-w-6xl mx-auto mb-12">
          <div className="flex flex-wrap gap-3 justify-center">
            {industries.map((industry) => (
              <button
                key={industry}
                onClick={() => setSelectedIndustry(industry)}
                className={`px-5 py-2.5 rounded-xl font-medium transition-all ${
                  selectedIndustry === industry
                    ? "bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow-lg"
                    : "bg-white text-gray-700 border border-gray-200 hover:border-blue-300"
                }`}
              >
                {industry}
              </button>
            ))}
          </div>
        </div>

        {/* Client Cards */}
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {filteredClients.map((client, index) => (
            <motion.div
              key={index}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden hover:-translate-y-3 transition-all duration-300 hover:shadow-2xl"
            >
              {/* Logo Section */}
              <div className="p-8 border-b border-gray-100 flex items-center justify-center bg-gray-50">
                <div className="w-32 h-24 flex items-center justify-center">
                  <img 
                    src={client.logo} 
                    alt={client.name} 
                    className="max-h-full max-w-full object-contain" 
                  />
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-xl font-bold text-gray-900">{client.name}</h2>
                  <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-medium">
                    {client.industry}
                  </span>
                </div>

                <div className="flex items-center gap-1 mb-3">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="w-4 h-4 text-amber-400 fill-current" />
                  ))}
                </div>

                <div className="bg-gray-50 rounded-xl p-4 mb-4">
                  <Quote className="w-5 h-5 text-blue-400 mb-2" />
                  <p className="text-gray-600 text-sm italic">"{client.testimonial}"</p>
                </div>

                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-500">Workers Deployed:</span>
                  <span className="font-semibold text-blue-600">{client.workers}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={fadeUp}
          className="max-w-4xl mx-auto text-center"
        >
          <div className="bg-gradient-to-r from-blue-600 to-cyan-500 rounded-3xl p-10 text-white">
            <h2 className="text-3xl font-bold mb-4">Become Our Next Success Story</h2>
            <p className="text-white/80 mb-8 max-w-2xl mx-auto">
              Join our growing list of satisfied clients and experience the Poeage Nexus difference 
              in workforce management.
            </p>
            <Link 
              to="/hire"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-blue-600 font-semibold rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transition-all"
            >
              Get Started <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </motion.div>
      </div>
    </>
  );
}
