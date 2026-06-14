import { getTranslations, getLocale } from "next-intl/server";

import ForgotPasswordClient from "./(components)/forgot-password-client";

const ForgotPasswordPage = async () => {
    const t = await getTranslations("auth");
    const locale = await getLocale();

    const labels = {
        locale,
        logoLabel:    t("logoLabel"),
        brandTagline: t("brandTagline"),
        title:        t("forgotPassword.title"),
        subtitle:     t("forgotPassword.subtitle"),
        labelEmail:   t("forgotPassword.labelEmail"),
        submitButton: t("forgotPassword.submitButton"),
        backToLogin:  t("forgotPassword.backToLogin"),
        successTitle: t("forgotPassword.successTitle"),
        successDesc:  t("forgotPassword.successDesc"),
        resend:       t("forgotPassword.resend"),
    };

    return <ForgotPasswordClient labels={labels} />;
}

export default ForgotPasswordPage;
