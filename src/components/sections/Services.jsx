import { Link } from "react-router-dom"
import Button from "../ui/Button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/Card"
import { Camera, Shield, Wifi, Zap, Lock, Phone, ArrowRight } from "lucide-react"

export default function Services() {
  const services = [
    {
      icon: Camera,
      title: "CCTV Installation",
      description: "Professional CCTV camera installation and monitoring systems for complete surveillance coverage.",
      features: ["HD Camera Systems", "Remote Monitoring", "Night Vision", "24/7 Recording"],
    },
    {
      icon: Shield,
      title: "Fire Safety Systems",
      description: "Comprehensive fire detection and suppression systems to protect your property and lives.",
      features: ["Smoke Detectors", "Fire Alarms", "Sprinkler Systems", "Emergency Lighting"],
    },
    {
      icon: Lock,
      title: "Access Control",
      description: "Advanced access control systems for secure entry and exit management.",
      features: ["Biometric Systems", "Card Readers", "Digital Locks", "Visitor Management"],
    },
    {
      icon: Zap,
      title: "Security Alarms",
      description: "Intelligent alarm systems for intrusion detection and immediate response.",
      features: ["Motion Sensors", "Door/Window Alarms", "Panic Buttons", "Mobile Alerts"],
    },
    {
      icon: Wifi,
      title: "Network Solutions",
      description: "Robust networking infrastructure for seamless connectivity and communication.",
      features: ["LAN/WAN Setup", "WiFi Installation", "Network Security", "Cable Management"],
    },
    {
      icon: Phone,
      title: "Intercom Systems",
      description: "Modern intercom and communication systems for buildings and facilities.",
      features: ["Video Intercoms", "Audio Systems", "Door Entry", "Multi-Unit Support"],
    },
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="container">
        <div className="text-center mb-16">
          <span className="text-red-600 font-semibold font-tinos text-lg">OUR SERVICES</span>
          <h2 className="text-4xl md:text-5xl font-bold font-newsreader text-gray-900 mt-4 mb-3">
            Professional <span className="text-red-600">Technical Services</span>
          </h2>
          <p className="text-slate-700 font-serif text-lg max-w-3xl mx-auto">
            We offer a comprehensive range of safety and security solutions tailored to meet your specific needs and
            requirements.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <Card key={index} className="hover:shadow-xl transition-all duration-300 group animate-fade-in-up">
                <CardHeader>
                  <div className="bg-red-600 rounded-lg w-12 h-12 flex items-center justify-center mb-2 group-hover:bg-blue-600 transition-colors duration-300">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle className="text-xl text-gray-900 font-tinos">{service.title}</CardTitle>
                  <CardDescription className="text-slate-700 font-newsreader ">{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-slate-700 ">
                        <div className="w-2 h-2 bg-red-600 rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link to="/services">
                  <Button
                    variant="outline"
                    className="w-full group-hover:bg-red-600 group-hover:text-white group-hover:border-red-800 transition-colors duration-300"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                  </Link>
                </CardContent>
              </Card>
            )
          })}
        </div>
        <div className="text-center">
          <Link to="/services">
            <Button className="bg-red-600 text-white hover:bg-red-800 transition-colors duration-300">
              View All Services
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
