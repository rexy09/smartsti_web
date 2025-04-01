import useApiClient from "../../services/ApiClient";
import { ReportFilterParameters } from "./stores";

export const useReportServices = () => {
  const { sendRequest } = useApiClient();

  const getBidStatistics = async (p: ReportFilterParameters) => {
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
    p: ReportFilterParameters,
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
