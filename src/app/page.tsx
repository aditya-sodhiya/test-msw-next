export type User = {
  firstName: string
  lastName: string
}

async function getUser() {
const response = await fetch('https://api.example.com/user')
  const user = (await response.json()) as User
  return user
}
export default async function Home() {
  const user = await getUser()
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
        <p id="server-side-greeting">Hello, {user.firstName}!</p>
        {/* <MovieList /> */}
    </div>
  );
}
