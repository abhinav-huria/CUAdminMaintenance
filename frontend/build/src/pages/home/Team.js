import React from "react";
import team from "./../../assets/team.pdf";
import Title from "../../common/components/home/title";
import FullCard from "./../../common/components/cards/fullcard";

export default function Team() {
  return (
    <>
      <Title title="Team" />
      <FullCard pdfLink={team} />
    </>
  );
}
