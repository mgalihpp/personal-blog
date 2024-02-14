"use client"

import { useTina } from "tinacms/dist/react"
import { ProjectConnectionQuery } from "../../../../tina/__generated__/types"
import Link from "next/link"
import ProjectCard from "@/components/ProjectCard"

export function ProjectListPage(props: {
  data: ProjectConnectionQuery
  variables: {}
  query: string
}) {
  const { data } = useTina(props)

  const projectList = data.projectConnection.edges

  return (
    <>
      <h1>My Project</h1>
      <div className="mx-auto grid grid-cols-1 gap-4 md:grid-cols-3 lg:mx-0">
        <div className="grid grid-cols-1 gap-4">
          {projectList
            ?.filter((_: any, i: number) => i % 3 === 0)
            .map((project) => (
              <ProjectCard
                key={project?.node?.id}
                link={project?.node?.link!}
                title={project?.node?.title!}
                description={project?.node?.descrition!}
              />
            ))}
        </div>
        <div className="grid grid-cols-1 gap-4">
          {projectList
            ?.filter((_: any, i: number) => i % 3 === 1)
            .map((project) => (
              <ProjectCard
                key={project?.node?.id}
                link={project?.node?.link!}
                title={project?.node?.title!}
                description={project?.node?.descrition!}
              />
            ))}
        </div>
        <div className="grid grid-cols-1 gap-4">
          {projectList
            ?.filter((_: any, i: number) => i % 3 === 2)
            .map((project) => (
              <ProjectCard
                key={project?.node?.id}
                link={project?.node?.link!}
                title={project?.node?.title!}
                description={project?.node?.descrition!}
              />
            ))}
        </div>
      </div>
    </>
  )
}
