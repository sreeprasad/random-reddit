'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Sparkles, ArrowRight } from 'lucide-react'

const subreddits = [
  "CringeTikToks",
  "LinkedInLunatics",
  "oddlysatisfying",
  "mildlyinteresting",
  "dataisbeautiful",
  "explainlikeimfive",
  "LifeProTips",
  "todayilearned",
  "whatisthisthing",
  "Damnthatsinteresting",
  "programminghumor",
  "birdswitharms",
  "interestingasfuck",
  "Unexpected",
  "malelivingspace",
  "youseeingthisshit",
  "NatureIsFuckingLit",
  "CozyPlaces",
  "MapPorn",
  "CatastrophicFailure",
  "AskHistorians",
  "gadgets"
]

export default function RandomRedditPage() {
  const [isAnimating, setIsAnimating] = useState(false)

  const goToRandomSubreddit = () => {
    setIsAnimating(true)
    
    // Small delay for animation effect
    setTimeout(() => {
      const randomIndex = Math.floor(Math.random() * subreddits.length)
      const randomSub = subreddits[randomIndex]
      const url = `https://www.reddit.com/r/${randomSub}/`
      
      window.location.href = url
    }, 600)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-secondary/30 to-accent/20 flex items-center justify-center p-4 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-20 w-64 h-64 bg-primary/5 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-float-delay" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-secondary/20 rounded-full blur-3xl animate-pulse-slow" />
      </div>

      <div className="relative z-10 max-w-3xl w-full">
        <div className="text-center space-y-8">
          {/* Header */}
          <div className="space-y-4 animate-fade-in">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-sm font-medium text-primary">
              <Sparkles className="w-4 h-4" />
              <span>Discover Something New</span>
            </div>
            
            <h1 className="text-6xl md:text-8xl font-bold tracking-tight text-balance">
              Bored?
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground text-pretty max-w-2xl mx-auto leading-relaxed">
              Dive into the unexpected. Click below to explore a random subreddit and discover something amazing.
            </p>
          </div>

          {/* Main CTA Button */}
          <div className="flex flex-col items-center gap-6 animate-fade-in-delay">
            <Button
              onClick={goToRandomSubreddit}
              disabled={isAnimating}
              size="lg"
              className="group relative h-16 px-8 text-lg font-semibold rounded-full bg-primary text-primary-foreground shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 disabled:scale-100 disabled:opacity-50"
            >
              <span className="relative z-10 flex items-center gap-3">
                {isAnimating ? (
                  <>
                    <Sparkles className="w-5 h-5 animate-spin" />
                    Taking you somewhere amazing...
                  </>
                ) : (
                  <>
                    Take Me Somewhere
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </>
                )}
              </span>
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary via-accent to-primary opacity-0 group-hover:opacity-20 blur-xl transition-opacity" />
            </Button>

            <p className="text-sm text-muted-foreground">
              {subreddits.length} curated communities waiting for you
            </p>
          </div>

          {/* Feature cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-16 animate-fade-in-delay-2">
            {[
              { title: 'Handpicked', description: 'Curated collection of engaging subreddits' },
              { title: 'Instant', description: 'Jump right in with a single click' },
              { title: 'Endless', description: 'New discoveries every time' }
            ].map((feature, i) => (
              <div
                key={i}
                className="p-6 rounded-2xl bg-card/50 backdrop-blur-sm border border-border/50 hover:bg-card/80 hover:border-border transition-all duration-300 hover:scale-105"
              >
                <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
