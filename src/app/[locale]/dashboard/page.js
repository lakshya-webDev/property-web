"use client"
import { withAuthRoute } from "@/components/IsAuth";
import DashboardLayout from "@/components/layout/DashboardLayout";

const Page = () => {
  return <DashboardLayout />;
};
export default withAuthRoute(Page);
