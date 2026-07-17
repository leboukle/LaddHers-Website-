import { google } from "googleapis";

const SHEET_NAME = "Submissions";

function getCredentials() {
  const spreadsheetId = process.env.GOOGLE_SHEETS_SPREADSHEET_ID;
  const clientEmail = process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL;
  const rawPrivateKey = process.env.GOOGLE_PRIVATE_KEY;

  if (!spreadsheetId || !clientEmail || !rawPrivateKey) {
    throw new Error(
      "Google Sheets integration is not configured: missing one or more of " +
        "GOOGLE_SHEETS_SPREADSHEET_ID, GOOGLE_SERVICE_ACCOUNT_EMAIL, GOOGLE_PRIVATE_KEY."
    );
  }

  // .env files can't hold literal newlines, so the key is stored with
  // escaped "\n" sequences that need to be turned back into real ones.
  const privateKey = rawPrivateKey.replace(/\\n/g, "\n");

  return { spreadsheetId, clientEmail, privateKey };
}

async function getSheetsClient() {
  const { clientEmail, privateKey } = getCredentials();

  const auth = new google.auth.JWT({
    email: clientEmail,
    key: privateKey,
    scopes: ["https://www.googleapis.com/auth/spreadsheets"],
  });

  return google.sheets({ version: "v4", auth });
}

// Appends one row to the Submissions worksheet. `row` must already be in
// the exact column order the sheet expects.
export async function appendSubmissionRow(row) {
  const { spreadsheetId } = getCredentials();
  const sheets = await getSheetsClient();

  await sheets.spreadsheets.values.append({
    spreadsheetId,
    range: `${SHEET_NAME}!A:L`,
    valueInputOption: "RAW",
    insertDataOption: "INSERT_ROWS",
    requestBody: {
      values: [row],
    },
  });
}
