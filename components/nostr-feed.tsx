"use client"

import { useEffect, useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Skeleton } from "@/components/ui/skeleton"
import { ExternalLink } from "lucide-react"
import Link from "next/link"

interface NostrEvent {
  id: string
  pubkey: string
  created_at: number
  content: string
}

interface NostrFeedProps {
  pubkey: string
}

export default function NostrFeed({ pubkey }: NostrFeedProps) {
  const [events, setEvents] = useState<NostrEvent[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // This is a placeholder for actual Nostr integration
    // In a real implementation, you would connect to Nostr relays
    // and fetch events for the given pubkey

    // Simulating API call with timeout
    const timeout = setTimeout(() => {
      const mockEvents = [
        {
          id: "event1",
          pubkey,
          created_at: Date.now() / 1000 - 3600,
          content: "Just published a new article on decentralized identity systems and their implications for privacy.",
        },
        {
          id: "event2",
          pubkey,
          created_at: Date.now() / 1000 - 86400,
          content: "Exploring the intersection of blockchain technology and traditional web development frameworks.",
        },
        {
          id: "event3",
          pubkey,
          created_at: Date.now() / 1000 - 172800,
          content: "Thoughts on the future of web3 and how developers can prepare for the changing landscape.",
        },
      ]

      setEvents(mockEvents)
      setLoading(false)
    }, 1500)

    return () => clearTimeout(timeout)
  }, [pubkey])

  const formatDate = (timestamp: number) => {
    const date = new Date(timestamp * 1000)
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    })
  }

  if (loading) {
    return (
      <div className="space-y-4">
        {[1, 2, 3].map((i) => (
          <Card key={i}>
            <CardHeader>
              <Skeleton className="h-4 w-[250px]" />
              <Skeleton className="h-3 w-[100px]" />
            </CardHeader>
            <CardContent>
              <Skeleton className="h-20 w-full" />
            </CardContent>
          </Card>
        ))}
      </div>
    )
  }

  return (
    <div className="space-y-4">
      {events.length > 0 ? (
        events.map((event) => (
          <Card key={event.id}>
            <CardHeader>
              <CardTitle className="text-lg">Note</CardTitle>
              <CardDescription>{formatDate(event.created_at)}</CardDescription>
            </CardHeader>
            <CardContent>
              <p>{event.content}</p>
              <div className="mt-4">
                <Link
                  href={`https://snort.social/e/${event.id}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-primary flex items-center hover:underline"
                >
                  View on Nostr <ExternalLink className="ml-1 h-3 w-3" />
                </Link>
              </div>
            </CardContent>
          </Card>
        ))
      ) : (
        <Card>
          <CardContent className="pt-6">
            <p className="text-center text-muted-foreground">No Nostr events found for this pubkey.</p>
          </CardContent>
        </Card>
      )}
    </div>
  )
}

