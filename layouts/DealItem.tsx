interface IProps {
  title: string;
  text: string;
  Icon: JSX.Element;
}

const DealItem = ({ title, text, Icon }: IProps) => {
  return (
    <div className="dealItem__section">
      {Icon}
      <div className="dealItem__info">
        <h3 className="deal__title">{title}</h3>
        <p className="deal__text">{text}</p>
      </div>
    </div>
  );
};

export default DealItem;
