interface HeadlineProps {
  children?: string;
}

const Headline: React.FC<HeadlineProps> = ({ children }) => {
  return (
    <div className=" py-4 px-5  text-center flex justify-center mx-5">
      <h1 className="text-3xl font-bold border-b-2 border-blue-600 text-cyan-700">
        {children}
      </h1>
    </div>
  );
};

export default Headline;
