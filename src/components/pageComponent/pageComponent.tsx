interface PageComponentProps {
  leftSide: any;
  rightSide: any;
}

const PageComponent: React.FC<PageComponentProps> = ({
  leftSide,
  rightSide,
}) => {
  return (
    <section className="flex min-h-screen w-11/12 mx-10 mt-10 items-center justify-center">
      <div className="flex justify-center  w-1/2 h-screen ">{leftSide}</div>
      <div className="flex items-center justify-center w-1/2 h-screen">
        {rightSide}
      </div>
    </section>
  );
};

export default PageComponent;
