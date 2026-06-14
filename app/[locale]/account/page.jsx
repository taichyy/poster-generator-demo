import { getTranslations } from "next-intl/server";

import AccountClient from "./(components)/account-client";

const AccountPage = async () => {
    const t = await getTranslations('account');
    const labels = {
        pageTitle:              t('pageTitle'),
        pageSubtitle:           t('pageSubtitle'),
        avatarSection:          t('avatarSection'),
        avatarSectionDesc:      t('avatarSectionDesc'),
        joinedAt:               t('joinedAt'),
        basicInfoSection:       t('basicInfoSection'),
        basicInfoSectionDesc:   t('basicInfoSectionDesc'),
        labelDisplayName:       t('labelDisplayName'),
        labelEmail:             t('labelEmail'),
        labelPhone:             t('labelPhone'),
        labelCompany:           t('labelCompany'),
        labelRole:              t('labelRole'),
        save:                   t('save'),
        saved:                  t('saved'),
        passwordSection:        t('passwordSection'),
        passwordSectionDesc:    t('passwordSectionDesc'),
        labelCurrentPassword:   t('labelCurrentPassword'),
        placeholderCurrentPassword: t('placeholderCurrentPassword'),
        labelNewPassword:       t('labelNewPassword'),
        placeholderNewPassword: t('placeholderNewPassword'),
        labelConfirmPassword:   t('labelConfirmPassword'),
        placeholderConfirmPassword: t('placeholderConfirmPassword'),
        updatePassword:         t('updatePassword'),
        passwordUpdated:        t('passwordUpdated'),
        dangerSection:          t('dangerSection'),
        logoutAllDevices:       t('logoutAllDevices'),
        deactivateAccount:      t('deactivateAccount'),
    };
    return <AccountClient labels={labels} />;
}

export default AccountPage;
