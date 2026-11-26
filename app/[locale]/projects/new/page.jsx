import { getTranslations } from "next-intl/server";

import NewProjectClient from "./(components)/new-project-client";

const NewProjectPage = async () => {
    const t = await getTranslations('newProject');
    const labels = {
        panelTitle:        t('panelTitle'),
        backgroundSection: t('backgroundSection'),
        backgroundAlt:     t('backgroundAlt'),
        canvasLabel:       t('canvasLabel'),
        exportButton:      t('exportButton'),
    };

    return <NewProjectClient labels={labels} />;
}

export default NewProjectPage;