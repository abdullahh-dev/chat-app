import { UserButton } from "@clerk/nextjs";
import { ModeToggle } from "../components/mode-toggler";

export default function Home() {
  return (
    <section className="flex flex-col justify-center py-12 sm:px-6 lg:px-8 min-h-full">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <UserButton signInUrl="/" />
        <ModeToggle />
        <h2
          className="mt-6 text-center text-3xl
    tracking-tight
    text-gray-200"
        >
          Sign in to your account
        </h2>
      </div>
    </section>
  );
}
