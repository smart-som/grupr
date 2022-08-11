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
  } = params;
  e.preventDefault();

  if (isExcel) {
    // console.log(excelFile);
    const fileReader = new FileReader();
    fileReader.onload = (e: any) => {
      const data = e.target.result;
      const csvLinks = data.split("\r\n");
      // format links input to remove empty strings
      const formattedLinks = csvLinks.filter((link: any) => link !== "");

      //   console.log({
      //     formattedLinks,
      //     setGrupUrl,
      //     setIsModal,
      //     title,
      //   });
      getShortenData({
        formattedLinks,
        setGrupUrl,
        setIsModal,
        title,
      });
    };
    fileReader.readAsText(excelFile);
  } else {
    const newLinks = textArealinks.split("\n");
    // format links input to remove empty strings
    const formattedLinks = newLinks.filter((link: any) => link !== "");

    getShortenData({
      setGrupUrl,
      setIsModal,
      title,
      formattedLinks,
    });
  }
};
function getShortenData({
  formattedLinks,
  setGrupUrl,
  setIsModal,
  title,
}: TgetShortenDataProps) {
  // split strings by new line
  //   console.log({
  //     formattedLinks,
  //     title,
  //   });

  // axios post request to server
  axios
    .post("/api/shortenUrls", { formattedLinks, title })
    .then((res) => {
      const { grupUrl } = res.data;
      setGrupUrl(grupUrl);
      setIsModal(true);
    })
    .catch((err) => {
      console.log(err);
    });
}
export { handleGruprSubmit };
