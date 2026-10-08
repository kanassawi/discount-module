type Props = {
  title: string;
};
export const Title = (props: Props) => {
  return (
    <div className="text-sm md:text-lg font-semibold text-gray-800">
      {props.title}
    </div>
  );
};
