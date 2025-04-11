import * as XLSX from "xlsx"; // ✅ Use this instead of xlsx/xlsx.mjs
import { DownloadIcon } from "../../Icons/icons.jsx"; // ✅ Adjust path as needed

const DownloadBtn = ({ data = [], fileName }) => {
    return (
        <button
            className="download-btn flex items-center gap-2"
            onClick={() => {
                const datas = data?.length ? data : [];
                const worksheet = XLSX.utils.json_to_sheet(datas);
                const workbook = XLSX.utils.book_new();
                XLSX.utils.book_append_sheet(workbook, worksheet, "Sheet1");
                XLSX.writeFile(workbook, `${fileName || "data"}.xlsx`);
            }}
        >
            <DownloadIcon className="w-4 h-4" />
            Download
        </button>
    );
};

export default DownloadBtn;
