import ButtonComponent from "../buttonComponent/buttonComponent";
import { useState } from "react";
import ModalComponent from "../modalComponent/modalComponent";
import { useRouter } from "next/navigation";

const RestaurantDetailButtons = ({
  deleteRestaurant,
  restaurantId,
}: {
  deleteRestaurant: any;
  restaurantId: number;
}) => {
  const [showDeleteModal, setShowDeleteModal] = useState<boolean>(false);
  const [showEditModal, setShowEditModal] = useState<boolean>(false);

  const router = useRouter();
  return (
    <div className="flex justify-end">
      <ButtonComponent
        text={"Editar"}
        textColor="Black"
        borderColor="Black"
        type="button"
        onClick={() => {
          setShowEditModal(true);
        }}
      />
      <ButtonComponent
        text={"Eliminar"}
        textColor="Black"
        borderColor="Black"
        type="button"
        onClick={() => {
          setShowDeleteModal(true);
        }}
      />
      {showDeleteModal && (
        <ModalComponent
          closeModal={setShowDeleteModal}
          title="ELIMINAR"
          body="Esta acción no tiene vuelta atrás"
          buttonText="Eliminar"
          onClick={() => {
            deleteRestaurant();
          }}
        />
      )}
      {showEditModal && (
        <ModalComponent
          closeModal={setShowEditModal}
          title="Editar"
          body={`¿Quieres editar el restaurante ${restaurantId}?`}
          buttonText="Editar"
          onClick={() => {
            console.log("Editando");
          }}
        />
      )}
    </div>
  );
};
export default RestaurantDetailButtons;
