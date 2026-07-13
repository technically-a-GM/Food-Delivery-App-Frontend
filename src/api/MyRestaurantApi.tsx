import type { Order, Restaurant } from "@/types";
import { useAuth0 } from "@auth0/auth0-react";
import { useMutation, useQuery } from "@tanstack/react-query";
import { toast } from "sonner";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

// export const useGetMyRestaurant = () => {
//   const { getAccessTokenSilently } = useAuth0();

//   const getMyRestaurantRequest = async (): Promise<Restaurant> => {
//     const accessToken = await getAccessTokenSilently();

//     const response = await fetch(`${API_BASE_URL}/api/my/restaurant`, {
//       headers: {
//         Authorization: `Bearer ${accessToken}`,
//       },
//     });

//     if (!response.ok) {
//       throw new Error("Failed to get restaurant");
//     }

//     return response.json();
//   };

//   const { data: restaurant, isLoading } = useQuery({
//     queryKey: ["fetchMyRestaurant"],
//     queryFn: getMyRestaurantRequest,
//   });

//   return { restaurant, isLoading };
// };

export const useCreateMyRestaurant = () => {
  const { getAccessTokenSilently } = useAuth0();

  const createMyRestaurantRequest = async (
    restaurantFormData: FormData
  ): Promise<Restaurant> => {
    const accessToken = await getAccessTokenSilently();

    const response = await fetch(`${API_BASE_URL}/api/my/restaurant`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
      body: restaurantFormData,
    });

    if (!response.ok) {
      throw new Error("Failed to create restaurant");
    }

    return response.json();
  };

  const {
    mutate: createRestaurant,
    isPending,
  } = useMutation({
    mutationFn: createMyRestaurantRequest,
    onSuccess: () => {
      toast.success("Restaurant created!");
    },
    onError: () => {
      toast.error("Unable to create restaurant");
    },
  });

  return {
    createRestaurant,
    isLoading: isPending,
  };
};

// export const useUpdateMyRestaurant = () => {
//   const { getAccessTokenSilently } = useAuth0();

//   const updateRestaurantRequest = async (
//     restaurantFormData: FormData
//   ): Promise<Restaurant> => {
//     const accessToken = await getAccessTokenSilently();

//     const response = await fetch(`${API_BASE_URL}/api/my/restaurant`, {
//       method: "PUT",
//       headers: {
//         Authorization: `Bearer ${accessToken}`,
//       },
//       body: restaurantFormData,
//     });

//     if (!response.ok) {
//       throw new Error("Failed to update restaurant");
//     }

//     return response.json();
//   };

//   const {
//     mutate: updateRestaurant,
//     isPending,
//   } = useMutation({
//     mutationFn: updateRestaurantRequest,
//     onSuccess: () => {
//       toast.success("Restaurant Updated");
//     },
//     onError: () => {
//       toast.error("Unable to update restaurant");
//     },
//   });

//   return {
//     updateRestaurant,
//     isLoading: isPending,
//   };
// };

// export const useGetMyRestaurantOrders = () => {
//   const { getAccessTokenSilently } = useAuth0();

//   const getMyRestaurantOrdersRequest = async (): Promise<Order[]> => {
//     const accessToken = await getAccessTokenSilently();

//     const response = await fetch(`${API_BASE_URL}/api/my/restaurant/order`, {
//       headers: {
//         Authorization: `Bearer ${accessToken}`,
//         "Content-Type": "application/json",
//       },
//     });

//     if (!response.ok) {
//       throw new Error("Failed to fetch orders");
//     }

//     return response.json();
//   };

//   const { data: orders, isLoading } = useQuery({
//     queryKey: ["fetchMyRestaurantOrders"],
//     queryFn: getMyRestaurantOrdersRequest,
//   });

//   return { orders, isLoading };
// };

// type UpdateOrderStatusRequest = {
//   orderId: string;
//   status: string;
// };

// export const useUpdateMyRestaurantOrder = () => {
//   const { getAccessTokenSilently } = useAuth0();

//   const updateMyRestaurantOrder = async (
//     updateStatusOrderRequest: UpdateOrderStatusRequest
//   ) => {
//     const accessToken = await getAccessTokenSilently();

//     const response = await fetch(
//       `${API_BASE_URL}/api/my/restaurant/order/${updateStatusOrderRequest.orderId}/status`,
//       {
//         method: "PATCH",
//         headers: {
//           Authorization: `Bearer ${accessToken}`,
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({
//           status: updateStatusOrderRequest.status,
//         }),
//       }
//     );

//     if (!response.ok) {
//       throw new Error("Failed to update status");
//     }

//     return response.json();
//   };

//   const {
//     mutateAsync: updateRestaurantStatus,
//     isPending,
//   } = useMutation({
//     mutationFn: updateMyRestaurantOrder,
//     onSuccess: () => {
//       toast.success("Order updated");
//     },
//     onError: () => {
//       toast.error("Unable to update order");
//     },
//   });

//   return {
//     updateRestaurantStatus,
//     isLoading: isPending,
//   };
// };