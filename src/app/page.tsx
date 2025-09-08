import { Frontpage } from "./frontpage";
import { Footer } from "./navigation/footer";
import Navbar from "./navigation/navBar";


export default function Home() {
  return (
    <div className="bg-white min-h-screen flex flex-col items-center">
      <Navbar />
      <main className="pt-18 flex-1 w-full flex flex-col items-center">
        <Frontpage />
      </main>
      <Footer />
    </div>
  );
}
