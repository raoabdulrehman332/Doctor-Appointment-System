"use client";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const formSchema = z.object({
  name: z.string().min(2, { message: "Username must be at least 2 characters." }).max(50),
  bio: z.string().min(2, { message: "Bio must be at least 2 characters." }).max(120),
  hospital: z.string().min(2, { message: "Hospital name must be at least 2 characters." }).max(50),
  days: z.array(z.string()),
  fees: z.string(),
  gender: z.string(),
  appointmentTime: z.string(),
  degree: z.string(),
  specialization: z.string(),
  experience: z.string(),
  profileImg: z.string(),
  number: z.string(),
  email: z.string().email(),
});

const AplyForm = () => {
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      bio: "",
      hospital: "",
      days: [],
      fees: "",
      gender: "",
      appointmentTime: "",
      degree: "",
      specialization: "",
      experience: "",
      profileImg: "",
      number: "",
      email: "",
    },
  });

  function onSubmit(values) {
    console.log(values);
  }

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-lg">
      <h1 className="text-2xl font-bold text-gray-800 mb-6">Doctor Application Form</h1>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <FormField
              control={form.control}
              name="hospital"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-gray-700">Hospital</FormLabel>
                  <FormControl>
                    <Input className="border-gray-300 focus:ring-indigo-500 focus:border-indigo-500" placeholder="Hospital name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="fees"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-gray-700">Fees</FormLabel>
                  <FormControl>
                    <Input className="border-gray-300 focus:ring-indigo-500 focus:border-indigo-500" placeholder="Consultation fees" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <FormField
              control={form.control}
              name="gender"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-gray-700">Gender</FormLabel>
                  <FormControl>
                    <Input className="border-gray-300 focus:ring-indigo-500 focus:border-indigo-500" placeholder="Gender" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="appointmentTime"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-gray-700">Appointment Time</FormLabel>
                  <FormControl>
                    <Input type="datetime-local" className="border-gray-300 focus:ring-indigo-500 focus:border-indigo-500" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <FormField
              control={form.control}
              name="degree"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-gray-700">Degree</FormLabel>
                  <FormControl>
                    <Input className="border-gray-300 focus:ring-indigo-500 focus:border-indigo-500" placeholder="Degree" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="specialization"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-gray-700">Specialization</FormLabel>
                  <FormControl>
                    <Input className="border-gray-300 focus:ring-indigo-500 focus:border-indigo-500" placeholder="Specialization" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <FormField
              control={form.control}
              name="experience"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-gray-700">Experience</FormLabel>
                  <FormControl>
                    <Input className="border-gray-300 focus:ring-indigo-500 focus:border-indigo-500" placeholder="Years of experience" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="number"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-gray-700">Phone Number</FormLabel>
                  <FormControl>
                    <Input className="border-gray-300 focus:ring-indigo-500 focus:border-indigo-500" placeholder="Phone number" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <FormField
            name="bio"
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-gray-700">Bio</FormLabel>
                <FormControl>
                  <Textarea className="border-gray-300 focus:ring-indigo-500 focus:border-indigo-500" placeholder="Enter bio" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button type="submit" className="w-full bg-gray-600 hover:bg-gray-300 hover:text-black text-white py-2 px-4 rounded-md">Submit</Button>
        </form>
      </Form>
    </div>
  );
};

export default AplyForm;
