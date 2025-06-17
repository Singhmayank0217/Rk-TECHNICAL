import { Link } from "react-router-dom"
import Button from "../ui/Button"
import CompanyCard from "../ui/CompanyCard"
import { ArrowRight, Building, Users, Award, TrendingUp } from "lucide-react"
import polixel from "../../assests/polixel.jpg"

export default function Portfolio() {
  const companies = [
    {
      id: 1,
      name: "POLIXEL INDIA",
      image: polixel,
      location: "Kolkata, West Bengal",
      year: "2012 - 2015",
      value: "₹8.5L",
      status: "Completed",
      description:
        "This was one of our First Project in Kolkata here we worked over here as an Installation of CCTV Cameras, FIRE, Safety, and Security Systems",
      projects: ["Unitech BUILDING in the Year - 2012", "Coal India NS ROAD - 2015"],
      additionalInfo: [
        { label: "Project Type", value: "Security Systems Installation" },
        { label: "Location", value: "Kolkata, West Bengal" },
        { label: "Duration", value: "2012 - 2015" },
        { label: "Services", value: "CCTV, Fire Safety, Security Systems" },
        { label: "Project Value", value: "₹8,50,000" },
        { label: "Client Satisfaction", value: "100%" },
      ],
    },
    {
      id: 2,
      name: "TECH SOLUTIONS PVT LTD",
      image: "/placeholder.svg?height=200&width=300&text=Tech+Solutions",
      location: "Mumbai, Maharashtra",
      year: "2018 - 2020",
      value: "₹15.2L",
      status: "Completed",
      description:
        "Complete security infrastructure setup for a leading technology company including advanced surveillance systems and access control solutions.",
      projects: [
        "Corporate Office Security - Mumbai (2018)",
        "Data Center Protection - Pune (2019)",
        "Branch Office Network - Delhi (2020)",
      ],
      additionalInfo: [
        { label: "Project Type", value: "Corporate Security Solutions" },
        { label: "Location", value: "Mumbai, Pune, Delhi" },
        { label: "Duration", value: "2018 - 2020" },
        { label: "Services", value: "CCTV, Access Control, Network Security" },
        { label: "Project Value", value: "₹15,20,000" },
        { label: "Client Satisfaction", value: "100%" },
      ],
    },
    {
      id: 3,
      name: "MANUFACTURING CORP",
      image: "/placeholder.svg?height=200&width=300&text=Manufacturing+Corp",
      location: "Aurangabad, Maharashtra",
      year: "2019 - 2021",
      value: "₹22.8L",
      status: "Completed",
      description:
        "Industrial security solutions for manufacturing facilities including perimeter security, employee access control, and safety monitoring systems.",
      projects: [
        "Factory Floor Monitoring - Aurangabad (2019)",
        "Warehouse Security - Nashik (2020)",
        "Quality Control Systems - Pune (2021)",
      ],
      additionalInfo: [
        { label: "Project Type", value: "Industrial Security" },
        { label: "Location", value: "Maharashtra Industrial Belt" },
        { label: "Duration", value: "2019 - 2021" },
        { label: "Services", value: "Perimeter Security, Access Control, Safety Systems" },
        { label: "Project Value", value: "₹22,80,000" },
        { label: "Client Satisfaction", value: "100%" },
      ],
    },
    {
      id: 4,
      name: "HEALTHCARE SYSTEMS",
      image: "/placeholder.svg?height=200&width=300&text=Healthcare+Systems",
      location: "Pune, Maharashtra",
      year: "2020 - 2022",
      value: "₹18.5L",
      status: "Completed",
      description:
        "Specialized security and safety systems for healthcare facilities ensuring patient safety, data protection, and emergency response capabilities.",
      projects: [
        "Multi-Specialty Hospital - Mumbai (2020)",
        "Diagnostic Center Network - Pune (2021)",
        "Emergency Response Systems - Nagpur (2022)",
      ],
      additionalInfo: [
        { label: "Project Type", value: "Healthcare Security" },
        { label: "Location", value: "Mumbai, Pune, Nagpur" },
        { label: "Duration", value: "2020 - 2022" },
        { label: "Services", value: "Patient Safety, Data Security, Emergency Systems" },
        { label: "Project Value", value: "₹18,50,000" },
        { label: "Client Satisfaction", value: "100%" },
      ],
    },
    {
      id: 5,
      name: "EDUCATION INSTITUTE",
      image: "/placeholder.svg?height=200&width=300&text=Education+Institute",
      location: "Mumbai, Maharashtra",
      year: "2021 - 2023",
      value: "₹25.3L",
      status: "Completed",
      description:
        "Comprehensive campus security and digital infrastructure for educational institutions ensuring student safety and modern learning environments.",
      projects: [
        "Campus Security Network - Pune (2021)",
        "Digital Classroom Setup - Mumbai (2022)",
        "Student Safety Systems - Nashik (2023)",
      ],
      additionalInfo: [
        { label: "Project Type", value: "Educational Infrastructure" },
        { label: "Location", value: "Pune, Mumbai, Nashik" },
        { label: "Duration", value: "2021 - 2023" },
        { label: "Services", value: "Campus Security, Digital Infrastructure, Safety Systems" },
        { label: "Project Value", value: "₹25,30,000" },
        { label: "Client Satisfaction", value: "100%" },
      ],
    },
    {
      id: 6,
      name: "RETAIL CHAIN",
      image: "/placeholder.svg?height=200&width=300&text=Retail+Chain",
      location: "Maharashtra State",
      year: "2022 - 2024",
      value: "₹32.1L",
      status: "Completed",
      description:
        "Multi-location retail security solutions including theft prevention, customer safety, and inventory monitoring across various store formats.",
      projects: [
        "Shopping Mall Security - Mumbai (2022)",
        "Store Chain Network - Maharashtra (2023)",
        "Inventory Monitoring Systems - Pune (2024)",
      ],
      additionalInfo: [
        { label: "Project Type", value: "Retail Security Solutions" },
        { label: "Location", value: "Maharashtra State" },
        { label: "Duration", value: "2022 - 2024" },
        { label: "Services", value: "Theft Prevention, Customer Safety, Inventory Monitoring" },
        { label: "Project Value", value: "₹32,10,000" },
        { label: "Client Satisfaction", value: "100%" },
      ],
    },
  ]

  const stats = [
    { icon: Building, number: "500+", label: "Projects Completed", color: "text-blue-600" },
    { icon: Users, number: "200+", label: "Happy Clients", color: "text-green-600" },
    { icon: Award, number: "14+", label: "Years Experience", color: "text-purple-600" },
    { icon: TrendingUp, number: "99%", label: "Success Rate", color: "text-red-600" },
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-blue-50">
      <div className="container">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-block bg-gradient-to-r from-red-600 to-red-800 text-white px-6 py-2 rounded-full text-sm font-semibold font-tinos mb-4">
            OUR PORTFOLIO
          </div>
          <h2 className="text-4xl md:text-5xl font-newsreader font-bold text-gray-900 mt-2 mb-6">
            Our{" "}
            <span className="bg-gradient-to-r from-red-600 to-purple-600 bg-clip-text text-transparent">
              Trusted Partners
            </span>
          </h2>
          <p className="text-slate-700 text-lg font-serif max-w-3xl mx-auto leading-relaxed">
            Explore our successful partnerships and projects with leading companies across various industries. Click on
            any card to see detailed project information and implementation stories.
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => {
            const Icon = stat.icon
            return (
              <div
                key={index}
                className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 text-center group hover:-translate-y-1"
              >
                <div
                  className={`inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-gray-100 to-gray-200 mb-4 group-hover:scale-110 transition-transform duration-300`}
                >
                  <Icon className={`w-6 h-6 ${stat.color}`} />
                </div>
                <div className={`text-2xl font-bold ${stat.color} mb-1`}>{stat.number}</div>
                <div className="text-gray-600 text-sm">{stat.label}</div>
              </div>
            )
          })}
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {companies.map((company) => (
            <CompanyCard key={company.id} company={company} />
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-to-r from-blue-600 to-purple-600 p-8 rounded-2xl text-white">
          <h3 className="text-2xl font-bold font-tinos mb-4">Ready to Start Your Project?</h3>
          <p className="text-blue-100 mb-6 font-serif max-w-2xl mx-auto">
            Join our growing list of satisfied clients and let us help you implement the perfect security solution for
            your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/portfolio/completed">
              <Button className="bg-red-600 text-white hover:bg-red-800 transition-colors duration-300">
                View All Projects
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
            <Link to="/contact">
              <Button
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-blue-600 transition-colors duration-300"
              >
                Get Started Today
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
