"use client"

import { tinaField, useTina } from "tinacms/dist/react"
import { HomePageQuery } from "../../../tina/__generated__/types"
import { TinaMarkdown } from "tinacms/dist/rich-text"

export function HomePageComponent(props: {
  data: HomePageQuery
  variables: {}
  query: string
}) {
  const { data } = useTina(props)

  const title = data.page.title
  const content = data.page.body

  const postList = data.postConnection.edges

  console.log(postList);
  

  return (
    <section className="prose-xl mx-auto w-full max-w-4xl invert dark:prose">
      <h1 data-tine-fields={tinaField(data.page, "title")}>{title}</h1>
      <article data-tina-field={tinaField(data.page, "body")}>
        <TinaMarkdown content={content} />
      </article>
      {postList && postList.length > 0 && (
        <section>
          <h2 className="mt-8 text-3xl">Latest Posts</h2>
        </section>
      )}
    </section>
  )
}
