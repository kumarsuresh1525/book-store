import qs from 'qs';

export interface IRatingData {
  count: number
  id: number
  isSelected: boolean
}
export const ratingsData: IRatingData[] = [
  {
    count: 4,
    id: 1,
    isSelected: false,
  },
  {
    count: 3,
    id: 2,
    isSelected: false,
  },
  {
    count: 2,
    id: 3,
    isSelected: false,
  },
  {
    count: 1,
    id: 4,
    isSelected: false,
  },
];

export const stringifiedQueryParam = (queryParam): string =>
  qs.stringify(queryParam, {
    encodeValuesOnly: true,
  });
