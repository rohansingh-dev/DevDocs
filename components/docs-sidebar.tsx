"use client"

import { usePathname } from "next/navigation"
import { Code, FileCode, FileJson, FileType, Flame, Globe, Hash, Home, Layers, Server } from 'lucide-react'
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
} from "@/components/ui/sidebar"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function DocsSidebar() {
  const pathname = usePathname()

  const isActive = (path: string) => {
    return pathname === path || pathname?.startsWith(`${path}/`)
  }

  return (
    <Sidebar variant="sidebar" collapsible="icon">
      <SidebarHeader className="border-b">
        <div className="flex items-center px-2 py-3">
          <Link href="/" className="flex items-center gap-2 font-bold">
            <Code className="h-6 w-6" />
            <span>DevDocs</span>
          </Link>
        </div>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Getting Started</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton asChild isActive={isActive("/docs/getting-started")} tooltip="Getting Started">
                  <Link href="/docs/getting-started">
                    <Home className="h-4 w-4" />
                    <span>Introduction</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarGroup>
          <SidebarGroupLabel>Web Fundamentals</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton asChild isActive={isActive("/docs/html")} tooltip="HTML">
                  <Link href="/docs/html">
                    <FileCode className="h-4 w-4" />
                    <span>HTML</span>
                  </Link>
                </SidebarMenuButton>
                <SidebarMenuSub>
                  <SidebarMenuSubItem>
                    <SidebarMenuSubButton asChild isActive={isActive("/docs/html/basics")}>
                      <Link href="/docs/html/basics">Basics</Link>
                    </SidebarMenuSubButton>
                  </SidebarMenuSubItem>
                  <SidebarMenuSubItem>
                    <SidebarMenuSubButton asChild isActive={isActive("/docs/html/elements")}>
                      <Link href="/docs/html/elements">Elements</Link>
                    </SidebarMenuSubButton>
                  </SidebarMenuSubItem>
                  <SidebarMenuSubItem>
                    <SidebarMenuSubButton asChild isActive={isActive("/docs/html/forms")}>
                      <Link href="/docs/html/forms">Forms</Link>
                    </SidebarMenuSubButton>
                  </SidebarMenuSubItem>
                </SidebarMenuSub>
              </SidebarMenuItem>

              <SidebarMenuItem>
                <SidebarMenuButton asChild isActive={isActive("/docs/css")} tooltip="CSS">
                  <Link href="/docs/css">
                    <Layers className="h-4 w-4" />
                    <span>CSS</span>
                  </Link>
                </SidebarMenuButton>
                <SidebarMenuSub>
                  <SidebarMenuSubItem>
                    <SidebarMenuSubButton asChild isActive={isActive("/docs/css/basics")}>
                      <Link href="/docs/css/basics">Basics</Link>
                    </SidebarMenuSubButton>
                  </SidebarMenuSubItem>
                  <SidebarMenuSubItem>
                    <SidebarMenuSubButton asChild isActive={isActive("/docs/css/layout")}>
                      <Link href="/docs/css/layout">Layout</Link>
                    </SidebarMenuSubButton>
                  </SidebarMenuSubItem>
                  <SidebarMenuSubItem>
                    <SidebarMenuSubButton asChild isActive={isActive("/docs/css/responsive")}>
                      <Link href="/docs/css/responsive">Responsive Design</Link>
                    </SidebarMenuSubButton>
                  </SidebarMenuSubItem>
                </SidebarMenuSub>
              </SidebarMenuItem>

              <SidebarMenuItem>
                <SidebarMenuButton asChild isActive={isActive("/docs/javascript")} tooltip="JavaScript">
                  <Link href="/docs/javascript">
                    <FileJson className="h-4 w-4" />
                    <span>JavaScript</span>
                  </Link>
                </SidebarMenuButton>
                <SidebarMenuSub>
                  <SidebarMenuSubItem>
                    <SidebarMenuSubButton asChild isActive={isActive("/docs/javascript/basics")}>
                      <Link href="/docs/javascript/basics">Basics</Link>
                    </SidebarMenuSubButton>
                  </SidebarMenuSubItem>
                  <SidebarMenuSubItem>
                    <SidebarMenuSubButton asChild isActive={isActive("/docs/javascript/dom")}>
                      <Link href="/docs/javascript/dom">DOM</Link>
                    </SidebarMenuSubButton>
                  </SidebarMenuSubItem>
                  <SidebarMenuSubItem>
                    <SidebarMenuSubButton asChild isActive={isActive("/docs/javascript/es6")}>
                      <Link href="/docs/javascript/es6">ES6+</Link>
                    </SidebarMenuSubButton>
                  </SidebarMenuSubItem>
                </SidebarMenuSub>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarGroup>
          <SidebarGroupLabel>Programming Languages</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton asChild isActive={isActive("/docs/python")} tooltip="Python">
                  <Link href="/docs/python">
                    <Flame className="h-4 w-4" />
                    <span>Python</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton asChild isActive={isActive("/docs/c")} tooltip="C Language">
                  <Link href="/docs/c">
                    <Hash className="h-4 w-4" />
                    <span>C Language</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton asChild isActive={isActive("/docs/java")} tooltip="Java">
                  <Link href="/docs/java">
                    <FileType className="h-4 w-4" />
                    <span>Java</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarGroup>
          <SidebarGroupLabel>Frameworks</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton asChild isActive={isActive("/docs/react")} tooltip="React">
                  <Link href="/docs/react">
                    <Globe className="h-4 w-4" />
                    <span>React</span>
                  </Link>
                </SidebarMenuButton>
                <SidebarMenuSub>
                  <SidebarMenuSubItem>
                    <SidebarMenuSubButton asChild isActive={isActive("/docs/react/hooks")}>
                      <Link href="/docs/react/hooks">Hooks</Link>
                    </SidebarMenuSubButton>
                  </SidebarMenuSubItem>
                  <SidebarMenuSubItem>
                    <SidebarMenuSubButton asChild isActive={isActive("/docs/react/state-management")}>
                      <Link href="/docs/react/state-management">State Management</Link>
                    </SidebarMenuSubButton>
                  </SidebarMenuSubItem>
                  <SidebarMenuSubItem>
                    <SidebarMenuSubButton asChild isActive={isActive("/docs/react/server-components")}>
                      <Link href="/docs/react/server-components">Server Components</Link>
                    </SidebarMenuSubButton>
                  </SidebarMenuSubItem>
                </SidebarMenuSub>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton asChild isActive={isActive("/docs/node")} tooltip="Node.js">
                  <Link href="/docs/node">
                    <Server className="h-4 w-4" />
                    <span>Node.js</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter className="border-t">
        <div className="p-4">
          <Button asChild variant="outline" className="w-full">
            <Link href="/contact">Need Help?</Link>
          </Button>
        </div>
      </SidebarFooter>
    </Sidebar>
  )
}
