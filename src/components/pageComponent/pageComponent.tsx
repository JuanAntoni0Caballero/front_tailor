interface PageComponentProps {
  leftSide: any;
  rightSide: any;
}

const PageComponent: React.FC<PageComponentProps> = ({
  leftSide,
  rightSide,
}) => {
  return (
    <section className="flex flex-col md:flex-row w-screen md:h-screen h-auto items-center justify-between">
      <div className="flex justify-end m-10 md:w-1/2 h-auto items-end w-11/12 md:h-screen">
        {leftSide}
      </div>
      <div className="flex items-end justify-start  m-10 h-screen md:h-screen md:w-1/2 w-11/12 ">
        {rightSide}
      </div>
    </section>
  );
};

export default PageComponent;
