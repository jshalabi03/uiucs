import Link from "next/link";

export default function CourseNotFoundPage() {
  return (
    <div className="flex flex-col items-center justify-center p-8 space-y-4">
      <h1 className="text-2xl font-extrabold">
        Sorry, we couldn't find the page you were looking for.
      </h1>
      <p className="text-sm text-gray-500">
        Are we missing a course?
        <Link className="underline" href="/missing">
          Help keep us updated!
        </Link>
      </p>
      <Link href="/">Return Home</Link>
    </div>
  );
}
