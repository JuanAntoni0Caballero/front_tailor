import ButtonComponent from "../buttonComponent/buttonComponent";

interface ModalProps {
  title: string;
  body: string;
  onClick: () => void;
  buttonText: string;
  closeModal: any;
}

const ModalComponent: React.FC<ModalProps> = ({
  title,
  body,
  onClick,
  buttonText,
  closeModal,
}) => {
  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full flex items-center justify-center">
      <div className="p-8 border w-96 shadow-lg rounded-md bg-white">
        <div className="text-center">
          <h3 className="text-2xl font-bold text-gray-900">{title}</h3>
          <div className="mt-2 px-7 py-3">
            <p className="text-lg text-gray-500">{body}</p>
          </div>
          <div className="flex justify-center mt-4">
            <ButtonComponent
              text={buttonText}
              textColor="black"
              borderColor="black"
              onClick={onClick}
              type="button"
            />
            <ButtonComponent
              text="Volver"
              textColor="black"
              borderColor="black"
              onClick={() => {
                closeModal(false);
              }}
              type="button"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalComponent;
