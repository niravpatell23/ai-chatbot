"use client";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Button } from "@/components/ui/button";

import { Input } from "@/components/ui/input";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Main() {
  const [inputUrl, setInputUrl] = useState("");
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (inputUrl) {
      // Append the input URL to the current URL
      console.log("inputUrl ", inputUrl);
      const newUrl = `${"https://getbothelp.vercel.app/"}/${inputUrl}`;
      // const newUrl = `${"http://localhost:3000/"}/${inputUrl}`;
      console.log("newUrl ", newUrl);
      router.push(newUrl); // Navigate to the new URL
    }
  };
  // http://https//en.wikipedia.org/wiki/Aston_Martin
  // https://en.wikipedia.org/wiki/Aston_Martin
  // ${"localhost:3000/"}
  //localhost:3000/localhost:3000/https:/en.wikipedia.org/wiki/Aston_Martin
  // http://localhost:3000/localhost:3000/https:/en.wikipedia.org/wiki/Aston_Martin
  return (
    <main className="flex min-h-screen flex-col p-24 w-full justify-start items-center">
      <div className="z-10 w-full lg:w-[50%] font-mono text-sm ">
        {/* <h1>Current Pathname: {pathname}</h1> */}
        <Card>
          <CardHeader>
            <CardTitle className=" text-2xl">Enter URL</CardTitle>
            {/* <CardDescription>Card Description</CardDescription> */}
          </CardHeader>
          <form onSubmit={handleSubmit}>
            <CardContent>
              <Input
                type="text"
                placeholder="Search..."
                value={inputUrl}
                onChange={(e) => setInputUrl(e.target.value)}
              />
            </CardContent>
            <CardFooter className=" w-full justify-end ">
              <div>
                <Button
                  type="submit"
                  variant="outline"
                  className=" relative right-0"
                >
                  Submit
                </Button>
              </div>
            </CardFooter>
          </form>
        </Card>
      </div>
    </main>
  );
}
