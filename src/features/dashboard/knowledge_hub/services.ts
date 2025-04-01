import useApiClient from "../../services/ApiClient";
import { KnowledgeHubFilterParameters } from "./stores";

export const useKnowledgeHubServices = () => {
  const { sendRequest } = useApiClient();

  const getBidStatistics = async (p: KnowledgeHubFilterParameters) => {
    return sendRequest({
      method: "get",
      url: "/stats/bid",
      params: {
        created_at__gte: p.startDate,
        created_at__lte: p.endDate,
      },
    });
  };

  const getOperationBidding = async (
    p: KnowledgeHubFilterParameters,
    page: number
  ) => {
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


  return {
    getBidStatistics,
    getOperationBidding,
  };
};
