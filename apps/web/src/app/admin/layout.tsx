import { getServerAuthSession } from "@/server/auth";
import { redirect } from "next/navigation";

export default async function AdminLayout({
  children,
}: React.PropsWithChildren) {
  const session = await getServerAuthSession();

  if (!session || session.user.role !== "admin") {
    return redirect("/");
  }
  return <div>{children}</div>;
}
