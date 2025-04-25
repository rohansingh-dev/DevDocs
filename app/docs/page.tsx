import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import { FileCode, FileJson, Flame, Hash, FileType, Globe, Server } from "lucide-react"
import { AdBanner } from "@/components/ad-banner";

export default function DocsPage() {
  const categories = [
    {
      title: "Web Fundamentals",
      description: "Learn the core technologies of the web",
      items: [
        { name: "HTML", icon: FileCode, link: "/docs/html", color: "text-orange-500" },
        { name: "CSS", icon: FileCode, link: "/docs/css", color: "text-blue-500" },
        { name: "JavaScript", icon: FileJson, link: "/docs/javascript", color: "text-yellow-500" },
      ],
    },
    {
      title: "Programming Languages",
      description: "Master popular programming languages",
      items: [
        { name: "Python", icon: Flame, link: "/docs/python", color: "text-green-500" },
        { name: "C Language", icon: Hash, link: "/docs/c", color: "text-purple-500" },
        { name: "Java", icon: FileType, link: "/docs/java", color: "text-red-500" },
      ],
    },
    {
      title: "Frameworks",
      description: "Build modern applications with popular frameworks",
      items: [
        { name: "React", icon: Globe, link: "/docs/react", color: "text-cyan-500" },
        { name: "Node.js", icon: Server, link: "/docs/node", color: "text-emerald-500" },
      ],
    },
  ]

  return (
    <div className="container pb-8 mx-auto space-y-12">
      <div className="space-y-4">
        <h1 className="text-4xl font-bold">Documentation</h1>
        <p className="text-xl text-muted-foreground">
          Comprehensive guides and references for developers of all skill levels.
        </p>
      </div>

      <AdBanner slot="4987094295" format="auto" className="my-4" />

      <div className="space-y-8">
        {categories.map((category) => (
          <div key={category.title} className="space-y-4">
            <div>
              <h2 className="text-2xl font-bold">{category.title}</h2>
              <p className="text-muted-foreground">{category.description}</p>
            </div>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
              {category.items.map((item) => (
                <Link key={item.name} href={item.link}>
                  <Card className="h-full transition-shadow hover:shadow-md">
                    <CardHeader className="pb-2">
                      <CardTitle className="flex items-center gap-2">
                        <item.icon className={`h-5 w-5 ${item.color}`} />
                        {item.name}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription>Learn {item.name} from beginner to advanced levels</CardDescription>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
