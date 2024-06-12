"use client";

import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { sendFinanceForm } from "@/app/lib/finance";
import { financeFormSchema } from "@/app/lib/formSchemas";
import { Button } from "@/app/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/app/components/ui/form";
import { Input } from "@/app/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/app/components/ui/select";

import toast from "react-hot-toast";

export function FinanceForm({ cars }) {
  const [loading, setLoading] = useState(false);
  const form = useForm({
    resolver: zodResolver(financeFormSchema),
    defaultValues: {
      vehicleOfInterest: "",
      preferredTerm: "",
      downPayment: "",
      firstName: "",
      middleName: "",
      lastName: "",
      ssnTin: "",
      dateOfBirth: "",
      address: "",
      city: "",
      state: "",
      zip: "",
      country: "",
      residenceType: "",
      lengthAtAddress: "",
      homePhone: "",
      phoneNumber: "",
      workPhone: "",
      email: "",
      employmentType1: "",
      employerName1: "",
      employerPhone1: "",
      lengthAtJob1: "",
      incomeType1: "",
      grossSalary1: "",
      employmentType2: "",
      employerName2: "",
      employerPhone2: "",
      lengthAtJob2: "",
      incomeType2: "",
      grossSalary2: "",
    },
  });

  async function onSubmit(formData) {
    try {
      setLoading(true);
      await new Promise((resolve) => setTimeout(resolve, 2000));

      const res = await sendFinanceForm(formData);

      toast.success(res.message);
      setLoading(false);
    } catch (error) {
      toast.error(res.message);
      setLoading(false);
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <h1 className="text-3xl font-bold mb-4">Credit Application</h1>

        {/* Vehicle of Interest */}
        <FormField
          control={form.control}
          name="vehicleOfInterest"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Vehicle of Interest</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Select Car" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {cars.length === 0 ? (
                    <div>No cars</div>
                  ) : (
                    cars.map((car) => (
                      <SelectItem key={car._id} value={car._id}>
                        {car.make} {car.model}
                      </SelectItem>
                    ))
                  )}
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Financing Information */}
        <h2 className="text-2xl font-semibold">Financing Information</h2>
        <FormField
          control={form.control}
          name="preferredTerm"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Preferred Term</FormLabel>
              <FormControl>
                <Input placeholder="Select" {...field} />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="downPayment"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Down Payment</FormLabel>
              <FormControl>
                <Input placeholder="Down Payment" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Applicant Personal Information */}
        <h2 className="text-2xl font-semibold">
          Applicant Personal Information
        </h2>
        <FormField
          control={form.control}
          name="firstName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>First Name</FormLabel>
              <FormControl>
                <Input placeholder="First Name" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="middleName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Middle Name</FormLabel>
              <FormControl>
                <Input placeholder="Middle Name" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="lastName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Last Name</FormLabel>
              <FormControl>
                <Input placeholder="Last Name" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="ssnTin"
          render={({ field }) => (
            <FormItem>
              <FormLabel>SSN/TIN</FormLabel>
              <FormControl>
                <Input placeholder="SSN/TIN" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="dateOfBirth"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Date of Birth</FormLabel>
              <FormControl>
                <Input type="date" placeholder="Date of Birth" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="address"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Street Address</FormLabel>
              <FormControl>
                <Input placeholder="Street Address" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="city"
          render={({ field }) => (
            <FormItem>
              <FormLabel>City</FormLabel>
              <FormControl>
                <Input placeholder="City" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="state"
          render={({ field }) => (
            <FormItem>
              <FormLabel>State</FormLabel>
              <FormControl>
                <Input placeholder="State" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="zip"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Zip</FormLabel>
              <FormControl>
                <Input placeholder="Zip" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="country"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Country</FormLabel>
              <FormControl>
                <Input placeholder="Country" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="residenceType"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Residence Type</FormLabel>
              <FormControl>
                <Input placeholder="Select" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="lengthAtAddress"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Length at Address</FormLabel>
              <FormControl>
                <Input placeholder="Length at Address" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="homePhone"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Home Phone Number</FormLabel>
              <FormControl>
                <Input placeholder="Home Phone Number" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="phoneNumber"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Phone Number</FormLabel>
              <FormControl>
                <Input placeholder="Phone Number" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="workPhone"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Work Phone</FormLabel>
              <FormControl>
                <Input placeholder="Work Phone" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input type="email" placeholder="Email" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Applicant Employment Information */}
        <h2 className="text-2xl font-semibold">
          Applicant Employment Information
        </h2>
        <FormField
          control={form.control}
          name="employmentType1"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Employment Type</FormLabel>
              <FormControl>
                <Input placeholder="Select" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="employerName1"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Employer Name</FormLabel>
              <FormControl>
                <Input placeholder="Employer Name" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="employerPhone1"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Employer Phone Number</FormLabel>
              <FormControl>
                <Input placeholder="Employer Phone Number" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="lengthAtJob1"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Length at Job</FormLabel>
              <FormControl>
                <Input placeholder="Length at Job" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="incomeType1"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Income Type</FormLabel>
              <FormControl>
                <Input placeholder="Select" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="grossSalary1"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Gross Salary/Month</FormLabel>
              <FormControl>
                <Input placeholder="Gross Salary/Month" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Second Employment Information */}
        <h2 className="text-2xl font-semibold">
          Second Employment Information
        </h2>
        <FormField
          control={form.control}
          name="employmentType2"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Employment Type</FormLabel>
              <FormControl>
                <Input placeholder="Select" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="employerName2"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Employer Name</FormLabel>
              <FormControl>
                <Input placeholder="Employer Name" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="employerPhone2"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Employer Phone Number</FormLabel>
              <FormControl>
                <Input placeholder="Employer Phone Number" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="lengthAtJob2"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Length at Job</FormLabel>
              <FormControl>
                <Input placeholder="Length at Job" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="incomeType2"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Income Type</FormLabel>
              <FormControl>
                <Input placeholder="Select" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="grossSalary2"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Gross Salary/Month</FormLabel>
              <FormControl>
                <Input placeholder="Gross Salary/Month" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        {/* <SubmitButton /> */}
        {/* {form.isSubmitting} */}
        <Button disabled={loading} type="submit">
          {loading ? "Sending..." : "Send"}
        </Button>
      </form>
    </Form>
  );
}
