"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { ScrollArea } from "@/components/ui/scroll-area"


const interests = [
  "Board Games", "Video Games", "Hiking", "Camping", "Photography",
  "Cooking", "Baking", "Reading", "Writing", "Music",
  "Movies", "TV Shows", "Sports", "Fitness", "Yoga",
  "Meditation", "Art", "Crafts", "Dancing", "Singing",
  "Traveling", "Languages", "Technology", "Science", "History",
  "Philosophy", "Politics", "Volunteering", "Gardening", "Pets"
]

export default function InterestsPage() {
  const [selectedInterests, setSelectedInterests] = useState<string[]>([])
  const [isLoading, setIsLoading] = useState(false)

  const handleInterestChange = (interest: string) => {
    setSelectedInterests(prev => 
      prev.includes(interest)
        ? prev.filter(i => i !== interest)
        : [...prev, interest]
    )
  }

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setIsLoading(true)
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000))
    setIsLoading(false)
   
  }

  return (
    <div className="container mx-auto flex min-h-screen items-center justify-center bg-[#FFF5EB] p-4">
      <Card className="w-full max-w-2xl">
        <CardHeader>
          <CardTitle className="text-2xl text-center text-[#FF6B00]">Select Your Interests</CardTitle>
          <CardDescription className="text-center">Choose the activities and topics you're passionate about</CardDescription>
        </CardHeader>
        <form onSubmit={handleSubmit}>
          <CardContent>
            <ScrollArea className="h-[400px] pr-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {interests.map((interest) => (
                  <div key={interest} className="flex items-center space-x-2">
                    <Checkbox 
                      id={interest} 
                      checked={selectedInterests.includes(interest)}
                      onCheckedChange={() => handleInterestChange(interest)}
                    />
                    <Label htmlFor={interest}>{interest}</Label>
                  </div>
                ))}
              </div>
            </ScrollArea>
          </CardContent>
          <CardFooter className="flex flex-col items-center space-y-4">
            <Button 
              type="submit" 
              className="w-full bg-[#FF6B00] hover:bg-[#FF6B00]/90" 
              disabled={isLoading || selectedInterests.length === 0}
            >
              {isLoading ? "Updating..." : "Save Interests"}
            </Button>
            <p className="text-sm text-gray-500">
              Selected: {selectedInterests.length} / {interests.length}
            </p>
          </CardFooter>
        </form>
      </Card>
     
    </div>
  )
}


