import { getTranslations } from "next-intl/server";

import SettingsClient from "./(components)/settings-client";

const SettingsPage = async () => {
    const t = await getTranslations('settings');

    const labels = {
        pageTitle:    t('pageTitle'),
        pageSubtitle: t('pageSubtitle'),
        saveButton:   t('saveButton'),
        saved:        t('saved'),
        tabs: {
            general:       t('tabs.general'),
            notifications: t('tabs.notifications'),
            privacy:       t('tabs.privacy'),
            appearance:    t('tabs.appearance'),
            language:      t('tabs.language'),
        },
        general: {
            workspaceName:        t('general.workspaceName'),
            workspaceNameDesc:    t('general.workspaceNameDesc'),
            workspaceNameDefault: t('general.workspaceNameDefault'),
            exportFormat:         t('general.exportFormat'),
            exportFormatDesc:     t('general.exportFormatDesc'),
            exportFormatOptions:  t.raw('general.exportFormatOptions'),
            resolution:           t('general.resolution'),
            resolutionDesc:       t('general.resolutionDesc'),
            autosave:             t('general.autosave'),
            autosaveDesc:         t('general.autosaveDesc'),
            showGrid:             t('general.showGrid'),
            showGridDesc:         t('general.showGridDesc'),
            snapToGrid:           t('general.snapToGrid'),
            snapToGridDesc:       t('general.snapToGridDesc'),
        },
        notifications: {
            systemUpdates:      t('notifications.systemUpdates'),
            systemUpdatesDesc:  t('notifications.systemUpdatesDesc'),
            exportDone:         t('notifications.exportDone'),
            exportDoneDesc:     t('notifications.exportDoneDesc'),
            billingReminder:    t('notifications.billingReminder'),
            billingReminderDesc: t('notifications.billingReminderDesc'),
            marketing:          t('notifications.marketing'),
            marketingDesc:      t('notifications.marketingDesc'),
            weeklySummary:      t('notifications.weeklySummary'),
            weeklySummaryDesc:  t('notifications.weeklySummaryDesc'),
        },
        privacy: {
            dataCollection:     t('privacy.dataCollection'),
            dataCollectionDesc: t('privacy.dataCollectionDesc'),
            errorReporting:     t('privacy.errorReporting'),
            errorReportingDesc: t('privacy.errorReportingDesc'),
            twoFactor:          t('privacy.twoFactor'),
            twoFactorDesc:      t('privacy.twoFactorDesc'),
            loginAlerts:        t('privacy.loginAlerts'),
            loginAlertsDesc:    t('privacy.loginAlertsDesc'),
            dataManagement:     t('privacy.dataManagement'),
            downloadData:       t('privacy.downloadData'),
            deleteAccount:      t('privacy.deleteAccount'),
        },
        appearance: {
            themeMode:         t('appearance.themeMode'),
            themes:            t.raw('appearance.themes'),
            compactMode:       t('appearance.compactMode'),
            compactModeDesc:   t('appearance.compactModeDesc'),
            reduceMotion:      t('appearance.reduceMotion'),
            reduceMotionDesc:  t('appearance.reduceMotionDesc'),
        },
        language: {
            interfaceLanguage:     t('language.interfaceLanguage'),
            interfaceLanguageDesc: t('language.interfaceLanguageDesc'),
            languages:             t.raw('language.languages'),
            timezone:              t('language.timezone'),
            timezoneDesc:          t('language.timezoneDesc'),
            timezones:             t.raw('language.timezones'),
            dateFormat:            t('language.dateFormat'),
            dateFormatDesc:        t('language.dateFormatDesc'),
            dateFormats:           t.raw('language.dateFormats'),
        },
    };

    return <SettingsClient labels={labels} />;
}

export default SettingsPage;