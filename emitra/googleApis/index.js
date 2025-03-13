import { google } from "googleapis"
import credentials from "./googleServiceAccountCredentials.json"

const scopes = ["https://www.googleapis.com/auth/drive", "https://www.googleapis.com/auth/drive.file", "https://www.googleapis.com/auth/forms.body"]

const auth = new google.auth.GoogleAuth({ scopes, credentials })

const { forms: gForms } = google.forms({ version: "v1", auth })

export async function getGoogleFormConfig(formId) {
    const { data: config } = await gForms.get({ formId });
    return config
}

export async function getGoogleFormResponses(formId) {
    const { data: responses } = await gForms.responses.list({ formId });
    return responses
}

export default gForms