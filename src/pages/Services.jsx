import { Camera, Shield, Wifi, Zap, Lock, Phone, CheckCircle } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/Card"
import Button from "../components/ui/Button"
import BackgroundCarousel from "../components/ui/BackgroundCarousel"


export default function Services() {
  const servicesImages = [
    "/placeholder.svg?height=600&width=1200&text=Professional+Services",
    "/placeholder.svg?height=600&width=1200&text=CCTV+Installation",
    "/placeholder.svg?height=600&width=1200&text=Fire+Safety+Systems",
    "/placeholder.svg?height=600&width=1200&text=Access+Control",
    "/placeholder.svg?height=600&width=1200&text=Network+Solutions",
  ]

  const services = [
    {
      icon: Camera,
      title: "CCTV Installation & Monitoring",
      description: "Comprehensive surveillance solutions for complete security coverage",
      features: [
        "HD & 4K Camera Systems",
        "Remote Monitoring Capabilities",
        "Night Vision Technology",
        "24/7 Recording & Storage",
        "Mobile App Integration",
        "Motion Detection Alerts",
      ],
      price: "Starting from ₹15,000",
    },
    {
      icon: Shield,
      title: "Fire Safety Systems",
      description: "Advanced fire detection and suppression systems for maximum protection",
      features: [
        "Smoke & Heat Detectors",
        "Fire Alarm Systems",
        "Sprinkler Installation",
        "Emergency Lighting",
        "Fire Extinguisher Setup",
        "Compliance Certification",
      ],
      price: "Starting from ₹25,000",
    },
    {
      icon: Lock,
      title: "Access Control Systems",
      description: "Secure entry and exit management with advanced authentication",
      features: [
        "Biometric Access Control",
        "RFID Card Readers",
        "Digital Door Locks",
        "Visitor Management",
        "Time Attendance",
        "Multi-level Security",
      ],
      price: "Starting from ₹20,000",
    },
    {
      icon: Zap,
      title: "Security Alarm Systems",
      description: "Intelligent intrusion detection with immediate response capabilities",
      features: [
        "Motion Sensors",
        "Door/Window Alarms",
        "Glass Break Detectors",
        "Panic Buttons",
        "Mobile Notifications",
        "Professional Monitoring",
      ],
      price: "Starting from ₹12,000",
    },
    {
      icon: Wifi,
      title: "Network Solutions",
      description: "Robust networking infrastructure for seamless connectivity",
      features: [
        "LAN/WAN Setup",
        "WiFi Installation",
        "Network Security",
        "Cable Management",
        "Server Configuration",
        "Bandwidth Optimization",
      ],
      price: "Starting from ₹18,000",
    },
    {
      icon: Phone,
      title: "Intercom Systems",
      description: "Modern communication systems for buildings and facilities",
      features: [
        "Video Door Phones",
        "Audio Intercom Systems",
        "Multi-Unit Support",
        "Remote Door Release",
        "Integration Capabilities",
        "Maintenance Support",
      ],
      price: "Starting from ₹10,000",
    },
  ]

  return (
    <main>
      {/* Hero Section with Carousel */}
      <BackgroundCarousel
        images={servicesImages}
        autoPlay={true}
        interval={5000}
        showIndicators={true}
        height="py-20"
        overlay="bg-gradient-to-r from-blue-900/90 via-purple-800/80 to-red-500/90"
      >
        <div className="container text-center text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in-up">Our Services</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto animate-fade-in-up">
            Comprehensive safety and security solutions tailored to your needs
          </p>
        </div>
      </BackgroundCarousel>

      {/* Rest of the component remains the same */}
      {/* Services Grid */}
      <section className="py-20">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon
              return (
                <Card key={index} className="hover:shadow-xl transition-shadow duration-300 animate-fade-in-up">
                  <CardHeader>
                    <div className="flex items-center mb-4">
                      <div className="bg-red-500 rounded-lg w-12 h-12 flex items-center justify-center mr-4">
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <CardTitle className="text-xl text-gray-900">{service.title}</CardTitle>
                        <div className="text-red-500 font-semibold">{service.price}</div>
                      </div>
                    </div>
                    <CardDescription className="text-gray-600">{service.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-gray-600">
                          <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <Button className="w-full mt-6 bg-red-500 hover:bg-red-600 transition-colors duration-300">
                      Get Quote
                    </Button>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6 animate-fade-in-up">Our Process</h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto animate-fade-in-up">
              Simple, transparent, and efficient process from consultation to completion
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Consultation", description: "Free site survey and requirement analysis" },
              { step: "02", title: "Planning", description: "Custom solution design and quotation" },
              { step: "03", title: "Installation", description: "Professional installation by certified technicians" },
              { step: "04", title: "Support", description: "Ongoing maintenance and 24/7 support" },
            ].map((process, index) => (
              <div key={index} className="text-center animate-fade-in-up">
                <div className="bg-red-500 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  {process.step}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{process.title}</h3>
                <p className="text-gray-600">{process.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
