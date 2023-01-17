import { useRouter } from "next/router";
import React from "react";

const GameDetails = () => {
  const router = useRouter();
  const { id } = router.query;
  return <div> {id} </div>;
};

export default GameDetails;
