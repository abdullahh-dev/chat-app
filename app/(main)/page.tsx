import { InitialModal } from "@/components/modals/initial-model";
import { db } from "@/lib/db";
import { getCurrentUserProfile } from "@/lib/initial-profile";
import { redirect } from "next/navigation";

export default async function Home() {
  const profile = await getCurrentUserProfile();
  const server = await db.server.findFirst({
    where: {
      members: {
        some: {
          profileId: profile.id,
        },
      },
    },
  });

  if (server) redirect(`/servers/${server.id}`);

  return (
    <section className="h-screen flex items-center justify-center w-[100%]">
      <InitialModal />
    </section>
  );
}
