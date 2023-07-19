"use client";

import "@fortawesome/fontawesome-svg-core/styles.css";

import { config } from "@fortawesome/fontawesome-svg-core";
import { DashboardPage } from "./dashboard/DashboardPage";
import { TopNavigation } from "./dashboard/components/TopNavigation";

config.autoAddCss = false;

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <TopNavigation />
      <DashboardPage />
    </main>
  );
}
