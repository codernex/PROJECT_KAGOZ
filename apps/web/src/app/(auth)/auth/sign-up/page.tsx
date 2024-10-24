import { api } from "@/trpc/server";

export default async function SignUpPage() {
  await api.auth.signUp({
    email: "borhan.dev@gmail.com",
    name: "Borhan",
    password: "123456",
  });
  return (
    <div>
      <h2>Sign Up</h2>
    </div>
  );
}
