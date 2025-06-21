export const copyToClipboard = async (
  text,
  successMsg,
  failMsg,
  alertMessage
) => {
  try {
    await navigator.clipboard.writeText(text);
    console.log(successMsg);
    alertMessage(successMsg);
  } catch (err) {
    console.error(failMsg, err);
    alertMessage(failMsg + " 수동으로 복사해 주세요.");
  }
};
