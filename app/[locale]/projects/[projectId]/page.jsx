import { getLocale } from "next-intl/server";
import { getTranslations } from "next-intl/server";

import ProjectEditClient from "./(components)/project-edit-client";

const ProjectEditPage = async () => {
    const t = await getTranslations('projectEdit');
    const locale = await getLocale();

    const labels = {
        backToProjects: t('backToProjects'),
        bgTitle:        t('bgTitle'),
        bgDesc:         t('bgDesc'),
        bgAlt:          t('bgAlt'),
        basicInfo:      t('basicInfo'),
        projectName:    t('projectName'),
        posterTitle:    t('posterTitle'),
        posterHeading:  t('posterHeading'),
        pricePerDraw:   t('pricePerDraw'),
        bundlePrice:    t('bundlePrice'),
        draws:          t('draws'),
        currency:       t('currency'),
    };

    return <ProjectEditClient labels={labels} locale={locale} />;
}

export default ProjectEditPage;