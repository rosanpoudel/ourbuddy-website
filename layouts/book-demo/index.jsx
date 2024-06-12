import BookDemoCard from "@/components/bookDemoCard";
import React from "react";

const BookDemo = (data) => {
  return (
    <div id="CTA">
      <BookDemoCard data={data} />
    </div>
  );
};

export default BookDemo;
