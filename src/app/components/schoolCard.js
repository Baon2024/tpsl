'use client';
import {  Coins, GraduationCap, MapPin, School, Users, BookOpen  } from 'lucide-react'
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
//import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';


export function SchoolCard({
  schoolName,
  schoolLocation,
  Bursaries,
  scholarships,
  schoolImage,
  documentId,
  stages,
  schoolType,
  coeducation
}) {

  //const [isMounted, setIsMounted] = useState(false);
  //const router = useRouter();

  //if (!isMounted) return null; 

  // Check if the component is mounted on the client-side
  /*useEffect(() => {
    setIsMounted(true);
  }, []);*/

  

  console.log("stage is:", stages);



  return (
    <Link
      href={`/societies/${documentId}`}
      className="relative h-[calc(19.5em-28px)] sm:h-[275px] lg:h-[calc(25vw-28px-28px)] w-full text-left hover:outline-none focus:outline-none hover:ring-0 focus:ring-0 active:ring-0 hover:transform hover:scale-110 transition-transform duration-300"
    >
      <Card className="h-full overflow-hidden rounded-xl transition-colors hover:bg-accent relative">
        <div className="absolute inset-0 z-0">
          <img
            src={schoolImage || "/placeholder.svg?height=400&width=600"} //will need to change this to https://localhost et cetera, when imported from database
            className="object-cover w-full h-full"
            alt={schoolName}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-black/20" />
        </div>
        <div className="relative z-10 h-full flex items-center justify-center px-4 mt-5">
          <div className="flex flex-col items-center gap-2">
            <h3 className="text-xl font-bold leading-tight text-white text-center mb-1">{schoolName}</h3>
            <div className="flex flex-wrap gap-1 justify-center w-full">
              {/* Financial Badges */}
              {Bursaries && (
                <Badge variant="secondary" className="flex items-center gap-0.5 bg-white/20 text-white text-xs py-0.5">
                  <Coins className="w-2 h-2" />
                  Bursaries
                </Badge>
              )}
              {scholarships && (
                <Badge variant="secondary" className="flex items-center gap-0.5 bg-white/20 text-white text-xs py-0.5">
                  <GraduationCap className="w-2 h-2" />
                  Scholarships
                </Badge>
              )}
              
              {/* School Type Badges */}
              {schoolType && schoolType.map((type, index) => (
                <Badge 
                  key={index}
                  variant="secondary" 
                  className="flex items-center gap-0.5 bg-white/20 text-white text-xs py-0.5"
                >
                  <School className="w-2 h-2" />
                  {type}
                </Badge>
              ))}
              
              {/* Coeducation Badge */}
              {coeducation && (
                <Badge variant="secondary" className="flex items-center gap-0.5 bg-white/20 text-white text-xs py-0.5">
                  <Users className="w-2 h-2" />
                  {coeducation}
                </Badge>
              )}
              
              {/* Stages Badges */}
              {stages && stages.map((stage, index) => (
                <Badge 
                  key={index}
                  variant="secondary" 
                  className="flex items-center gap-0.5 bg-white/20 text-white text-xs py-0.5"
                >
                  <BookOpen className="w-2 h-2" />
                  {stage}
                </Badge>
              ))}
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 z-20 p-4 pt-0">
          <div className="flex items-center gap-2 text-white">
            <MapPin className="w-4 h-4 shrink-0" />
            <span>{schoolLocation}</span>
          </div>
        </div>
      </Card>
    </Link>
  )
}