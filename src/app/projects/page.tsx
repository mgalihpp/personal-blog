import { ProjectListPage } from "@/components/app/projects/project-list-page"
import client from "../../../tina/__generated__/client"

export default async function ProjectPage() {
  const result = await client.queries.projectConnection()

  return <ProjectListPage {...result} />
}
