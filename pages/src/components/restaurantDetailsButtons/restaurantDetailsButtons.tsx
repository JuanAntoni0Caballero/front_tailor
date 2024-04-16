import ButtonComponent from "../buttonComponent/buttonComponent";
const RestaurantDetailButtons = () => {
  return (
    <div className="flex justify-end">
      <ButtonComponent
        text={"Editar"}
        textColor="Black"
        borderColor="Black"
        type="button"
        onClick={() => {
          console.log("Editando");
        }}
      />
      <ButtonComponent
        text={"Eliminar"}
        textColor="Black"
        borderColor="Black"
        type="button"
        onClick={() => {
          console.log("Eliminando");
        }}
      />
    </div>
  );
};
export default RestaurantDetailButtons;
