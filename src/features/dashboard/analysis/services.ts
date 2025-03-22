import useApiClient from "../../services/ApiClient";
import { BidFilterParameters } from "./types";

export const useBidServices = () => {
  const { sendRequest } = useApiClient();

  const getBidStatistics = async (p: BidFilterParameters) => {
    return sendRequest({
      method: "get",
      url: "/stats/bid",
      params: {
        created_at__gte: p.startDate,
        created_at__lte: p.endDate,
      },
    });
  };

  const getOperationBidding = async (p: BidFilterParameters, page: number) => {
    return sendRequest({
      method: "get",
      url: "/operation/bidding",
      params: {
        created_at__gte: p.startDate,
        created_at__lte: p.endDate,
        limit: 10,
        page: page,
      },
    });
  };
  const cancelBid = async (bidId: string) => {
    const url = `/operation/bidding/${bidId}/`;
    return sendRequest({
      method: "patch",
      url: url,
      data: {
        state: "cancelled",
      },
    });
  };
  const acceptBid = async (bidId: string) => {
    const url = `/operation/bidding/${bidId}/`;
    return sendRequest({
      method: "patch",
      url: url,
      data: {
        state: "accepted",
      },
    });
  };
  const declineBid = async (bidId: string) => {
    const url = `/operation/bidding/${bidId}/`;
    return sendRequest({
      method: "patch",
      url: url,
      data: {
        state: "declined",
      },
    });
  };

  const assignDriverBid = async (driverId: string, bidId: string) => {
    const url = `/operation/bidding/${bidId}`;

    return sendRequest({
      method: "patch",
      url: url,

      data: {
        state: "accepted",
        driver: driverId,
      },
    });
  };

  const getAvailableDrivers = async (page: number) => {
    const url = `/owner/driver?page=${page}`;
    return sendRequest({
      method: "get",
      url: url,
      params: {
        is_active: false,
        limit: 100,
      },
    });
  };

  return {
    getBidStatistics,
    getOperationBidding,
    cancelBid,
    acceptBid,
    declineBid,
    getAvailableDrivers,
    assignDriverBid,
  };
};
