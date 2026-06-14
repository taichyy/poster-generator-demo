import { getTranslations, getLocale } from "next-intl/server";

import RegisterClient from "./(components)/register-client";

const RegisterPage = async () => {
    const t = await getTranslations("auth");
    const locale = await getLocale();

    const labels = {
        locale,
        logoLabel:         t("logoLabel"),
        brandTagline:      t("brandTagline"),
        title:             t("register.title"),
        subtitle:          t("register.subtitle"),
        labelName:         t("register.labelName"),
        placeholderName:   t("register.placeholderName"),
        labelEmail:        t("register.labelEmail"),
        labelPassword:     t("register.labelPassword"),
        placeholderPassword: t("register.placeholderPassword"),
        labelConfirm:      t("register.labelConfirm"),
        placeholderConfirm: t("register.placeholderConfirm"),
        terms:             t("register.terms"),
        termsLink:         t("register.termsLink"),
        and:               t("register.and"),
        privacyLink:       t("register.privacyLink"),
        submitButton:      t("register.submitButton"),
        divider:           t("register.divider"),
        hasAccount:        t("register.hasAccount"),
        loginLink:         t("register.loginLink"),
    };

    return <RegisterClient labels={labels} />;
}

export default RegisterPage;
