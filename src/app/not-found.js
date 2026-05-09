import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-base-200 flex items-center justify-center px-4">
      <div className="text-center space-y-6">
        <div className="text-9xl sm:text-[12rem] md:text-[15rem] font-black text-primary">
          404
        </div>

        <div className="space-y-3">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold">
            Page Not Found!
          </h1>
          <p className="text-base-content/70 text-sm sm:text-base">
            The page you are looking for has been moved or does not exist.
          </p>
        </div>

        <div className="pt-4">
          <Link href="/" className="btn btn-primary btn-lg">
            🏠 Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}