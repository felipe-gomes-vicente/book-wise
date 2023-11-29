import { signOut, useSession } from "next-auth/react"
import { NextPageWithLayout } from "./_app"
import { DefaultLayout } from "@/layouts/DefaultLayout"

const HomePage: NextPageWithLayout = () => {
  const { data } = useSession()
  return (
    <>
      {JSON.stringify(data, null, 2)}
      <button onClick={() => signOut()}> deslogar</button>
    </>
  )
}

HomePage.getLayout = (page) => {
  return (
    <DefaultLayout title="Início">
      {page}
    </DefaultLayout>
  )
}

export default HomePage