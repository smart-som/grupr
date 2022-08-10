export interface TModalProps {
  setIsModal: (isModal: boolean) => void;
  children: JSX.Element;
  isModal: boolean;
}

export interface TLayoutProps {
  title: string;
  url: string;
  image: any;
}
// export interface TGridProps extends TListProps {}
