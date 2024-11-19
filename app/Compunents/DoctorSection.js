import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select";
  import { categories, doctors } from "@/app/libs/data";
  // import { Button } from "./ui/button";
  import Link from "next/link";
  // import { getRequest } from "@/actions/requests";
  import DoctorCard from "./DoctorCard";
import { Button } from "@/components/ui/button";
  
  export default async function DoctorsSection({ isHome }) {
    // const { requests } = await getRequest("accepted");
    // console.log("requests=>", requests);
  
    return (
      <div className="container mx-auto my-10">
        <div className="flex justify-between">
          <h1 className="text-3xl font-semibold">Doctors You Need</h1>
  
          {isHome ? (
            <Link href={"/doctors"}>
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
          {doctors.map((data) => (
            <DoctorCard key={data._id} request={data} isAdmin={false} />
          ))}
        </div>
      </div>
    );
  }