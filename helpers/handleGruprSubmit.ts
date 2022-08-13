import axios from "axios";
import { TgetShortenDataProps, TsubmitProps } from "../types";

const handleGruprSubmit = (params: TsubmitProps) => {
  const {
    e,
    isExcel,
    textArealinks,
    setGrupUrl,
    setIsModal,
    title,
    excelFile,
    createdBy,
    setIsLoading,
  } = params;
  e.preventDefault();
  setIsLoading(true);
  if (isExcel) {
    // console.log(excelFile);
    const fileReader = new FileReader();
    fileReader.onload = (e: any) => {
      const data = e.target.result;
      const csvLinks = data.split("\r\n");
      // format links input to remove empty strings
      const destinations = csvLinks.filter((link: any) => link !== "");

      //   console.log({
      //     destinations,
      //     setGrupUrl,
      //     setIsModal,
      //     title,
      //   });
      getShortenData({
        destinations,
        setGrupUrl,
        setIsModal,
        title,
        createdBy,
        setIsLoading,
      });
    };
    fileReader.readAsText(excelFile);
  } else {
    const newLinks = textArealinks.split("\n");
    // format links input to remove empty strings
    const destinations = newLinks.filter((link: any) => link !== "");

    getShortenData({
      setGrupUrl,
      setIsModal,
      title,
      destinations,
      createdBy,
      setIsLoading,
    });
  }
};
function getShortenData({
  destinations,
  setGrupUrl,
  setIsModal,
  title,
  createdBy,
  setIsLoading,
}: TgetShortenDataProps) {
  // axios post request to server

  axios
    .post("/api/shortenUrls", { destinations, title, createdBy })
    .then((res) => {
      const { fullUrl } = res.data;
      setGrupUrl(fullUrl);
      setIsModal(true);
      setIsLoading(false);
    })
    .catch((err) => {
      setIsLoading(false);

      // console.log(err);
    });
}
export { handleGruprSubmit };
