<<<<<<< HEAD
import { DownloadIcon } from "../../Icons/Icons";
 // Make sure this path is correct
import * as XLSX from "xlsx/xlsx.mjs";

const DownloadBtn = ({ data = [], fileName }) => {
  return (
    <button
      className="download-btn"
      onClick={() => {
        const datas = data?.length ? data : [];
        const worksheet = XLSX.utils.json_to_sheet(datas);
        const workbook = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(workbook, worksheet, "Sheet1");
        XLSX.writeFile(workbook, fileName ? `${fileName}.xlsx` : "data.xlsx");
      }}
    >
      <DownloadIcon />
      Download
    </button>
  );
};

export default DownloadBtn;
=======
import { DownloadIcon } from "../../Icons/icons";
// Make sure this path is correct
import * as XLSX from "xlsx/xlsx.mjs";

const DownloadBtn = ({ data = [], fileName }) => {
    return (
        <button
            className="download-btn"
            onClick={() => {
                const datas = data?.length ? data : [];
                const worksheet = XLSX.utils.json_to_sheet(datas);
                const workbook = XLSX.utils.book_new();
                XLSX.utils.book_append_sheet(workbook, worksheet, "Sheet1");
                XLSX.writeFile(workbook, fileName && `${fileName.xlsx} `);
            }}
        >
            <DownloadIcon />
            Download
        </button>
    );
};

export default DownloadBtn;
>>>>>>> 5b22f305c56345030f8fd92dc74e96b033af46f4
