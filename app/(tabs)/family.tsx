import NoFamily from "@/components/NoFamily";
import React, { useState } from "react";
import HasFamily from "../../components/HasFamily";

const Family = () => {
  const [inFamily, setInFamily] = useState(false); // or true if user has family

  return inFamily ? (
    <HasFamily changeInFamily={() => setInFamily(false)} />
  ) : (
    <NoFamily changeInFamily={() => setInFamily(true)} />
  );
};

export default Family;
