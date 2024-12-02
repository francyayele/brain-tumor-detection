'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { Menu } from 'lucide-react'

export function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="bg-gray-900 bg-opacity-80 backdrop-blur-lg text-white py-4 sticky top-0 z-50">
      <nav className="container mx-auto px-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold">
          BrainScan AI
        </Link>
        <div className="hidden md:flex space-x-4">
          <Link href="/dashboard">
            <Button variant="ghost">Dashboard</Button>
          </Link>
          <Link href="/patient-info">
            <Button variant="ghost">New Scan</Button>
          </Link>
          <Link href="/about">
            <Button variant="ghost">About</Button>
          </Link>
          <Link href="/login">
            <Button variant="outline">Log In</Button>
          </Link>
        </div>
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <Button 
              variant="ghost" 
              size="icon" 
              className="md:hidden relative overflow-hidden group"
            >
              <div className="absolute inset-0 bg-white bg-opacity-10 backdrop-blur-lg rounded-full transition-all duration-300 transform group-hover:scale-110"></div>
              <Menu className="h-6 w-6 relative z-10" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[300px] sm:w-[400px] bg-gray-900 text-white">
            <nav className="flex flex-col space-y-4 mt-8">
              <Link href="/dashboard" onClick={() => setIsOpen(false)}>
                <Button variant="ghost" className="w-full justify-start">Dashboard</Button>
              </Link>
              <Link href="/patient-info" onClick={() => setIsOpen(false)}>
                <Button variant="ghost" className="w-full justify-start">New Scan</Button>
              </Link>
              <Link href="/about" onClick={() => setIsOpen(false)}>
                <Button variant="ghost" className="w-full justify-start">About</Button>
              </Link>
              <Link href="/login" onClick={() => setIsOpen(false)}>
                <Button variant="outline" className="w-full justify-start">Log In</Button>
              </Link>
            </nav>
          </SheetContent>
        </Sheet>
      </nav>
    </header>
  )
}

