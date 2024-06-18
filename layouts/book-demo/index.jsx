import BookDemoCard from "@/components/bookDemoCard";

const BookDemo = (data) => {
  return (
    <div id="CTA" className="bg-odd">
      <BookDemoCard data={data} />
    </div>
  );
};

export default BookDemo;
