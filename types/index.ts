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
export interface TgetShortenDataProps {
  formattedLinks?: Array<string>;
  setGrupUrl: (grupUrl: string) => void;
  setIsModal: (isModal: boolean) => void;
  title: string;
}

export interface TsubmitProps extends TgetShortenDataProps {
  isExcel: boolean;
  textArealinks: string;
  excelFile: any;
  e: any;
}