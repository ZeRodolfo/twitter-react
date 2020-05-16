import { notification } from "antd";

export default function checkAllowedExtensionFile(
  event,
  allowedExtension,
  fallbackChange
) {
  const files = event.currentTarget.files;

  if (!!files.length) {
    const file = files[0];
    const filename = file.name.toLowerCase();
    const extension = filename
      .split(".")
      .pop()
      .toLowerCase();

    if (allowedExtension.indexOf(extension) !== -1) {
      fallbackChange(file);
    } else {
      const extensionsAllowedString = allowedExtension.join(", ").toUpperCase();

      notification.warn({
        message: "Atenção",
        description: `A extensão informada não é compatível com as extensões permitidas: ${extensionsAllowedString}.`,
      });
    }
  }
}
