import { redirect } from "react-router-dom";
import { deleteContact } from "../contacts"

export async function action({ params }) {
    const contactId = params.contactId;
    // throw new Error("oh dang!");
    await deleteContact(contactId);
    return redirect(`/`);
}


export default function DeleteContact () {
    return null;
}