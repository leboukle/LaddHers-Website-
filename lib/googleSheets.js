import { google } from "googleapis";

const SHEET_NAME = "Submissions";

// Some hosting dashboards (Vercel included) store env var values exactly
// as typed, with no dotenv-style unquoting — so a value pasted as
// `"foo"` stays literally wrapped in quote characters. Locally, Next.js
// loads .env.local via dotenv, which strips those quotes automatically,
// masking this until production. Strip any matching outer quotes here so
// both environments behave the same way.
function stripSurroundingQuotes(value) {
  const trimmed = value.trim();
  const firstChar = trimmed[0];
  const lastChar = trimmed[trimmed.length - 1];
  if (
    trimmed.length >= 2 &&
    (firstChar === '"' || firstChar === "'") &&
    firstChar === lastChar
  ) {
    return trimmed.slice(1, -1);
  }
  return trimmed;
}

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
  // Stripping quotes first so a value like `"...\n..."` doesn't end up
  // with a stray quote character glued to the PEM header/footer.
  const privateKey = stripSurroundingQuotes(rawPrivateKey).replace(/\\n/g, "\n");

  return {
    spreadsheetId: stripSurroundingQuotes(spreadsheetId),
    clientEmail: stripSurroundingQuotes(clientEmail),
    privateKey,
  };
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
  try {
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
  } catch (error) {
    // Log only fields useful for diagnosing the failure — never the
    // credentials themselves, the spreadsheet contents, or `row` (which
    // holds the submitter's personal details).
    console.error("[googleSheets] appendSubmissionRow failed:", {
      name: error?.name,
      code: error?.code,
      status: error?.response?.status ?? error?.status,
      message: error?.message,
    });
    throw new Error("Failed to append submission to Google Sheets.");
  }
}
