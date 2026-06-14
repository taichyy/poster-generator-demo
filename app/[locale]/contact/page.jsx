import { getTranslations } from "next-intl/server";

import ContactClient from "./(components)/contact-client";

const ContactPage = async () => {
    const t = await getTranslations('contact');

    const labels = {
        pageTitle:        t('pageTitle'),
        pageSubtitle:     t('pageSubtitle'),
        formTitle:        t('formTitle'),
        labelName:        t('labelName'),
        placeholderName:  t('placeholderName'),
        labelEmail:       t('labelEmail'),
        labelSubject:     t('labelSubject'),
        placeholderSubject: t('placeholderSubject'),
        labelMessage:     t('labelMessage'),
        placeholderMessage: t('placeholderMessage'),
        submitButton:     t('submitButton'),
        successTitle:     t('successTitle'),
        successDesc:      t('successDesc'),
        sendAnother:      t('sendAnother'),
        otherContactTitle: t('otherContactTitle'),
        faqTitle:         t('faqTitle'),
        quickLinks:       t.raw('quickLinks'),
        faq:              t.raw('faq'),
    };

    return <ContactClient labels={labels} />;
}

export default ContactPage;