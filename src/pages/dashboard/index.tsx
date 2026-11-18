import { PageLayout } from "@/layouts";

// Poise: Pluely's license, paid-API and usage panels were removed here.
// The Poise dashboard (Story Bank, Game Plan, credits) is built in Phase 2.
const Dashboard = () => {
  return (
    <PageLayout
      title="Dashboard"
      description="Your interview prep will live here."
    >
      <p className="text-sm text-muted-foreground">
        Coming soon: Story Bank, Game Plan and Debrief.
      </p>
    </PageLayout>
  );
};

export default Dashboard;
