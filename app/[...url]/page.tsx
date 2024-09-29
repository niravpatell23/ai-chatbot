interface PageProps {
  params: {
    url: string | string[] | undefined;
  };
}
import React from "react";

const Page = ({ params }: PageProps) => {
  return <div>page</div>;
};

export default Page;
