"use client";
import AppLayout from "@/components/layout/AppLayout";
import ThemeWipeSwitcher from "@/components/ui/ThemeWipe";
export default function HomePage() {
  return (
    <AppLayout>
      <main className="flex flex-col items-center justify-center h-screen">
        <ThemeWipeSwitcher />
      </main>
    </AppLayout>
  );
}
