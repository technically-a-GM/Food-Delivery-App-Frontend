import { useCreateMyRestaurant, useGetMyRestaurant, useUpdateMyRestaurant } from "@/api/MyRestaurantApi";
import ManageRestaurantForm from "@/forms/manage-restaurant-form/ManageRestaurantForm";

const ManageRestaurantPage = () =>{

     
    const {createRestaurant , isLoading : isCreateLoading} = useCreateMyRestaurant();

    const {restaurant} = useGetMyRestaurant();

    const isEditing = !!restaurant;

    const {updateRestaurant , isLoading: isUpdateLoading} = useUpdateMyRestaurant();

    return <ManageRestaurantForm restaurant={restaurant} onSave={isEditing ? updateRestaurant : createRestaurant} isLoading = {isCreateLoading || isUpdateLoading} />
}

export default ManageRestaurantPage;