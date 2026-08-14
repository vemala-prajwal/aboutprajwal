import { DashboardContent } from "@/components/DashboardContent";
import { PageTransition } from "@/components/PageTransition";

export default function Home() {
  return (
    <PageTransition>
      <DashboardContent />
    </PageTransition>
  );
}
