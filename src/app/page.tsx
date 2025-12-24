import {Frontpage} from "./frontpage";


export default function Home() {
  return (
    <div className="bg-white min-h-screen flex flex-col items-center">
      <main className="pt-18 flex-1 w-full flex flex-col items-center">
        <Frontpage />
      </main>
    </div>
  );
}
