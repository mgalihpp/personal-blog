import Link from "next/link"

export default function Footer() {
  return (
    <div className="py-10 text-center text-sm">
      <hr />
      <p>
        The{" "}
        <Link
          href="https://mgalihpp.site"
          target="_blank"
          className="underline-offset-2 hover:text-blue-500 
                hover:underline"
        >
          mgalihpp
        </Link>{" "}
        blog
      </p>
    </div>
  )
}
