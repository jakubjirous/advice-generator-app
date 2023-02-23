import { AdviceType } from "@/app/(advice)/types";
import delayedFetch from "@/utils/delayedFetch";
import getRandomNumberInRange from "@/utils/getRandomNumberInRange";
import { useQuery } from "@tanstack/react-query";

const fetchAdvice = async (): Promise<AdviceType> => {
  const response = await delayedFetch(
    `${process.env.apiUrl}/advice`,
    getRandomNumberInRange(500, 2500)
  );

  if (!response.ok) {
    throw new Error("Failed to fetch data");
  }

  return response.json();
};

const useAdvice = () => {
  return useQuery<AdviceType, Error>({
    queryKey: ["advice"],
    queryFn: fetchAdvice,
    suspense: true,
  });
};

export default useAdvice;
