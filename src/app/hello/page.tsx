"use client";

import React, { useEffect, useState } from "react";

interface Props {
  searchParams: { sortOrder: string };
}

const UsersPage = ({ searchParams: { sortOrder } }: Props) => {
  const [data, setData] = useState<any>();

  useEffect(() => {
    async function fetchData() {
      const response = await fetch("/api/hello");
      // const response = await fetch("http://localhost:3000/hello");
      const result = await response.json();
      setData(result);
    }
    fetchData();
  }, []);

  return (
    <div>
      <div>This is a test page</div>
      {/* <p>{new Date().toLocaleTimeString()}</p> */}
      <p>
        {data?.id} {data?.name}
      </p>
    </div>
  );
};

export default UsersPage;
