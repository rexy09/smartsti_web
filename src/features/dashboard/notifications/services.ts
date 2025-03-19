import useApiClient from "../../services/ApiClient";

export const useNotificationServices = () => {
  const { sendRequest } = useApiClient();

  const getNotifications = async () => {
    return sendRequest({
      method: "get",
      url: "/extra/notification",
      params: {
        page: 1,
        limit: 10,
      },
    });
  };

  return {
    getNotifications,
  };
};
