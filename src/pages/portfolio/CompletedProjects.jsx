import { Card, CardContent } from "../../components/ui/Card"
import { Calendar, MapPin, Users, Building, CheckCircle } from "lucide-react"
import BackgroundCarousel from "../../components/ui/BackgroundCarousel"

export default function CompletedProjects() {
  const completedImages = [
    "/placeholder.svg?height=600&width=1200&text=Completed+Projects",
    "/placeholder.svg?height=600&width=1200&text=Corporate+Security",
    "/placeholder.svg?height=600&width=1200&text=Residential+Safety",
    "/placeholder.svg?height=600&width=1200&text=Industrial+Solutions",
    "/placeholder.svg?height=600&width=1200&text=Educational+Infrastructure",
  ]

  const completedProjects = [
    {
      title: "Tech Corporate Tower Security System",
      category: "CCTV & Access Control",
      location: "Bandra-Kurla Complex, Mumbai",
      date: "December 2024",
      client: "TechnoSoft Solutions Pvt Ltd",
      duration: "6 weeks",
      image: "/placeholder.svg?height=300&width=400",
      description:
        "Complete security overhaul for a 15-story corporate building housing 2000+ employees. Installed 80+ HD cameras, biometric access control systems, fire safety integration, and centralized monitoring station.",
      features: [
        "80+ HD Cameras",
        "Biometric Access Control",
        "Fire Safety Integration",
        "24/7 Monitoring Center",
        "Mobile App Control",
      ],
      budget: "₹8,50,000",
    },
    {
      title: "Green Valley Residential Complex",
      category: "Fire Safety & Security",
      location: "Wakad, Pune",
      date: "November 2024",
      client: "Green Valley Apartment Association",
      duration: "8 weeks",
      image: "/placeholder.svg?height=300&width=400",
      description:
        "Comprehensive safety and security system for a premium 300-unit residential complex. Implemented fire detection, sprinkler systems, CCTV surveillance, and access control for all entry points.",
      features: [
        "300+ Smoke Detectors",
        "Sprinkler Systems",
        "50+ CCTV Cameras",
        "Vehicle Access Control",
        "Emergency Lighting",
      ],
      budget: "₹12,75,000",
    },
    {
      title: "Industrial Manufacturing Security",
      category: "Complete Security Solution",
      location: "Aurangabad Industrial Area",
      date: "October 2024",
      client: "Precision Manufacturing Co.",
      duration: "10 weeks",
      image: "/placeholder.svg?height=300&width=400",
      description:
        "End-to-end security solution for a 50-acre manufacturing facility. Installed perimeter security, 120+ cameras, vehicle tracking, employee access control, and integrated alarm systems.",
      features: [
        "Perimeter Security",
        "120+ Cameras",
        "Vehicle Tracking",
        "Employee Access Control",
        "Integrated Alarms",
      ],
      budget: "₹15,25,000",
    },
    {
      title: "Modern Education Campus Network",
      category: "Network & Communication",
      location: "Hadapsar, Pune",
      date: "September 2024",
      client: "International Education Institute",
      duration: "12 weeks",
      image: "/placeholder.svg?height=300&width=400",
      description:
        "Complete digital infrastructure for a modern educational campus serving 8000+ students. Implemented high-speed network, WiFi coverage, digital classrooms, and communication systems.",
      features: ["Campus-wide WiFi", "Fiber Optic Network", "100+ Access Points", "Digital Classrooms", "PA Systems"],
      budget: "₹18,50,000",
    },
    {
      title: "Multi-Specialty Hospital Security",
      category: "Healthcare Solutions",
      location: "Shivajinagar, Pune",
      date: "August 2024",
      client: "City Care Multi-Specialty Hospital",
      duration: "6 weeks",
      image: "/placeholder.svg?height=300&width=400",
      description:
        "Specialized security and safety systems for a 200-bed hospital. Implemented patient monitoring, emergency response, access control for restricted areas, and fire safety compliance systems.",
      features: [
        "Patient Area Monitoring",
        "Emergency Alarms",
        "Restricted Access Control",
        "Fire Safety Compliance",
        "Nurse Call Systems",
      ],
      budget: "₹9,75,000",
    },
    {
      title: "Shopping Mall Security Network",
      category: "Retail Security",
      location: "Phoenix MarketCity, Mumbai",
      date: "July 2024",
      client: "Premium Retail Management",
      duration: "4 weeks",
      image: "/placeholder.svg?height=300&width=400",
      description:
        "Comprehensive security system for a 5-floor shopping mall with 200+ retail outlets. Installed surveillance network, theft prevention, crowd monitoring, and emergency response systems.",
      features: [
        "Multi-floor Monitoring",
        "Theft Prevention",
        "Crowd Analytics",
        "Emergency Response",
        "POS Integration",
      ],
      budget: "₹11,20,000",
    },
  ]

  return (
    <main>
      {/* Hero Section with Carousel */}
      <BackgroundCarousel
        images={completedImages}
        autoPlay={true}
        interval={5000}
        showIndicators={true}
        height="py-20"
        overlay="bg-gradient-to-r from-blue-900/90 via-purple-800/80 to-red-500/90"
      >
        <div className="container text-center text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in-up">Completed Projects</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto animate-fade-in-up">
            Showcasing our successful implementations and satisfied clients across various industries
          </p>
        </div>
      </BackgroundCarousel>

      {/* Stats Section */}
      <section className="py-12 bg-white">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="animate-fade-in-up">
              <div className="text-3xl font-bold text-red-500 mb-2">1000+</div>
              <div className="text-gray-600">Projects Completed</div>
            </div>
            <div className="animate-fade-in-up">
              <div className="text-3xl font-bold text-red-500 mb-2">500+</div>
              <div className="text-gray-600">Happy Clients</div>
            </div>
            <div className="animate-fade-in-up">
              <div className="text-3xl font-bold text-red-500 mb-2">14+</div>
              <div className="text-gray-600">Years Experience</div>
            </div>
            <div className="animate-fade-in-up">
              <div className="text-3xl font-bold text-red-500 mb-2">99%</div>
              <div className="text-gray-600">Success Rate</div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 bg-gray-50">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {completedProjects.map((project, index) => (
              <Card
                key={index}
                className="overflow-hidden hover:shadow-xl transition-shadow duration-300 animate-fade-in-up"
              >
                <div className="relative">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                      Completed
                    </span>
                  </div>
                  <div className="absolute top-4 right-4">
                    <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                      {project.category}
                    </span>
                  </div>
                </div>
                <CardContent className="p-6">
                  <div className="mb-4">
                    <h3 className="text-xl font-semibold text-gray-900 mt-1 mb-2">{project.title}</h3>
                    <p className="text-gray-600 mb-4">{project.description}</p>
                  </div>

                  <div className="grid grid-cols-2 gap-4 mb-4 text-sm text-gray-600">
                    <div className="flex items-center">
                      <Building className="w-4 h-4 mr-2 text-red-500" />
                      <span className="font-medium">{project.client}</span>
                    </div>
                    <div className="flex items-center">
                      <MapPin className="w-4 h-4 mr-2 text-red-500" />
                      <span>{project.location}</span>
                    </div>
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-2 text-red-500" />
                      <span>{project.date}</span>
                    </div>
                    <div className="flex items-center">
                      <Users className="w-4 h-4 mr-2 text-red-500" />
                      <span>{project.duration}</span>
                    </div>
                  </div>

                  <div className="border-t pt-4 mb-4">
                    <h4 className="font-medium text-gray-900 mb-2">Key Features:</h4>
                    <div className="grid grid-cols-1 gap-1">
                      {project.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center text-sm text-gray-600">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="border-t pt-4 flex justify-between items-center">
                    <div>
                      <span className="text-sm text-gray-500">Project Value:</span>
                      <div className="text-lg font-bold text-red-500">{project.budget}</div>
                    </div>
                    <div className="text-right">
                      <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                        Successfully Delivered
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
