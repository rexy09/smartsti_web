import useAuthUser from "react-auth-kit/hooks/useAuthUser";
import { IUserResponse } from "../../auth/types";
import useApiClient from "../../services/ApiClient";
import { DashboardFilterParameters } from "../home/stores";

export const useTrackingServices = () => {
  const { sendRequest } = useApiClient();
  const authUser = useAuthUser<IUserResponse>();

  const getOngoingOrders = async (p: DashboardFilterParameters) => {
     const url = authUser?.user_type == "owner" ? "/owner/order" : "/order";
    return sendRequest({
      method: "get",
      url: url,
      params: {
        created_at__gte: p.startDate,
        created_at__lte: p.endDate,
        state: "started",
        // limit: 100,
        type:'All'
      },
    });
  };

  const getOrderTracking = async (trackingId: string) => {
    return sendRequest({
      method: "get",
      url: `/order_tracking/${trackingId}`,
      params: {},
    });
  };

  return {
    getOrderTracking,
    getOngoingOrders,
  };
};
