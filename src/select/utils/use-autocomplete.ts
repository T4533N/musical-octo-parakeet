interface Props {
  data: Array<any>;
  value: string;
  sortBy: string;
}

export default function useAutoComplete({ data, value, sortBy }: Props) {
  let suggestions: any = [];

  const checkValue = ({ arr, key, valueToCheck }: any) => {
    return arr.some((value: any) => value[key] === valueToCheck);
  };

  const found = checkValue({
    arr: data,
    key: sortBy,
    valueToCheck: value,
  });

  if (!found && data.length > 0) {
    const regex = new RegExp(`^(.*?(${value})[^$]*)$`, 'i');

    suggestions = data.sort().filter((v: any) => regex.test(v[sortBy]));
  } else {
    suggestions = data;
  }

  return [suggestions];
}
