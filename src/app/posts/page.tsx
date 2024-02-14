import { PostListPage } from "@/components/app/posts/post-list-page"
import client from "../../../tina/__generated__/client"

export default async function PostPage() {
  const result = await client.queries.postConnection()

  return <PostListPage {...result} />
}
