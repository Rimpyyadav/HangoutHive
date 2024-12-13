import { Avatar } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Users, MapPin, Calendar } from 'lucide-react'
import Image from "next/image"
import Link from "next/link"


export default function Page() {
  return (
    <div className="min-h-screen bg-[#FFF5EB]">
      <header className="container mx-auto px-4 py-6">
        <nav className="flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold text-[#FF6B00]">
            HangoutHive
          </Link>
          <div className="hidden md:flex items-center space-x-8">
            <Link href="#about" className="text-sm font-medium">
              About us
            </Link>
            <Link href="#activities" className="text-sm font-medium">
              Activities
            </Link>
            <Link href="#events" className="text-sm font-medium">
              Events
            </Link>
            <Link href="#contact" className="text-sm font-medium">
              Contact
            </Link>
          </div>
          <Avatar className="h-8 w-8">
            <Image
              alt="Avatar"
              src="/placeholder.svg?height=32&width=32"
              width={32}
              height={32}
            />
          </Avatar>
        </nav>
      </header>
      <main className="container mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl font-bold tracking-tight text-[#1A1A1A]">
                connecting
                <br />
                made easy
              </h1>
              <p className="text-gray-600 max-w-md">
                Find like-minded people nearby for hanging out, playing games, or joining activities
              </p>
              <div className="flex items-center space-x-4">
                <Button
                  className="rounded-full bg-[#FF6B00] hover:bg-[#FF6B00]/90 text-white px-8"
                >
                  Join Now
                </Button>
                <svg
                  className="w-24 h-12 text-[#FF6B00]"
                  viewBox="0 0 100 50"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M0,25 Q50,0 100,25" />
                </svg>
              </div>
            </div>
          </div>
          <div className="relative">
            <Image
              src="/placeholder.svg?height=600&width=600"
              alt="People hanging out"
              width={600}
              height={600}
              className="w-full rounded-lg shadow-lg"
              priority
            />
            <Card className="absolute top-0 right-0 p-6 space-y-6 bg-white/80 backdrop-blur-sm">
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-[#FF6B00] rounded-lg">
                    <Users className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <p className="font-medium">Connect</p>
                    <p className="text-sm text-gray-600">Find new friends</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-[#FF6B00] rounded-lg">
                    <MapPin className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <p className="font-medium">Explore</p>
                    <p className="text-sm text-gray-600">Discover local spots</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-[#FF6B00] rounded-lg">
                    <Calendar className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <p className="font-medium">Events</p>
                    <p className="text-sm text-gray-600">Join fun activities</p>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
        <section className="mt-24">
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-[#1A1A1A]">Popular Activities</h2>
            <p className="text-gray-600">Find your favorite way to connect</p>
            <p className="text-sm text-gray-500 max-w-md">
              Discover a wide range of activities and events to join, from casual meetups to organized games and adventures
            </p>
          </div>
          <div className="mt-8 grid grid-cols-2 md:grid-cols-5 gap-8 items-center">
            {["Board Games", "Hiking", "Movie Nights", "Sports", "Cooking"].map((activity) => (
              <Card key={activity} className="p-4 text-center hover:shadow-md transition-shadow">
                <Image
                  src="/placeholder.svg?height=64&width=64"
                  alt={activity}
                  width={64}
                  height={64}
                  className="mx-auto mb-2"
                />
                <p className="font-medium text-[#1A1A1A]">{activity}</p>
              </Card>
            ))}
          </div>
        </section>
      </main>
    </div>
  )
}

