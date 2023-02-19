import Head from "next/head";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-start max-w-2xl sm:mx-auto pb-16 mx-6">
      <Head>
        <title>Add New Data</title>
      </Head>
      <div className="w-full">
        <div className="mt-20 w-full flex text-sm rounded-md">
          <div className="w-3/4 flex items-center ">
            <div className="text-2xl">ADD NEW DATA</div>
          </div>
          <div className="w-1/4 grid justify-items-end">
            <button className="w-fit font-semibold rounded py-1 px-2 bg-gray-200  flex items-center justify-self-end">
              {" "}
              <div className="pr-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m5.231 13.481L15 17.25m-4.5-15H5.625c-.621 0-1.125.504-1.125 1.125v16.5c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9zm3.75 11.625a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z"
                  />
                </svg>
              </div>
              <Link className="text-md" href="/tools">
                INFO
              </Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
