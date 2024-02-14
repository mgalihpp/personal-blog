import { notFound } from "next/navigation"
import client from "../../../../tina/__generated__/client"
import { PostPageComponent } from "@/components/app/posts/post-page"

export default async function Page({ params }: { params: { slug: string } }) {
  const result = await client.queries
    .post({
      relativePath: `${params.slug}.mdx`,
    })
    .then((result) => {
      return result
    })
    .catch((error) => {
      console.error(error)
      return notFound()
    })

  return <PostPageComponent {...result} />
}
