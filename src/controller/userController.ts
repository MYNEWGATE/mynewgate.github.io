import { useMutation, useQuery } from "@tanstack/react-query";
import defaultAPI from "../utils/axios/defaultRoutes";

// GET
export const useRead = (limit: number, page: number, search: string) => {
  const mutate = useQuery({
    queryKey: ["read", page],
    queryFn: () =>
      defaultAPI.get(`/read?page=${page}&limit=${limit}&search=${search}`),
  });
  return mutate;
};

// POST
export const useCreate = () => {
  return useMutation({
    mutationFn: async (body: any) => {
      const res = await defaultAPI.post("/account/sample", body);
      return res.data;
    },
    onSuccess: (data) => {
      console.log(data);
    },
    onError: (err: any) => {
      console.error(err);
    },
  });
};
