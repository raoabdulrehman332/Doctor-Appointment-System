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
import { Button } from "@/components/ui/button";

import { HomeIcon, PlusIcon, ClockIcon, CheckIcon, XIcon } from "lucide-react";
// import DoctorDetailSheet from "./DoctorDetailSheet";
import Link from "next/link";

const DoctorCard = ({ request, isAdmin, onAccept, onReject }) => (
  <Card key={request._id}>
    <CardHeader className="flex flex-row items-center space-x-4">
      <Avatar className="h-10 w-10">
        <AvatarImage src={'https://www.google.com/url?sa=i&url=https%3A%2F%2Funsplash.com%2Fs%2Fphotos%2Finstagram-profile&psig=AOvVaw220m3fkzy2yoQ7DvcM0InT&ust=1732112871702000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCKChp7jN6IkDFQAAAAAdAAAAABAE'} alt={"pic"} />
        <AvatarFallback>
          {request.user}
        </AvatarFallback>
      </Avatar>
      <div>
        <CardTitle>{`${request.name}`}</CardTitle>
        <CardDescription className="capitalize">
          {request.category}
        </CardDescription>
      </div>
    </CardHeader>

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

    <CardFooter className="justify-between">
      {/* <DoctorDetailSheet doctor={request} /> */}
      {isAdmin ? (
        <div>
          {request.status === "rejected" ? (
            <Button
              size="icon"
              variant="outline"
              className="bg-red-50 hover:bg-red-100 text-red-600"
            >
              <XIcon className="h-4 w-4" />
              <span className="sr-only">Rejected doctor request</span>
            </Button>
          ) : request.status === "accepted" ? (
            <Button
              size="icon"
              variant="outline"
              className="bg-green-50 hover:bg-green-100 text-green-600"
            >
              <CheckIcon className="h-4 w-4" />
              <span className="sr-only">Accepted doctor request</span>
            </Button>
          ) : (
            <div className="space-x-2">
              <Button
                size="icon"
                variant="outline"
                className="bg-green-50 hover:bg-green-100 text-green-600"
                onClick={onAccept}
              >
                <CheckIcon className="h-4 w-4" />
                <span className="sr-only">Accept doctor request</span>
              </Button>
              <Button
                size="icon"
                variant="outline"
                className="bg-red-50 hover:bg-red-100 text-red-600"
                onClick={onReject}
              >
                <XIcon className="h-4 w-4" />
                <span className="sr-only">Reject doctor request</span>
              </Button>
            </div>
          )}
        </div>
      ) : (
        <Link href={`/doctors/${request._id}`}>
          <Button>Book Appointment</Button>
        </Link>
      )}
    </CardFooter>
  </Card>
);

export default DoctorCard;