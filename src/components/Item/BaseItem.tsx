import { ImageItem, Container, Price, Title } from "./style";

const BaseItem = (props: any) => {
  return <Container>{props.children}</Container>;
};

BaseItem.Title = function BaseItemTitle(props: any) {
  return <Title>{props.title}</Title>;
};
BaseItem.Image = function BaseItemImage(props: any) {
  return <ImageItem src={props.image} />;
};
BaseItem.Price = function BaseItemPrice(props: any) {
  return <Price>{props.price}</Price>;
};

export default BaseItem;
