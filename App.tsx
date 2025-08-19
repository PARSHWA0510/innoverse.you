import { Header } from "./components/Header";
import { HeroSection } from "./components/HeroSection";
import { CommunityOverview } from "./components/CommunityOverview";
import { Conclave } from "./components/Conclave";
import { UserLevels } from "./components/UserLevels";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <CommunityOverview />
        <Conclave />
        <UserLevels />
      </main>
      <Footer />
    </div>
  );
}