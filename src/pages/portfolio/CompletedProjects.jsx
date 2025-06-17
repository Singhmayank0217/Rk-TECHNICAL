import BackgroundCarousel from "../../components/ui/BackgroundCarousel"
import CompanyCard from "../../components/ui/CompanyCard"

export default function CompletedProjects() {
  const completedImages = [
    "/placeholder.svg?height=600&width=1200&text=Completed+Projects",
    "/placeholder.svg?height=600&width=1200&text=Corporate+Security",
    "/placeholder.svg?height=600&width=1200&text=Residential+Safety",
    "/placeholder.svg?height=600&width=1200&text=Industrial+Solutions",
    "/placeholder.svg?height=600&width=1200&text=Educational+Infrastructure",
  ]

  const completedCompanies = [
    {
      id: 1,
      name: "POLIXEL INDIA",
      image: "/images/polixel-card.png",
      description:
        "This was one of our First Project in Kolkata here we worked over here as an Installation of CCTV Cameras, FIRE, Safety, and Security Systems",
      projects: ["Unitech BUILDING in the Year - 2012", "Coal India NS ROAD - 2015"],
      additionalInfo: [
        { label: "Project Status", value: "Successfully Completed" },
        { label: "Location", value: "Kolkata, West Bengal" },
        { label: "Duration", value: "2012 - 2015" },
        { label: "Services", value: "CCTV, Fire Safety, Security Systems" },
        { label: "Project Value", value: "₹8,50,000" },
        { label: "Client Satisfaction", value: "100%" },
      ],
    },
    {
      id: 2,
      name: "TECH CORPORATE TOWER",
      image: "/placeholder.svg?height=200&width=300&text=Tech+Corporate",
      description:
        "Complete security overhaul for a 15-story corporate building housing 2000+ employees. Installed 80+ HD cameras, biometric access control systems, fire safety integration, and centralized monitoring station.",
      projects: [
        "80+ HD Camera Installation - December 2024",
        "Biometric Access Control System - December 2024",
        "Fire Safety Integration - December 2024",
        "24/7 Monitoring Center Setup - December 2024",
      ],
      additionalInfo: [
        { label: "Project Status", value: "Successfully Completed" },
        { label: "Location", value: "Bandra-Kurla Complex, Mumbai" },
        { label: "Duration", value: "6 weeks" },
        { label: "Client", value: "TechnoSoft Solutions Pvt Ltd" },
        { label: "Project Value", value: "₹8,50,000" },
        { label: "Completion Date", value: "December 2024" },
      ],
    },
    {
      id: 3,
      name: "GREEN VALLEY RESIDENTIAL",
      image: "/placeholder.svg?height=200&width=300&text=Green+Valley",
      description:
        "Comprehensive safety and security system for a premium 300-unit residential complex. Implemented fire detection, sprinkler systems, CCTV surveillance, and access control for all entry points.",
      projects: [
        "300+ Smoke Detectors Installation - November 2024",
        "Sprinkler Systems Setup - November 2024",
        "50+ CCTV Cameras Network - November 2024",
        "Vehicle Access Control - November 2024",
      ],
      additionalInfo: [
        { label: "Project Status", value: "Successfully Completed" },
        { label: "Location", value: "Wakad, Pune" },
        { label: "Duration", value: "8 weeks" },
        { label: "Client", value: "Green Valley Apartment Association" },
        { label: "Project Value", value: "₹12,75,000" },
        { label: "Completion Date", value: "November 2024" },
      ],
    },
    {
      id: 4,
      name: "PRECISION MANUFACTURING",
      image: "/placeholder.svg?height=200&width=300&text=Manufacturing",
      description:
        "End-to-end security solution for a 50-acre manufacturing facility. Installed perimeter security, 120+ cameras, vehicle tracking, employee access control, and integrated alarm systems.",
      projects: [
        "Perimeter Security Installation - October 2024",
        "120+ Camera Network Setup - October 2024",
        "Vehicle Tracking System - October 2024",
        "Employee Access Control - October 2024",
      ],
      additionalInfo: [
        { label: "Project Status", value: "Successfully Completed" },
        { label: "Location", value: "Aurangabad Industrial Area" },
        { label: "Duration", value: "10 weeks" },
        { label: "Client", value: "Precision Manufacturing Co." },
        { label: "Project Value", value: "₹15,25,000" },
        { label: "Completion Date", value: "October 2024" },
      ],
    },
    {
      id: 5,
      name: "INTERNATIONAL EDUCATION",
      image: "/placeholder.svg?height=200&width=300&text=Education",
      description:
        "Complete digital infrastructure for a modern educational campus serving 8000+ students. Implemented high-speed network, WiFi coverage, digital classrooms, and communication systems.",
      projects: [
        "Campus-wide WiFi Network - September 2024",
        "Fiber Optic Infrastructure - September 2024",
        "100+ Access Points Installation - September 2024",
        "Digital Classroom Setup - September 2024",
      ],
      additionalInfo: [
        { label: "Project Status", value: "Successfully Completed" },
        { label: "Location", value: "Hadapsar, Pune" },
        { label: "Duration", value: "12 weeks" },
        { label: "Client", value: "International Education Institute" },
        { label: "Project Value", value: "₹18,50,000" },
        { label: "Completion Date", value: "September 2024" },
      ],
    },
    {
      id: 6,
      name: "CITY CARE HOSPITAL",
      image: "/placeholder.svg?height=200&width=300&text=Hospital",
      description:
        "Specialized security and safety systems for a 200-bed hospital. Implemented patient monitoring, emergency response, access control for restricted areas, and fire safety compliance systems.",
      projects: [
        "Patient Area Monitoring - August 2024",
        "Emergency Response Systems - August 2024",
        "Restricted Access Control - August 2024",
        "Fire Safety Compliance - August 2024",
      ],
      additionalInfo: [
        { label: "Project Status", value: "Successfully Completed" },
        { label: "Location", value: "Shivajinagar, Pune" },
        { label: "Duration", value: "6 weeks" },
        { label: "Client", value: "City Care Multi-Specialty Hospital" },
        { label: "Project Value", value: "₹9,75,000" },
        { label: "Completion Date", value: "August 2024" },
      ],
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
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6 animate-fade-in-up">Our Success Stories</h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto animate-fade-in-up">
              Click on any company card to view detailed project information and implementation details.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {completedCompanies.map((company) => (
              <CompanyCard key={company.id} company={company} />
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
