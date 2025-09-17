"use client";
import Navbar from "@/components/navbar";
import Card from "@/components/cardskill";

export default function SkillsPage() {
  return (
    <div className="skillpage min-h-screen bg-[url('/bgblack.jpg')] bg-cover bg-center flex flex-col">
      {/* Navbar stays at top */}
      <Navbar />

      {/* Main content with scroll */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 p-15 flex-1">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
}
