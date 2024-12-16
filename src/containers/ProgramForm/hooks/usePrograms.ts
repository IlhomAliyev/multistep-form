import {
  useGetCountryByIdQuery,
  useGetProgramsQuery,
} from "@/common/services";
import { useMemo } from "react";

export const usePrograms = (countryId: number) => {
  const { data: programs, isLoading: programsLoading } = useGetProgramsQuery();
  const { data: country, isLoading: countryLoading } =
    useGetCountryByIdQuery(countryId);

  const isLoading = programsLoading || countryLoading;

  const countryProgramIds = useMemo(() => {
    return country?.programs?.map(({ id }) => +id) ?? [];
  }, [country]);

  const filteredPrograms = useMemo(() => {
    return programs?.filter(({ id }) => countryProgramIds.includes(+id));
  }, [programs, countryProgramIds]);

  return {
    programs: filteredPrograms,
    isLoading,
  };
};
