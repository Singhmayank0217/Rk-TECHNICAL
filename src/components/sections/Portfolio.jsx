import { Link } from "react-router-dom"
import Button from "../ui/Button"
import { Card, CardContent } from "../ui/Card"
import { ExternalLink, Calendar, MapPin, ArrowRight } from "lucide-react"

export default function Portfolio() {
  const projects = [
    {
      title: "Corporate Office Security",
      category: "CCTV & Access Control",
      location: "Mumbai, Maharashtra",
      date: "2024",
      image: "/placeholder.svg?height=300&width=400",
      description:
        "Complete security overhaul for a 10-story corporate building including CCTV, access control, and fire safety systems.",
    },
    {
      title: "Residential Complex Safety",
      category: "Fire Safety & Alarms",
      location: "Pune, Maharashtra",
      date: "2024",
      image: "/placeholder.svg?height=300&width=400",
      description:
        "Comprehensive fire safety installation for a 200-unit residential complex with advanced detection systems.",
    },
    {
      title: "Industrial Facility Security",
      category: "Complete Security Solution",
      location: "Nashik, Maharashtra",
      date: "2023",
      image: "/placeholder.svg?height=300&width=400",
      description:
        "End-to-end security solution for manufacturing facility including perimeter security and monitoring systems.",
    },
    {
      title: "Educational Institution",
      category: "Network & Communication",
      location: "Nagpur, Maharashtra",
      date: "2023",
      image: "/placeholder.svg?height=300&width=400",
      description:
        "Network infrastructure and communication systems for a large educational campus with 5000+ students.",
    },
  ]

  return (
    <section className="py-20 bg-white">
      <div className="container">
        <div className="text-center mb-16">
          <span className="text-red-500 font-semibold text-lg">OUR PORTFOLIO</span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-2 mb-6">
            Recent <span className="text-red-500">Project Showcase</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            Explore our recent projects and see how we've helped businesses and organizations enhance their safety and
            security infrastructure.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="overflow-hidden hover:shadow-xl transition-shadow duration-300 group animate-fade-in-up"
            >
              <div className="relative">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {project.category}
                  </span>
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                  <div className="flex items-center">
                    <MapPin className="w-4 h-4 mr-1" />
                    {project.location}
                  </div>
                  <div className="flex items-center">
                    <Calendar className="w-4 h-4 mr-1" />
                    {project.date}
                  </div>
                </div>
                <Button
                  variant="outline"
                  size="sm"
                  className="w-full group-hover:bg-red-500 group-hover:text-white group-hover:border-red-500 transition-colors duration-300"
                >
                  <ExternalLink className="w-4 h-4 mr-2" />
                  View Project Details
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Link to="/portfolio/completed">
            <Button className="bg-red-500 hover:bg-red-600 transition-colors duration-300">
              View All Projects
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
