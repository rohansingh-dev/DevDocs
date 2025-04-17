import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { FileCode, FileJson, Flame, Hash, FileType, Globe, Server } from "lucide-react"

const languages = [
  {
    name: "HTML",
    icon: FileCode,
    color: "text-orange-500",
    link: "/docs/html",
  },
  {
    name: "CSS",
    icon: FileCode,
    color: "text-blue-500",
    link: "/docs/css",
  },
  {
    name: "JavaScript",
    icon: FileJson,
    color: "text-yellow-500",
    link: "/docs/javascript",
  },
  {
    name: "Python",
    icon: Flame,
    color: "text-green-500",
    link: "/docs/python",
  },
  {
    name: "C",
    icon: Hash,
    color: "text-purple-500",
    link: "/docs/c",
  },
  {
    name: "Java",
    icon: FileType,
    color: "text-red-500",
    link: "/docs/java",
  },
  {
    name: "React",
    icon: Globe,
    color: "text-cyan-500",
    link: "/docs/react",
  },
  {
    name: "Node.js",
    icon: Server,
    color: "text-emerald-500",
    link: "/docs/node",
  },
]

export function FeaturedLanguages() {
  return (
    <section className="py-12">
      <h2 className="text-3xl font-bold text-center mb-12">Featured Languages & Frameworks</h2>
      <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-8 gap-4">
        {languages.map((lang) => (
          <Link key={lang.name} href={lang.link}>
            <Card className="h-full hover:shadow-md transition-shadow">
              <CardContent className="flex flex-col items-center justify-center p-6">
                <lang.icon className={`h-10 w-10 ${lang.color} mb-2`} />
                <span className="text-sm font-medium">{lang.name}</span>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </section>
  )
}
