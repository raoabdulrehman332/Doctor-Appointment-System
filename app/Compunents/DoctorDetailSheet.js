"use client";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  EyeIcon,
  MapPin,
  Phone,
  Clock,
  Briefcase,
  GraduationCap,
  Stethoscope,
} from "lucide-react";


export default function DoctorDetailSheet({ doctor }) {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <button className="p-2 hover:bg-gray-100 rounded-full">
          <EyeIcon className="h-5 w-5" />
          <span className="sr-only">View doctor details</span>
        </button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Doctor Details</SheetTitle>
          <SheetDescription>
            <div className="flex flex-col items-center gap-4 mt-4">
              <Avatar className="h-24 w-24">
                <AvatarImage
                  src="https://github.com/shadcn.png"
                  alt={`${doctor.name}`}
                />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <h1 className="font-bold text-2xl text-center">
                {`${doctor.name}`}
              </h1>
            </div>
          </SheetDescription>
        </SheetHeader>
        <div className="mt-6 space-y-4">
          <div className="flex items-center gap-2">
            <Stethoscope className="h-5 w-5 text-gray-500" />
            <p>
              <span className="font-semibold">Specialization:</span>{" "}
              {`${doctor.category}`}
            </p>
          </div>
          <div className="flex items-center gap-2">
            <GraduationCap className="h-5 w-5 text-gray-500" />
            <p>
              <span className="font-semibold">Degree:</span> {`MBBS`}
            </p>
          </div>
          <div className="flex items-center gap-2">
            <Briefcase className="h-5 w-5 text-gray-500" />
            <p>
              <span className="font-semibold">Experience:</span>{" "}
              {`2 years`}
            </p>
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="h-5 w-5 text-gray-500" />
            <p>
              <span className="font-semibold">Hospital:</span> {`${doctor.hospital}`}
            </p>
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="h-5 w-5 text-gray-500" />
            <p>
              <span className="font-semibold">Address:</span> {`Gulshan`}
            </p>
          </div>
          <div className="flex items-center gap-2">
            <Phone className="h-5 w-5 text-gray-500" />
            <p>
              <span className="font-semibold">Contact:</span> {`0300-0057332`}
            </p>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="h-5 w-5 text-gray-500" />
            <p>
              <span className="font-semibold">Appointment Time:</span>{" "}
              {`${doctor.appointmentTime}`}
            </p>
          </div>  
        </div>
      </SheetContent>
    </Sheet>
  );
}