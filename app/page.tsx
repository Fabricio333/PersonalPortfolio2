import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowRight, Briefcase, FileText, Github, Linkedin, Mail, MessageSquare, PenTool } from "lucide-react"
import NostrFeed from "@/components/nostr-feed"
import ProjectCard from "@/components/project-card"
import ExperienceItem from "@/components/experience-item"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-2 font-bold">
            <span className="text-xl">Portfolio</span>
          </Link>
          <nav className="hidden md:flex gap-6">
            <Link href="#about" className="text-sm font-medium hover:underline underline-offset-4">
              About
            </Link>
            <Link href="#experience" className="text-sm font-medium hover:underline underline-offset-4">
              Experience
            </Link>
            <Link href="#projects" className="text-sm font-medium hover:underline underline-offset-4">
              Projects
            </Link>
            <Link href="#writings" className="text-sm font-medium hover:underline underline-offset-4">
              Writings
            </Link>
            <Link href="#contact" className="text-sm font-medium hover:underline underline-offset-4">
              Contact
            </Link>
          </nav>
          <div className="flex items-center gap-2">
            <Button variant="outline" size="icon" asChild>
              <Link href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
                <Github className="h-4 w-4" />
                <span className="sr-only">GitHub</span>
              </Link>
            </Button>
            <Button variant="outline" size="icon" asChild>
              <Link href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">
                <Linkedin className="h-4 w-4" />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </Button>
            <Button variant="default" asChild>
              <Link href="#contact">Contact Me</Link>
            </Button>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <section id="about" className="container py-24 sm:py-32">
          <div className="grid gap-8 lg:grid-cols-[1fr_400px] lg:gap-16">
            <div className="space-y-6">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
                Hi, I'm <span className="text-primary">Your Name</span>
              </h1>
              <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                I'm a passionate developer with expertise in web development, cloud architecture, and distributed
                systems. This portfolio showcases my professional journey, projects, and writings.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button asChild>
                  <Link href="#projects">
                    View My Projects <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link href="/resume.pdf" target="_blank" rel="noopener noreferrer">
                    <FileText className="mr-2 h-4 w-4" /> Download Resume
                  </Link>
                </Button>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="relative aspect-square overflow-hidden rounded-full border-8 border-muted w-[300px] h-[300px]">
                <img
                  src="placeholder.svg?height=300&width=300"
                  alt="Profile"
                  className="object-cover"
                  width={300}
                  height={300}
                />
              </div>
            </div>
          </div>
        </section>

        <section id="experience" className="container py-12 sm:py-16 border-t">
          <div className="flex flex-col items-center justify-center text-center mb-12">
            <div className="flex items-center justify-center p-2 rounded-full bg-primary/10 mb-4">
              <Briefcase className="h-6 w-6 text-primary" />
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Professional Experience</h2>
            <p className="mt-4 max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              My professional journey and the skills I've developed along the way.
            </p>
          </div>

          <div className="space-y-8">
            <ExperienceItem
              title="Senior Software Engineer"
              company="Example Tech"
              period="2021 - Present"
              description="Led the development of cloud-native applications using React, Node.js, and AWS. Implemented CI/CD pipelines and mentored junior developers."
              skills={["React", "Node.js", "AWS", "Docker", "CI/CD"]}
            />

            <ExperienceItem
              title="Software Engineer"
              company="Tech Solutions Inc."
              period="2018 - 2021"
              description="Developed and maintained web applications using JavaScript, TypeScript, and various frontend frameworks. Collaborated with cross-functional teams to deliver high-quality software."
              skills={["JavaScript", "TypeScript", "React", "Vue.js", "REST APIs"]}
            />

            <ExperienceItem
              title="Junior Developer"
              company="Startup Innovations"
              period="2016 - 2018"
              description="Assisted in the development of web applications and implemented responsive designs. Participated in code reviews and agile development processes."
              skills={["HTML/CSS", "JavaScript", "Responsive Design", "Git"]}
            />
          </div>
        </section>

        <section id="projects" className="container py-12 sm:py-16 border-t bg-muted/50">
          <div className="flex flex-col items-center justify-center text-center mb-12">
            <div className="flex items-center justify-center p-2 rounded-full bg-primary/10 mb-4">
              <Github className="h-6 w-6 text-primary" />
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Featured Projects</h2>
            <p className="mt-4 max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              A selection of my recent work and personal projects.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <ProjectCard
              title="Decentralized Social Platform"
              description="A social media platform built on decentralized technologies, featuring user authentication, content sharing, and real-time interactions."
              image="placeholder.svg?height=200&width=400"
              tags={["React", "Node.js", "Blockchain", "WebRTC"]}
              githubUrl="https://github.com/yourusername/project1"
              demoUrl="https://project1-demo.com"
            />

            <ProjectCard
              title="E-commerce Solution"
              description="A full-featured e-commerce platform with product management, shopping cart, payment processing, and order tracking."
              image="placeholder.svg?height=200&width=400"
              tags={["Next.js", "Stripe", "MongoDB", "Tailwind CSS"]}
              githubUrl="https://github.com/yourusername/project2"
              demoUrl="https://project2-demo.com"
            />

            <ProjectCard
              title="AI-Powered Analytics Dashboard"
              description="An analytics dashboard that uses machine learning to provide insights from user data, featuring interactive visualizations and predictive analytics."
              image="placeholder.svg?height=200&width=400"
              tags={["Python", "TensorFlow", "D3.js", "Flask"]}
              githubUrl="https://github.com/yourusername/project3"
              demoUrl="https://project3-demo.com"
            />
          </div>

          <div className="flex justify-center mt-8">
            <Button variant="outline" asChild>
              <Link href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
                <Github className="mr-2 h-4 w-4" /> View All Projects on GitHub
              </Link>
            </Button>
          </div>
        </section>

        <section id="writings" className="container py-12 sm:py-16 border-t">
          <div className="flex flex-col items-center justify-center text-center mb-12">
            <div className="flex items-center justify-center p-2 rounded-full bg-primary/10 mb-4">
              <PenTool className="h-6 w-6 text-primary" />
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Professional Writings</h2>
            <p className="mt-4 max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Articles and thoughts I've shared on Nostr and other platforms.
            </p>
          </div>

          <Tabs defaultValue="nostr" className="w-full">
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-2">
              <TabsTrigger value="nostr">Nostr Feed</TabsTrigger>
              <TabsTrigger value="articles">Featured Articles</TabsTrigger>
            </TabsList>
            <TabsContent value="nostr" className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle>My Nostr Feed</CardTitle>
                  <CardDescription>Latest thoughts and articles published on Nostr.</CardDescription>
                </CardHeader>
                <CardContent>
                  <NostrFeed pubkey="your-nostr-pubkey" />
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="articles" className="mt-6">
              <div className="grid gap-6 sm:grid-cols-2">
                <Card>
                  <CardHeader>
                    <CardTitle>The Future of Decentralized Web</CardTitle>
                    <CardDescription>Published on March 15, 2023</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      An exploration of how decentralized technologies are reshaping the internet and creating new
                      possibilities for digital sovereignty.
                    </p>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" className="w-full" asChild>
                      <Link href="#">Read Article</Link>
                    </Button>
                  </CardFooter>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Building Resilient Microservices</CardTitle>
                    <CardDescription>Published on January 22, 2023</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      A technical deep dive into strategies for creating robust, fault-tolerant microservice
                      architectures.
                    </p>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" className="w-full" asChild>
                      <Link href="#">Read Article</Link>
                    </Button>
                  </CardFooter>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </section>

        <section id="contact" className="container py-12 sm:py-16 border-t bg-muted/50">
          <div className="flex flex-col items-center justify-center text-center mb-12">
            <div className="flex items-center justify-center p-2 rounded-full bg-primary/10 mb-4">
              <Mail className="h-6 w-6 text-primary" />
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Get In Touch</h2>
            <p className="mt-4 max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Have a project in mind or want to discuss opportunities? I'd love to hear from you.
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Send Me a Message</CardTitle>
                <CardDescription>Fill out the form below and I'll get back to you as soon as possible.</CardDescription>
              </CardHeader>
              <CardContent>
                <form className="grid gap-4">
                  <div className="grid gap-2">
                    <label htmlFor="name" className="text-sm font-medium">
                      Name
                    </label>
                    <input
                      id="name"
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      placeholder="Your name"
                    />
                  </div>
                  <div className="grid gap-2">
                    <label htmlFor="email" className="text-sm font-medium">
                      Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      placeholder="Your email"
                    />
                  </div>
                  <div className="grid gap-2">
                    <label htmlFor="message" className="text-sm font-medium">
                      Message
                    </label>
                    <textarea
                      id="message"
                      className="flex min-h-[120px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      placeholder="Your message"
                    />
                  </div>
                  <Button type="submit" className="w-full">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>

            <div className="flex flex-col justify-center gap-4">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Mail className="h-5 w-5" /> Email
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <Link href="mailto:your.email@example.com" className="text-primary hover:underline">
                    your.email@example.com
                  </Link>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Linkedin className="h-5 w-5" /> LinkedIn
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <Link
                    href="https://linkedin.com/in/yourusername"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline"
                  >
                    linkedin.com/in/yourusername
                  </Link>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <MessageSquare className="h-5 w-5" /> Nostr
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="font-mono text-sm break-all">npub1your-nostr-public-key</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <footer className="border-t py-6 md:py-0">
        <div className="container flex flex-col items-center justify-between gap-4 md:h-16 md:flex-row">
          <p className="text-sm text-muted-foreground">© {new Date().getFullYear()} Your Name. All rights reserved.</p>
          <p className="text-sm text-muted-foreground">Built with Next.js and hosted on GitHub Pages</p>
        </div>
      </footer>
    </div>
  )
}

