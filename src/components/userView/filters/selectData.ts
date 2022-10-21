export const selectData:(data:any) => {options:string[]; name:string; title:string}[] = ({
  options=[],
  name='',
  title=''
}: any) => [
  {
    options: options,
    name: name,
    title: title,
  },
];
