import { QRCodeCanvas } from "qrcode.react";
import { useRef } from "react";

const QRCodeGenerator = () => {
  const qrRef = useRef(null);
  const url = "https://olukalo-menudigital.vercel.app/";
  const downloadQR = () => {
    const canvas = qrRef.current.querySelector("canvas");
    const image = canvas.toDataURL("image/png");
    const link = document.createElement("a");
    link.href = image;
    link.download = "qrcode_menu.png";
    link.click();
  };

  return (
    <div ref={qrRef} className="flex flex-col items-center">
      <QRCodeCanvas value={url} size={200} level="H" />
      <button
        onClick={downloadQR}
        className="mt-2 px-4 py-2 bg-blue-600 text-white rounded"
      >
        Baixar QR Code
      </button>
    </div>
  );
};

export default QRCodeGenerator;
