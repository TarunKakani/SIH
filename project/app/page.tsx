"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Lock, TrendingUp, Puzzle, Zap, Scan, Eye, Radar, ChevronLeft, ChevronRight } from "lucide-react"

export default function ProjectDrishti() {
  const [activeTab, setActiveTab] = useState(0)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" })
  }

  const techModules = [
    {
      title: "...",
      icon: <Zap className="w-8 h-8" />,
      image: "/sleek-laser-scanner-device-for-railway-track-measu.jpg",
      description:
        "...",
    },
    {
      title: "...",
      icon: <Scan className="w-8 h-8" />,
      image: "/laser-line-projected-across-railway-rail-head-for-.jpg",
      description:
        "...",
    },
    {
      title: "...",
      icon: <Eye className="w-8 h-8" />,
      image: "/rugged-high-speed-industrial-camera-for-railway-in.jpg",
      description:
        "...",
    },
    {
      title: "...",
      icon: <Radar className="w-8 h-8" />,
      image: "/3d-point-cloud-visualization-of-railway-tunnel-cle.jpg",
      description:
        "...",
    },
  ]

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-muted/20">
          <div className="absolute inset-0 bg-[url('/abstract-railway-track-dissolving-into-glowing-dat.jpg')] bg-cover bg-center opacity-20"></div>
          {/* Floating particles effect */}
          <div className="absolute inset-0">
            {[...Array(20)].map((_, i) => (
              <div
                key={i}
                className="absolute w-2 h-2 bg-primary/30 rounded-full animate-float"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 3}s`,
                  animationDuration: `${3 + Math.random() * 2}s`,
                }}
              />
            ))}
          </div>
        </div>

        <div
          className={`relative z-10 text-center max-w-4xl mx-auto px-6 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <h1 className="font-orbitron text-6xl md:text-8xl font-black text-primary mb-6 tracking-tight">
            Project ...
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
            A New Vision for Railway Safety. <span className="text-secondary font-semibold">AI-Powered.</span>{" "}
            <span className="text-primary font-semibold">Entirely Indian.</span>
          </p>
          <Button
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 py-4 text-lg animate-glow"
            onClick={() => scrollToSection("challenge")}
          >
            Explore the Technology
          </Button>
        </div>
      </section>

      {/* Challenge Section */}
      <section id="challenge" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-orbitron text-4xl md:text-5xl font-bold text-center mb-16 text-balance">
            Securing India's <span className="text-primary">Lifeline</span>
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-card border-border hover:border-primary/50 transition-all duration-300 group">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 mx-auto mb-6 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Lock className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-primary">...</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus eligendi molestias earum magnam deleniti harum suscipit amet consectetur et aperiam, fugit ipsam! Rem repellendus necessitatibus fugit doloremque minus adipisci sint.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card border-border hover:border-secondary/50 transition-all duration-300 group">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 mx-auto mb-6 bg-secondary/10 rounded-full flex items-center justify-center group-hover:bg-secondary/20 transition-colors">
                  <TrendingUp className="w-8 h-8 text-secondary" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-secondary">...</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatibus, odit? Officiis aliquam aspernatur tenetur accusamus commodi non harum, nostrum, ut sed, nemo itaque optio eos et adipisci maiores iste perspiciatis.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card border-border hover:border-primary/50 transition-all duration-300 group">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 mx-auto mb-6 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Puzzle className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-primary">...</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa hic dolore dolorum sed eum, cumque amet consequatur excepturi laboriosam iste quos ipsum architecto ab! Natus neque dolorem dolor nemo? Dolor?
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Technology Stack Section */}
      <section className="py-20 px-6 bg-muted/5">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-orbitron text-4xl md:text-5xl font-bold text-center mb-16 text-balance">
            Inside ... : <span className="text-secondary">The Hardware</span>
          </h2>

          <div className="bg-card rounded-2xl border border-border overflow-hidden">
            {/* Tab Navigation */}
            <div className="flex overflow-x-auto border-b border-border">
              {techModules.map((module, index) => (
                <button
                  key={index}
                  onClick={() => setActiveTab(index)}
                  className={`flex-1 min-w-[200px] p-4 text-left transition-all duration-300 ${
                    activeTab === index
                      ? "bg-primary text-primary-foreground border-b-2 border-primary"
                      : "hover:bg-muted/50"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className={`${activeTab === index ? "text-primary-foreground" : "text-primary"}`}>
                      {module.icon}
                    </div>
                    <span className="font-semibold">{module.title}</span>
                  </div>
                </button>
              ))}
            </div>

            {/* Tab Content */}
            <div className="p-8">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="relative">
                  <img
                    src={techModules[activeTab].image || "/placeholder.svg"}
                    alt={techModules[activeTab].title}
                    className="w-full h-80 object-cover rounded-lg border border-border"
                  />
                  <Badge className="absolute top-4 left-4 bg-primary text-primary-foreground">
                    Module {activeTab + 1}
                  </Badge>
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-4 text-primary">{techModules[activeTab].title}</h3>
                  <p className="text-lg leading-relaxed text-muted-foreground">{techModules[activeTab].description}</p>
                  <div className="flex gap-2 mt-6">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => setActiveTab(Math.max(0, activeTab - 1))}
                      disabled={activeTab === 0}
                    >
                      <ChevronLeft className="w-4 h-4" />
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => setActiveTab(Math.min(techModules.length - 1, activeTab + 1))}
                      disabled={activeTab === techModules.length - 1}
                    >
                      <ChevronRight className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AI Analytics Section */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-orbitron text-4xl md:text-5xl font-bold text-center mb-16 text-balance">
            The Brain: <span className="text-secondary">AI-Powered Analytics</span>
          </h2>

          <div className="relative">
            <Card className="bg-card border-border overflow-hidden">
              <CardContent className="p-0">
                <img
                  src="/futuristic-railway-monitoring-dashboard-with-map--.jpg"
                  alt="Project Drishti AI Dashboard"
                  className="w-full h-96 md:h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent"></div>
                <div className="absolute bottom-8 left-8 right-8">
                  <div className="grid md:grid-cols-3 gap-4">
                    <div className="bg-card/90 backdrop-blur-sm rounded-lg p-4 border border-border">
                      <div className="text-2xl font-bold text-primary">99.7%</div>
                      <div className="text-sm text-muted-foreground">Detection Accuracy</div>
                    </div>
                    <div className="bg-card/90 backdrop-blur-sm rounded-lg p-4 border border-border">
                      <div className="text-2xl font-bold text-secondary">Real-time</div>
                      <div className="text-sm text-muted-foreground">Data Processing</div>
                    </div>
                    <div className="bg-card/90 backdrop-blur-sm rounded-lg p-4 border border-border">
                      <div className="text-2xl font-bold text-primary">24/7</div>
                      <div className="text-sm text-muted-foreground">Monitoring</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-border">
        <div className="max-w-6xl mx-auto text-center">
          <div className="flex justify-center items-center gap-8 mb-6">
            <img src="/make-in-india-logo.jpg" alt="Make in India" className="h-12 opacity-80" />
            <img src="/indian-railways-logo.jpg" alt="Indian Railways" className="h-12 opacity-80" />
          </div>
          <p className="text-muted-foreground">
            <span className="font-orbitron font-bold text-primary">Project ...</span> - Smart India Hackathon 2025
          </p>
          <p className="text-sm text-muted-foreground mt-2">Empowering Indian Railways with Indigenous AI Technology</p>
        </div>
      </footer>
    </div>
  )
}
