import { getTranslations } from "next-intl/server";

import BillingClient from "./(components)/billing-client";

const BillingPage = async () => {
    const t = await getTranslations('billing');

    const labels = {
        pageTitle:        t('pageTitle'),
        pageSubtitle:     t('pageSubtitle'),
        currentPlan:      t('currentPlan'),
        active:           t('active'),
        renewsAt:         t('renewsAt'),
        upgrade:          t('upgrade'),
        cancelSubscription: t('cancelSubscription'),
        paymentMethod:    t('paymentMethod'),
        cardEnding:       t('cardEnding'),
        cardExpiry:       t('cardExpiry'),
        changeCard:       t('changeCard'),
        planComparison:   t('planComparison'),
        currentBadge:     t('currentBadge'),
        choosePlan:       t('choosePlan'),
        invoiceHistory:   t('invoiceHistory'),
        downloadAll:      t('downloadAll'),
        paid:             t('paid'),
        perMonth:         t('perMonth'),
        currentPlanName:  t('currentPlanName'),
        currentPlanPeriod: t('currentPlanPeriod'),
        plans: [
            {
                name: t('planFree'), price: "NT$0", period: "", current: false,
                features: [t('featFreeProjects'), t('featFreeResolution'), t('featFreeTemplates')],
            },
            {
                name: t('planStarter'), price: "NT$299", period: t('perMonth'), current: false,
                features: [t('featStarterProjects'), t('featStarterResolution'), t('featStarterTemplates'), t('featStarterSupport')],
            },
            {
                name: t('planPro'), price: "NT$599", period: t('perMonth'), current: true,
                features: [t('featProProjects'), t('featProResolution'), t('featProBatch'), t('featProSupport')],
            },
        ],
        currentPlanFeatures: [t('featProProjects'), t('featProResolution'), t('featProBatch'), t('featProSupport')],
    };

    return <BillingClient labels={labels} />;
}

export default BillingPage;