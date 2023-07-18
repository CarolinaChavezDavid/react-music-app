"use client";

import "@fortawesome/fontawesome-svg-core/styles.css";

import { config } from "@fortawesome/fontawesome-svg-core";
import { DashboardPage } from "./dashboard/pages/DashboardPage";
config.autoAddCss = false;

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <DashboardPage />
    </main>
  );
}
