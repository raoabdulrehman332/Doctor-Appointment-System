"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import { HomeIcon, PlusIcon, ClockIcon} from "lucide-react";
import { Button } from "@/components/ui/button"
import Link from "next/link";


const DoctorCard = ({ request, isHome  }) => (
  <Card key={request.id} className={'my-10'}>
    <CardHeader className="flex flex-row items-center space-x-4">
    <Avatar>
      <AvatarImage src="https://github.com/shadcn.png" />
     <AvatarFallback>CN</AvatarFallback>
   </Avatar>
      <div>
        <CardTitle>{`${request.name}`}</CardTitle>
        <CardDescription className="capitalize">
          {request.category}
        </CardDescription>
      </div>
    </CardHeader>
     {
      isHome && 
    <CardContent>
      <div className="space-y-2">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <HomeIcon className="h-4 w-4" />
            <span className="font-semibold">Gender</span>
          </div>
          <span>{request.gender}</span>
        </div>
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <PlusIcon className="h-4 w-4" />
            <span className="font-semibold">Hospital</span>
          </div>
          <span>{request.hospital}</span>
        </div>
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <ClockIcon className="h-4 w-4" />
            <span className="font-semibold">Appointment Time</span>
          </div>
          <span>{request.appointmentTime}</span>
        </div>
      </div>
    </CardContent>

     }
    <CardFooter className="justify-between">
      {/* <Button><DoctorDetailSheet doctor={doctors}/></Button> */}
      <Link href={`/doctors/${request.id}`}>
      <Button>Book Appointment</Button>
      </Link>
    </CardFooter>
  </Card>
);

export default DoctorCard;