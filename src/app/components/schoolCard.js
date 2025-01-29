'use client';
import {  Coins, GraduationCap, MapPin, School, Users, BookOpen  } from 'lucide-react'
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
//import { useRouter } from 'next/router';
import { useState, useEffect, useContext, useMemo } from 'react';
import { useSchoolCompare } from '../schoolCompareContext';
import Image from 'next/image';
import Link from 'next/link';
//import { useSchoolCompare } from '../schoolCompareContext';


export function SchoolCard({
  schoolName,
  schoolLocation,
  Bursaries,
  scholarships,
  schoolImage,
  documentId,
  stages,
  schoolType,
  coeducation,
  forceScheme,
  feesScheme,
  index,
  school
}) {

  //const [isMounted, setIsMounted] = useState(false);
  //const router = useRouter();

  //if (!isMounted) return null; 

  // Check if the component is mounted on the client-side
  /*useEffect(() => {
    setIsMounted(true);
  }, []);*/

  //console.log("school within schoolcard is:", school);  

  //console.log("stage is:", stages);
  
  const { schoolsToCompare, setSchoolsToCompare } = useSchoolCompare();
  const [isChecked, setIsChecked] = useState(false);
  
  useEffect(() => {
    console.log("schools to compare are:", schoolsToCompare);
    //console.log('Selected Schools:', schoolsToCompare);
console.log('Clicked School documentId:', school.documentId);
  },[schoolsToCompare])

  /*const isChecked = useMemo(() => {
    const response = schoolsToCompare.some(item => 
      item.documentId === school.documentId && item.isChecked // Check if the school is in the compare list and is checked
    );
    console.log("response", response);
    return response;
  }, [schoolsToCompare, school.documentId]);*/


  useEffect(() => {
    console.log("schoolsToCompare:", schoolsToCompare);
    
    //const isChecked = schoolsToCompare.includes(school.documentId);
    const schoolIndex = schoolsToCompare.findIndex(item => item.documentId === school.documentId);
    console.log("schoolIndex before logic choice is:", schoolIndex);
    const isSchoolChecked = schoolsToCompare.find(item => item.documentId === school.documentId);
    //console.log()
    console.log("isSchoolChecked before logic choice is:", isSchoolChecked)

    if (isSchoolChecked && isSchoolChecked !== undefined) {
      // Update local checkbox state if school is found in the compare list
      setIsChecked(true);
    } else if (isSchoolChecked === undefined) {
      console.log("setting setIsChecked to false")
      setIsChecked(false);
    }

  console.log("isSchoolChecked:", isSchoolChecked); // Correct check
    console.log("isChecked:", isChecked); // Debug the current state of isChecked
  }, [schoolsToCompare]);


  async function handleCheckBoxToggle(e) {
    
      e.preventDefault(); // Prevents navigation when clicking the checkbox
      e.stopPropagation(); // Stops the event from propagating and triggering other default actions
      
      // Debugging the state before making changes
      console.log("Before update - schoolsToCompare:", schoolsToCompare);
    
      setSchoolsToCompare((prev) => {
        // Find the index of the school in the current state
        const schoolIndex = prev.findIndex(item => item.documentId === school.documentId);
        console.log("schoolIndex is:", schoolIndex); // Debug school index
    
        // Debugging the current state of the school
        const isSchoolChecked = schoolsToCompare.find(item => item.documentId === school.documentId)//?.isChecked;
        console.log("isSchoolChecked:", isSchoolChecked); // Debug school checked status

        
        if (schoolIndex !== -1) {
          // School is already in the list, toggle the checked state
          console.log("removal school condition triggered!")
          const updatedSchools = [...prev];
          console.log("updateSchools variable is:", updatedSchools);
          console.log("updatedSchools[schoolIndex].isChecked", updatedSchools[schoolIndex].isChecked);
          console.log("updatedSchools[schoolIndex]:", updatedSchools[schoolIndex]); // Check the item at the index
          updatedSchools[schoolIndex].isChecked = !updatedSchools[schoolIndex].isChecked; // Toggle checked state
          console.log("updatedSchools[schoolIndex].isChecked", updatedSchools[schoolIndex].isChecked)
          console.log("Updated schools with toggle:", updatedSchools);
          //setIsChecked(false);
          if (!updatedSchools[schoolIndex].isChecked) {
            console.log("Removing school from list because it was unchecked");
            // Remove the school with documentId matching the school to be removed
            return updatedSchools.filter(item => item.documentId !== school.documentId);
          }
          //return updatedSchools;
        } else if (schoolIndex === -1) {
          // School isn't in the list, add it with the checked state as true
          const updatedSchools = [...prev, { ...school, isChecked: true }];
          console.log("Added school to list:", updatedSchools);
          //setIsChecked(true);
          return updatedSchools;
        }


    
        /*if (schoolIndex > -1) {
          // School is already in the list, toggle the checked state
          const updatedSchools = [...prev];
          updatedSchools[schoolIndex].isChecked = !updatedSchools[schoolIndex].isChecked; // Toggle checked state
          console.log("Updated schools with toggle:", updatedSchools);
          return updatedSchools;
        } else {
          // School isn't in the list, add it with the checked state as true
          const updatedSchools = [...prev, { ...school, isChecked: true }];
          console.log("Added school to list:", updatedSchools);
          return updatedSchools;
        }
      });*/
      
      // Debugging the state after update (useEffect will log after this update)
      console.log("After update - schoolsToCompare:", schoolsToCompare);
    })}
  



  return (
    <Link
      href={`/societies/${documentId}`}
      className="relative h-[calc(19.5em-28px)] sm:h-[275px] lg:h-[calc(25vw-28px-28px)] w-full text-left hover:outline-none focus:outline-none hover:ring-0 focus:ring-0 active:ring-0 hover:transform hover:scale-110 transition-transform duration-300 group"
      onClick={(e) => e.preventDefault()}
    >
      <Card className="h-full overflow-hidden rounded-xl transition-colors hover:bg-accent relative">
        {/* Checkbox in the top-left corner, visible on hover */}
        <div className="absolute top-2 left-2 z-30 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <input
            type="checkbox"
            checked={isChecked}
            className="w-5 h-5 rounded-md border-gray-300 text-accent focus:ring-accent focus:ring-2"
            onChange={handleCheckBoxToggle}
          />
        </div>
  
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
            <h3 className="text-xl font-bold leading-tight text-white text-center mb-1">
              {schoolName}
            </h3>
            <div className="flex flex-wrap gap-1 justify-center w-full">
              {/* Financial Badges */}
              {Bursaries && (
                <Badge
                  variant="secondary"
                  className="flex items-center gap-0.5 bg-white/20 text-white text-xs py-0.5"
                >
                  <Coins className="w-2 h-2" />
                  Bursaries
                </Badge>
              )}
              {scholarships && (
                <Badge
                  variant="secondary"
                  className="flex items-center gap-0.5 bg-white/20 text-white text-xs py-0.5"
                >
                  <GraduationCap className="w-2 h-2" />
                  Scholarships
                </Badge>
              )}
  
              {/* School Type Badges */}
              {schoolType &&
                schoolType.map((type, index) => (
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
                <Badge
                  variant="secondary"
                  className="flex items-center gap-0.5 bg-white/20 text-white text-xs py-0.5"
                >
                  <Users className="w-2 h-2" />
                  {coeducation}
                </Badge>
              )}
  
              {/* Stages Badges */}
              {stages &&
                stages.map((stage, index) => (
                  <Badge
                    key={index}
                    variant="secondary"
                    className="flex items-center gap-0.5 bg-white/20 text-white text-xs py-0.5"
                  >
                    <BookOpen className="w-2 h-2" />
                    {stage}
                  </Badge>
                ))}
  
              {feesScheme && (
                <Badge
                  variant="secondary"
                  className="flex items-center gap-0.5 bg-white/20 text-white text-xs py-0.5"
                >
                  <GraduationCap className="w-2 h-2" />
                  feesScheme
                </Badge>
              )}
  
              {forceScheme && (
                <Badge
                  variant="secondary"
                  className="flex items-center gap-0.5 bg-white/20 text-white text-xs py-0.5"
                >
                  <GraduationCap className="w-2 h-2" />
                  forceScheme
                </Badge>
              )}
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
  );
  
}