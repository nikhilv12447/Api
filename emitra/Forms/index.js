import { getGoogleFormConfig, getGoogleFormResponses } from "../googleApis"

export async function syncGoogleForm(req, res) {
    const {
        query: {
            formId
        }
    } = req

    const config = await getGoogleFormConfig(formId)
    // console.log(config)
    res.resolveReq(200, "done", config)
}

export async function getResponses(req, res) {
    const {
        query: {
            formId
        }
    } = req

    const responses = await getGoogleFormResponses(formId)

    res.resolveReq(200, "done", responses)
}