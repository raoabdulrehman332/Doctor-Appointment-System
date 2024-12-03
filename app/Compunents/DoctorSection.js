import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select";
  import { categories, doctors } from "@/app/libs/data";
  import DoctorCard from "./DoctorCard";
  import Link from "next/link";
  import { Button } from "@/components/ui/button";
  
  export default async function DoctorsSection({ isHome }) {
   
    const filterd = isHome ? doctors.slice(0,6) : doctors;
  
    return (
      <div className="container mx-auto my-10">
        <div className="flex justify-between">
          <h1 className="text-3xl font-semibold">Doctors You Need</h1>
  
          {isHome ? (
            <Link href={`/doctors`}>
              <Button>See All</Button> 
            </Link>
          ) : (
            <div>
              <Select>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Theme" />
                </SelectTrigger>
                <SelectContent>
                  {categories.map((category) => (
                    <SelectItem key={category} value={category}>
                      {category}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          )}
        </div>
  
        <div className="grid my-3 grid-cols-1 md:grid-cols-2 mt-10 lg:grid-cols-3 gap-3">
          {filterd.map((data) => (
            <DoctorCard key={data.id} isHome={true} request={data} />
          ))}
        </div>
      </div>
    );
  }