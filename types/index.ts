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
  destinations?: Array<string>;
  setGrupUrl: (grupUrl: string) => void;
  setIsModal: (isModal: boolean) => void;
  title: string;
  createdBy: string;
}

export interface TsubmitProps extends TgetShortenDataProps {
  isExcel: boolean;
  textArealinks: string;
  excelFile: any;
  e: any;
  createdBy: string;
}

export interface TsignUserData {
  email: string;
  name: string;
  uid: string;
  res: any;
}

export interface TdashboardProps {
  userData: {
    grups: Array<any>;
    name: string;
    email: string;
  };
}

export interface TcopyToClipboardProps {
  text: string;
  type: 1 | 2;
}
