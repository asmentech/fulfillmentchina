import LS from "cz-storage"
export default {
    token: LS.get("token") || "",
    tagActive: LS.get("tagActive") || '/dashboard',
    breadcrumbs: [],
}