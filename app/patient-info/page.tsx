"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function PatientInfoPage() {
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    gender: "",
    medicalHistory: "",
    symptoms: "",
    consent: false,
  });

  const router = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value, type } = e.target as HTMLInputElement;
    const checked = (e.target as HTMLInputElement).checked;
    setFormData({
      ...formData,
      [id]: type === "checkbox" ? checked : value,
    });
  };

  const handleGenderChange = (gender: string) => {
    setFormData({ ...formData, gender });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    router.push("/upload");
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-teal-800 via-blue-900 to-teal-800 animate-gradient-x flex items-center justify-center p-6">
      <Card className="w-full max-w-lg bg-transparent backdrop-blur-lg border border-gray-700 rounded-xl p-8 shadow-2xl hover:scale-105 transition-all duration-500">
        <CardHeader className="text-center text-white">
          <CardTitle className="text-4xl font-bold">Patient Information</CardTitle>
          <CardDescription className="text-lg text-gray-300">
            Please provide the following details to continue.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Full Name */}
            <div className="space-y-2">
              <Label htmlFor="name" className="text-white">
                Full Name
              </Label>
              <Input
                type="text"
                id="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="mt-2 block w-full px-4 py-3 border border-gray-600 rounded-md text-white bg-transparent focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-300 ease-in-out"
              />
            </div>

            {/* Age */}
            <div className="space-y-2">
              <Label htmlFor="age" className="text-white">
                Age
              </Label>
              <Input
                type="number"
                id="age"
                value={formData.age}
                onChange={handleChange}
                required
                className="mt-2 block w-full px-4 py-3 border border-gray-600 rounded-md text-white bg-transparent focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-300 ease-in-out"
              />
            </div>

            {/* Gender */}
            <div className="space-y-2">
              <Label htmlFor="gender" className="text-white">
                Gender
              </Label>
              <select
                id="gender"
                value={formData.gender}
                onChange={(e) => handleGenderChange(e.target.value)}
                required
                className="mt-2 block w-full px-4 py-3 border border-gray-600 rounded-md text-white bg-transparent focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-300 ease-in-out"
              >
                <option value="" disabled>
                  Select gender
                </option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            </div>

            {/* Medical History */}
            <div className="space-y-2">
              <Label htmlFor="medicalHistory" className="text-white">
                Medical History
              </Label>
              <textarea
                id="medicalHistory"
                value={formData.medicalHistory}
                onChange={handleChange}
                rows={4}
                className="mt-2 block w-full px-4 py-3 border border-gray-600 rounded-md text-white bg-transparent focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-300 ease-in-out"
              ></textarea>
            </div>

            {/* Symptoms */}
            <div className="space-y-2">
              <Label htmlFor="symptoms" className="text-white">
                Current Symptoms
              </Label>
              <textarea
                id="symptoms"
                value={formData.symptoms}
                onChange={handleChange}
                rows={4}
                className="mt-2 block w-full px-4 py-3 border border-gray-600 rounded-md text-white bg-transparent focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-300 ease-in-out"
              ></textarea>
            </div>

            {/* Consent */}
            <div className="flex items-center space-x-2">
              <input
                type="checkbox"
                id="consent"
                checked={formData.consent}
                onChange={handleChange}
                className="h-5 w-5 text-black-600 border-gray-300 rounded focus:ring-2 focus:ring-black-500"
              />
              <Label htmlFor="consent" className="text-white">
                I consent to the processing of this medical information.
              </Label>
            </div>

            {/* Submit Button */}
            <div>
              <Button
                type="submit"
                disabled={!formData.consent}
                className={`w-full mt-4 bg-blue-500 hover:bg-blue-400 text-white transition-all duration-300 ease-in-out ${
                  formData.consent
                    ? "focus:ring-2 focus:ring-blue-500"
                    : "bg-gray-400 cursor-not-allowed"
                }`}
              >
                Submit and Continue
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
