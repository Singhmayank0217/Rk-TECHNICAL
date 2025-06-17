import { Card, CardContent } from "../../components/ui/Card"
import { Calendar, MapPin, Users, Building, Clock } from "lucide-react"
import BackgroundCarousel from "../../components/ui/BackgroundCarousel"

export default function OngoingProjects() {
  const ongoingImages = [
    "/images/ongoing-bg.png",
    "/placeholder.svg?height=600&width=1200&text=Smart+City+Projects",
    "/placeholder.svg?height=600&width=1200&text=Banking+Security",
    "/placeholder.svg?height=600&width=1200&text=Hotel+Security",
    "/placeholder.svg?height=600&width=1200&text=University+Campus",
  ]

  const ongoingProjects = [
    {
      title: "Smart City Security Infrastructure",
      category: "Large Scale Security",
      location: "Nashik Smart City Project",
      startDate: "January 2025",
      client: "Nashik Municipal Corporation",
      duration: "12 months",
      image: "/placeholder.svg?height=300&width=400",
      description:
        "Massive smart city security infrastructure project covering 50+ locations across Nashik. Installing traffic monitoring, public area surveillance, emergency response systems, and integrated command center.",
      progress: "25%",
      status: "On Track",
      features: [
        "Traffic Monitoring",
        "Public Surveillance",
        "Emergency Response",
        "Command Center",
        "Smart Analytics",
      ],
      budget: "₹2.5 Crores",
      expectedCompletion: "December 2025",
    },
    {
      title: "Banking Sector Security Upgrade",
      category: "Financial Security",
      location: "Multiple Branches - Maharashtra",
      startDate: "March 2025",
      client: "Maharashtra State Cooperative Bank",
      duration: "8 months",
      image: "/placeholder.svg?height=300&width=400",
      description:
        "Security system upgrade for 25 bank branches across Maharashtra. Implementing advanced CCTV, access control, alarm systems, and centralized monitoring for enhanced financial security.",
      progress: "15%",
      status: "Planning Phase",
      features: ["Advanced CCTV", "Vault Security", "ATM Monitoring", "Centralized Control", "Alarm Systems"],
      budget: "₹1.8 Crores",
      expectedCompletion: "October 2025",
    },
    {
      title: "Luxury Hotel Chain Security",
      category: "Hospitality Security",
      location: "Goa & Mumbai",
      startDate: "February 2025",
      client: "Premium Hospitality Group",
      duration: "6 months",
      image: "/placeholder.svg?height=300&width=400",
      description:
        "Complete security solution for 3 luxury hotels in Goa and Mumbai. Installing guest safety systems, property security, access control, and integrated monitoring for premium hospitality experience.",
      progress: "35%",
      status: "Installation Phase",
      features: [
        "Guest Safety Systems",
        "Property Security",
        "Access Control",
        "Integrated Monitoring",
        "Emergency Response",
      ],
      budget: "₹95,00,000",
      expectedCompletion: "July 2025",
    },
    {
      title: "University Campus Digital Infrastructure",
      category: "Educational Technology",
      location: "Savitribai Phule Pune University",
      startDate: "April 2025",
      client: "SPPU Administration",
      duration: "10 months",
      image: "/placeholder.svg?height=300&width=400",
      description:
        "Digital transformation project for university campus serving 15,000 students. Implementing campus-wide network, digital classrooms, security systems, and smart campus management.",
      progress: "10%",
      status: "Initial Phase",
      features: ["Campus Network", "Digital Classrooms", "Security Systems", "Smart Management", "Student Safety"],
      budget: "₹3.2 Crores",
      expectedCompletion: "January 2026",
    },
  ]

  const getStatusColor = (status) => {
    switch (status) {
      case "On Track":
        return "bg-green-100 text-green-800"
      case "Planning Phase":
        return "bg-blue-100 text-blue-800"
      case "Installation Phase":
        return "bg-yellow-100 text-yellow-800"
      case "Initial Phase":
        return "bg-purple-100 text-purple-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  return (
    <main>
      {/* Hero Section with Carousel */}
      <BackgroundCarousel
        images={ongoingImages}
        autoPlay={true}
        interval={6000}
        showIndicators={true}
        height="py-20"
        overlay="bg-gradient-to-r from-blue-900/90 via-purple-800/80 to-red-500/90"
      >
        <div className="container text-center text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in-up">Ongoing Projects</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto animate-fade-in-up">
            Current projects in progress showcasing our commitment to excellence and timely delivery
          </p>
        </div>
      </BackgroundCarousel>

      {/* Rest of the component remains the same */}
      {/* Current Stats */}
      <section className="py-12 bg-white">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="animate-fade-in-up">
              <div className="text-3xl font-bold text-red-500 mb-2">4</div>
              <div className="text-gray-600">Active Projects</div>
            </div>
            <div className="animate-fade-in-up">
              <div className="text-3xl font-bold text-red-500 mb-2">₹8.45Cr</div>
              <div className="text-gray-600">Total Value</div>
            </div>
            <div className="animate-fade-in-up">
              <div className="text-3xl font-bold text-red-500 mb-2">45+</div>
              <div className="text-gray-600">Team Members</div>
            </div>
            <div className="animate-fade-in-up">
              <div className="text-3xl font-bold text-red-500 mb-2">21%</div>
              <div className="text-gray-600">Avg Progress</div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 bg-gray-50">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {ongoingProjects.map((project, index) => (
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
                    <span className="bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                      In Progress
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

                  {/* Progress Bar */}
                  <div className="mb-4">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium text-gray-700">Progress</span>
                      <span className="text-sm font-medium text-red-500">{project.progress}</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-red-500 h-2 rounded-full transition-all duration-300"
                        style={{ width: project.progress }}
                      ></div>
                    </div>
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
                      <span>{project.startDate}</span>
                    </div>
                    <div className="flex items-center">
                      <Users className="w-4 h-4 mr-2 text-red-500" />
                      <span>{project.duration}</span>
                    </div>
                  </div>

                  <div className="border-t pt-4 mb-4">
                    <h4 className="font-medium text-gray-900 mb-2">Key Features:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.features.map((feature, featureIndex) => (
                        <span key={featureIndex} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="border-t pt-4">
                    <div className="flex justify-between items-center mb-2">
                      <div>
                        <span className="text-sm text-gray-500">Project Value:</span>
                        <div className="text-lg font-bold text-red-500">{project.budget}</div>
                      </div>
                      <div className="text-right">
                        <span
                          className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(project.status)}`}
                        >
                          {project.status}
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <Clock className="w-4 h-4 mr-2 text-red-500" />
                      <span>Expected completion: {project.expectedCompletion}</span>
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
