"use server"

import { redirect } from "next/navigation";

export const navigate = async (link) => {
    redirect(link)
};